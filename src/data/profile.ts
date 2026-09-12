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
  role: "Applied AI Engineer | AI Platforms, Agentic Systems & Quality Engineering",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "Applied AI Engineer working across AI systems, backend architecture, and software quality, building agentic and retrieval-based solutions grounded in real operational and quality-engineering needs. Combines formal AI training with backend architecture experience in control-plane design, domain/service boundaries, and asynchronous processing.",
  about:
    "Applies a quality-engineering mindset to AI systems through agent orchestration, retrieval, observability, trace reconstruction, and measurable evaluation mechanisms for reliable and auditable AI applications."
};

export const cases: ProjectCase[] = [
  {
    slug: "omni-agent",
    label: "Flagship platform",
    title: "Omni-Agent — Applied AI Platform",
    subtitle:
      "An Applied AI platform engineered from real operational needs, unifying versioned document RAG, LangGraph multi-agent orchestration, and integrated agent verification within a modular multi-service architecture",
    summary:
      "An Applied AI platform engineered from real operational needs, unifying versioned document RAG, LangGraph multi-agent orchestration, and integrated agent verification within a modular multi-service architecture.",
    group: "featured-systems",
    visualTier: "flagship",
    homepageFeatured: true,
    period: "2026–Present",
    role: "Solo product architecture and implementation",
    outcome:
      "Designed and implemented the platform foundation, including explicit domain ownership, versioned document lifecycles, asynchronous processing contracts, and integrated Agent Testing. Its Agent Assurance module won 2nd place at IVS Hackathon 2026.",
    tags: [
      "LangGraph",
      "FastAPI",
      "Model Context Protocol (MCP)",
      "OpenTelemetry (OTel)",
      "LLM-as-a-Judge",
      "Qdrant",
      "Docling",
      "Django/DRF",
      "Celery",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    highlights: [
      "Platform Architecture: Engineered a modular monorepo featuring a Django/DRF control plane for project tenancy, identity, and permissions, backed by decoupled, stateless Celery workers for asynchronous processing workloads.",
      "Knowledge Builder: Built document processing pipeline with Docling layout parsing/OCR, snapshot chunking, Qdrant vector indexing, a Streamable HTTP MCP tool server, and a LangGraph-based multi-agent runtime with citation-grounded RAG.",
      "Agent Assurance (IVS Hackathon 2nd Place): Implemented execution evidence capture through LiteLLM and OpenTelemetry, trace reconstruction pipelines to normalize multi-turn trajectories, and deterministic quality gates.",
      "Reliability & Data Integrity: Designed idempotent evidence ingestion keyed by trace/span identity, with PostgreSQL-backed execution metadata and S3-compatible artifact storage."
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
    title: "APIT — Agent Programmatic Integration Testing",
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
    title: "Applied AI Engineer & Automation Tester",
    org: "FPT Software · Ho Chi Minh City, Vietnam",
    bullets: [
      "IQP (Code Intelligence & Quality Retrieval): Architected backend retrieval for IQP combining semantic vector search, BM25 lexical signals, and Code Graphs, exposing contextual tools to AI clients via Model Context Protocol (MCP) to automate quality analysis across multi-repository codebases.",
      "Agent Assurance (Testing Discipline for AI): Applied software testing discipline to agentic systems by architecting an assurance engine with explicit domain boundaries and async evaluation workflows; implemented evidence-capture paths through LiteLLM and OpenTelemetry-based instrumentation, with idempotent trace persistence.",
      "Agent Assurance (Assurance Lifecycle & Verification): Applied an end-to-end assurance lifecycle spanning Intake, Strategy, Requirements, Test Design & Oracle Definition, Measurement Qualification, Validation, Reporting, and Re-assurance, supported by trace-based behavioral evaluation and regression workflows.",
      "Banking Automation & Quality Operations: Engineered reusable cross-platform test automation and 1,500+ lines of SQL validation across banking and payment systems, cutting manual regression effort by ~70%."
    ]
  },
  {
    period: "Sep 2024 — Dec 2024",
    title: "Full-Stack Developer Intern",
    org: "FPT Software Academy · Ho Chi Minh City, Vietnam",
    bullets: [
      "Built the core backend for an online learning and assessment platform using Django with role-based access control and automated exam workflows.",
      "Integrated a separate FastAPI computer-vision service for AI-assisted real-time exam proctoring and face detection.",
      "Containerized and deployed the multi-service architecture using Docker Compose, Nginx reverse proxy, and Cloudflare Tunnel."
    ]
  }
];

export const achievements = [
  {
    title: "2nd Place — IVS Hackathon 2026",
    period: "Aug 2026",
    org: "IVS Hackathon 2026",
    description:
      "Awarded 2nd place for independently architecting an end-to-end AI Agent Verification engine (Agent Assurance) featuring runtime evidence capture, trace-based behavioral evaluation, and governed quality gates; subsequently integrated into Omni-Agent."
  },
  {
    title: "Second Prize — Autonomous Driving Research Paper Competition",
    period: "Apr 2024",
    org: "Research Paper Competition",
    description:
      "Co-authored research combining YOLOv8 perception, lane segmentation, and PID steering control in Unity simulation, completing the autonomous benchmark in 125.8 seconds with a perfect 100% score."
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
    title: "Agentic AI & Orchestration",
    items: [
      "LangGraph",
      "Multi-Agent Systems",
      "MCP (Model Context Protocol)",
      "Tool Calling",
      "LiteLLM",
      "LangChain",
      "Agentic Workflows",
      "Qdrant",
      "Milvus",
      "Docling",
      "RAG & Hybrid Retrieval"
    ]
  },
  {
    title: "LLM Evaluation, Observability & Security",
    items: [
      "OpenTelemetry (OTel)",
      "Runtime Trace Reconstruction",
      "LLM-as-a-Judge",
      "Deterministic Quality Gates",
      "Prompt Injection Testing",
      "Data Leakage Evaluation",
      "LoRA/QLoRA Fine-tuning",
      "Synthetic Data Generation",
      "Langfuse",
      "PyTorch"
    ]
  },
  {
    title: "AI Systems & Backend Architecture",
    items: [
      "Python",
      "FastAPI",
      "Django/DRF",
      "Pydantic",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "PostgreSQL",
      "REST APIs",
      "Asynchronous Orchestration",
      "Idempotency"
    ]
  },
  {
    title: "Platform, Infrastructure & Tooling",
    items: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "S3-compatible Object Storage (MinIO)",
      "CI/CD",
      "Git",
      "Linux"
    ]
  }
];

export const supportingTools = ["Astro", "Streamlit", "React", "TypeScript"];
