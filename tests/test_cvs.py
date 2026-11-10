from copy import deepcopy
from html.parser import HTMLParser
from pathlib import Path
import tempfile
import unittest
import yaml

from scripts.build_cvs import (
    DEFAULT, LEGACY, ROOT, compose, load_variants, read_yaml, validate_artifacts,
)


class Links(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            self.links.append(dict(attrs))


class CompositionTests(unittest.TestCase):
    def setUp(self):
        self.source = read_yaml(ROOT / "Tran_Quoc_Truong_CV.yaml")
        self.roles, self.documents = load_variants()
        self.role = deepcopy(self.roles[DEFAULT])

    def test_shared_facts_and_role_priorities(self):
        facts = self.source["facts"]
        for document in self.documents.values():
            cv = document["cv"]
            self.assertEqual({key: cv[key] for key in self.source["cv"]}, self.source["cv"])
            sections = cv["sections"]
            self.assertEqual(sections["education"], list(facts["education"].values()))
            for entry, fact in zip(sections["experience"], facts["experience"].values(), strict=True):
                self.assertEqual({k: v for k, v in entry.items() if k != "highlights"},
                                 {k: v for k, v in fact.items() if k != "highlights"})
                self.assertEqual(entry["company"], "FPT Software")
            self.assertEqual(len(sections["summary"]), 2)
            self.assertCountEqual(sections["achievements"], facts["achievements"].values())
        self.assertEqual(self.documents["ai-engineer"]["cv"]["sections"]["featured_projects"][0]["name"],
                         facts["featured_projects"]["vehicle-detection"]["name"])
        self.assertEqual(self.documents["automation-tester"]["cv"]["sections"]["experience"][0]["highlights"][0],
                         facts["experience"]["ivs"]["highlights"]["bullet-3"])
        self.assertIn("pre-production", self.documents[DEFAULT]["cv"]["sections"]["featured_projects"][0]["summary"])
        self.assertEqual(self.source["facts"]["achievements"]["hackathon"]["name"],
                         "2nd Runner-up (3rd Place) — IVS Hackathon 2026")

    def test_unknown_and_duplicate_references_fail(self):
        for field in ("skills", "achievements"):
            for ids in (["removed-fact"], [self.role[field][0]] * 2, []):
                with self.subTest(field=field, ids=ids):
                    role = deepcopy(self.role)
                    role[field] = ids
                    with self.assertRaises((KeyError, ValueError)):
                        compose(self.source, role)
        for field in ("experience", "projects"):
            for references in ([{"id": "removed-fact", "highlights": ["missing"]}],
                               [self.role[field][0]] * 2,
                               [{**self.role[field][0], "highlights": ["missing"]}],
                               [{**self.role[field][0], "highlights": [self.role[field][0]["highlights"][0]] * 2}]):
                with self.subTest(field=field, references=references):
                    role = deepcopy(self.role)
                    role[field] = references
                    with self.assertRaises((KeyError, ValueError)):
                        compose(self.source, role)

    def test_bad_yaml_and_missing_roles_fail(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            path = root / "Tran_Quoc_Truong_CV.yaml"
            for content in ("id: first\nid: overwritten\n", "id: [broken"):
                path.write_text(content)
                with self.assertRaises((ValueError, yaml.YAMLError)):
                    read_yaml(path)
            path.write_text("{}")
            with self.assertRaises(FileNotFoundError):
                load_variants(root)

    def test_output_collisions_fail(self):
        from unittest.mock import patch
        duplicate = self.roles[DEFAULT]
        with patch("scripts.build_cvs.read_yaml", side_effect=[self.source, duplicate, duplicate, duplicate]):
            with self.assertRaisesRegex(ValueError, "collision"):
                load_variants()


class BuiltSiteTests(unittest.TestCase):
    def test_pdfs_legacy_aliases_and_static_links(self):
        roles, documents = load_variants()
        output = ROOT / "dist" / "cv"
        links = Links((output / "index.html").read_text()).links
        for key, role in roles.items():
            validate_artifacts(output, role, documents[key])
            path = f'/cv/{role["filename"]}.pdf'
            actions = [link for link in links if link.get("href") == path]
            self.assertEqual(len(actions), 2)
            self.assertEqual(sum("download" in link for link in actions), 1)
            self.assertTrue(any(link.get("target") == "_blank" for link in actions))
            self.assertTrue(all(role["name"] in link["aria-label"] for link in actions))
            self.assertTrue(any(link["aria-label"].startswith("Preview PDF") for link in actions))
            self.assertTrue(any(link["aria-label"].startswith("Download PDF") for link in actions))
        for suffix in (".pdf", ".html", ".md", ".typ", ".yaml", "_1.png", "_2.png"):
            self.assertEqual((output / f'{roles[DEFAULT]["filename"]}{suffix}').read_bytes(),
                             (output / f"{LEGACY}{suffix}").read_bytes())
        self.assertEqual((ROOT / "dist" / f"{LEGACY}.yaml").read_bytes(),
                         (output / f"{LEGACY}.yaml").read_bytes())
        home_links = Links((ROOT / "dist" / "index.html").read_text()).links
        self.assertFalse(any(link.get("href", "").endswith(".pdf") for link in home_links))
        self.assertGreaterEqual(sum(link.get("href") == "/cv/" for link in home_links), 2)

    def test_missing_artifact_fails(self):
        roles, documents = load_variants()
        with tempfile.TemporaryDirectory() as temporary:
            with self.assertRaisesRegex(ValueError, "Missing or empty artifact"):
                validate_artifacts(Path(temporary), roles[DEFAULT], documents[DEFAULT])


if __name__ == "__main__":
    unittest.main()
