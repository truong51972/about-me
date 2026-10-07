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
    day: 7,
  ),
)


= Tran Quoc Truong

  #headline([Product Engineer · Applied AI · Backend Systems])

#connections(
  [#connection-with-icon("location-dot")[Ho Chi Minh City, Vietnam]],
  [#link("mailto:tranquoctruong20@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[tranquoctruong20\@gmail.com]]],
  [#link("https://portfolio.truong51972.id.vn/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[portfolio.truong51972.id.vn]]],
  [#link("https://linkedin.com/in/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[truong51972]]],
  [#link("https://github.com/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[truong51972]]],
)


== Summary

Product Engineer & Applied AI Engineer translating real business and operational problems into reliable AI systems.

Designs end-to-end solutions across agentic workflows, retrieval, model adaptation, backend architecture, and evaluation, with hands-on ownership from system design through delivery.

== Technical Skills

#strong[AI & Agentic Systems:] RAG, Hybrid Retrieval, LangGraph, MCP (Model Context Protocol), Tool Calling, LiteLLM, Qdrant, Docling

#strong[ML, Fine-Tuning & Model Serving:] PyTorch, Hugging Face Transformers, PEFT, Unsloth, LoRA\/QLoRA, vLLM, Synthetic Data Generation

#strong[LLM Evaluation & Observability:] OpenTelemetry (OTel), Runtime Trace Reconstruction, LLM-as-a-Judge, Regression Testing, Deterministic Quality Gates, Langfuse

#strong[Backend Engineering:] Python, FastAPI, Django\/DRF, Pydantic, SQLAlchemy, PostgreSQL, Redis, Celery, SSE \/ Streaming APIs

#strong[Infrastructure & Delivery:] Docker, Docker Compose, RunPod, Nginx, MinIO, CI\/CD, Linux

== Experience

#regular-entry(
  [
    #strong[FPT Software], Applied AI Engineer & Automation Tester

    - IQP (Code Intelligence & Quality Retrieval): Designed multi-repository code intelligence combining hybrid retrieval, Code Graphs, and MCP to provide traceable engineering context for AI-assisted quality analysis.

    - Agent Assurance: Translated AI reliability requirements into an assurance engine for trace-based behavioral evaluation, reproducible regression, and governed quality gates.

    - Banking Automation & Quality Operations: Engineered reusable cross-platform test automation and 1,500+ lines of SQL validation across banking and payment systems, cutting manual regression effort by \~70\%.

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

    #summary[Golden Solution Prize for Flezi Polaris, an Agent Assurance solution for trace-based AI evaluation and governed quality verification.]

  ],
  [
    Sept 2026

  ],
)

#regular-entry(
  [
    #strong[2nd Place — IVS Hackathon 2026]

    #summary[2nd place for independently architecting the Agent Assurance engine later integrated into Omni-Agent.]

  ],
  [
    Aug 2026

  ],
)

#regular-entry(
  [
    #strong[Second Prize — Autonomous Driving Research Paper Competition]

    #summary[Second Prize for independently authored autonomous-driving research combining YOLOv8 perception, lane segmentation, and PID control.]

  ],
  [
    Apr 2024

  ],
)

== Featured Projects

#regular-entry(
  [
    #strong[Omni-Agent — Applied AI Platform (Knowledge Builder & Agent Assurance)]

    #summary[An Applied AI platform engineered from real operational needs, unifying versioned document RAG, LangGraph multi-agent orchestration, and integrated agent verification within a modular multi-service architecture.]

    - Platform Architecture: Engineered a modular monorepo featuring a Django\/DRF control plane for project tenancy, identity, and permissions, backed by decoupled, stateless Celery workers for asynchronous processing workloads.

    - Knowledge Builder: Built document processing pipeline with Docling layout parsing\/OCR, snapshot chunking, Qdrant vector indexing, a Streamable HTTP MCP tool server, and a LangGraph-based multi-agent runtime with citation-grounded RAG.

    - Agent Assurance Integration: Integrated execution evidence, regression evaluation, and governed quality gates as a native platform capability.

    - Reliability & Data Integrity: Designed idempotent evidence ingestion keyed by trace\/span identity, with PostgreSQL-backed execution metadata and S3-compatible artifact storage.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[APIT — Agent Programmatic Integration Testing]

    #summary[AI-assisted API testing framework generating structured test scenarios from API documentation via fine-tuned LLMs.]

    - Developed a bilingual synthetic dataset generation pipeline producing 1,258 domain-specific API testing samples.

    - Fine-tuned Qwen2.5-3B with LoRA\/QLoRA, achieving macro-F1 of 0.655 (+41.5\% relative improvement over Llama-3.2-3B baseline).

    - Deployed the fine-tuned model on RunPod through an OpenAI-compatible vLLM service with quantized inference and runtime LoRA adapters.

    - Implemented a hybrid evaluation pipeline combining LLM-as-a-Judge, fuzzy matching, and deterministic JSON-schema validation.

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
