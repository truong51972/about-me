export type ProjectGroup =
  | "featured-systems"
  | "applied-ai-systems"
  | "quality-delivery"
  | "engineering-foundations";

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
    "I build Python backend systems and applied AI products for document intelligence, retrieval, code intelligence, and agent evaluation. My work focuses on clear domain ownership, reliable asynchronous workflows, and verifiable product outcomes.",
  about:
    "My background combines backend development, applied AI, and quality automation. I work across domain modeling, service boundaries, AI integration, and system validation to turn technical capabilities into maintainable product workflows."
};

export const cases: ProjectCase[] = [
  {
    slug: "omni-agent",
    label: "Flagship platform",
    title: "Omni-Agent — Applied AI Platform",
    subtitle:
      "Versioned knowledge workflows, hybrid and graph retrieval, and integrated agent evaluation",
    summary:
      "A project-centric Applied AI platform combining versioned document knowledge, hybrid and graph-based retrieval, AI workflows, and integrated agent evaluation through a shared backend control plane.",
    group: "featured-systems",
    visualTier: "flagship",
    homepageFeatured: true,
    period: "2026–Present",
    role: "Solo product architecture and implementation",
    outcome:
      "Designed and implemented the platform foundation, including explicit domain ownership, versioned document lifecycles, asynchronous processing contracts, and integrated Agent Testing.",
    tags: [
      "Django/DRF",
      "Celery",
      "PostgreSQL",
      "Redis",
      "S3/MinIO",
      "Docling",
      "Qdrant",
      "Hybrid Retrieval",
      "Knowledge Graph",
      "Agent Evaluation",
      "React/Vite"
    ],
    highlights: [
      "Designed a Django/DRF control plane for projects, permissions, document versions, processing jobs, artifacts, evaluation runs, scorecards, and audit metadata.",
      "Built versioned document-ingestion workflows covering source upload, OCR, preview generation, chunking, indexing workflows, committed artifacts, and S3-compatible artifact lineage.",
      "Defined service ownership through typed worker contracts, idempotent jobs, and concurrency-safe commits, keeping domain lifecycle decisions in the API while stateless workers handle long-running processing.",
      "Integrated Agent Testing into the platform core with runtime trace capture, multi-stage evaluation, deterministic validation, and workflow-level quality gates."
    ]
  },
  {
    slug: "iqp",
    label: "Enterprise Quality Engineering",
    title: "IQP — Intelligent Quality Platform",
    subtitle:
      "AI-assisted traceability and code intelligence for Quality Engineering",
    summary:
      "An enterprise Quality Engineering platform combining product knowledge, source-code intelligence, and AI-assisted retrieval to support engineering traceability and test analysis.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2026",
    role:
      "Backend engineering, retrieval, code intelligence, and product integration",
    outcome:
      "Contributed to a working enterprise platform that unified product knowledge, source-code context, AI-assisted retrieval, and quality-analysis capabilities.",
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
      "Implemented hybrid retrieval combining semantic, lexical, and graph-based signals to provide scoped context for engineering and AI-assisted tools.",
      "Developed code-intelligence capabilities for indexing source repositories and linking product concepts with related implementation and test assets.",
      "Integrated asynchronous backend services, a React/TypeScript portal, and MCP-compatible AI clients into a workspace-oriented product workflow."
    ]
  },
  {
    slug: "ata",
    label: "Integrated prototype",
    title: "ATA — Agent Test Agent",
    subtitle: "Quality infrastructure for AI-agent products",
    summary:
      "A standalone agent-evaluation MVP whose capture, evaluation, and quality-gate capabilities were later integrated into Omni-Agent.",
    group: "applied-ai-systems",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2026",
    role: "Solo architecture and implementation",
    outcome:
      "Validated the evaluation architecture before its core capabilities were integrated into Omni-Agent's Agent Testing module.",
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
    group: "applied-ai-systems",
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
      "Client delivery work covering Core Banking and Payment Hub integrations across API, database, web, mobile, regression, and automation testing.",
    group: "quality-delivery",
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
    label: "Early Product Engineering",
    title: "LMS — Learning & Assessment Platform",
    subtitle:
      "A Django learning platform with a separate AI-assisted monitoring service",
    summary:
      "A full-stack learning and assessment platform covering structured course content, enrollment, quizzes, reporting, role-based workflows, and a separately deployed face-detection service.",
    group: "engineering-foundations",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2024",
    repoUrl: "https://github.com/truong51972/LMS",
    role:
      "Solo developer of the initial version and primary developer in the extended team project",
    outcome:
      "Built the initial product independently, then continued as a primary developer when its core design was adopted into a larger team implementation.",
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
    group: "engineering-foundations",
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
    group: "engineering-foundations",
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
    title: "Automation Tester (Applied AI & Backend Engineering)",
    org: "FPT Software · Ho Chi Minh City, Vietnam",
    bullets: [
      "Designed backend, retrieval, and code-intelligence components for IQP, an enterprise Quality Engineering platform.",
      "Built AI-assisted workflows for document analysis, test-case generation, defect analysis, and change-impact assessment.",
      "Developed reusable automation across Web, mobile, API, and database layers for complex banking and payment workflows.",
      "Improved testing efficiency through reusable validation assets, automation utilities, and traceable quality workflows."
    ]
  },
  {
    period: "Sep 2024 — Dec 2024",
    title: "Full-Stack Developer Intern",
    org: "FPT Software Academy · Ho Chi Minh City, Vietnam",
    bullets: [
      "Built the initial version of a Django learning and assessment platform with structured course, quiz, enrollment, and role-based workflows.",
      "Integrated a separate FastAPI face-detection service for AI-assisted exam monitoring.",
      "Containerized and deployed the multi-service application using Docker Compose, Nginx, and Cloudflare Tunnel."
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
      "Pydantic",
      "SQLAlchemy/SQLModel",
      "REST APIs",
      "Domain modeling",
      "Service boundaries",
      "Asynchronous orchestration",
      "Idempotency",
      "PostgreSQL",
      "Redis",
      "Celery"
    ]
  },
  {
    title: "Applied AI & Graph Systems",
    items: [
      "RAG",
      "Hybrid retrieval",
      "Document intelligence",
      "Knowledge Graphs",
      "Code Graphs",
      "Graph traversal",
      "Agentic workflows",
      "MCP",
      "LangChain",
      "LangGraph",
      "LiteLLM",
      "Docling",
      "Qdrant",
      "Langfuse"
    ]
  },
  {
    title: "Product Interfaces & Delivery",
    items: [
      "React",
      "TypeScript",
      "Vite",
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
    title: "Quality, Evaluation & ML",
    items: [
      "LLM evaluation",
      "Agent evaluation",
      "LLM-as-a-Judge",
      "Quality gates",
      "PyTorch",
      "LoRA/QLoRA",
      "Model evaluation",
      "API validation",
      "SQL validation",
      "Regression testing",
      "Test automation"
    ]
  }
];

export const supportingTools = ["Astro", "Streamlit"];
