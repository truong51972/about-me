export type ProjectGroup =
  | "featured-systems"
  | "applied-ai-systems"
  | "supporting-delivery"
  | "earlier-ai-research";

export type ProjectVisualTier = "flagship" | "featured" | "supporting" | "compact";

export interface ProjectCase {
  slug: string;
  title: string;
  label: string;
  subtitle: string;
  summary: string;
  group: ProjectGroup;
  visualTier: ProjectVisualTier;
  homepageFeatured: boolean;
  period?: string;
  repoUrl?: string;
  docsUrl?: string;
  tags: string[];
  highlights: string[];
  role?: string;
  outcome?: string;
}

export const site = {
  name: "Tran Quoc Truong",
  shortName: "TQT",
  role: "Applied AI Backend Engineer | Agent Evaluation & RAG Systems",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "I design production-oriented Python systems for applied AI, including ATA for agent validation, RAG workflows, evaluation pipelines, and backend orchestration."
};

export const cases: ProjectCase[] = [
  {
    slug: "omni-agent",
    label: "Flagship system",
    title: "Omni-Agent",
    subtitle: "Project-centric AI platform for document intelligence and hybrid RAG + knowledge-graph retrieval",
    summary:
      "A Python monorepo AI platform where a Django/DRF control plane owns domain logic and a fleet of stateless Celery workers handle OCR, chunking, and knowledge-graph analysis. It pairs versioned document processing with hybrid RAG + graph retrieval for evaluation-oriented workflows such as test-case generation, change-impact analysis, and bug intelligence.",
    group: "featured-systems",
    visualTier: "flagship",
    homepageFeatured: true,
    period: "2026-Present",
    role: "Solo architecture and implementation",
    outcome:
      "Designed domain boundaries, a generic PlatformJob control-plane, worker command/result contracts, versioned document workflows, and the hybrid RAG + graph retrieval direction across a multi-app monorepo.",
    tags: [
      "Django/DRF",
      "Celery",
      "Hybrid RAG + Graph",
      "Knowledge Graph / GNN",
      "LangGraph",
      "Docling OCR",
      "Milvus",
      "PostgreSQL",
      "MinIO / S3",
      "React 19 / Vite",
      "Langfuse"
    ],
    highlights: [
      "Architected Omni-Agent as a Python monorepo — a Django/DRF control plane (omni-api), stateless data-plane services for document processing, Docling OCR, and graph analysis, a React console, and shared contract/worker packages — with app-local dependencies and no root-workspace coupling.",
      "Built Knowledge Builder, the first capability: project-scoped versioned document processing with a job-centric pipeline (DocumentVersion lifecycle, Docling OCR, chunking, committed-text snapshots) writing artifacts to S3-compatible storage.",
      "Designed a hybrid RAG + knowledge-graph retrieval layer with a graph-builder pipeline and GNN-oriented quality intelligence — change-impact analysis, duplicate-bug detection, and test-gap analysis — as the core product direction.",
      "Established a generic PlatformJob control-plane for async work keyed by project, job type, and resource, with typed worker command/result envelopes in a shared contracts package and internal/presigned S3 storage boundaries.",
      "Wired a production-style stack — PostgreSQL, Redis, MinIO, Milvus, a LiteLLM + Ollama model gateway, and Langfuse observability — behind a Google-Cloud-Console-like React 19 console (TanStack Query, Tailwind, Sigma graph visualization)."
    ]
  },
  {
    slug: "ata",
    label: "AI validation platform",
    title: "ATA — Agent Test Agent",
    subtitle: "AI-native validation and audit layer for agentic systems",
    summary:
      "A completed standalone validation and audit platform for AI agent systems. ATA sits at the model-provider boundary, captures every agent-model interaction as auditable evidence, then scores it across 10 quality dimensions with a multi-agent judge to produce deployment-ready quality verdicts.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2026",
    role: "Solo architecture and implementation",
    outcome:
      "Built a working end-to-end MVP across API, capture gateway, validation worker, and web dashboard — from record capture to 10-dimension validation and Workflow Quality Gate verdicts.",
    tags: [
      "Agent Evaluation",
      "LLM-as-a-Judge",
      "FastAPI",
      "Celery",
      "LiteLLM Gateway",
      "Redis",
      "PostgreSQL",
      "LangChain",
      "React/Vite",
      "Docker"
    ],
    highlights: [
      "Designed ATA as an independent validation and audit layer that sits at the model-provider boundary (Target Agent System → ATA Gateway → Model Provider), capturing every agent–LLM interaction as auditable evidence without modifying the system under test.",
      "Built a multi-service architecture — FastAPI control plane, LiteLLM capture gateway, Celery validation worker, and a React/Vite operational dashboard — over shared SQLAlchemy ORM and contract packages in a uv-managed monorepo.",
      "Engineered a per-record multi-agent validator (Planner → Judge → Critic → Meta Judge) that scores 10 quality dimensions including context, tool-calling, reasoning, security, compliance, and business outcome.",
      "Implemented a Workflow Quality Gate that turns record-score distributions (P10/P35/P50, mean, deviation) and critical blockers into PASS/WARN/FAIL/BLOCK deployment verdicts under a \"No Average Hiding\" principle.",
      "Enforced security by design: ATA-prefixed recording credentials, a fail-closed gateway, and provider secrets kept request-local — never written to Redis, PostgreSQL, logs, or UI."
    ]
  },
  {
    slug: "apit",
    label: "AI evaluation",
    title: "APIT",
    subtitle: "LLM-based API test-case generation and evaluation",
    summary:
      "An LLM-based system that analyzes API documentation and generates structured API test cases using controlled data synthesis, LoRA fine-tuning, RAG, and automated evaluation.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2025",
    docsUrl: "docs/apit-capstone.pdf",
    role: "System Architect",
    outcome: "Qwen-2.5-3B LoRA reached 0.655 macro-F1 on structured API test generation.",
    tags: ["LLM fine-tuning", "LoRA", "Qwen", "RAG", "API Testing", "Evaluation"],
    highlights: [
      "Built a controlled bilingual synthetic dataset with 1,258 API testing samples.",
      "Compared Qwen and Llama small-model fine-tuning with LoRA/QLoRA-style evaluation workflows.",
      "Evaluated structured outputs with precision, recall, macro-F1, fuzzy matching, and LLM-as-a-Judge experiments."
    ]
  },
  {
    slug: "banking-automation",
    label: "Industry delivery",
    title: "Banking QA Automation",
    subtitle: "Historical Core Banking and Payment Hub validation work",
    summary:
      "Historical enterprise QA automation and integration validation across Core Banking, Payment Hub, API, database, web, and mobile systems; kept as supporting domain evidence behind the current AI evaluation direction.",
    group: "supporting-delivery",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2024-2026",
    role: "Applied AI and Quality Engineering contributor",
    outcome:
      "Delivered confidential banking validation work across transaction integrity, regression, API, database, web, and mobile systems.",
    tags: ["Core Banking", "Payment Hub", "Katalon", "Postman", "SQL", "JMeter"],
    highlights: [
      "Built API, web, and mobile validation coverage for complex banking journeys.",
      "Validated financial transaction behavior through API assertions, SQL checks, and regression scenarios.",
      "Used Katalon, Appium, Postman, and JMeter across omnichannel banking delivery contexts."
    ]
  },
  {
    slug: "e-commerce-ai",
    label: "Applied AI system",
    title: "E-Commerce AI Assistant",
    subtitle: "Vector search and conversational product discovery",
    summary:
      "An end-to-end AI shopping assistant that combines filtered vector search and agent-driven conversational retrieval for natural-language product discovery.",
    group: "applied-ai-systems",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2025",
    repoUrl: "https://github.com/truong51972/E_commerce_AI",
    role: "Implementation-focused system build",
    outcome:
      "Delivered a containerized prototype covering semantic search, conversational consultation, persistence, caching, and service orchestration.",
    tags: ["FastAPI", "LangGraph", "LangChain", "Milvus", "PostgreSQL", "Redis", "Streamlit", "Docker"],
    highlights: [
      "Implemented semantic product retrieval with Milvus, cosine similarity, embeddings, category filters, and price filters.",
      "Built an agent search flow that supplies retrieved product records to an LLM for context-aware consultation.",
      "Structured the system as FastAPI, Streamlit, PostgreSQL, Redis, Milvus, Nginx, and Docker Compose services."
    ]
  },
  {
    slug: "self-driving-car",
    label: "Earlier AI research",
    title: "Self-driving Car Problem",
    subtitle: "YOLOv8 perception, lane segmentation, and PID control in simulation",
    summary:
      "A simulated autonomous-driving pipeline combining YOLOv8-based perception, lane segmentation, OpenCV processing, and PID steering control inside a Unity environment.",
    group: "earlier-ai-research",
    visualTier: "compact",
    homepageFeatured: false,
    period: "2024",
    repoUrl: "https://github.com/truong51972/self_driving_car",
    docsUrl: "docs/self-driving-car-problem.pdf",
    role: "Primary author and implementer",
    outcome: "Completed the simulation benchmark in 125.8 seconds with full marks.",
    tags: ["YOLOv8", "PyTorch", "OpenCV", "Computer Vision", "Segmentation", "PID Control", "Unity"],
    highlights: [
      "Second prize award in a research-paper competition.",
      "Built YOLOv8 traffic-sign classification and lane segmentation workflows.",
      "Implemented bird-view lane processing and PID-based steering control in a Unity simulation loop."
    ]
  },
  {
    slug: "plant-disease-detection",
    label: "Earlier computer vision system",
    title: "Leaf-Based Plant Disease Detection",
    subtitle: "PyTorch classification with segmentation-assisted preprocessing and visual explanations",
    summary:
      "A PyTorch computer-vision pipeline for plant disease classification that combines image preprocessing, CNN inference, class-specific thresholds, and Grad-CAM++ explanations behind a FastAPI service.",
    group: "earlier-ai-research",
    visualTier: "compact",
    homepageFeatured: false,
    period: "2024",
    repoUrl: "https://github.com/truong51972/Leaf-Based_Plant_Disease_Detection",
    role: "Implementation-focused prototype",
    outcome:
      "Implemented an end-to-end computer-vision prototype covering data loading, training, inference, explainability, and API integration.",
    tags: ["PyTorch", "Torchvision", "ResNet", "Grad-CAM", "FastAPI", "SQLite", "Pandas", "NumPy"],
    highlights: [
      "Built train, validation, and test pipelines with PyTorch ImageFolder and DataLoader.",
      "Trained and served ResNet-based classifiers for tomato and potato disease categories.",
      "Combined SAM-assisted preprocessing with Grad-CAM++ to produce interpretable prediction heatmaps."
    ]
  }
];

export const timeline = [
  {
    period: "Dec 2024 — Present",
    title: "Automation Tester & Applied AI Engineer",
    org: "FPT Software · Ho Chi Minh City, Vietnam",
    bullets: [
      "Built applied AI workflows for document understanding, RAG Q&A, test-case generation, duplicate bug detection, traceability, and change impact analysis.",
      "Designed backend orchestration with Django/DRF, FastAPI, Redis/Celery, PostgreSQL, async workers, service layers, and clear domain boundaries.",
      "Applied banking quality experience to agent evaluation, evidence capture, and backend validation workflows."
    ]
  },
  {
    period: "Sep 2024 — Dec 2024",
    title: "Full-stack Developer Intern",
    org: "FPT Software Academy · Ho Chi Minh City, Vietnam",
    bullets: [
      "Built Django-based web applications and deployed containerized services with Docker.",
      "Improved deployment reliability through production-oriented configuration and Cloudflare integration."
    ]
  }
];

export const education = [
  {
    degree: "Master of Software Engineering in AI",
    org: "FPT School of Business & Technology",
    period: "May 2026 — Present",
    note: "Software engineering focus for applied AI systems."
  },
  {
    degree: "Bachelor of Artificial Intelligence",
    org: "FPT University",
    period: "2021 — 2025",
    note: "Computer vision, machine learning, AI evaluation, and LLM systems."
  }
];

export const skillGroups = [
  {
    title: "Applied AI and machine learning",
    items: [
      "PyTorch",
      "Model training and evaluation",
      "Computer Vision",
      "Data analysis and EDA",
      "Dataset curation",
      "OpenCV and YOLOv8",
      "LoRA/QLoRA"
    ]
  },
  {
    title: "LLM systems and retrieval",
    items: [
      "RAG and hybrid retrieval",
      "Knowledge graphs (RAG + Graph)",
      "Agentic workflows",
      "Vector search",
      "LangChain/LangGraph",
      "LLM evaluation",
      "Agent evaluation and testing",
      "Milvus/Qdrant",
      "Langfuse"
    ]
  },
  {
    title: "Backend and AI infrastructure",
    items: [
      "Python",
      "Django/DRF",
      "FastAPI",
      "PostgreSQL",
      "Redis/Celery",
      "Async workers",
      "S3-compatible storage",
      "Docker"
    ]
  },
  {
    title: "Agent evaluation and AI quality",
    items: [
      "Agent testing",
      "Workflow quality gates",
      "Evidence capture",
      "LLM-as-a-Judge",
      "API and integration testing",
      "SQL validation",
      "Regression testing",
      "Core Banking / Payment Hub"
    ]
  }
];

export const supportingTools = ["React", "Astro", "Streamlit"];
