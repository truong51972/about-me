# LinkedIn Profile Source of Truth

This file is the canonical content specification for keeping LinkedIn aligned with the CV and portfolio in this repository.

Use it when manually updating LinkedIn or when delegating the update through a browser-capable agent. Preserve existing dates, company associations, certificates, recommendations, endorsements, and verified credentials unless this document explicitly says to change them.

Recruiter discoverability is a first-class goal. LinkedIn should not be treated only as a web version of the CV: headline, About, Experience, and standardized Skills should reinforce the same target-role vocabulary while remaining fully supported by actual work.

## Positioning

Primary identity:

**Product Engineer · Applied AI · Backend Systems**

Career story:

- Product Engineer / Applied AI Engineer translating operational problems into reliable AI systems, from solution design to hands-on delivery.
- Strongest differentiators: AI agents, RAG/hybrid retrieval, MCP/tool calling, LLM evaluation and observability, backend systems, model fine-tuning/serving, and AI-augmented software development.
- Quality engineering and automation are domain strengths that reinforce evaluation, reliability, regression, and delivery discipline; they are not the primary professional identity.
- Do not describe pre-production AI work as production-scale unless there is explicit evidence.
- Use consistent recruiter-search vocabulary across Headline, About, Experience, and Skills instead of keyword stuffing isolated sections.

---

## Headline

**Product Engineer · Applied AI · Backend Systems**

Optional longer variant if LinkedIn search coverage is preferred:

**Applied AI Engineer | AI Agents, RAG & MCP | LLM Evaluation | Python Backend Systems**

Use the first version by default.

---

## About

Product Engineer & Applied AI Engineer translating real business and operational problems into reliable AI systems.

I design end-to-end solutions across agentic workflows, RAG and hybrid retrieval, model adaptation, Python backend systems, and trace-based evaluation, with hands-on ownership from problem framing through implementation and reliability verification.

At FPT Software, my work spans enterprise code intelligence through hybrid retrieval and MCP-based integrations, Agent Assurance using LiteLLM/OpenTelemetry capture and reproducible evaluation, and banking quality engineering. Reusable banking validation assets reduced manual regression effort by approximately 70%.

Independently, I develop Omni-Agent, a modular Applied AI platform combining versioned document knowledge pipelines, agent runtimes, and evaluation. I also built APIT's fine-tuning and serving workflow using Unsloth/PEFT, RunPod/vLLM, and hybrid evaluation. Agent Assurance received 2nd Place at IVS Hackathon 2026, and Flezi Polaris later received the Golden Solution Prize (1st place) at IVS Solution Day 2.0 2026.

I focus on demonstrated systems, auditable evaluation, and dependable delivery rather than claiming production-scale metrics that have not been measured.
---

# Experience

## FPT Software

### Title

**Applied AI Engineer & Automation Tester**

### Dates

Keep the existing LinkedIn employment dates. The CV source of truth currently uses **Dec 2024 — Present**.

### Description

- **IQP — Code Intelligence & Retrieval:** Architected backend retrieval combining dense semantic search, BM25 lexical ranking, and code-graph relationships to provide scoped implementation and testing context across enterprise repositories; exposed retrieval capabilities to AI clients through Model Context Protocol (MCP).
- **Agent Assurance / Flezi Polaris — AI Evaluation Infrastructure:** Architected a trace-based evaluation system for agentic applications, capturing runtime evidence through LiteLLM and OpenTelemetry, reconstructing multi-turn execution trajectories, and applying reproducible behavioral evaluation and regression gates. The solution later received the Golden Solution Prize (1st place) at IVS Solution Day 2.0 2026.
- **Automation & Delivery Engineering:** Developed and maintained automated validation workflows across API, database, web, and mobile layers; integrated automated execution into GitLab and Azure DevOps CI pipelines for repeatable regression and delivery workflows.
- **Banking Systems Verification:** Built reusable cross-platform automation and SQL-based validation across banking and payment systems, reducing manual regression effort by approximately 70%. An omnichannel automation proof of concept contributed to approximately 20 person-months of follow-on delivery work.

### Skills to associate with this experience

Prioritize LinkedIn-standardized equivalents of:

- Artificial Intelligence (AI) / Applied AI
- Generative AI
- Large Language Models (LLMs)
- Python
- FastAPI
- Retrieval-Augmented Generation (RAG)
- Hybrid Retrieval
- AI Agents / Agentic AI
- Model Context Protocol (MCP)
- LLM Evaluation
- Prompt Engineering
- OpenTelemetry
- PostgreSQL
- Redis
- Celery
- REST APIs / Backend Development
- Docker
- CI/CD
- GitLab CI/CD
- Azure DevOps
- API Testing
- Integration Testing
- Regression Testing
- SQL

Keep the FPT job title consistent with the CV unless an officially verified title change warrants updating both sources. Treat automation/quality engineering as supporting experience, not the sole professional identity.

---

## FPT Software Academy

### Title

**Full-Stack Developer Intern**

### Dates

Keep existing LinkedIn dates. The CV source of truth currently uses **Sep 2024 — Dec 2024**.

### Description

- Built the core backend for an online learning and assessment platform using Django with role-based access control and automated exam workflows.
- Integrated a separate FastAPI computer-vision service for AI-assisted real-time exam proctoring and face detection.
- Containerized and deployed the multi-service architecture using Docker Compose, Nginx reverse proxy, and Cloudflare Tunnel.

### Skills to associate with this experience

Prioritize LinkedIn-standardized equivalents of:

- Python
- Django
- Django REST Framework
- FastAPI
- Backend Development
- REST APIs
- Computer Vision
- PyTorch
- Docker
- Docker Compose
- Nginx
- Cloudflare

---

# Projects

Project entries should reinforce the current Applied AI identity. Prefer fewer, stronger projects over a flat list of every historical project.

## Priority 1 — Omni-Agent

### Name

**Omni-Agent — Applied AI Platform**

### Description

A modular Applied AI platform combining versioned document knowledge pipelines, agent runtimes, MCP integrations, and trace-based Agent Assurance within a project-centric multi-service architecture.

- Designed a modular platform with a project-scoped control plane, isolated domain services, asynchronous workers, PostgreSQL, Redis, S3-compatible object storage, and containerized deployment.
- Built a versioned Knowledge Builder covering source ingestion, Docling parsing/OCR, chunking, Qdrant indexing, citation-grounded retrieval, and MCP-based knowledge access.
- Implemented LangGraph-based agent workflows with prompt and context engineering, tool calling, MCP integration, and SSE streaming for multi-turn execution over project knowledge.
- Integrated Agent Assurance capabilities for runtime evidence capture, behavioral evaluation, regression, and quality gating.
- Current maturity: active development / pre-production.

### Skills

LangGraph, FastAPI, Django/DRF, RAG, Qdrant, MCP, Prompt Engineering, Context Engineering, SSE, Celery, PostgreSQL, Redis, OpenTelemetry, Docker.

### Replace old content

Remove or replace descriptions centered on:

- "Next-Generation of Testing Intelligence"
- generic automated test-case generation as the main Omni-Agent purpose
- duplicate bug prediction as the platform identity
- Knowledge Graph/GNN claims that no longer reflect the current primary product architecture

---

## Priority 2 — Agent Assurance / Flezi Polaris

### Name

**Agent Assurance — AI Agent Evaluation Platform**

### Description

A record-first assurance layer for agentic systems that captures runtime evidence, reconstructs multi-turn execution trajectories, evaluates behavioral dimensions, and produces reproducible regression and quality-gate results.

- Captures agent interactions through LiteLLM and OpenTelemetry paths and normalizes multi-turn execution evidence into durable evaluation records.
- Evaluates records across semantic behavior groups while retaining evidence and rationale for reproducible review.
- Uses worst-record aggregation so decisive failures cannot be hidden by averages; missing evidence remains explicitly inconclusive rather than guessed.
- Uses versioned requirements and scenarios so assurance runs can preserve historical reproducibility.
- Received 2nd Place at IVS Hackathon 2026 and later evolved into Flezi Polaris, winner of the Golden Solution Prize (1st place) at IVS Solution Day 2.0 2026.

### Skills

LLM Evaluation, LLM-as-a-Judge, OpenTelemetry, LiteLLM, FastAPI, Celery, PostgreSQL, Redis, Regression Testing, Docker.

---

## Priority 3 — APIT

### Name

**APIT — Agent Programmatic Integration Testing**

### Description

An AI-assisted API testing system that generates structured test scenarios from API documentation using a fine-tuned LLM, pgvector-backed retrieval, and deterministic/model-based evaluation.

- Built a bilingual synthetic dataset generation pipeline containing 1,258 API-testing samples.
- Fine-tuned Qwen2.5-3B with Unsloth and PEFT LoRA/QLoRA, achieving 0.655 macro-F1, a 41.5% relative improvement over the Llama-3.2-3B baseline.
- Deployed the adapted model on RunPod through an OpenAI-compatible vLLM service with BitsAndBytes quantization and runtime LoRA adapters.
- Implemented pgvector-backed cosine-similarity retrieval.
- Built a hybrid evaluation workflow combining LLM-as-a-Judge, fuzzy matching, and deterministic JSON-schema validation.

### Skills

Qwen2.5, Unsloth, Hugging Face Transformers, PEFT, LoRA/QLoRA, vLLM, RunPod, pgvector, BitsAndBytes, LLM Evaluation, Python.

---

## Supporting — E-Commerce AI Assistant

### Name

**E-Commerce AI Assistant — Conversational RAG & Search**

### Description

An end-to-end AI shopping assistant combining filtered vector search and agent-driven conversational retrieval for natural-language product discovery.

- Implemented semantic product retrieval with Milvus, cosine similarity, embeddings, category filters, and price filters.
- Built an agent search flow that supplies retrieved product records to an LLM for context-aware consultation.
- Structured the system as FastAPI, PostgreSQL, Redis, Milvus, Nginx, and Docker Compose services.

### Cleanup

Remove speculative business-impact claims such as projected percentage reductions in labor, sales improvements, or engagement improvements unless backed by measured production data.

---

## Supporting / Historical — Self-Driving Car

### Name

**Self-Driving Car Problem — Autonomous Driving Research**

### Description

Research project combining YOLOv8 perception, lane segmentation, OpenCV processing, and PID steering control in a Unity simulation.

- Built YOLOv8 traffic-sign classification and lane-segmentation workflows.
- Implemented bird-view lane processing and PID-based steering control.
- Completed the simulation benchmark in 125.8 seconds with a perfect 100% score.
- Received Second Prize in the FPT University Student Scientific Research Competition in 2024.

### Cleanup

Remove the old `60% accuracy` driving claim if still present; use the benchmark and award evidence instead.

---

## Supporting / Historical — Leaf-Based Plant Disease Detection

Keep as a historical computer-vision project if desired, but remove speculative claims about percentage crop-loss reduction or consultation-cost reduction unless backed by measured field data.

Use engineering evidence instead:

- PyTorch classification pipeline
- segmentation-assisted preprocessing
- FastAPI serving
- Grad-CAM++ explanations

---

# Honors & Awards

Order the most relevant AI awards first.

## 1. Golden Solution Prize (1st Place) — IVS Solution Day 2.0 2026

**Date:** Sep 18, 2026

**Associated project:** Flezi Polaris / Agent Assurance

**Description:**

Awarded the Golden Solution Prize (1st place) at IVS Solution Day 2.0 2026 for Flezi Polaris, an Agent Assurance solution focused on AI-agent evaluation, runtime evidence capture, behavioral verification, and governed quality assurance.

---

## 2. 2nd Place — IVS Hackathon 2026

**Date:** Aug 2026

**Associated project:** Agent Assurance

**Description:**

Awarded 2nd place for independently architecting an AI Agent Verification engine featuring runtime evidence capture, trace-based behavioral evaluation, and governed regression/quality gates. The core capabilities were subsequently integrated into Omni-Agent.

---

## 3. Second Prize — Autonomous Driving Research Paper Competition

**Date:** Apr 2024

**Description:**

Independently completed the autonomous-driving research end to end, from data labeling and model training through YOLOv8 perception, lane segmentation, PID steering control, and Unity-based evaluation; completed the benchmark in 125.8 seconds with a 100% score.

---

## 4. Older programming awards

Keep older C/C++ or academic programming awards if already present, but place them below the Applied AI awards above.

---

# Skills

Skills are a first-class part of the LinkedIn migration because recruiter search and matching rely heavily on skill vocabulary. The goal is not to maximize the raw number of skills; the goal is to maintain a focused, searchable, evidence-backed skill graph that matches the target roles.

Target roughly **30–40 high-signal skills**. LinkedIn may support more, but low-signal or redundant skills dilute the profile and make maintenance harder.

## Skill selection rules

When manually updating LinkedIn or using a browser agent:

1. Search for each skill in LinkedIn's Add Skill UI.
2. Prefer the standardized/canonical skill offered by LinkedIn autocomplete.
3. Treat the names in this document as concepts, not mandatory literal labels. For example, LinkedIn may expose `Artificial Intelligence (AI)` rather than `Applied AI`, or another canonical label for `AI Agents`.
4. Do not create arbitrary variants when a recognized LinkedIn skill exists.
5. Avoid duplicate synonyms unless both labels have clear recruiter-search value and LinkedIn treats them as distinct standardized skills.
6. If a requested concept cannot be mapped confidently to a LinkedIn-standardized skill, skip it and report the mismatch rather than inventing a label.
7. Associate important skills with the relevant Experience, Education, certification, or other contextual source where LinkedIn allows it.
8. Preserve useful existing endorsements. Do not delete an endorsed skill merely to make the list aesthetically cleaner; only remove/deprioritize it when it is clearly stale, misleading, or materially reinforces the wrong professional identity.
9. Skills must be supported by repository evidence. Do not add a technology solely because it is useful for recruiter search.

## Recruiter-search priorities

Optimize primarily for these role families:

- Applied AI Engineer
- AI Engineer
- AI Agent / Agentic AI Engineer
- Python Backend Engineer
- Applied AI / Backend Engineer

The same core concepts should appear naturally across Headline/About, Experience, and Skills so recruiter search terms have both an explicit skill and supporting evidence.

## Top / pinned skills

If LinkedIn exposes only three prominent/pinned skills, prefer:

1. Python
2. Artificial Intelligence (AI) / the closest standardized AI skill
3. Large Language Models (LLMs) / the closest standardized LLM skill

If more prominent positions are available, extend with:

4. Retrieval-Augmented Generation (RAG)
5. AI Agents / Agentic AI
6. FastAPI

Do not prioritize QA/Test Automation in the top profile skills even though those remain valid supporting skills.

## Tier 1 — Core recruiter-search skills

These are the highest-priority concepts to reconcile first:

- Python
- Artificial Intelligence (AI) / Applied AI
- Generative AI
- Large Language Models (LLMs)
- Retrieval-Augmented Generation (RAG)
- AI Agents / Agentic AI
- Machine Learning
- FastAPI
- Backend Development
- PostgreSQL

## Tier 2 — Applied AI differentiation

Add standardized equivalents where available and supported:

- LangGraph
- Model Context Protocol (MCP)
- LLM Evaluation
- Hybrid Retrieval
- Vector Databases
- OpenTelemetry
- Prompt Engineering
- Context Engineering
- LangChain
- Qdrant
- pgvector
- LiteLLM
- Embeddings

Do not force highly niche implementation phrases such as `Runtime Trace Reconstruction`, `Structured Outputs / JSON Schema`, or `Tool Calling` into the Skills section if LinkedIn does not expose a strong standardized skill for them. Keep those concepts in Experience/About instead.

## Tier 3 — Model adaptation & serving

Add standardized equivalents where available:

- PyTorch
- Hugging Face Transformers
- Fine-Tuning
- PEFT
- LoRA / QLoRA
- vLLM
- Synthetic Data Generation

`Unsloth` and `BitsAndBytes` are valid hands-on technologies but should remain secondary unless LinkedIn exposes them as standardized skills with useful search value.

## Tier 4 — Backend, platform & delivery

- Django
- Django REST Framework
- Redis
- Celery
- REST APIs
- SQL
- Docker
- Linux
- CI/CD
- GitLab CI/CD
- Azure DevOps
- Nginx

Supporting technologies such as Docker Compose, MinIO/S3-compatible storage, Cloudflare, RunPod, DigitalOcean, and Heroku may remain on the profile when LinkedIn exposes useful standardized skills, but they are lower priority than the core engineering stack.

## Tier 5 — Quality engineering support

These skills are relevant evidence and should remain searchable, but they should not dominate the profile identity:

- Test Automation
- API Testing
- Integration Testing
- Regression Testing
- Unit Testing
- Pytest

Keep SQL in the backend/platform set because it is broader than QA and is directly supported by work experience.

## Contextual skill associations

Where LinkedIn allows a skill to be associated with the place it was used, prefer these mappings.

### FPT Software

Associate the strongest available standardized equivalents of:

- Artificial Intelligence (AI)
- Generative AI
- Large Language Models (LLMs)
- Python
- FastAPI
- RAG
- AI Agents / Agentic AI
- MCP
- LLM Evaluation
- Hybrid Retrieval / Vector Search
- OpenTelemetry
- Prompt Engineering
- PostgreSQL
- Redis
- Celery
- REST APIs / Backend Development
- Docker
- CI/CD
- GitLab CI/CD
- Azure DevOps
- Test Automation
- API Testing
- Integration Testing
- Regression Testing
- SQL

### FPT Software Academy

Associate:

- Python
- Django
- Django REST Framework
- FastAPI
- Backend Development
- REST APIs
- Computer Vision
- PyTorch
- Docker
- Nginx

### Education / projects when supported

Use project or education associations to provide evidence for model-specific skills that are less central to the FPT role, especially:

- Machine Learning
- PyTorch
- Hugging Face Transformers
- Fine-Tuning
- LoRA / QLoRA
- vLLM
- Computer Vision

Do not fabricate an association if LinkedIn does not offer the relevant context selector.

## Secondary AI-augmented development skills

Keep these secondary rather than top identity skills:

- OpenAI Codex
- Claude Code
- GitHub Copilot

The broader agentic-development workflow belongs mainly in About/portfolio evidence. Do not create a long LinkedIn Skills list for OpenCode, Cline, T3 Code, agy, or similar tools.

## Skills verification checklist

After the Skills migration:

- confirm that the highest-priority Applied AI and backend skills are present
- confirm that important skills use LinkedIn's standardized autocomplete labels where possible
- confirm that high-value skills are associated with the correct FPT experience where LinkedIn supports contextual associations
- confirm that QA skills remain visible but do not dominate the top/pinned skills
- preserve valuable endorsements where possible
- remove or deprioritize stale skills that reinforce an outdated QA-only identity
- report concepts that could not be mapped confidently to a standardized LinkedIn skill

---

# Featured

Keep Featured focused. Recommended order:

1. **Portfolio** — https://portfolio.truong51972.id.vn/
2. **GitHub profile** — https://github.com/truong51972
3. **CV** — use the public CV URL generated by the portfolio if available
4. **Agent Assurance / Flezi Polaris case study** — use the public portfolio case-study URL rather than a private repository
5. **IVS Solution Day / award evidence** — add a public portfolio or post link if available

Avoid featuring private repository links that recruiters cannot open.

---

# Education

## FPT School of Business & Technology

**Master of Software Engineering in AI**

**May 2026 — Present**

Optional description:

Software engineering focus for applied AI systems.

## FPT University

**Bachelor of Artificial Intelligence**

**2021 — 2025**

Optional description:

Coursework and projects across machine learning, computer vision, AI systems, and applied software engineering.

---

# Profile Cleanup Checklist

When applying this document to LinkedIn:

- [ ] Change primary headline to `Product Engineer · Applied AI · Backend Systems`.
- [ ] Replace generic `Software Engineer` positioning in About.
- [ ] Keep the FPT employment title aligned with the current CV (`Applied AI Engineer & Automation Tester`) unless independently verified otherwise.
- [ ] Keep automation/testing as quality-engineering and delivery evidence rather than primary identity.
- [ ] Reconcile Skills immediately after Experience; treat recruiter discoverability as a first-class objective.
- [ ] Target roughly 30–40 high-signal skills rather than blindly filling the maximum allowed count.
- [ ] Prefer standardized LinkedIn skill labels returned by autocomplete.
- [ ] Prioritize Python, AI, LLMs, RAG, AI Agents, FastAPI, Backend Development, PostgreSQL, and other Tier 1 skills.
- [ ] Associate important skills with FPT Software / FPT Software Academy where LinkedIn supports contextual skill associations.
- [ ] Preserve useful endorsements and avoid deleting endorsed skills merely for visual cleanup.
- [ ] Keep QA/testing skills as supporting search evidence, not the top profile identity.
- [ ] Report requested skill concepts that cannot be mapped confidently to LinkedIn-standardized skills.
- [ ] Replace old Omni-Agent description with the current Applied AI Platform description.
- [ ] Add or refresh Agent Assurance / Flezi Polaris.
- [ ] Refresh APIT with Unsloth, PEFT, vLLM, RunPod, pgvector, and evaluation details.
- [ ] Add Golden Solution Prize 2026.
- [ ] Add IVS Hackathon 2026 award.
- [ ] Remove speculative business-impact percentages from prototype projects.
- [ ] Remove stale `60% accuracy` claim from the self-driving project.
- [ ] Keep measured/defensible impact: ~70% manual-regression reduction, ~20 person-months follow-on delivery, APIT macro-F1 0.655, +41.5% relative improvement, self-driving 125.8s / 100% score.
- [ ] Add vLLM and pgvector when LinkedIn provides useful standardized skill labels; otherwise retain them in project/About evidence.
- [ ] Keep Codex, Claude Code, and GitHub Copilot as secondary evidence; do not turn coding-agent experience into a long tool list.
- [ ] Feature the public portfolio and public evidence rather than private repository URLs.

---

# Browser-Agent Instructions

When a browser-capable agent applies this file to LinkedIn:

1. Treat this file, `Tran_Quoc_Truong_CV.yaml`, and `src/data/profile.ts` as the source of truth.
2. Do not invent dates, metrics, production scale, team size, users, traffic, cost savings, latency, throughput, or revenue impact.
3. Preserve LinkedIn connection/recommendation history, useful skill endorsements, and existing verified credentials.
4. Do not delete an existing role, project, award, certificate, education record, or endorsed skill unless the cleanup instructions above explicitly mark its content as stale, speculative, misleading, or materially inconsistent with the target positioning.
5. Prefer editing existing matching entries over creating duplicates.
6. If LinkedIn has a field that does not map cleanly to this document, preserve the existing value rather than guessing.
7. Use public portfolio links for Featured content; do not expose private repository URLs.
8. Stop before any action that would publish a post, notify the network, or materially change privacy settings unless explicitly requested.
9. Apply changes in this priority order: **Headline → About → Experience → Skills → Honors & Awards → Featured → Projects → Education**.
10. For each normal profile section, use an **observe → compare → edit → save → verify** loop. Re-observe the section after saving before moving on.
11. Treat Skills as a dedicated reconciliation workflow rather than a simple add/remove list:
    - observe the current skill inventory and existing endorsements
    - search each target concept through LinkedIn's Add Skill UI
    - choose the standardized autocomplete result when available
    - avoid duplicate synonyms unless intentionally useful
    - add contextual associations to the relevant Experience/Education when LinkedIn supports them
    - preserve valuable endorsed skills where possible
    - verify the resulting skill set after changes
12. Do not blindly add every skill listed in this file. Prioritize Tier 1 first, then Tier 2, and stop around 30–40 high-signal skills unless existing endorsed skills justify keeping a larger set.
13. If LinkedIn cannot map a skill concept cleanly, skip it and include it in the final report instead of creating a custom/unverified variant.
14. If LinkedIn presents login verification, MFA, CAPTCHA, or another human-only interaction, request human help/handoff and continue afterward.
15. After applying changes, review the public-facing profile for consistency across headline, About, Experience, explicit Skills, major projects, awards, and Featured content.
16. Final report must include: sections updated, entries created or substantially rewritten, stale content removed, skills added/retained/deprioritized, skill concepts that could not be standardized, contextual skill associations applied, content intentionally preserved, and anything still inconsistent with this specification.
