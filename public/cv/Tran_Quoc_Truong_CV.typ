// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Tran Quoc Truong",
  title: "Tran Quoc Truong - CV",
  footer: context { [#emph[Tran Quoc Truong -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in June 2026] ],
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
    month: 6,
    day: 17,
  ),
)


= Tran Quoc Truong

  #headline([#strong[Applied AI Engineer] | #strong[Agentic QA] & #strong[RAG] Systems | Python Backend])

#connections(
  [#connection-with-icon("location-dot")[Ho Chi Minh City, Vietnam]],
  [#link("mailto:tranquoctruong20@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[tranquoctruong20\@gmail.com]]],
  [#link("https://truong51972.github.io/about-me/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[truong51972.github.io\/about-me]]],
  [#link("https://linkedin.com/in/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[truong51972]]],
  [#link("https://github.com/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[truong51972]]],
)


== Summary

#strong[Applied AI Engineer] building enterprise #strong[Agentic QA], #strong[RAG], and document-intelligence systems with production-oriented Python backends.

Strong in #strong[Django\/DRF], #strong[FastAPI], #strong[LangGraph], #strong[LangChain], #strong[LiteLLM], #strong[Redis\/Celery], #strong[PostgreSQL], #strong[vector databases], MCP #strong[tool integration], and QA automation.

== Experience

#regular-entry(
  [
    #strong[FPT Software], #strong[Applied AI Engineer] & QA Automation Engineer

    - Built #strong[AI-assisted QA] workflows for document understanding, #strong[RAG] Q&A, #strong[test-case generation], #strong[duplicate bug detection], #strong[traceability], and #strong[change impact analysis].

    - Designed backend orchestration with #strong[Django\/DRF], #strong[FastAPI], #strong[Redis\/Celery], #strong[PostgreSQL], #strong[async workers], #strong[service layers], and clear #strong[domain boundaries].

    - Developed document-processing flows for #strong[OCR]\/preview generation, enhanced #strong[OCR] strategy, version commit, chunk generation, artifact storage, and vector indexing.

    - Delivered API, Web, and Mobile automation solutions that increased test coverage by 40\% and reduced manual testing effort by up to 70\%.

    - Led an omnichannel #strong[Core Banking] automation PoC across Web, iOS, and Android, helping secure a \~20 man-month contract.

    - Executed banking QA work across #strong[Core Banking] and #strong[Payment Hub] domains, including API testing, #strong[SQL validation], regression testing, and stress testing.

  ],
  [
    Ho Chi Minh City, Vietnam

    Dec 2024 – present

    

    1 year 7 months

  ],
)

#regular-entry(
  [
    #strong[FPT Software Academy], Full-Stack Developer Intern

    - Built Django-based web applications and deployed containerized services with Docker.

    - Improved deployment reliability through production-oriented configuration and Cloudflare integration.

    - Reduced deployment cycle time by approximately 50\% through cleaner containerized delivery workflows.

  ],
  [
    Ho Chi Minh City, Vietnam

    Sept 2024 – Dec 2024

    

    4 months

  ],
)

== Projects

#regular-entry(
  [
    #strong[Omni-Agent - Enterprise AI Platform for ]Agentic QA#sym.ast.basic#h(0pt, weak: true) #sym.ast.basic#h(0pt, weak: true) #sym.ast.basic#h(0pt, weak: true) #sym.ast.basic#h(0pt, weak: true)

    #summary[Enterprise AI platform for turning documents, requirements, bugs, and test assets into searchable, traceable, and automatable QA workflows.]

    - Designed a multi-service architecture with #strong[Django\/DRF] as the #strong[control plane], #strong[async workers] as the processing plane, and separate boundaries for #strong[document processing], retrieval, storage, graph analysis, and LLM orchestration.

    - Modeled backend domains for Documents, Document Versions, Processing Artifacts, Chunks, and #strong[Platform Jobs], keeping API endpoints thin and workflow logic in #strong[service layers].

    - Implemented versioned document workflows covering baseline upload, #strong[OCR]\/preview generation, enhanced #strong[OCR] strategy, commit flow, chunk generation, artifact storage, and vector indexing.

    - Integrated #strong[RAG] infrastructure with #strong[vector databases], #strong[LiteLLM] model routing, #strong[MCP wrapper]\/#strong[tool integration], #strong[LangGraph]\/#strong[LangChain] workflows, and observability\/evaluation patterns.

    - Built #strong[Agentic QA] capabilities for document-to-#strong[test-case generation], #strong[RAG] Q&A, #strong[duplicate bug detection], requirement\/test\/defect #strong[traceability], and #strong[change impact analysis].

    - Prototyped #strong[React\/Vite] frontend workflows with #strong[AI-assisted development], including project navigation, document workspace UI, preview tabs, version dropdowns, and processing status views.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[APIT - Agent Programmatic Integration Testing]

    #summary[LLM-based system that analyzes API documentation and generates structured API test cases.]

    - Built the core #strong[AI agent] for API document understanding, structured #strong[test-case generation], and automated output evaluation.

    - Evaluated LoRA and QLoRA approaches for domain-specific structured test document generation.

    - Fine-tuned Qwen-2.5-3B achieved macro-F1 0.655, outperforming Llama-3.2-3B by 41.5\% in the evaluation setup.

    - Implemented #strong[FastAPI]-based model evaluation workflows and #strong[LLM-as-a-Judge] experiments for generated output comparison.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[Eximbank ]Core Banking#strong[ - Omnichannel Automation PoC]

    #summary[Automation PoC for validating end-to-end #strong[Core Banking] workflows across Web, iOS, and Android.]

    - Built cross-platform automation flows with Katalon and Appium for omnichannel regression coverage.

    - Validated critical business journeys consistently across Web, iOS, and Android under one automation strategy.

    - Demonstrated stronger coverage and execution efficiency than competing vendors, helping secure a \~20 man-month contract.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[Sacombank - ]Payment Hub#strong[ Integration Testing]

    #summary[API, database, regression, and stress testing project for financial transaction integrations.]

    - Executed API testing, database testing, regression testing, and stress testing to validate transaction integrity and endpoint reliability.

    - Authored more than 1,500 lines of #strong[SQL validation] queries to verify post-transaction data consistency across payment integration flows.

    - Reduced manual QA effort by 70\% through reusable validation scripts, regression scenarios, and repeatable API\/database checks.

    - Maintained full API endpoint coverage while validating financial operation correctness across integration flows.

  ],
  [
  ],
)

== Skills

#strong[Applied AI, Agents & ]RAG#strong[:] #strong[LangGraph], #strong[LangChain], #strong[MCP wrapper], #strong[RAG], #strong[Hybrid RAG], #strong[LiteLLM], Langfuse, #strong[LLM Evaluation], #strong[LLM-as-a-Judge], LoRA\/QLoRA

#strong[Backend & AI Systems:] Python, #strong[Django\/DRF], #strong[FastAPI], #strong[PostgreSQL], #strong[Redis\/Celery], Docker, REST APIs, #strong[async workers], #strong[service layers], #strong[domain boundaries]

#strong[QA Automation & Banking Domain:] #strong[Agentic QA], #strong[API Testing], Web\/Mobile Automation, Katalon, Appium, Postman, JMeter, #strong[SQL validation], #strong[Core Banking], #strong[Payment Hub]

#strong[Full-stack AI Prototyping:] React, Vite, Tailwind CSS, shadcn\/ui, #strong[AI-assisted development], dashboard UI, document workspace UI

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

    2021 - 2025

  ],
  degree-column: [
    
  ],
)

== Languages

#strong[Vietnamese:] Native

#strong[English:] Working proficiency

#strong[Japanese:] N5 \/ Basic
