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
  role: "Product Engineer · Applied AI · Backend Systems",
  tagline: "Turning real operational problems into reliable AI systems.",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "I work across product engineering and Applied AI to translate business and operational problems into end-to-end systems, from solution design through delivery, evaluation, and reliability.",
  about:
    "Combines solution architecture with hands-on engineering across agentic workflows, retrieval, model adaptation, backend platforms, and AI assurance, with ownership from problem framing through production delivery."
};

export const cases: ProjectCase[] = [
  {
    slug: "omni-agent",
    label: "Flagship AI Platform",
    title: "Omni-Agent — AI Platform",
    subtitle: "Platform for building knowledge bases, running AI agents, and evaluating agent behavior",
    summary:
      "A modular Applied AI platform designed to solve document intelligence, grounded knowledge access, agent workflow, and AI assurance needs within one project-scoped architecture.",
    group: "featured-systems",
    visualTier: "flagship",
    homepageFeatured: true,
    period: "2026–Present",
    role: "Solo solution architecture and implementation",
    outcome:
      "Translated document-intelligence and AI-assurance needs into a modular platform with explicit domain ownership, versioned document lifecycles, asynchronous processing contracts, and integrated Agent Assurance. Its assurance engine won 2nd place at IVS Hackathon 2026.",
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
      "Agent Assurance Integration: Integrated execution evidence, regression evaluation, and governed quality gates as a native platform capability.",
      "Reliability & Data Integrity: Designed idempotent evidence ingestion keyed by trace/span identity, with PostgreSQL-backed execution metadata and S3-compatible artifact storage."
    ]
  },
  {
    slug: "ata",
    label: "Award-Winning AI Assurance",
    title: "Agent Assurance (ATA) — AI Agent Evaluation Platform",
    subtitle: "Quality & evaluation infrastructure for autonomous AI agents",
    summary:
      "An independent assurance solution for teams that need auditable evidence, behavioral evaluation, and governed release gates for probabilistic AI agents.",
    group: "applied-ai-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2026",
    role: "Solo solution architecture and implementation",
    outcome:
      "Validated the assurance architecture through 2nd Place at IVS Hackathon 2026; the evolved Flezi Polaris solution later received the Golden Solution Prize at IVS Solution Day 2.0 before the core capabilities were integrated into Omni-Agent.",
    tags: [
      "Agent Evaluation",
      "OpenTelemetry",
      "LLM-as-a-Judge",
      "FastAPI",
      "Celery",
      "LiteLLM Gateway",
      "Redis",
      "PostgreSQL",
      "LangChain",
      "Docker"
    ],
    highlights: [
      "Built an end-to-end evaluation engine with a FastAPI control plane, LiteLLM gateway, Celery workers, PostgreSQL, Redis, and an operational dashboard.",
      "Designed a multi-stage evaluation workflow using Planner, Judge, Critic, and Meta-Judge roles across configurable quality dimensions.",
      "Implemented percentile-based quality gates and deterministic critical blockers to produce reproducible PASS/FAIL verdicts."
    ]
  },
  {
    slug: "iqp",
    label: "Enterprise Applied AI",
    title: "IQP — Intelligent Quality Platform",
    subtitle:
      "AI-assisted traceability and code intelligence for enterprise systems",
    summary:
      "An enterprise solution connecting product knowledge, source code, and quality artifacts so engineering teams and AI tools can retrieve traceable context across large codebases.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2026",
    role:
      "Backend solution design, retrieval, code intelligence, and product integration",
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
    slug: "apit",
    label: "AI evaluation",
    title: "APIT — Agent Programmatic Integration Testing",
    subtitle: "An AI-assisted API testing application",
    summary:
      "An AI-assisted API testing system designed to turn API documentation into structured, evaluable test scenarios using an adapted domain model.",
    group: "applied-ai-systems",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2025",
    docsUrl: "docs/apit-capstone.pdf",
    role: "System architecture and model engineering",
    outcome: "Built the full model lifecycle from bilingual synthetic data and Qwen-2.5-3B LoRA/QLoRA fine-tuning to OpenAI-compatible vLLM serving, reaching 0.655 macro-F1 (+41.5% over the Llama-3.2-3B baseline).",
    tags: ["LLM Fine-Tuning", "LoRA/QLoRA", "Qwen", "vLLM", "RunPod", "API Testing", "Evaluation"],
    highlights: [
      "Built a bilingual synthetic dataset generation pipeline containing 1,258 API-testing samples.",
      "Fine-tuned Qwen-2.5-3B with LoRA/QLoRA, achieving 0.655 macro-F1 (+41.5% relative improvement over the Llama-3.2-3B baseline).",
      "Deployed the fine-tuned model on RunPod through an OpenAI-compatible vLLM service with quantized inference and runtime LoRA adapters.",
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
      "IQP (Code Intelligence & Quality Retrieval): Designed multi-repository code intelligence combining hybrid retrieval, Code Graphs, and MCP to provide traceable engineering context for AI-assisted quality analysis.",
      "Agent Assurance: Translated AI reliability requirements into an assurance engine for trace-based behavioral evaluation, reproducible regression, and governed quality gates.",
      "Banking Automation & Systems Verification: Engineered reusable cross-platform test automation and 1,500+ lines of SQL validation across banking and payment systems, cutting manual regression effort by ~70%."
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

export interface AchievementImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Achievement {
  id: string;
  title: string;
  badge: string;
  category: "Hackathon" | "Research" | "Competition";
  period: string;
  org: string;
  team?: string;
  role: string;
  description: string;
  keyContributions: string[];
  images: AchievementImage[];
  projectSlug?: string;
  projectLabel?: string;
}

export const achievements: Achievement[] = [
  {
    id: "ivs-solution-day-2026",
    title: "Golden Solution Prize (1st Place) — IVS Solution Day 2.0 2026",
    badge: "Golden Solution Prize",
    category: "Competition",
    period: "Sep 2026",
    org: "IVS Solution Day 2.0 · FPT Software",
    role: "Solution architecture and technical delivery for Flezi Polaris",
    description:
      "Awarded the Golden Solution Prize for Flezi Polaris, an Agent Assurance solution translating AI-agent reliability needs into trace-based evidence capture, behavioral evaluation, and governed quality verification.",
    keyContributions: [
      "Framed AI-agent reliability as a measurable assurance problem with explicit requirements and quality gates",
      "Designed trace-based evidence capture and behavioral evaluation across multi-turn agent executions",
      "Connected assurance results to reproducible regression and governed release decisions"
    ],
    images: [],
    projectSlug: "ata",
    projectLabel: "Explore Agent Assurance Case Study"
  },
  {
    id: "ivs-hackathon-2026",
    title: "2nd Place — IVS Hackathon 2026",
    badge: "2nd Runner-up",
    category: "Hackathon",
    period: "Aug 2026",
    org: "IVS Hackathon 2026 (FPT Software)",
    team: "Nova4Test · IVS HCM",
    role: "Solo architecture & implementation of Agent Assurance engine",
    description:
      "Awarded 2nd place for independently architecting an end-to-end AI Agent Verification engine (Agent Assurance) featuring runtime evidence capture, trace-based behavioral evaluation, and governed quality gates; subsequently integrated into Omni-Agent.",
    keyContributions: [
      "Architected LiteLLM & OpenTelemetry instrumentation capturing full multi-turn execution trajectories",
      "Designed idempotent trace reconstruction pipelines keyed by trace/span identity with PostgreSQL & MinIO",
      "Implemented deterministic quality gates and LLM-as-a-Judge evaluators for reliable agent verification"
    ],
    images: [
      {
        src: "images/ivs-hackthon-2nd.jpg",
        alt: "Team Nova4Test receiving 2nd Runner-up award at IVS Hackathon 2026",
        caption: "Award Ceremony: Team Nova4Test awarded 2nd Runner-up at IVS Hackathon 2026"
      },
      {
        src: "images/presenting.jpg",
        alt: "Tran Quoc Truong pitching the Agent Assurance engine on stage",
        caption: "Technical Defense: Truong presenting the agent evaluation architecture before judges"
      }
    ],
    projectSlug: "ata",
    projectLabel: "Explore Agent Assurance Case Study"
  },
  {
    id: "research-paper-2024",
    title: "Second Prize — Autonomous Driving Research Paper Competition",
    badge: "Second Prize (Giải Nhì)",
    category: "Research",
    period: "Apr 2024",
    org: "Student Research Paper Competition · FPT University",
    role: "Primary author & algorithm implementer",
    description:
      "Co-authored research combining YOLOv8 perception, lane segmentation, and PID steering control in Unity simulation, completing the autonomous benchmark in 125.8 seconds with a perfect 100% score.",
    keyContributions: [
      "Trained YOLOv8 classifier across 18k+ images for real-time traffic sign recognition",
      "Built lane segmentation pipeline with 9.5k annotated images and bird's-eye view projection",
      "Engineered PID-style steering control achieving a 100% score in 125.8s benchmark"
    ],
    images: [
      {
        src: "images/second-prize-award-wide.webp",
        alt: "Second Prize award certificate at Research Paper Competition Spring 2024",
        caption: "Award Ceremony: Second Prize in Student Scientific Research Competition (IT Division)"
      }
    ],
    projectSlug: "self-driving-car",
    projectLabel: "Explore Self-Driving Car Case Study"
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
    title: "AI & Agent Systems",
    items: [
      "LangGraph",
      "Model Context Protocol (MCP)",
      "Tool Calling",
      "Citation-Grounded RAG",
      "Hybrid Retrieval",
      "Qdrant",
      "Docling",
      "Context Engineering"
    ]
  },
  {
    title: "Model & Retrieval Engineering",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "PEFT",
      "Unsloth",
      "LoRA/QLoRA",
      "vLLM",
      "Synthetic Data",
      "Vector Search"
    ]
  },
  {
    title: "Backend & Platform Engineering",
    items: [
      "Python",
      "FastAPI",
      "Django / DRF",
      "SQLAlchemy",
      "PostgreSQL",
      "Redis",
      "Celery",
      "SSE / Streaming APIs",
      "Docker",
      "Kubernetes"
    ]
  },
  {
    title: "Solution Reliability & Evaluation",
    items: [
      "Solution Architecture",
      "OpenTelemetry (OTel)",
      "LiteLLM",
      "LLM-as-a-Judge",
      "Runtime Trace Reconstruction",
      "Regression Testing",
      "Deterministic Quality Gates",
      "Data Integrity & Auditability"
    ]
  }
];

export const supportingTools = ["Astro", "Streamlit", "React", "TypeScript"];
