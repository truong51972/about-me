# Migration from the old portfolio

Recommended migration steps:

```bash
# in your existing about-me repo
rm -rf assets index.html omni-agent.html view-only_CV.yaml main.py uv.lock pyproject.toml .python-version

# copy all files from this project into the repo root
npm ci
npm run build

git add .
git commit -m "refactor: rebuild portfolio as case-study Astro site"
git push origin main
```

If GitHub Pages is already enabled for the repository, the included workflow should deploy the site automatically after pushing to `main`.

## Notes

- The site uses a case-study-first structure inspired by the Case portfolio direction.
- The award image is included as evidence for the earlier self-driving car research project.
- APIT and Self-driving PDFs are included under `public/docs/` so they can be linked from the portfolio.
