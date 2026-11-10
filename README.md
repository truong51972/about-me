# Tran Quoc Truong — Portfolio & Resumes

Static Astro portfolio for an Applied AI Engineer, with three recruiter-ready resumes generated from shared facts.

Live site: https://portfolio.truong51972.id.vn/

## Development and validation

```bash
npm ci
uv sync --locked
npm run dev
```

Development generates the resumes before starting Astro. Build and validate the full static site with:

```bash
npm run build
npm test
```

`npm run build` renders all three resumes, runs Astro's checks, and builds `dist/`. CI and GitHub Pages deployment run the same build and tests. PR builds also upload the PDFs and page PNG previews as the `recruiter-resumes` Actions artifact.

## CV authoring

- `Tran_Quoc_Truong_CV.yaml` is the **canonical shared factual catalog**, including identity, employment, education, achievements, skills, project evidence, design, and locale. It is no longer standalone RenderCV input.
- `cv/roles/*.yaml` contains only the three role headlines, two-sentence summaries, display descriptions, and ordered references to fact/highlight IDs. Edit common facts once in the catalog.
- `scripts/build_cvs.py` composes valid RenderCV inputs, rejects duplicate YAML keys and duplicate/unknown references, and stages all outputs before publishing them to `public/cv/`.
- Generated outputs are **gitignored**, built locally and in CI, and copied into `dist/` for deployment. Do not author or commit generated PDFs, YAML, HTML, Markdown, Typst, or PNGs.
- `docs/reviews/issue-9/` contains frozen review screenshots from this migration, separate from live generated outputs; they are never build inputs.

Generate without building Astro:

```bash
uv run poe update-cv
# or
npm run render:cv
```

The three variants have materially different evidence priorities:

- **AI Engineer:** model experiments and computer vision; Vehicle Detection, APIT, and self-driving research; research recognition first.
- **Applied AI Engineer:** operational problems, architecture, retrieval, backend delivery, and reliability; Omni-Agent, IQP, and APIT. General-purpose default.
- **Automation Tester:** banking transaction integrity, API/database regression, and evidence-backed evaluation; Banking Automation, Agent Assurance, and IQP.

All preserve the same identity, employer names, historical position strings and dates, schools, and award ranks. The website retains its Applied AI Engineer positioning. Evidence decisions and limits are recorded in [cv/evidence.md](cv/evidence.md).

The builder validates non-empty artifacts, two pages per PDF, role-specific PDF titles, and searchable identity/headings. Tests additionally cover factual invariants, invalid inputs, static preview/download links, and legacy alias equivalence. Visually inspect all six pages after substantive content edits.

## Public files and compatibility

`/cv/` provides direct, script-free Preview PDF and Download PDF links for:

- `/cv/Tran_Quoc_Truong_AI_Engineer.pdf`
- `/cv/Tran_Quoc_Truong_Applied_AI_Engineer.pdf`
- `/cv/Tran_Quoc_Truong_Automation_Tester.pdf`

Each role also has sibling `.yaml`, `.html`, `.md`, `.typ`, `_1.png`, and `_2.png` files. Generated YAML is portable RenderCV input with relative output paths.

Existing `/cv/Tran_Quoc_Truong_CV.*` URLs (including both page PNGs) remain byte-identical aliases of the Applied AI Engineer version. `/Tran_Quoc_Truong_CV.yaml` also serves that generated RenderCV YAML. The public export deliberately does **not** expose the master catalog schema.

## Project structure

```text
Tran_Quoc_Truong_CV.yaml  # Shared facts and RenderCV design
cv/roles/                # Three role selections
cv/evidence.md           # Content evidence and limitations
scripts/build_cvs.py     # Composition, rendering, output validation
tests/test_cvs.py        # Composition and built-site checks
public/cv/               # Generated outputs (ignored)
src/                     # Astro portfolio
dist/                    # Static deployment (ignored)
```
