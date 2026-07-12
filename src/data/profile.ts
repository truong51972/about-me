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
  role: "Product Engineer | Backend Systems & Applied AI",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "I build Python backend systems for document processing, RAG, agent evaluation, and asynchronous workflows. My work focuses on clear domain ownership, reliable system boundaries, and maintainable AI-enabled products.",
  about:
    "My background combines backend development, applied AI, and quality automation. I work across domain modeling, asynchronous processing, AI integration, and system validation to turn technical capabilities into reliable product workflows."
};

export const cases: ProjectCase[] = [
  {
    slug: "omni-agent",
    label: "Flagship system",
    title: "Omni-Agent — Document Knowledge Platform",
    subtitle: "A document knowledge platform with versioned processing workflows, asynchronous jobs, and hybrid retrieval.",
    summary:
      "A document knowledge platform with versioned processing workflows, asynchronous jobs, and hybrid retrieval.",
    group: "featured-systems",
    visualTier: "flagship",
    homepageFeatured: true,
    period: "2026-Present",
    role: "Solo architecture and implementation",
    outcome:
      "Architected and built the end-to-end platform, establishing versioned document lifecycles, service boundaries, and async processing contracts.",
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
      "Designed a project-centric Django/DRF control plane for permissions, document state, job lifecycles, and artifact lineage.",
      "Implemented versioned document ingestion, OCR processing, and asynchronous workers using Celery and S3-compatible storage.",
      "Defined service boundaries that keep domain decisions in the API while stateless workers handle long-running processing.",
      "Introduced typed worker contracts, explicit lifecycle states, and concurrency-safe document commit workflows."
    ]
  },
  {
    slug: "iqp",
    label: "Quality Engineering platform",
    title: "Intelligent Quality Platform",
    subtitle: "Quality Engineering Intelligence Platform",
    summary:
      "An enterprise Quality Engineering platform that combines product knowledge, source-code intelligence, and AI-assisted retrieval to support traceability and test analysis.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2025-Present",
    role: "Backend architecture, Applied AI retrieval, graph workflows, and product integration",
    outcome:
      "Delivered a working platform foundation that unified product knowledge, source-code context, AI-assisted retrieval, and quality-analysis capabilities within a single engineering workflow.",
    tags: [
      "FastAPI",
      "Qdrant",
      "PostgreSQL",
      "Redis",
      "Celery",
      "MCP",
      "React",
      "TypeScript",
      "Docker Compose"
    ],
    highlights: [
      "Designed backend service boundaries for workspace management, graph ingestion and retrieval, code indexing, AI context access, and quality-analysis workflows.",
      "Implemented hybrid retrieval across semantic, lexical, and graph-based signals to provide scoped context for engineering and AI-assisted tools.",
      "Developed code-intelligence capabilities for indexing source repositories and linking product concepts with related implementation and test assets.",
      "Built platform components using FastAPI, PostgreSQL, Redis/Celery, Qdrant, React/TypeScript, MCP, and Docker Compose."
    ]
  },
  {
    slug: "ata",
    label: "AI validation platform",
    title: "ATA — Agent Test Agent",
    subtitle: "Quality infrastructure for AI-agent products",
    summary:
      "An evaluation and audit platform that captures AI-agent traces, scores quality dimensions, and produces workflow-level release verdicts.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2026",
    role: "Solo architecture and implementation",
    outcome:
      "Designed and implemented the full validation infrastructure, capturing and scoring production agent runs to establish Workflow Quality Gates.",
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
      "Built an end-to-end MVP with a FastAPI control plane, LiteLLM gateway, Celery workers, PostgreSQL, Redis, and a React dashboard.",
      "Designed a multi-stage evaluation workflow using Planner, Judge, Critic, and Meta-Judge roles across configurable quality dimensions.",
      "Implemented percentile-based quality gates and deterministic critical blockers to produce reproducible PASS/FAIL verdicts."
    ]
  },
  {
    slug: "apit",
    label: "AI evaluation",
    title: "APIT — Agent Programmatic Intelligence Testing",
    subtitle: "An AI-assisted API testing application",
    summary:
      "An AI-assisted API testing application that generates structured test scenarios from API documentation.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2025",
    docsUrl: "docs/apit-capstone.pdf",
    role: "System Architect",
    outcome: "Achieved a 0.655 macro-F1 score on structured API test-case generation using a fine-tuned Qwen-2.5-3B model via LoRA.",
    tags: ["LLM fine-tuning", "LoRA", "Qwen", "RAG", "API Testing", "Evaluation"],
    highlights: [
      "Built a bilingual synthetic dataset generation pipeline containing 1,258 API-testing samples.",
      "Fine-tuned Qwen-2.5-3B with LoRA, achieving 0.655 macro-F1 in the project evaluation benchmark.",
      "Developed an evaluation workflow combining LLM-as-a-Judge, fuzzy matching, and deterministic validation."
    ]
  },
  {
    slug: "banking-automation",
    label: "Industry delivery",
    title: "Core Banking & Payment Hub QA Automation",
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
      "Built and demonstrated an omnichannel automation proof of concept across Web, iOS, and Android, contributing to approximately 20 person-months of follow-on delivery work.",
      "Validated end-to-end financial transaction flows through API testing, SQL-based database verification, regression testing, and stress testing.",
      "Authored more than 1,500 lines of reusable SQL validation queries and maintained coverage across all in-scope API endpoints.",
      "Reduced manual QA effort by approximately 70% through reusable automation and transaction-validation workflows."
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
    slug: "lms",
    label: "Applied AI system",
    title: "LMS — Learning & Assessment Platform",
    subtitle: "A multi-service platform with AI-assisted proctoring and Docker orchestration",
    summary:
      "A full-stack Django learning management system integrated with a separate FastAPI face-detection service for exam proctoring, orchestrated via Docker Compose.",
    group: "applied-ai-systems",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2024",
    role: "Solo developer (initial version) & Primary team developer (extended platform)",
    outcome:
      "Delivered a working multi-service platform that became the technical foundation for a larger modular team project.",
    tags: [
      "Django",
      "FastAPI",
      "PyTorch",
      "Docker Compose",
      "Nginx",
      "Cloudflare Tunnel",
      "Pandas",
      "Plotly",
      "SQLite/MySQL",
      "Bootstrap"
    ],
    highlights: [
      "Built the initial standalone version including course administration, online quizzes, and custom Django role-based access rules.",
      "Integrated a separate FastAPI face-detection service to run computer-vision inference independently from the main Django application.",
      "Configured multi-service deployment with Docker Compose, Nginx, and Cloudflare Tunnel to support external access and static file serving.",
      "Developed course content ingestion and examination utilities to convert raw spreadsheet inputs into structured assessment JSON."
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
    title: "Automation Tester (Applied AI & Backend Scope)",
    org: "FPT Software · Ho Chi Minh City, Vietnam",
    bullets: [
      "Designed and implemented backend and retrieval components for an enterprise AI-powered Quality Engineering platform.",
      "Built FastAPI services and asynchronous workflows using PostgreSQL, Redis/Celery, Qdrant, and service-to-service APIs.",
      "Developed graph-based context retrieval and code-intelligence capabilities for engineering and quality-analysis use cases.",
      "Applied API, database, regression, and automation experience to the design of reliable AI-assisted quality workflows."
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
    title: "Backend Systems & Architecture",
    items: [
      "Python",
      "Django/DRF",
      "FastAPI",
      "REST APIs",
      "Domain modeling",
      "Service boundaries",
      "Stateful workflows",
      "Asynchronous job orchestration",
      "Idempotency",
      "PostgreSQL",
      "Redis",
      "Celery"
    ]
  },
  {
    title: "Applied AI Systems",
    items: [
      "RAG",
      "Hybrid retrieval",
      "Document intelligence",
      "Agentic workflows",
      "LangChain",
      "LangGraph",
      "LiteLLM",
      "Docling",
      "Qdrant",
      "Langfuse"
    ]
  },
  {
    title: "Infrastructure & Delivery",
    items: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "CI/CD",
      "Observability",
      "S3/MinIO",
      "Git"
    ]
  },
  {
    title: "Quality & Evaluation",
    items: [
      "LLM evaluation",
      "Agent evaluation",
      "LLM-as-a-Judge",
      "Quality gates",
      "API validation",
      "SQL validation",
      "Regression testing",
      "Test automation"
    ]
  },
  {
    title: "Machine Learning Foundations",
    items: [
      "PyTorch",
      "LoRA/QLoRA",
      "Dataset preparation",
      "Model evaluation",
      "Computer vision"
    ]
  }
];

export const supportingTools = ["React", "Astro", "Streamlit"];
