"""Compose the shared factual catalog and three role selections, then render them."""

from copy import deepcopy
from pathlib import Path
import json
import shutil
import subprocess
import tempfile

import yaml
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
ROLES = ("ai-engineer", "applied-ai-engineer", "automation-tester")
DEFAULT = "applied-ai-engineer"
LEGACY = "Tran_Quoc_Truong_CV"


class UniqueKeyLoader(yaml.SafeLoader):
    """Reject duplicate fact IDs instead of silently overwriting evidence."""


def unique_mapping(loader, node):
    result = {}
    for key_node, value_node in node.value:
        key = loader.construct_object(key_node)
        if key in result:
            raise ValueError(f"Duplicate YAML key: {key}")
        result[key] = loader.construct_object(value_node)
    return result


UniqueKeyLoader.add_constructor(yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG, unique_mapping)


def read_yaml(path):
    with path.open() as stream:
        return yaml.load(stream, Loader=UniqueKeyLoader)


def select(catalog, ids):
    if not ids or len(ids) != len(set(ids)):
        raise ValueError(f"Empty or duplicate selection: {ids}")
    return [deepcopy(catalog[key]) for key in ids]


def select_entries(catalog, references):
    entries = select(catalog, [reference["id"] for reference in references])
    for entry, reference in zip(entries, references, strict=True):
        entry["highlights"] = select(entry["highlights"], reference["highlights"])
    return entries


def compose(source, role):
    facts = source["facts"]
    cv = deepcopy(source["cv"])
    cv["headline"] = role["headline"]
    if len(role["summary"]) != 2:
        raise ValueError("Each role needs a two-sentence summary")
    cv["sections"] = {
        "summary": role["summary"],
        "technical_skills": select(facts["technical_skills"], role["skills"]),
        "experience": select_entries(facts["experience"], role["experience"]),
        "achievements": select(facts["achievements"], role["achievements"]),
        "featured_projects": select_entries(facts["featured_projects"], role["projects"]),
        "education": list(deepcopy(facts["education"]).values()),
        "languages": list(deepcopy(facts["languages"]).values()),
    }
    stem = role["filename"]
    return {
        "cv": cv,
        "design": deepcopy(source["design"]),
        "locale": source["locale"],
        "settings": {
            "current_date": "today",
            "pdf_title": f'{cv["name"]} - {role["name"]}',
            "render_command": {
                "output_folder": ".",
                **{f"{format}_path": f"{stem}.{extension}" for format, extension in
                   (("pdf", "pdf"), ("typst", "typ"), ("html", "html"),
                    ("markdown", "md"), ("png", "png"))},
            },
        },
    }


def load_variants(root=ROOT):
    source = read_yaml(root / "Tran_Quoc_Truong_CV.yaml")
    roles = {key: read_yaml(root / "cv" / "roles" / f"{key}.yaml") for key in ROLES}
    for field in ("filename", "headline", "name"):
        values = [role[field] for role in roles.values()]
        if len(set(values)) != len(ROLES):
            raise ValueError(f"Role {field} collision")
    for role in roles.values():
        if role["filename"] != "Tran_Quoc_Truong_" + role["name"].replace(" ", "_"):
            raise ValueError("Unexpected output filename")
    return roles, {key: compose(source, role) for key, role in roles.items()}


def validate_artifacts(folder, role, document):
    stem = role["filename"]
    for suffix in ("pdf", "yaml", "html", "md", "typ"):
        path = folder / f"{stem}.{suffix}"
        if not path.is_file() or not path.stat().st_size:
            raise ValueError(f"Missing or empty artifact: {path}")
    pdf = PdfReader(folder / f"{stem}.pdf")
    if len(pdf.pages) != 2:
        raise ValueError(f"{stem}: expected 2 pages, got {len(pdf.pages)}")
    if pdf.metadata.title != document["settings"]["pdf_title"]:
        raise ValueError(f"{stem}: incorrect PDF title")
    text = " ".join(" ".join(page.extract_text().split()) for page in pdf.pages)
    for value in (document["cv"]["name"], document["cv"]["headline"], "FPT Software",
                  "Summary", "Technical Skills", "Experience", "Education"):
        if value not in text:
            raise ValueError(f"{stem}: missing searchable PDF text: {value}")
    for page in (1, 2):
        if not (folder / f"{stem}_{page}.png").is_file():
            raise ValueError(f"{stem}: missing page preview {page}")


def main():
    roles, documents = load_variants()
    output = ROOT / "public" / "cv"
    # Stage the whole set so a failed render cannot publish a mix of old and new CVs.
    with tempfile.TemporaryDirectory() as temporary:
        staging = Path(temporary)
        for key, document in documents.items():
            role = roles[key]
            input_path = staging / f'{role["filename"]}.yaml'
            input_path.write_text(yaml.safe_dump(document, sort_keys=False, allow_unicode=True))
            subprocess.run(["rendercv", "render", str(input_path)], check=True, cwd=staging)
            validate_artifacts(staging, role, document)
        for path in list(staging.glob(f'{roles[DEFAULT]["filename"]}*')):
            shutil.copyfile(path, staging / path.name.replace(roles[DEFAULT]["filename"], LEGACY, 1))
        manifest = [{"id": key, "name": role["name"], "description": role["description"],
                     "filename": role["filename"], "recommended": key == DEFAULT}
                    for key, role in roles.items()]
        (staging / "resumes.json").write_text(json.dumps(manifest, indent=2) + "\n")
        output.mkdir(parents=True, exist_ok=True)
        for path in staging.iterdir():
            if path.is_file():
                shutil.copyfile(path, output / path.name)
    print("Validated three 2-page resumes and the Applied AI Engineer legacy aliases.")


if __name__ == "__main__":
    main()
