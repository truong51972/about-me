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
    day: 5,
  ),
)


= Tran Quoc Truong

  #headline([Applied AI Engineer | QA Automation & AI Evaluation])

#connections(
  [#connection-with-icon("location-dot")[Ho Chi Minh City, Vietnam]],
  [#link("mailto:tranquoctruong20@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[tranquoctruong20\@gmail.com]]],
  [#link("https://truong51972.github.io/about-me/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[truong51972.github.io\/about-me]]],
  [#link("https://linkedin.com/in/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[truong51972]]],
  [#link("https://github.com/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[truong51972]]],
)


== Summary

Applied AI Engineer with a QA automation and Python backend background, building RAG, document-intelligence, and LLM\/agent evaluation systems.

Delivered AI-assisted QA workflows that increased test coverage by approximately 40\% and reduced manual analysis effort by up to 70\%, with an emphasis on traceable, testable, and reliable AI systems.

== Experience

#regular-entry(
  [
    #strong[FPT Software], Automation Tester

    - Built AI-assisted QA workflows for document analysis, test-case generation, duplicate-defect detection, and change-impact analysis, increasing test coverage by approximately 40\% and reducing manual analysis effort by up to 70\% across banking projects.

    - Designed Django\/DRF and FastAPI services with PostgreSQL, Redis\/Celery, and asynchronous workers, separating domain state from long-running AI processing.

    - Developed LLM evaluation and RAG validation pipelines with evidence capture, quality gates, and regression reporting to identify inconsistent or low-confidence outputs.

    - Built and presented technical demonstrations that contributed to approximately 20 person-months of follow-on delivery work.

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

    - Built Django-based web applications and containerized services with Docker.

    - Standardized deployment configuration and Cloudflare integration, reducing deployment cycle time by approximately 50\%.

  ],
  [
    Ho Chi Minh City, Vietnam

    Sept 2024 – Dec 2024

    

    4 months

  ],
)

== Selected Projects

#regular-entry(
  [
    #strong[Omni-Agent — AI Agent Hub]

    #summary[Independent AI platform for versioned document knowledge workflows and agent evaluation, coordinated through a Django\/DRF control plane.]

    - Designed a project-centric Django\/DRF control plane for permissions, document state, job lifecycles, workflow rules, APIs, and artifact lineage.

    - Implemented versioned document ingestion, OCR, chunking, and traceable RAG workflows using PostgreSQL and S3-compatible object storage.

    - Integrated stateless processing workers while keeping domain state and lifecycle decisions within the main backend.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[Core Banking & Payment Hub QA Automation]

    #summary[Client delivery work at FPT Software covering omnichannel core banking and financial transaction integrations across API, database, regression, and automation testing.]

    - Built and demonstrated an omnichannel automation proof of concept across Web, iOS, and Android, contributing to approximately 20 person-months of follow-on delivery work.

    - Validated end-to-end financial transaction flows through API testing, SQL-based database verification, regression testing, and stress testing.

    - Authored more than 1,500 lines of reusable SQL validation queries and maintained coverage across all in-scope API endpoints.

    - Reduced manual QA effort by approximately 70\% through reusable automation and transaction-validation workflows.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[ATA — AI Agent Evaluation Platform]

    #summary[Hackathon MVP for independently validating captured AI-agent runs and producing auditable quality verdicts; its evaluation design later informed Omni-Agent's Agent Testing module.]

    - Built an end-to-end evaluation platform with a FastAPI control plane, LiteLLM capture gateway, Celery workers, and React\/Vite dashboard.

    - Designed a multi-stage evaluator using Planner, Judge, Critic, and Meta-Judge roles to assess context use, tool calling, security, and business outcomes.

    - Implemented percentile-based quality gates using P10\/P35\/P50 metrics and blocker dimensions to expose low-tail failures, together with fail-closed isolation of provider credentials.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[APIT — LLM-Based API Test Generation]

    #summary[Graduation project that analyzes API documentation and generates structured API test cases with LLMs.]

    - Built an AI workflow for API-document understanding, structured test-case generation, and automated output evaluation.

    - Evaluated LoRA and QLoRA approaches and fine-tuned Qwen2.5-3B, achieving macro-F1 0.655, a 41.5\% relative improvement over a Llama-3.2-3B baseline in the same evaluation setup.

    - Implemented FastAPI-based evaluation workflows and LLM-as-a-Judge experiments for comparing generated outputs.

  ],
  [
  ],
)

== Technical Skills

#strong[Applied AI & Evaluation:] RAG, Hybrid Retrieval, Agentic Workflows, LLM Evaluation, LLM-as-a-Judge, Evaluation Datasets, Judge\/Critic\/Meta-Judge Patterns, LoRA\/QLoRA

#strong[AI Tooling & Observability:] LangGraph, LangChain, LiteLLM, Langfuse, Qdrant, Docling, OCR and Document Processing

#strong[Backend & API Engineering:] Python, Django\/DRF, FastAPI, REST APIs, OpenAPI, Asynchronous Workers, Service Layers, Domain Modeling, Job Lifecycle Management

#strong[Data, Storage & Infrastructure:] PostgreSQL, Redis, Celery, S3\/MinIO, Docker, Docker Compose, Nginx, Cloudflare, Presigned URLs

#strong[Quality Engineering & Domain:] API Validation, SQL Validation, Regression Testing, Test Automation, CI\/CD, Git, Core Banking, Payment Hub, E-Commerce

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
