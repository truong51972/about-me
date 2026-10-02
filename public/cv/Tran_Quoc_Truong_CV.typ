// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Tran Quoc Truong",
  title: "Tran Quoc Truong - CV",
  footer: context { [#emph[Tran Quoc Truong -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Oct 2026] ],
  locale-catalog-language: "en",
  text-direction: ltr,
  page-size: "a4",
  page-top-margin: 1.35cm,
  page-bottom-margin: 1.35cm,
  page-left-margin: 1.35cm,
  page-right-margin: 1.35cm,
  page-show-footer: true,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 79, 144),
  colors-headline: rgb(0, 79, 144),
  colors-connections: rgb(0, 79, 144),
  colors-section-titles: rgb(0, 79, 144),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.58em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "Source Sans 3",
  typography-font-family-name: "Source Sans 3",
  typography-font-family-headline: "Source Sans 3",
  typography-font-family-connections: "Source Sans 3",
  typography-font-family-section-titles: "Source Sans 3",
  typography-font-size-body: 10pt,
  typography-font-size-name: 30pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.4em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: true,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: false,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.45cm,
  header-space-below-headline: 0.35cm,
  header-space-below-connections: 0.3cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: true,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_partial_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.38cm,
  section-titles-space-below: 0.2cm,
  sections-allow-page-break: false,
  sections-space-between-text-based-entries: 0.28em,
  sections-space-between-regular-entries: 0.75em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: true,
  entries-degree-width: 1cm,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0.15cm,
  entries-highlights-space-above: 0.1cm,
  entries-highlights-space-between-items: 0.28em,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 10,
    day: 2,
  ),
)


= Tran Quoc Truong

  #headline([Applied AI Engineer · AI Agents & RAG · Backend Systems])

#connections(
  [#connection-with-icon("location-dot")[Ho Chi Minh City, Vietnam]],
  [#link("mailto:tranquoctruong20@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[tranquoctruong20\@gmail.com]]],
  [#link("https://portfolio.truong51972.id.vn/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[portfolio.truong51972.id.vn]]],
  [#link("https://linkedin.com/in/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[truong51972]]],
  [#link("https://github.com/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[truong51972]]],
)


== Summary

Applied AI Engineer building agentic applications, RAG and retrieval systems, LLM evaluation infrastructure, and Python backend platforms, with a focus on reliability, observability, and practical delivery.

Experience spans enterprise code intelligence, trace-based AI assurance, model fine-tuning and serving, quality engineering, CI-driven delivery, and AI-augmented software development; independently develops Omni-Agent as a modular platform for knowledge, agents, and evaluation.

== Technical Skills

#strong[AI & Agentic Systems:] RAG, Hybrid Retrieval, LangGraph, LangChain, Multi-Agent Systems, MCP (Model Context Protocol), Tool Calling, Prompt Engineering, Structured Outputs \/ JSON Schema, Context Engineering, LiteLLM, Qdrant, Milvus, pgvector, Docling

#strong[LLM Evaluation & Observability:] LLM Evaluation, Regression Testing, LLM-as-a-Judge, OpenTelemetry (OTel), Runtime Trace Reconstruction, Deterministic Quality Gates, Prompt Injection Testing, Data Leakage Evaluation, Langfuse

#strong[Backend & Product Engineering:] Python, FastAPI, Django\/DRF, Pydantic, SQLAlchemy, PostgreSQL, Redis, Celery, RESTful APIs, SSE \/ Streaming APIs, Async\/Await, Concurrency, API Authentication & Authorization, Pytest, Unit\/API\/Integration Testing, SQL, Idempotent Processing, React, TypeScript

#strong[AI-Augmented Development:] OpenAI Codex, Claude Code, GitHub Copilot, Agentic Coding Workflows, Multi-Agent Delegation, Context Management, Git Worktrees

#strong[Cloud, Infrastructure & Delivery:] Google Cloud Platform (Compute Engine, cost\/budget management), DigitalOcean, Heroku, RunPod, Cloudflare, Docker, Docker Compose, Kubernetes, Nginx, S3-compatible Object Storage (MinIO), GitLab CI\/CD, Azure DevOps Pipelines, Linux

#strong[ML, Fine-Tuning & Model Serving:] PyTorch, Hugging Face Transformers, PEFT, Unsloth, LoRA\/QLoRA Fine-tuning, vLLM, BitsAndBytes Quantization, Synthetic Data Generation, Embeddings

== Experience

#regular-entry(
  [
    #strong[FPT Software], Applied AI Engineer

    - IQP (Code Intelligence & Retrieval): Architected backend retrieval combining dense semantic search, BM25 lexical ranking, and code-graph relationships to provide scoped implementation and testing context across enterprise repositories; exposed retrieval capabilities to AI clients through Model Context Protocol (MCP).

    - Agent Assurance \/ Flezi Polaris (AI Evaluation Infrastructure): Architected a trace-based evaluation system for agentic applications, capturing runtime evidence through LiteLLM and OpenTelemetry, reconstructing multi-turn execution trajectories, and applying reproducible behavioral evaluation and regression gates; the solution later received the Golden Solution Prize (1st place) at IVS Solution Day 2.0 2026.

    - Automation & Delivery Engineering: Developed and maintained automated validation workflows across API, database, web, and mobile layers; integrated automated test execution into GitLab and Azure DevOps CI pipelines for repeatable regression and delivery workflows.

    - Banking Systems Verification: Built reusable cross-platform automation and SQL-based validation across banking and payment systems, reducing manual regression effort by approximately 70\%; an omnichannel automation proof of concept contributed to approximately 20 person-months of follow-on delivery work.

  ],
  [
    Ho Chi Minh City, Vietnam

    Dec 2024 – present

    

    1 year 11 months

  ],
)

#regular-entry(
  [
    #strong[FPT Software Academy], Full-Stack Developer Intern

    - Built the core backend for an online learning and assessment platform using Django with role-based access control and automated exam workflows.

    - Integrated a separate FastAPI computer-vision service for AI-assisted real-time exam proctoring and face detection.

    - Containerized and deployed the multi-service architecture using Docker Compose, Nginx reverse proxy, and Cloudflare Tunnel.

  ],
  [
    Ho Chi Minh City, Vietnam

    Sept 2024 – Dec 2024

    

    4 months

  ],
)

== Achievements

#regular-entry(
  [
    #strong[Golden Solution Prize (1st Place) — IVS Solution Day 2.0 2026]

    #summary[Awarded the Golden Solution Prize (1st place) on September 18, 2026 for Flezi Polaris, an Agent Assurance solution focused on AI agent evaluation, trace-based evidence capture, and governed quality verification.]

  ],
  [
    Sept 2026

  ],
)

#regular-entry(
  [
    #strong[2nd Place — IVS Hackathon 2026]

    #summary[Awarded 2nd place for independently architecting an end-to-end AI Agent Verification engine (Agent Assurance) featuring runtime evidence capture, trace-based behavioral evaluation, and governed quality gates; subsequently integrated into Omni-Agent.]

  ],
  [
    Aug 2026

  ],
)

#regular-entry(
  [
    #strong[Second Prize — Autonomous Driving Research Paper Competition]

    #summary[Co-authored research combining YOLOv8 perception, lane segmentation, and PID steering control in Unity simulation, completing the autonomous benchmark in 125.8 seconds with a perfect 100\% score.]

  ],
  [
    Apr 2024

  ],
)

== Featured Projects

#regular-entry(
  [
    #strong[Omni-Agent — Applied AI Platform (Knowledge Builder & Agent Assurance)]

    #summary[A modular Applied AI platform combining versioned document knowledge pipelines, agent runtimes, and agent evaluation within a project-centric multi-service architecture.]

    - Platform Architecture: Designed a modular multi-service architecture with project-scoped control plane, isolated domain services, asynchronous workers, PostgreSQL, Redis, S3-compatible object storage, and containerized deployment.

    - Knowledge Builder: Built a versioned document pipeline covering source ingestion, Docling parsing\/OCR, chunking, Qdrant indexing, citation-grounded retrieval, and MCP-based knowledge access.

    - Agent Runtime & Integration: Implemented LangGraph-based agent workflows with tool calling, context-aware retrieval, MCP integration, and SSE streaming for multi-turn execution over project knowledge.

    - Agent Assurance: Integrated trace-based evidence capture, evaluation, regression, and quality-gating capabilities into the platform.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[APIT — Agent Programmatic Integration Testing]

    #summary[AI-assisted API testing framework generating structured test scenarios from API documentation via fine-tuned LLMs.]

    - Developed a bilingual synthetic dataset generation pipeline producing 1,258 domain-specific API testing samples.

    - Fine-tuned Qwen2.5-3B with Unsloth and PEFT LoRA\/QLoRA, achieving macro-F1 of 0.655 (+41.5\% relative improvement over Llama-3.2-3B baseline).

    - Deployed the fine-tuned model on RunPod through an OpenAI-compatible vLLM service with BitsAndBytes quantization and runtime LoRA adapters.

    - Integrated pgvector-backed cosine-similarity retrieval and a hybrid evaluation pipeline combining LLM-as-a-Judge, fuzzy matching, and deterministic JSON-schema validation.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[E-Commerce AI Assistant — Conversational RAG & Search]

    #summary[End-to-end shopping assistant combining filtered vector search and multi-agent conversational retrieval.]

    - Built product semantic search using Milvus, cosine similarity, embeddings, and dynamic category\/price filters.

    - Implemented multi-turn conversational agent with LangGraph and LangChain for context-aware product consultation.

    - Containerized multi-service architecture with FastAPI, PostgreSQL, Redis, Milvus, and Docker Compose.

  ],
  [
  ],
)

== Education

#education-entry(
  [
    #strong[FPT School of Business & Technology], Master of Software Engineering in AI

  ],
  [
    Ho Chi Minh City, Vietnam

    May 2026 – present

  ],
  degree-column: [
    
  ],
)

#education-entry(
  [
    #strong[FPT University], Bachelor of Artificial Intelligence

  ],
  [
    Ho Chi Minh City, Vietnam

    2021 – 2025

  ],
  degree-column: [
    
  ],
)

== Languages

#strong[Vietnamese:] Native

#strong[English:] Professional working proficiency
