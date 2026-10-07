# Tran Quoc Truong's CV

- Email: [tranquoctruong20@gmail.com](mailto:tranquoctruong20@gmail.com)
- Location: Ho Chi Minh City, Vietnam
- Website: [portfolio.truong51972.id.vn](https://portfolio.truong51972.id.vn/)
- LinkedIn: [truong51972](https://linkedin.com/in/truong51972)
- GitHub: [truong51972](https://github.com/truong51972)


# Summary
Product Engineer & Applied AI Engineer building agentic applications, RAG platforms, and backend systems, with a focus on production reliability, observability, and evaluation.

Combines formal AI training with backend architecture experience in control-plane design, domain/service boundaries, and asynchronous task processing. Bridges software engineering and AI through trace reconstruction, runtime observability, and automated evaluation gates.

# Technical Skills
**AI & Agentic Systems:** RAG, Hybrid Retrieval, LangGraph, MCP (Model Context Protocol), Tool Calling, LiteLLM, Qdrant, Docling

**ML, Fine-Tuning & Model Serving:** PyTorch, Hugging Face Transformers, PEFT, Unsloth, LoRA/QLoRA, vLLM, Synthetic Data Generation

**LLM Evaluation & Observability:** OpenTelemetry (OTel), Runtime Trace Reconstruction, LLM-as-a-Judge, Regression Testing, Deterministic Quality Gates, Langfuse

**Backend Engineering:** Python, FastAPI, Django/DRF, Pydantic, SQLAlchemy, PostgreSQL, Redis, Celery, SSE / Streaming APIs

**Infrastructure & Delivery:** Docker, Docker Compose, Kubernetes, Google Cloud Platform (GCP), RunPod, Nginx, MinIO, CI/CD, Linux

# Experience
## **FPT Software**, Applied AI Engineer & Automation Tester

Ho Chi Minh City, Vietnam

Dec 2024 – present



1 year 11 months

- IQP (Code Intelligence & Quality Retrieval): Architected backend retrieval for IQP combining semantic vector search, BM25 lexical signals, and Code Graphs, exposing contextual tools to AI clients via Model Context Protocol (MCP) to automate quality analysis across multi-repository codebases.

- Agent Assurance: Architected an assurance engine for agentic systems with explicit domain boundaries and asynchronous evaluation workflows, capturing LiteLLM/OpenTelemetry traces for multi-turn reconstruction, behavioral evaluation, reproducible regression, and idempotent persistence.

- Banking Automation & Quality Operations: Engineered reusable cross-platform test automation and 1,500+ lines of SQL validation across banking and payment systems, cutting manual regression effort by ~70%.



## **FPT Software Academy**, Full-Stack Developer Intern

Ho Chi Minh City, Vietnam

Sept 2024 – Dec 2024



4 months

- Built the core backend for an online learning and assessment platform using Django with role-based access control and automated exam workflows.

- Integrated a separate FastAPI computer-vision service for AI-assisted real-time exam proctoring and face detection.

- Containerized and deployed the multi-service architecture using Docker Compose, Nginx reverse proxy, and Cloudflare Tunnel.



# Achievements
## **Golden Solution Prize (1st Place) — IVS Solution Day 2.0 2026**

Sept 2026

Awarded the Golden Solution Prize for Flezi Polaris, an Agent Assurance solution focused on AI agent evaluation, trace-based evidence capture, and governed quality verification.



## **2nd Place — IVS Hackathon 2026**

Aug 2026

Awarded 2nd place for independently architecting an end-to-end AI Agent Verification engine (Agent Assurance) featuring runtime evidence capture, trace-based behavioral evaluation, and governed quality gates; subsequently integrated into Omni-Agent.



## **Second Prize — Autonomous Driving Research Paper Competition**

Apr 2024

Co-authored research combining YOLOv8 perception, lane segmentation, and PID steering control in Unity simulation, completing the autonomous benchmark in 125.8 seconds with a perfect 100% score.



# Featured Projects
## **Omni-Agent — Applied AI Platform (Knowledge Builder & Agent Assurance)**

An Applied AI platform engineered from real operational needs, unifying versioned document RAG, LangGraph multi-agent orchestration, and integrated agent verification within a modular multi-service architecture.

- Platform Architecture: Engineered a modular monorepo featuring a Django/DRF control plane for project tenancy, identity, and permissions, backed by decoupled, stateless Celery workers for asynchronous processing workloads.

- Knowledge Builder: Built document processing pipeline with Docling layout parsing/OCR, snapshot chunking, Qdrant vector indexing, a Streamable HTTP MCP tool server, and a LangGraph-based multi-agent runtime with citation-grounded RAG.

- Agent Assurance (IVS Hackathon 2nd Place): Implemented execution evidence capture through LiteLLM and OpenTelemetry, trace reconstruction pipelines to normalize multi-turn trajectories, and deterministic quality gates.

- Reliability & Data Integrity: Designed idempotent evidence ingestion keyed by trace/span identity, with PostgreSQL-backed execution metadata and S3-compatible artifact storage.



## **APIT — Agent Programmatic Integration Testing**

AI-assisted API testing framework generating structured test scenarios from API documentation via fine-tuned LLMs.

- Developed a bilingual synthetic dataset generation pipeline producing 1,258 domain-specific API testing samples.

- Fine-tuned Qwen2.5-3B with LoRA/QLoRA, achieving macro-F1 of 0.655 (+41.5% relative improvement over Llama-3.2-3B baseline).

- Deployed the fine-tuned model on RunPod through an OpenAI-compatible vLLM service with quantized inference and runtime LoRA adapters.

- Implemented a hybrid evaluation pipeline combining LLM-as-a-Judge, fuzzy matching, and deterministic JSON-schema validation.



## **E-Commerce AI Assistant — Conversational RAG & Search**

End-to-end shopping assistant combining filtered vector search and multi-agent conversational retrieval.

- Built product semantic search using Milvus, cosine similarity, embeddings, and dynamic category/price filters.

- Implemented multi-turn conversational agent with LangGraph and LangChain for context-aware product consultation.

- Containerized multi-service architecture with FastAPI, PostgreSQL, Redis, Milvus, and Docker Compose.



# Education
## **FPT School of Business & Technology**, Master of Software Engineering in AI




Ho Chi Minh City, Vietnam


May 2026 – present



## **FPT University**, Bachelor of Artificial Intelligence




Ho Chi Minh City, Vietnam


2021 – 2025


