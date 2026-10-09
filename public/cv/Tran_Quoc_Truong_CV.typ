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
  page-show-top-note: false,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 79, 144),
  colors-headline: rgb(0, 79, 144),
  colors-connections: rgb(0, 79, 144),
  colors-section-titles: rgb(0, 79, 144),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.58em,
  typography-alignment: "left",
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
    day: 9,
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

Applied AI Engineer focused on translating business and operational challenges into practical, reliable AI solutions.

Combines solution architecture and hands-on engineering to address enterprise knowledge access, intelligent automation, and AI agent reliability, with end-to-end ownership from problem framing and architectural decisions to delivery and quality validation.

== Technical Skills

#strong[AI & Agentic Systems:] RAG, Hybrid Retrieval, LangGraph, MCP (Model Context Protocol), Tool Calling, LiteLLM, Qdrant, Docling

#strong[ML, Fine-Tuning & Model Serving:] PyTorch, Hugging Face Transformers, PEFT, Unsloth, LoRA\/QLoRA, vLLM, Synthetic Data Generation

#strong[LLM Evaluation & Reliability:] OpenTelemetry, Runtime Trace Reconstruction, LLM-as-a-Judge, Quality Gates, Guardrails, Langfuse

#strong[Backend Engineering:] Python, FastAPI, Django\/DRF, Pydantic, SQLAlchemy, PostgreSQL, Redis, Celery, SSE \/ Streaming APIs

#strong[Test Automation & Quality Engineering:] Playwright, Cypress, Katalon Studio, Postman, API Testing, Regression Testing, SQL Validation

#strong[Infrastructure & Delivery:] Docker, Docker Compose, RunPod, Nginx, MinIO, CI\/CD, Linux

== Experience

#regular-entry(
  [
    #strong[FPT Software], Applied AI Engineer & Automation Tester (IVS)

    - IQP (Code Intelligence): Designed multi-repository code intelligence combining semantic, lexical, and code-graph retrieval to provide traceable implementation and test context through MCP-enabled AI workflows.

    - Agent Assurance: Architected trace-based evaluation that reconstructs agent execution evidence against versioned requirements, supporting auditable regression analysis and governed quality-gate decisions.

    - Banking Automation: Reduced manual regression effort by \~70\% across banking and payment workflows using reusable API, database, and cross-platform automation with SQL-based transaction validation.

  ],
  [
    Ho Chi Minh City, Vietnam

    Dec 2024 – present

    

    1 year 11 months

  ],
)

#regular-entry(
  [
    #strong[FPT Software], Full-Stack Developer Intern (FSA)

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

    #summary[Golden Solution Prize at FPT Software's IVS Solution Day for Flezi Polaris (Agent Assurance), focused on evidence-backed AI evaluation and quality verification.]

  ],
  [
    Sept 2026

  ],
)

#regular-entry(
  [
    #strong[2nd Runner-up (3rd Place) — IVS Hackathon 2026]

    #summary[2nd Runner-up (3rd place) at FPT Software's IVS Hackathon for independently architecting the Agent Assurance engine later integrated into Omni-Agent.]

  ],
  [
    Aug 2026

  ],
)

#regular-entry(
  [
    #strong[Second Prize — Autonomous Driving Research Paper Competition]

    #summary[Second Prize for sole-authored autonomous-driving research combining YOLOv8 perception, lane segmentation, and PID control.]

  ],
  [
    Apr 2024

  ],
)

== Featured Projects

#regular-entry(
  [
    #strong[Omni-Agent — Applied AI Platform (Knowledge Builder & Agent Assurance)]

    #summary[Independently designed and built a pre-production Applied AI platform for versioned document knowledge, grounded agent workflows, and auditable agent evaluation.]

    - Solution Architecture: Defined project-scoped service boundaries, a Django\/DRF control plane, and asynchronous processing contracts to connect knowledge and assurance workflows.

    - Knowledge Builder: Implemented Docling parsing\/OCR, versioned chunking, Qdrant retrieval, MCP knowledge access, and LangGraph-based citation-grounded chat.

    - Reliability: Integrated Agent Assurance evidence capture and quality gates, with idempotent trace ingestion and PostgreSQL\/S3-compatible artifact persistence.

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

    - Built filtered semantic product retrieval with Milvus and conversational consultation through LangGraph\/LangChain.

    - Delivered a Docker-based prototype integrating FastAPI, PostgreSQL, Redis, and vector search.

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
