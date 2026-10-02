# Tran Quoc Truong's CV

- Email: [tranquoctruong20@gmail.com](mailto:tranquoctruong20@gmail.com)
- Location: Ho Chi Minh City, Vietnam
- Website: [portfolio.truong51972.id.vn](https://portfolio.truong51972.id.vn/)
- LinkedIn: [truong51972](https://linkedin.com/in/truong51972)
- GitHub: [truong51972](https://github.com/truong51972)


# Summary
Applied AI Engineer building agentic applications, RAG and retrieval systems, LLM evaluation infrastructure, and Python backend platforms, with a focus on reliability, observability, and practical delivery.

Experience spans enterprise code intelligence, trace-based AI assurance, model fine-tuning and serving, quality engineering, and CI-driven delivery; independently develops Omni-Agent as a modular platform for knowledge, agents, and evaluation.

# Technical Skills
**AI & Agentic Systems:** RAG, Hybrid Retrieval, LangGraph, MCP (Model Context Protocol), Tool Calling, Context Engineering, LiteLLM, Qdrant, pgvector, Docling

**LLM Evaluation & Observability:** LLM Evaluation, LLM-as-a-Judge, OpenTelemetry (OTel), Runtime Trace Reconstruction, Regression Testing, Deterministic Quality Gates, Langfuse

**Backend Engineering:** Python, FastAPI, Django/DRF, Pydantic, SQLAlchemy, PostgreSQL, Redis, Celery, SSE / Streaming APIs, Pytest, SQL, React, TypeScript

**ML, Fine-Tuning & Model Serving:** PyTorch, Hugging Face Transformers, PEFT, Unsloth, LoRA/QLoRA, vLLM, BitsAndBytes Quantization, Synthetic Data Generation

**Infrastructure & Delivery:** Docker, Docker Compose, Kubernetes, Google Cloud Platform, RunPod, Nginx, MinIO, GitLab CI/CD, Azure DevOps Pipelines, Linux

# Experience
## **FPT Software**, Applied AI Engineer

Ho Chi Minh City, Vietnam

Dec 2024 – present

- IQP (Code Intelligence & Retrieval): Built hybrid code retrieval combining dense search, BM25, and code-graph relationships across enterprise repositories, exposing repository-aware engineering context to AI clients through Model Context Protocol (MCP).

- Agent Assurance / Flezi Polaris: Designed and implemented the core trace-based Agent Assurance engine using LiteLLM and OpenTelemetry capture, multi-turn trajectory reconstruction, behavioral evaluation, and reproducible regression gates; the capability was later presented by the Flezi Polaris team and received the Golden Solution Prize (1st place) at IVS Solution Day 2.0 2026.

- Automation & Delivery Engineering: Developed automated validation across API, database, web, and mobile layers and integrated repeatable execution into GitLab and Azure DevOps CI pipelines.

- Banking Systems Verification: Built reusable cross-platform automation and SQL-based validation across banking and payment systems, reducing manual regression effort by approximately 70%; an omnichannel automation proof of concept contributed to approximately 20 person-months of follow-on delivery work.



## **FPT Software Academy**, Full-Stack Developer Intern

Ho Chi Minh City, Vietnam

Sept 2024 – Dec 2024

- Built the backend for an online learning and assessment platform using Django with role-based access control and automated exam workflows.

- Integrated a FastAPI computer-vision service for AI-assisted real-time exam proctoring and face detection.

- Containerized the multi-service architecture with Docker Compose, Nginx, and Cloudflare Tunnel.



# Achievements
## **Golden Solution Prize (1st Place) — IVS Solution Day 2.0 2026**

Sept 2026

Flezi Polaris team solution built around the Agent Assurance capability for trace-based AI-agent evaluation and governed quality verification.



## **2nd Place — IVS Hackathon 2026**

Aug 2026

Designed and implemented the core Agent Assurance engine independently; awarded 2nd place for trace-based behavioral evaluation and governed regression gates.



## **Second Prize — Autonomous Driving Research Paper Competition**

Apr 2024

Co-authored YOLOv8, lane-segmentation, and PID-control research; completed the simulation benchmark in 125.8 seconds with a 100% score.



# Featured Projects
## **Omni-Agent — Applied AI Platform (Knowledge Builder & Agent Assurance)**

A modular Applied AI platform combining versioned document knowledge pipelines, agent runtimes, and agent evaluation within a project-centric multi-service architecture.

- Platform Architecture: Designed a modular multi-service architecture with project-scoped control plane, isolated domain services, asynchronous workers, PostgreSQL, Redis, S3-compatible object storage, and containerized deployment.

- Knowledge Builder: Built a versioned document pipeline covering source ingestion, Docling parsing/OCR, chunking, Qdrant indexing, citation-grounded retrieval, and MCP-based knowledge access.

- Agent Runtime & Integration: Implemented LangGraph-based agent workflows with tool calling, context-aware retrieval, MCP integration, and SSE streaming for multi-turn execution over project knowledge.

- Agent Assurance: Integrated trace-based evidence capture, evaluation, regression, and quality-gating capabilities into the platform.



## **APIT — Agent Programmatic Integration Testing**

AI-assisted API testing framework generating structured test scenarios from API documentation via fine-tuned LLMs.

- Developed a bilingual synthetic dataset generation pipeline producing 1,258 domain-specific API testing samples.

- Fine-tuned Qwen2.5-3B with Unsloth and PEFT LoRA/QLoRA, achieving macro-F1 of 0.655 (+41.5% relative improvement over Llama-3.2-3B baseline).

- Deployed the fine-tuned model on RunPod through an OpenAI-compatible vLLM service with BitsAndBytes quantization and runtime LoRA adapters.

- Integrated pgvector-backed cosine-similarity retrieval and a hybrid evaluation pipeline combining LLM-as-a-Judge, fuzzy matching, and deterministic JSON-schema validation.



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



# Languages
**Vietnamese:** Native

**English:** Professional working proficiency
