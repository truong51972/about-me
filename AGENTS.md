# AGENTS.md

## Scope

These rules apply to the portfolio and especially to CV-related changes in this repository.

## CV source of truth

- `Tran_Quoc_Truong_CV.yaml` is the source of truth.
- Do not hand-edit generated files in `public/cv/` as the primary change.
- After changing the CV source, regenerate with `uv run poe update-cv` or validate with `npm run build`.

## CV strategy

Treat the CV as an index of the strongest evidence, not a database of every tool or project.

- Keep one stable professional identity. Do not rewrite the headline for every job description.
- Tailor primarily through ordering, selection, and emphasis of evidence.
- Prefer concrete accomplishments over technology inventories.
- A technology mentioned in a real project or experience bullet is stronger evidence than a long skills list.
- Do not add a skill, metric, award, responsibility, or production claim unless it is backed by real work.
- Never fabricate metrics to make a bullet look stronger.

## Bullet quality

Prefer bullets that follow:

`Action -> technical/business context -> result or scale`

Guidelines:

- Keep bullets concise, ideally one to two rendered lines.
- Quantify only when a real number is available.
- Use implementation detail when it proves capability; omit low-signal internals.
- Avoid repeating the same capability across Experience, Projects, and Achievements.

## Section responsibilities

- **Summary:** explain the profile in about two sentences; no framework dump.
- **Technical Skills:** keep only high-signal, demonstrated keywords useful for ATS and human scanning.
- **Experience:** prioritize shipped work, scope, business/engineering impact, and enterprise context.
- **Featured Projects:** prove capabilities not already clear from Experience.
- **Achievements:** show external recognition; keep only the strongest, most relevant recognitions and avoid restating full project descriptions.

Each featured project should answer a distinct hiring question. If two projects prove essentially the same capability, prefer removing or shortening the weaker one before expanding the CV.

When a strong portfolio case study exists, link the project name rather than adding a raw URL or extra explanatory line. Prefer links only for the highest-signal projects.

## Skills taxonomy

Keep skills grouped by capability rather than by arbitrary tool category. Current preferred groups are:

1. AI & Agentic Systems
2. ML, Fine-Tuning & Model Serving
3. LLM Evaluation & Observability
4. Backend Engineering
5. Infrastructure & Delivery

Do not keyword-stuff these groups. Generic tools such as Git or REST should only remain when they add hiring signal.

## Tailoring for a job

When adapting the CV for a role:

1. Extract the small set of core capabilities the role actually evaluates.
2. Map each capability to existing evidence in Experience or Projects.
3. Reorder or tighten bullets so the strongest evidence is easy to scan.
4. Add a missing keyword only when the underlying experience is real.
5. Do not transform the base CV into a job-specific technology checklist.

The generic CV should remain reusable across Applied AI Engineer, AI Platform Engineer, Product Engineer, and Python/backend-oriented AI roles.

## Length and density

- Target two pages for the current profile; do not compress to one page at the cost of relevant evidence or readability.
- Do not allow a low-signal spill page. If an extra page contains only optional material (for example, a Languages section on an English-language technical CV), remove or relocate that material before changing typography.
- Prefer deleting low-signal or redundant content before shrinking typography or adding dense tool lists.
- Portfolio pages and GitHub repositories should carry deep implementation detail that does not belong in the CV.

## Validation

Before merging a CV change:

- Check that claims are internally consistent across CV and portfolio.
- Check for duplicated evidence.
- Check that generated output remains readable and within the intended page count.
- Run `npm run build` when the environment supports it.
