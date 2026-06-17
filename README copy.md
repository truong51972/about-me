# Tran Quoc Truong — Case-study Portfolio

A case-study-first Astro portfolio for Tran Quoc Truong, focused on Applied AI, Agentic QA, RAG systems, and Python backend control planes.

## What this site emphasizes

- **Omni-Agent** as the flagship systems case.
- **APIT** as AI Capstone proof for Agentic API Testing, LLM fine-tuning, and evaluation.
- **Banking QA Automation** as industry delivery proof.
- **Self-driving Car Problem** as earlier award-winning AI research.

## Development

```bash
npm ci
npm run dev
npm run build
```

The site is configured for GitHub Pages at `/about-me` through `astro.config.mjs`.

## Content editing

Most reusable content lives in:

```txt
src/data/profile.ts
```

Project pages live in:

```txt
src/pages/projects/
```

Public artifacts live in:

```txt
public/docs/
public/images/
```

## Deploy

The included GitHub Actions workflow builds Astro and deploys `dist/` to GitHub Pages.
