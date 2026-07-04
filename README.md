# Tran Quoc Truong — Portfolio & CV

Static Astro portfolio for Applied AI / Python Backend / Agentic QA roles.

## Live site

https://truong51972.github.io/about-me/

## Stack

- Astro
- TypeScript
- RenderCV
- GitHub Pages

## Development

```bash
npm install
uv sync
npm run dev
```

## Build

```bash
npm run build
```

This runs RenderCV to generate CV files into `public/cv/`, then builds the Astro static site into `dist/`.

## CV

`Tran_Quoc_Truong_CV.yaml` is the source of truth. Render generated outputs into `public/cv/`:

```bash
uv run poe update-cv
```

The Poe task runs:

```bash
uv run rendercv render Tran_Quoc_Truong_CV.yaml --output-folder public/cv
```

You can also use the npm script:

```bash
npm run render:cv
```

Generated files:
- `public/cv/Tran_Quoc_Truong_CV.pdf`
- `public/cv/Tran_Quoc_Truong_CV.html`
- `public/cv/Tran_Quoc_Truong_CV.md`
- `public/cv/Tran_Quoc_Truong_CV.typ`
- `public/cv/Tran_Quoc_Truong_CV_*.png`

## Project structure

```
.
├── astro.config.mjs
├── package.json
├── pyproject.toml
├── Tran_Quoc_Truong_CV.yaml
├── public/
│   └── cv/           # Generated CV files (rendered + committed)
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── dist/             # Build output (gitignored)
