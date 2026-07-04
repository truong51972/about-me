# Tran Quoc Truong's CV

- Email: [tranquoctruong20@gmail.com](mailto:tranquoctruong20@gmail.com)
- Location: Ho Chi Minh City, Vietnam
- Website: [truong51972.github.ioabout-me](https://truong51972.github.io/about-me/)
- LinkedIn: [truong51972](https://linkedin.com/in/truong51972)
- GitHub: [truong51972](https://github.com/truong51972)


# Summary
Applied AI Backend Engineer focused on building AI agent workflows, RAG systems, and agent evaluation platforms using Python, Django/DRF, FastAPI, async workers, and vector databases.

Built ATA, an AI-native validation and audit platform for agentic systems, combining traceable model-provider capture, LLM evaluation, quality gates, and production-oriented backend workflows.

# Experience
## **FPT Software**, Automation Tester & Applied AI Engineer

Ho Chi Minh City, Vietnam

Dec 2024 – present



1 year 8 months

- Built applied AI workflows for document understanding, RAG Q&A, test-case generation, duplicate bug detection, traceability, and change impact analysis.

- Designed Python backend orchestration with Django/DRF, FastAPI, Redis/Celery, PostgreSQL, async workers, service layers, and clear domain boundaries.

- Developed LLM evaluation, RAG validation, and agent-quality patterns using judge/critic/meta-judge workflows, evidence capture, and regression-oriented reporting.

- Applied banking QA domain experience to AI quality systems, preserving auditability, transaction integrity, and blocker-based validation in backend workflows.



## **FPT Software Academy**, Full-Stack Developer Intern

Ho Chi Minh City, Vietnam

Sept 2024 – Dec 2024



4 months

- Built Django-based web applications and deployed containerized services with Docker.

- Improved deployment reliability through production-oriented configuration and Cloudflare integration.

- Reduced deployment cycle time by approximately 50% through cleaner containerized delivery workflows.



# Projects
## **Omni-Agent — Django/DRF AI Agent Hub for Knowledge Builder & Agent Testing**

A Django/DRF-based AI Agent Hub where the main backend owns product logic, domain state, workflow rules, jobs, artifacts, and APIs, while stateless workers and services execute technical AI tasks.

- Designed Omni-Agent as the main Django/DRF backend for project-centric AI agent products, owning domain logic, permissions, workflow state, job lifecycle, artifact metadata, and product module boundaries.

- Built Knowledge Builder as the first product module, supporting versioned document workflows, OCR/chunking pipelines, S3-compatible artifacts, presigned preview/download URLs, and traceable RAG foundations.

- Modeled external workers and REST services as stateless executors for technical tasks such as OCR, document parsing, chunking, embedding, retrieval, and evaluation, with Django persisting domain results.

- Positioned ATA as a completed standalone validation platform that can become Omni-Agent's Agent Testing and Audit module for evaluating RAG and LLM-agent workflows.

- Prototyped React/Vite console workflows for project navigation, product switching, document workspace review, version selection, preview tabs, and processing status visibility.



## **ATA — Agent Test Agent**

Independent validation and audit layer for AI agent systems that captures model-provider interactions, scores records across 10 dimensions, and produces PASS/WARN/FAIL/BLOCK workflow verdicts.

- Built a completed standalone MVP with a FastAPI control plane, LiteLLM capture gateway, Celery validation worker, and React/Vite dashboard.

- Used shared SQLAlchemy ORM, domain contracts, PostgreSQL, and Redis to keep API, gateway, worker, and dashboard state consistent across services.

- Implemented a Planner/Judge/Critic/Meta Judge validator that scores records across context, tools, reasoning, security, compliance, operations, human validation, and business outcome dimensions.

- Designed a distribution-based Workflow Quality Gate using P10/P35/P50, mean, deviation, and blocker dimensions to prevent weak low-tail records from being hidden by averages.

- Enforced fail-closed credential handling with ATA-prefixed recording keys and request-local provider secrets that are never persisted to Redis, PostgreSQL, logs, or UI state.



## **APIT — Agent Programmatic Integration Testing**

An LLM-based system that analyzes API documentation and generates structured API test cases.

- Built the core AI agent for API document understanding, structured test-case generation, and automated output evaluation.

- Evaluated LoRA and QLoRA approaches for domain-specific structured test document generation.

- Fine-tuned Qwen-2.5-3B, achieving macro-F1 0.655 and outperforming Llama-3.2-3B by 41.5% in the evaluation setup.

- Implemented FastAPI-based model evaluation workflows and LLM-as-a-Judge experiments for generated output comparison.



# Skills
**Applied AI & Agent Evaluation:** RAG, Hybrid RAG, LangGraph, LangChain, LiteLLM, Langfuse, LLM Evaluation, LLM-as-a-Judge, eval datasets, judge/critic/meta-judge patterns

**Backend & Systems:** Python, Django/DRF, FastAPI, PostgreSQL, Redis/Celery, Docker, REST APIs, async workers, service layers, domain modeling

**Agent Evaluation & AI Quality:** Agent testing, AI quality gates, evidence capture, API validation, SQL validation, regression analysis, Core Banking, Payment Hub

**Frontend Prototyping:** React, Vite, Tailwind CSS, internal dashboard UI, AI-assisted development

# Education
## **FPT School of Business & Technology**, Master of Software Engineering in AI




Ho Chi Minh City, Vietnam


May 2026 – present



## **FPT University**, Bachelor of Artificial Intelligence




Ho Chi Minh City, Vietnam


2021 – 2025



# Languages
**Vietnamese:** Native

**English:** Working proficiency
