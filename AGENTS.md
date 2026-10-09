# AGENTS.md

## Scope

These rules apply to the portfolio and especially to CV-related changes in this repository.

## CV source of truth

- `Tran_Quoc_Truong_CV.yaml` is the source of truth.
- Do not hand-edit generated files in `public/cv/` as the primary change.
- After changing the CV source, regenerate with `uv run poe update-cv` or validate with `npm run build`.

## CV strategy

Treat the CV as an index of the strongest evidence, not a database of every tool or project.

Position the profile primarily as an Applied AI engineer with solution architecture, Python backend, and quality engineering strengths. Start from real business or operational problems, show system/solution design, then use implementation details as evidence rather than as the primary identity.

- Keep one stable professional identity ("Applied AI Engineer"). Do not rewrite the headline for every job description.
- Tailor primarily through ordering, selection, and emphasis of evidence.
- Prefer concrete accomplishments over technology inventories.
- A technology mentioned in a real project or experience bullet is stronger evidence than a long skills list.
- Do not add a skill, metric, award, responsibility, or production claim unless it is backed by real work.
- Never fabricate metrics to make a bullet look stronger.

## Portfolio positioning

The portfolio and CV must tell the same story, but they do not need identical detail.

- Lead with real business or operational problems and desired outcomes.
- Show solution/system architecture and key trade-offs before implementation detail.
- Use technologies, frameworks, and low-level implementation as evidence of delivery capability.
- Portfolio case studies may go deeper than the CV, but should preserve the same problem → architecture → delivery → evaluation/reliability narrative.
- Keep headline, summary, achievements, project outcomes, and major skill claims consistent across `Tran_Quoc_Truong_CV.yaml` and `src/data/profile.ts`.
- When the CV is intentionally more selective (for example, fewer awards or projects), the portfolio may retain broader evidence without contradicting the CV.

## Bullet quality

Prefer bullets that follow:

`Action -> technical/business context -> result or scale`

Guidelines:

- Keep bullets concise, ideally one to two rendered lines.
- Quantify only when a real number is available.
- Use implementation detail when it proves capability; omit low-signal internals.
- Avoid repeating the same capability across Experience, Projects, and Achievements.

## Summary writing rules — solution-first

The Summary must position the candidate as an **Applied AI Engineer who solves problems through solution architecture and hands-on delivery**, not as a framework implementer or someone claiming the formal title of Solution Architect.

- Use roughly **two concise sentences**, with the first about the **business/operational problems and intended value**, and the second about **solution architecture, engineering ownership, and delivery/quality validation**.
- Prefer the narrative **problem / desired outcome → architectural decisions and trade-offs → implementation ownership → evaluation and reliability**. Specific supported problem areas include enterprise knowledge access, intelligent automation, and AI agent reliability.
- Describe engineering work as evidence of solving a problem; avoid leading with a list of technologies, model names, frameworks, domains alone, or generic phrases such as "experienced in Python backend systems".
- Balance **solution design** and **hands-on engineering**. Do not imply a formal Solution Architect job title, enterprise-wide architecture authority, or production maturity beyond verified experience.
- Keep skill keywords and stack inventories in Skills, Experience, and Projects. Keep measured achievements and award names in their appropriate sections unless they are essential for differentiating the profile.
- Preserve this meaning consistently in the canonical CV (`Tran_Quoc_Truong_CV.yaml`), portfolio (`src/data/profile.ts`), and LinkedIn guide (`linkedin-profile.md`), while allowing first-person wording on LinkedIn.

## Section responsibilities

- **Summary:** follow the solution-first rules above, in about two sentences; lead with the problems solved, then architecture/ownership through delivery and validation. Never degrade into implementation-first skill inventory.
- **Technical Skills:** keep only high-signal, demonstrated keywords useful for ATS and human scanning.
- **Experience:** prioritize shipped work, scope, business/engineering impact, and enterprise context.
- **Featured Projects:** prove capabilities not already clear from Experience.
- **Achievements:** show external recognition; keep strong, relevant recognitions concise. Use additional awards when they add distinct evidence and fit the two-page layout without displacing higher-signal content.

Each featured project should answer a distinct hiring question. If two projects prove essentially the same capability, prefer removing or shortening the weaker one before expanding the CV.

Do not hyperlink project names in the CV when the underlying work is private, proprietary, or primarily represented by a private repository. The top-level portfolio URL is sufficient navigation. Portfolio case-study pages may still link internally when appropriate.

## Skills taxonomy

Keep skills grouped by capability rather than by arbitrary tool category. Current preferred groups are:

1. AI & Agentic Systems
2. ML, Fine-Tuning & Model Serving
3. LLM Evaluation & Reliability
4. Backend Engineering
5. Test Automation & Quality Engineering
6. Infrastructure & Delivery

Keep hands-on automation frameworks (Playwright, Cypress, Katalon Studio, Postman) visible; AI positioning does not require obscuring real quality engineering experience.

Do not keyword-stuff these groups. Generic tools such as Git or REST should only remain when they add hiring signal.

## Employer and awards accuracy

- List **FPT Software** as the employer for both IVS work (Dec 2024–present) and FSA internship (Sep–Dec 2024), distinguishing business units without inventing a second legal employer.
- Tenure at FPT Software starts in Sep 2024 and includes the internship; never claim that the whole period was full-time employment.
- The IVS Hackathon 2026 result is **2nd Runner-up (3rd Place)**, not 2nd Place. Flezi Polaris later earned the Golden Solution Prize (1st Place) at IVS Solution Day 2.0 2026.
- State the maturity of independently developed Omni-Agent honestly as active development/pre-production. Do not conflate this with enterprise production delivery.

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
- Do not allow a low-signal spill page. Optional sections such as Languages may remain when they fit naturally inside the two-page layout, but should be removed before allowing a third page.
- Prefer deleting low-signal or redundant content before shrinking typography or adding dense tool lists.
- Portfolio pages and GitHub repositories should carry deep implementation detail that does not belong in the CV.

## Validation

Before merging a CV change:

- Check that claims are internally consistent across CV and portfolio.
- Check for duplicated evidence.
- Check that generated output remains readable and within the intended page count.
- Run `npm run build` when the environment supports it; this regenerates PDF/HTML/Markdown/Typst CV outputs from the YAML source.
- Inspect the generated PDF for a two-page layout, hyphenation, and accurate employer/award text before merging.
