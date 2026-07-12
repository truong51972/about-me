// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Tran Quoc Truong",
  title: "Tran Quoc Truong - CV",
  footer: context { [#emph[Tran Quoc Truong -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in July 2026] ],
  locale-catalog-language: "en",
  text-direction: ltr,
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
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
  typography-line-spacing: 0.6em,
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
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: true,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_partial_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.3em,
  sections-space-between-regular-entries: 1.2em,
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
  entries-highlights-space-above: 0cm,
  entries-highlights-space-between-items: 0cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 7,
    day: 12,
  ),
)


= Tran Quoc Truong

  #headline([Product Engineer | Backend Systems & Applied AI])

#connections(
  [#connection-with-icon("location-dot")[Ho Chi Minh City, Vietnam]],
  [#link("mailto:tranquoctruong20@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[tranquoctruong20\@gmail.com]]],
  [#link("https://truong51972.github.io/about-me/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[truong51972.github.io\/about-me]]],
  [#link("https://linkedin.com/in/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[truong51972]]],
  [#link("https://github.com/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[truong51972]]],
)


== Summary

Backend-focused Product Engineer building Python services and applied AI systems for document intelligence, retrieval, code intelligence, and agent evaluation.

My quality engineering background strengthens how I design clear domain boundaries, reliable asynchronous workflows, and verifiable AI-enabled products.

== Experience

#regular-entry(
  [
    #strong[FPT Software], Automation Tester (Applied AI & Backend Engineering)

    - Designed backend, retrieval, and code-intelligence components for IQP, an enterprise Quality Engineering platform.

    - Built AI-assisted workflows for document analysis, test-case generation, defect analysis, and change-impact assessment.

    - Developed reusable automation across Web, mobile, API, and database layers for complex banking and payment workflows.

    - Improved testing efficiency through reusable validation assets, automation utilities, and traceable quality workflows.

  ],
  [
    Ho Chi Minh City, Vietnam

    Dec 2024 – present

    

    1 year 8 months

  ],
)

#regular-entry(
  [
    #strong[FPT Software Academy], Full-Stack Developer Intern

    - Built the initial version of a Django learning and assessment platform with structured course, quiz, enrollment, and role-based workflows.

    - Integrated a separate FastAPI face-detection service for AI-assisted exam monitoring.

    - Containerized and deployed the multi-service application using Docker Compose, Nginx, and Cloudflare Tunnel.

  ],
  [
    Ho Chi Minh City, Vietnam

    Sept 2024 – Dec 2024

    

    4 months

  ],
)

== Featured Projects

#regular-entry(
  [
    #strong[Omni-Agent — Applied AI Platform]

    #summary[A project-centric platform for versioned document knowledge, AI workflows, and integrated agent evaluation, built around a shared backend control plane.]

    - Designed a Django\/DRF control plane for projects, permissions, document versions, processing jobs, artifacts, evaluation runs, scorecards, and audit metadata.

    - Built versioned document-ingestion workflows covering source upload, OCR, preview generation, chunking, indexing workflows, committed artifacts, and S3-compatible artifact lineage.

    - Defined service ownership through typed worker contracts, idempotent jobs, and concurrency-safe commits, keeping domain lifecycle decisions in the API while stateless Celery workers handle long-running processing.

    - Integrated Agent Testing into the platform core with runtime trace capture, multi-stage evaluation, deterministic validation, and workflow-level quality gates.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[IQP — Intelligent Quality Platform]

    #summary[An enterprise Quality Engineering platform combining product knowledge, source-code intelligence, and AI-assisted retrieval to support engineering traceability and test analysis.]

    - Designed backend service boundaries for workspace management, graph ingestion and retrieval, code indexing, AI context access, and quality-analysis workflows.

    - Implemented hybrid retrieval combining semantic, lexical, and graph-based signals to provide scoped context for engineering and AI-assisted tools.

    - Developed code-intelligence capabilities for indexing source repositories and linking product concepts with related implementation and test assets.

    - Integrated asynchronous backend services, a React\/TypeScript portal, and MCP-compatible AI clients into a workspace-oriented product workflow.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[Core Banking & Payment Hub QA Automation]

    #summary[Client delivery work covering omnichannel banking and financial transaction integrations across API, database, regression, and automation testing.]

    - Built and demonstrated an omnichannel automation proof of concept across Web, iOS, and Android, contributing to approximately 20 person-months of follow-on delivery work.

    - Validated end-to-end financial transactions through API, SQL-based database, regression, and stress testing, including more than 1,500 lines of reusable SQL validation queries.

    - Reduced manual QA effort by approximately 70\% through reusable automation and transaction-validation workflows.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[APIT — Agent Programmatic Intelligence Testing]

    #summary[A graduation project that analyzes API documentation and generates structured API test cases using LLMs.]

    - Built a FastAPI-based workflow for API-document understanding, structured test-case generation, and automated output evaluation using LLM-as-a-Judge.

    - Evaluated LoRA and QLoRA approaches and fine-tuned Qwen2.5-3B, achieving macro-F1 0.655, a 41.5\% relative improvement over a Llama-3.2-3B baseline in the same evaluation setup.

  ],
  [
  ],
)

== Technical Skills

#strong[Backend Systems & Architecture:] Python, Django\/DRF, FastAPI, Pydantic, SQLAlchemy\/SQLModel, REST APIs, domain modeling, service boundaries, asynchronous orchestration, idempotency, PostgreSQL, Redis, Celery

#strong[Applied AI & Graph Systems:] RAG, hybrid retrieval, document intelligence, Knowledge Graphs, Code Graphs, graph traversal, agentic workflows, MCP, LangChain, LangGraph, LiteLLM, Docling, Qdrant, Langfuse

#strong[Product Interfaces & Delivery:] React, TypeScript, Vite, Docker, Docker Compose, Nginx, CI\/CD, observability, S3\/MinIO, Git

#strong[Quality, Evaluation & ML:] LLM evaluation, agent evaluation, LLM-as-a-Judge, quality gates, PyTorch, LoRA\/QLoRA, model evaluation, API validation, SQL validation, regression testing, test automation

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

#strong[English:] Working proficiency
