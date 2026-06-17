# About Me — Portfolio & CV

This repository contains two related projects:

1. **Portfolio website** — Built with [Astro](https://astro.build/), hosted at [truong51972.github.io/about-me](https://truong51972.github.io/about-me)
2. **CV generator** — Uses [renderCV](https://github.com/rendercv/rendercv) to generate CV in PDF, PNG, Markdown, and HTML formats

---

## Prerequisites

- **Node.js** (v20+)
- **Python** (3.12+)
- **npm**
- **uv** (Python package manager, optional but recommended)

---

## Portfolio (npm)

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Starts a local dev server at `http://localhost:4321` with hot-reload.

### Build for production

```bash
npm run build
```

Generates a static site in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

---

## CV Generator (Python / Poethepoet)

### Set up Python environment

```bash
python -m venv .venv
source .venv/bin/activate
uv pip install -e .
```

Or if using uv directly:

```bash
uv sync
```

### Render CV

After activating the virtual environment:

```bash
source .venv/bin/activate
poe render-cv
```

The `render-cv` task is defined in `pyproject.toml` and runs:

```
rendercv render "Tran_Quoc_Truong_CV.yaml"
```

Outputs are generated in `rendercv_output/`:

- `Tran_Quoc_Truong_CV.pdf`
- `Tran_Quoc_Truong_CV.typ`
- `Tran_Quoc_Truong_CV_1.png`, `Tran_Quoc_Truong_CV_2.png`, `Tran_Quoc_Truong_CV_3.png`
- `Tran_Quoc_Truong_CV.md`
- `Tran_Quoc_Truong_CV.html`

---

## Project Structure

```
.
├── astro.config.mjs         # Astro configuration
├── package.json             # npm dependencies & scripts
├── pyproject.toml           # Python dependencies & poe tasks
├── Tran_Quoc_Truong_CV.yaml # CV data source
├── rendercv_output/         # Generated CV files
├── src/                     # Astro portfolio source
│   ├── components/
│   ├── layouts/
│   └── pages/
├── public/                  # Static assets
└── dist/                    # Build output (gitignored)