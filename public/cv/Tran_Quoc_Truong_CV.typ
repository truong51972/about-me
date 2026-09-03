// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Tran Quoc Truong",
  title: "Tran Quoc Truong - CV",
  footer: context { [#emph[Tran Quoc Truong -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Sept 2026] ],
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
  header-space-below-name: 0.25cm,
  header-space-below-headline: 0.25cm,
  header-space-below-connections: 0.25cm,
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
    month: 9,
    day: 3,
  ),
)


= Tran Quoc Truong

  #headline([Applied AI Engineer | LLM Systems, Agent Evaluation & RAG])

#connections(
  [#connection-with-icon("location-dot")[Ho Chi Minh City, Vietnam]],
  [#link("mailto:tranquoctruong20@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[tranquoctruong20\@gmail.com]]],
  [#link("https://truong51972.github.io/about-me/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[truong51972.github.io\/about-me]]],
  [#link("https://linkedin.com/in/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[truong51972]]],
  [#link("https://github.com/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[truong51972]]],
)


== Summary

Applied AI Engineer with \~2 years of experience designing and deploying production LLM systems, hybrid retrieval architectures, and autonomous agent workflows. Combines formal AI training (B.S. in AI, M.S. candidate in Software Engineering) with robust Python systems engineering (FastAPI, Django, Celery, PostgreSQL).

Proven expertise in building deterministic AI evaluation gates, production RAG pipelines with Qdrant and Docling, and fine-tuning open-source LLMs (LoRA\/QLoRA) to deliver reliable, verifiable AI-enabled software products.

== Technical Skills

#strong[Applied AI & Agentic Systems:] Multi-Agent Systems, Agent Evaluation, MCP (Model Context Protocol), RAG & Hybrid Retrieval, Knowledge Graphs, Code Intelligence, LiteLLM Gateway, LangChain, LangGraph, Docling, Qdrant, Langfuse

#strong[Machine Learning & LLM Evaluation:] LLM-as-a-Judge, Runtime Trace Interception, Deterministic Quality Gates, LoRA\/QLoRA Fine-tuning, Synthetic Data Generation, Model Benchmarking, PyTorch, Hugging Face, OpenCV, YOLOv8

#strong[AI Systems & Backend Architecture:] Python, FastAPI, Django\/DRF, Pydantic, SQLAlchemy, Celery, Redis, PostgreSQL, RESTful APIs, Asynchronous Workflows, Idempotent Processing

#strong[Platform, Infrastructure & Tooling:] Docker, Docker Compose, Nginx Ingress, S3\/MinIO Lineage, OpenTelemetry (OTel), Git, CI\/CD, Linux

== Experience

#regular-entry(
  [
    #strong[FPT Software], Applied AI Engineer & Automation Tester

    - Architected backend retrieval and code-intelligence components for IQP, an enterprise Quality Engineering platform serving multi-repository codebases.

    - Built hybrid retrieval pipelines combining semantic vector search, BM25 lexical signals, and Code Graphs, exposing contextual tools to AI clients via Model Context Protocol (MCP).

    - Developed AI-assisted quality workflows for requirement analysis, test-case generation, and defect impact assessment using LLM-as-a-Judge evaluators.

    - Engineered reusable cross-platform test automation and 1,500+ lines of SQL validation across banking and payment systems, cutting manual regression effort by \~70\%.

  ],
  [
    Ho Chi Minh City, Vietnam

    Dec 2024 – present

    

    1 year 10 months

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
    #strong[2nd Place — IVS Hackathon 2026]

    #summary[Awarded 2nd place for independently architecting an end-to-end AI Agent Verification engine (Agent Assurance) featuring runtime trace interception, multi-stage LLM evaluation, and deterministic blockers; subsequently integrated into Omni-Agent.]

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
    #strong[Omni-Agent — Applied AI & Agent Evaluation Platform]

    #summary[A project-centric platform unifying versioned document knowledge, hybrid\/graph retrieval, and automated agent verification across a distributed control plane.]

    - Built Knowledge Builder with Docling OCR, layout parsing, snapshot text chunking, and multi-vector indexing in Qdrant with S3-compatible artifact lineage.

    - Architected Agent Assurance: intercepted LLM runtime traces via LiteLLM gateway and OpenTelemetry metadata (`requester_metadata`), enforcing idempotency on `(capture_context, trace_id, span_id)`.

    - Implemented multi-stage evaluation pipelines (Planner, Judge, Critic, Meta-Judge) with deterministic quality gates and percentile scoring thresholds.

    - Engineered a modular monorepo with a Django\/DRF control plane for identity and permissions, backed by stateless Celery workers for heavy async processing.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[APIT — Agent Programmatic Intelligence Testing]

    #summary[AI-assisted API testing framework generating structured test scenarios from API documentation via fine-tuned LLMs.]

    - Developed a bilingual synthetic dataset generation pipeline producing 1,258 domain-specific API testing samples.

    - Fine-tuned Qwen2.5-3B with LoRA\/QLoRA, achieving macro-F1 of 0.655 (+41.5\% relative improvement over Llama-3.2-3B baseline).

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
