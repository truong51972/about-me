# Build notes

Verified in the sandbox:

```bash
npm ci
npm run build
npm audit
```

Result:

- Astro check: passed
- Astro build: passed
- Built pages: Home, Projects, Omni-Agent, APIT, Banking Automation, Self-driving Car, CV, 404
- `npm audit`: 0 vulnerabilities

There may be Vite deprecation warnings caused by current Astro/Vite internals. They do not fail the build and do not affect the static GitHub Pages output.
