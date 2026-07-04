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
    day: 4,
  ),
)


= Tran Quoc Truong

  #headline([Applied AI Backend Engineer | Agent Evaluation & RAG Systems])

#connections(
  [#connection-with-icon("location-dot")[Ho Chi Minh City, Vietnam]],
  [#link("mailto:tranquoctruong20@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[tranquoctruong20\@gmail.com]]],
  [#link("https://truong51972.github.io/about-me/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[truong51972.github.io\/about-me]]],
  [#link("https://linkedin.com/in/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[truong51972]]],
  [#link("https://github.com/truong51972", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[truong51972]]],
)


== Summary

Applied AI Backend Engineer focused on building AI agent workflows, RAG systems, and agent evaluation platforms using Python, Django\/DRF, FastAPI, async workers, and vector databases.

Built ATA, an AI-native validation and audit platform for agentic systems, combining traceable model-provider capture, LLM evaluation, quality gates, and production-oriented backend workflows.

== Experience

#regular-entry(
  [
    #strong[FPT Software], Automation Tester & Applied AI Engineer

    - Built applied AI workflows for document understanding, RAG Q&A, test-case generation, duplicate bug detection, traceability, and change impact analysis.

    - Designed Python backend orchestration with Django\/DRF, FastAPI, Redis\/Celery, PostgreSQL, async workers, service layers, and clear domain boundaries.

    - Developed LLM evaluation, RAG validation, and agent-quality patterns using judge\/critic\/meta-judge workflows, evidence capture, and regression-oriented reporting.

    - Applied banking QA domain experience to AI quality systems, preserving auditability, transaction integrity, and blocker-based validation in backend workflows.

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
    #strong[Omni-Agent — Django\/DRF AI Agent Hub for Knowledge Builder & Agent Testing]

    #summary[A Django\/DRF-based AI Agent Hub where the main backend owns product logic, domain state, and APIs, while stateless workers execute technical AI tasks.]

    - Architected the main Django\/DRF backend, managing domain logic, job lifecycles, and artifact metadata for project-centric AI agent products.

    - Built Knowledge Builder module, supporting versioned document workflows, OCR\/chunking pipelines, and traceable RAG foundations with S3-compatible artifacts.

    - Orchestrated external workers and REST services as stateless executors for OCR, embedding, and retrieval, persisting domain results in Django.

    - Prototyped React\/Vite console workflows for project navigation, document workspace review, and processing status visibility.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[ATA — Agent Test Agent]

    #summary[Independent validation and audit layer for AI agent systems that scores records across 10 dimensions to produce deployment-ready quality verdicts.]

    - Built an end-to-end MVP with a FastAPI control plane, LiteLLM capture gateway, Celery validation worker, and React\/Vite dashboard.

    - Engineered a multi-agent validator (Planner\/Judge\/Critic\/Meta Judge) that scores 10 dimensions including context, tool-calling, security, and business outcome.

    - Designed a Workflow Quality Gate using P10\/P35\/P50 metrics and blocker dimensions to prevent low-tail anomalies from being hidden by averages.

    - Enforced fail-closed credential security with ATA-prefixed recording keys and request-local provider secrets.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[APIT — Agent Programmatic Integration Testing]

    #summary[An LLM-based system that analyzes API documentation and generates structured API test cases.]

    - Built the core AI agent for API document understanding, structured test-case generation, and automated output evaluation.

    - Evaluated LoRA and QLoRA approaches for domain-specific structured test document generation.

    - Fine-tuned Qwen-2.5-3B, achieving macro-F1 0.655 and outperforming Llama-3.2-3B by 41.5\% in the evaluation setup.

    - Implemented FastAPI-based model evaluation workflows and LLM-as-a-Judge experiments for generated output comparison.

  ],
  [
  ],
)

== Skills

#strong[Applied AI & Agent Evaluation:] RAG, Hybrid RAG, LangGraph, LangChain, LiteLLM, Langfuse, LLM Evaluation, LLM-as-a-Judge, eval datasets, judge\/critic\/meta-judge patterns

#strong[Backend & Systems:] Python, Django\/DRF, FastAPI, PostgreSQL, Redis\/Celery, Docker, REST APIs, async workers, service layers, domain modeling

#strong[Agent Evaluation & AI Quality:] Agent testing, AI quality gates, evidence capture, API validation, SQL validation, regression analysis

#strong[Frontend Prototyping:] React, Vite, Tailwind CSS, internal dashboard UI, AI-assisted development

#strong[Domain Knowledge:] Core Banking, Payment Hub, E-Commerce, QA Automation

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
