# Tran Quoc Truong's CV

- Email: [tranquoctruong20@gmail.com](mailto:tranquoctruong20@gmail.com)
- Location: Ho Chi Minh City, Vietnam
- Website: [truong51972.github.ioabout-me](https://truong51972.github.io/about-me/)
- LinkedIn: [truong51972](https://linkedin.com/in/truong51972)
- GitHub: [truong51972](https://github.com/truong51972)


# Summary
Applied AI Engineer with ~2 years of experience designing and deploying production LLM systems, hybrid retrieval architectures, and autonomous agent workflows. Combines formal AI training (B.S. in AI, M.S. candidate in Software Engineering) with robust Python systems engineering (FastAPI, Django, Celery, PostgreSQL).

Proven expertise in building deterministic AI evaluation gates, production RAG pipelines with Qdrant and Docling, and fine-tuning open-source LLMs (LoRA/QLoRA) to deliver reliable, verifiable AI-enabled software products.

# Technical Skills
**Applied AI & Agentic Systems:** Multi-Agent Systems, Agent Evaluation, MCP (Model Context Protocol), RAG & Hybrid Retrieval, Knowledge Graphs, Code Intelligence, LiteLLM Gateway, LangChain, LangGraph, Docling, Qdrant, Langfuse

**Machine Learning & LLM Evaluation:** LLM-as-a-Judge, Runtime Trace Interception, Deterministic Quality Gates, LoRA/QLoRA Fine-tuning, Synthetic Data Generation, Model Benchmarking, PyTorch, Hugging Face, OpenCV, YOLOv8

**AI Systems & Backend Architecture:** Python, FastAPI, Django/DRF, Pydantic, SQLAlchemy, Celery, Redis, PostgreSQL, RESTful APIs, Asynchronous Workflows, Idempotent Processing

**Platform, Infrastructure & Tooling:** Docker, Docker Compose, Nginx Ingress, S3/MinIO Lineage, OpenTelemetry (OTel), Git, CI/CD, Linux

# Experience
## **FPT Software**, Applied AI Engineer & Automation Tester

Ho Chi Minh City, Vietnam

Dec 2024 – present



1 year 10 months

- Architected backend retrieval and code-intelligence components for IQP, an enterprise Quality Engineering platform serving multi-repository codebases.

- Built hybrid retrieval pipelines combining semantic vector search, BM25 lexical signals, and Code Graphs, exposing contextual tools to AI clients via Model Context Protocol (MCP).

- Developed AI-assisted quality workflows for requirement analysis, test-case generation, and defect impact assessment using LLM-as-a-Judge evaluators.

- Engineered reusable cross-platform test automation and 1,500+ lines of SQL validation across banking and payment systems, cutting manual regression effort by ~70%.



## **FPT Software Academy**, Full-Stack Developer Intern

Ho Chi Minh City, Vietnam

Sept 2024 – Dec 2024



4 months

- Built the core backend for an online learning and assessment platform using Django with role-based access control and automated exam workflows.

- Integrated a separate FastAPI computer-vision service for AI-assisted real-time exam proctoring and face detection.

- Containerized and deployed the multi-service architecture using Docker Compose, Nginx reverse proxy, and Cloudflare Tunnel.



# Achievements
## **2nd Place — IVS Hackathon 2026**

Aug 2026

Awarded 2nd place for independently architecting an end-to-end AI Agent Verification engine (Agent Assurance) featuring runtime trace interception, multi-stage LLM evaluation, and deterministic blockers; subsequently integrated into Omni-Agent.



## **Second Prize — Autonomous Driving Research Paper Competition**

Apr 2024

Co-authored research combining YOLOv8 perception, lane segmentation, and PID steering control in Unity simulation, completing the autonomous benchmark in 125.8 seconds with a perfect 100% score.



# Featured Projects
## **Omni-Agent — Applied AI & Agent Evaluation Platform**

A project-centric platform unifying versioned document knowledge, hybrid/graph retrieval, and automated agent verification across a distributed control plane.

- Built Knowledge Builder with Docling OCR, layout parsing, snapshot text chunking, and multi-vector indexing in Qdrant with S3-compatible artifact lineage.

- Architected Agent Assurance: intercepted LLM runtime traces via LiteLLM gateway and OpenTelemetry metadata (`requester_metadata`), enforcing idempotency on `(capture_context, trace_id, span_id)`.

- Implemented multi-stage evaluation pipelines (Planner, Judge, Critic, Meta-Judge) with deterministic quality gates and percentile scoring thresholds.

- Engineered a modular monorepo with a Django/DRF control plane for identity and permissions, backed by stateless Celery workers for heavy async processing.



## **APIT — Agent Programmatic Intelligence Testing**

AI-assisted API testing framework generating structured test scenarios from API documentation via fine-tuned LLMs.

- Developed a bilingual synthetic dataset generation pipeline producing 1,258 domain-specific API testing samples.

- Fine-tuned Qwen2.5-3B with LoRA/QLoRA, achieving macro-F1 of 0.655 (+41.5% relative improvement over Llama-3.2-3B baseline).

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



# Languages
**Vietnamese:** Native

**English:** Professional working proficiency
