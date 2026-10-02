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
  role: "Applied AI Engineer · AI Agents & RAG · Backend Systems",
  tagline: "Building reliable AI agents, retrieval systems, and backend platforms.",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "I build agentic applications, RAG and retrieval systems, LLM evaluation infrastructure, and Python backend platforms with a focus on reliability, observability, and practical delivery.",
  about:
    "My work spans enterprise code intelligence, hybrid retrieval, MCP/tool calling, trace-based AI evaluation, asynchronous backend systems, CI-driven delivery, and AI-augmented software development. I currently contribute as an Applied AI Engineer at FPT Software while independently developing Omni-Agent."
};

export const cases: ProjectCase[] = [
  {
    slug: "omni-agent",
    label: "Flagship AI Platform",
    title: "Omni-Agent — AI Platform",
    subtitle: "Knowledge pipelines, agent runtimes, and agent assurance in one modular platform",
    summary:
      "A modular Applied AI platform combining versioned document knowledge pipelines, agent runtimes, and trace-based agent evaluation within a project-centric multi-service architecture.",
    group: "featured-systems",
    visualTier: "flagship",
    homepageFeatured: true,
    period: "2026–Present",
    role: "Solo product architecture and implementation",
    outcome:
      "Active development / pre-production. Designed and implemented the platform foundation, including explicit domain ownership, versioned document lifecycles, asynchronous processing contracts, MCP integration, and native agent assurance. Its Agent Assurance work was recognized with 2nd Place at IVS Hackathon 2026 and later the Golden Solution Prize (1st place) at IVS Solution Day 2.0 2026 as Flezi Polaris.",
    tags: [
      "LangGraph",
      "FastAPI",
      "Model Context Protocol (MCP)",
      "OpenTelemetry (OTel)",
      "LLM Evaluation",
      "Qdrant",
      "Docling",
      "Django/DRF",
      "Celery",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    highlights: [
      "Platform Architecture: Designed a modular multi-service architecture with a project-scoped control plane, isolated domain services, asynchronous workers, PostgreSQL, Redis, S3-compatible object storage, and containerized deployment.",
      "Knowledge Builder: Built a versioned document pipeline covering source ingestion, Docling parsing/OCR, chunking, Qdrant indexing, citation-grounded retrieval, and MCP-based knowledge access.",
      "Agent Runtime & Integration: Implemented LangGraph-based agent workflows with tool calling and MCP integration for multi-turn execution over project knowledge.",
      "Agent Assurance: Integrated trace-based evidence capture, behavioral evaluation, regression, and quality-gating capabilities directly into the platform."
    ]
  },
  {
    slug: "iqp",
    label: "Enterprise Applied AI",
    title: "IQP — Intelligent Quality Platform",
    subtitle: "AI-assisted traceability and code intelligence for enterprise systems",
    summary:
      "An enterprise platform combining graph-based product knowledge, source-code intelligence, and hybrid retrieval to support engineering traceability and AI-assisted quality analysis.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2026",
    role: "Backend engineering, retrieval, code intelligence, and product integration",
    outcome:
      "Enterprise internal system. Contributed backend architecture and retrieval capabilities that connect product knowledge, source-code context, and MCP-compatible AI clients across multi-repository engineering workflows.",
    tags: [
      "FastAPI",
      "Qdrant",
      "Hybrid Retrieval",
      "BM25",
      "Code Graphs",
      "PostgreSQL",
      "Redis",
      "Celery",
      "MCP",
      "React",
      "TypeScript",
      "Docker Compose"
    ],
    highlights: [
      "Architected backend retrieval combining dense semantic search, BM25 lexical ranking, and code-graph relationships to provide scoped implementation and testing context across enterprise repositories.",
      "Developed code-intelligence capabilities for indexing source repositories and linking product concepts with related implementation and test assets.",
      "Exposed contextual retrieval capabilities through MCP so AI clients can access repository-aware engineering context through a stable integration boundary.",
      "Integrated asynchronous backend services, a React/TypeScript portal, and workspace-oriented product workflows."
    ]
  },
  {
    slug: "ata",
    label: "Golden Solution Prize · IVS Solution Day 2.0",
    title: "Agent Assurance — AI Agent Evaluation Platform",
    subtitle: "Record-first evaluation and regression infrastructure for agentic systems",
    summary:
      "A record-first assurance layer that captures runtime evidence, reconstructs multi-turn agent trajectories, evaluates behavioral dimensions, and produces reproducible regression and quality-gate results.",
    group: "applied-ai-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2026",
    role: "Solo architecture and implementation",
    outcome:
      "Awarded 2nd Place at IVS Hackathon 2026 and later evolved into Flezi Polaris, which received the Golden Solution Prize (1st place) at IVS Solution Day 2.0 on September 18, 2026.",
    tags: [
      "Agent Evaluation",
      "OpenTelemetry",
      "LLM-as-a-Judge",
      "FastAPI",
      "Celery",
      "LiteLLM Gateway",
      "Redis",
      "PostgreSQL",
      "Regression Testing",
      "Docker"
    ],
    highlights: [
      "Captured agent interactions through LiteLLM and OpenTelemetry paths and normalized multi-turn execution evidence into durable evaluation records.",
      "Evaluated records across semantic behavior groups with a single evaluator workflow and retained evidence/rationale for reproducible review.",
      "Applied worst-record aggregation so decisive failures cannot be hidden by averages; missing evidence remains inconclusive rather than being guessed.",
      "Evolved the model toward versioned requirements and scenarios so assurance runs can preserve historical reproducibility.",
      "Presented the Agent Assurance capability as Flezi Polaris at IVS Solution Day 2.0 2026, earning the Golden Solution Prize (1st place)."
    ]
  },
  {
    slug: "apit",
    label: "AI Evaluation",
    title: "APIT — Agent Programmatic Integration Testing",
    subtitle: "AI-assisted structured API test generation",
    summary:
      "An AI-assisted API testing application that generates structured test scenarios from API documentation and evaluates them with model-based and deterministic checks.",
    group: "applied-ai-systems",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2025",
    docsUrl: "docs/apit-capstone.pdf",
    role: "System Architect",
    outcome:
      "Academic / research prototype. Achieved a 0.655 macro-F1 score on structured API test-case generation using a fine-tuned Qwen2.5-3B model via LoRA/QLoRA.",
    tags: ["LLM Fine-Tuning", "LoRA/QLoRA", "Qwen", "RAG", "API Testing", "Evaluation"],
    highlights: [
      "Built a bilingual synthetic dataset generation pipeline containing 1,258 API-testing samples.",
      "Fine-tuned Qwen2.5-3B with LoRA/QLoRA, achieving 0.655 macro-F1 (+41.5% relative improvement over the Llama-3.2-3B baseline).",
      "Developed an evaluation workflow combining LLM-as-a-Judge, fuzzy matching, and deterministic JSON-schema validation."
    ]
  },
  {
    slug: "banking-automation",
    label: "Industry Delivery",
    title: "Core Banking & Payment Hub QA Automation",
    subtitle: "Production delivery workflows across API, database, web, and mobile systems",
    summary:
      "Client delivery work covering Core Banking and Payment Hub integrations across API, database, web, mobile, regression, automation, and CI-driven validation.",
    group: "quality-delivery",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2024–2026",
    role: "Applied AI and Quality Engineering contributor",
    outcome:
      "Production delivery workflow. Built reusable validation and automation assets that reduced manual regression effort by approximately 70% and supported repeatable CI execution.",
    tags: [
      "Core Banking",
      "Payment Hub",
      "Katalon",
      "Postman",
      "SQL",
      "JMeter",
      "GitLab CI/CD",
      "Azure DevOps Pipelines"
    ],
    highlights: [
      "Built and demonstrated an omnichannel automation proof of concept across Web, iOS, and Android, contributing to approximately 20 person-months of follow-on delivery work.",
      "Validated end-to-end financial transaction flows through API testing, SQL-based database verification, regression testing, and stress testing.",
      "Authored more than 1,500 lines of reusable SQL validation queries and maintained coverage across all in-scope API endpoints.",
      "Integrated automated validation into GitLab and Azure DevOps CI workflows for repeatable regression and delivery execution."
    ]
  },
  {
    slug: "e-commerce-ai",
    label: "Applied AI System",
    title: "E-Commerce AI Assistant",
    subtitle: "Vector search and conversational product discovery",
    summary:
      "An end-to-end AI shopping assistant combining filtered vector search and agent-driven conversational retrieval for natural-language product discovery.",
    group: "applied-ai-systems",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2025",
    repoUrl: "https://github.com/truong51972/E_commerce_AI",
    role: "Implementation-focused system build",
    outcome:
      "Prototype. Delivered a containerized system covering semantic search, conversational consultation, persistence, caching, and service orchestration.",
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
    subtitle: "A Django learning platform with a separate AI-assisted monitoring service",
    summary:
      "A full-stack learning and assessment platform covering structured course content, enrollment, quizzes, reporting, role-based workflows, and a separately deployed face-detection service.",
    group: "engineering-foundations",
    visualTier: "supporting",
    homepageFeatured: false,
    period: "2024",
    repoUrl: "https://github.com/truong51972/LMS",
    role: "Solo developer of the initial version and primary developer in the extended team project",
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
    label: "Earlier AI Research",
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
    label: "Earlier Computer Vision System",
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
    title: "Applied AI Engineer",
    org: "FPT Software · Ho Chi Minh City, Vietnam",
    bullets: [
      "IQP (Code Intelligence & Retrieval): Architected backend retrieval combining dense semantic search, BM25 lexical ranking, and code-graph relationships, exposing repository-aware engineering context to AI clients through MCP.",
      "Agent Assurance / Flezi Polaris: Architected a trace-based evaluation system using LiteLLM and OpenTelemetry capture, multi-turn trajectory reconstruction, behavioral evaluation, and reproducible regression gates; the solution later received the Golden Solution Prize (1st place) at IVS Solution Day 2.0 2026.",
      "Automation & Delivery Engineering: Developed automated validation across API, database, web, and mobile layers and integrated repeatable execution into GitLab and Azure DevOps CI pipelines.",
      "Banking Systems Verification: Built reusable cross-platform automation and SQL-based validation across banking and payment systems, reducing manual regression effort by approximately 70%; an omnichannel automation proof of concept contributed to approximately 20 person-months of follow-on delivery work."
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
    id: "ivs-solution-day-2026-gold",
    title: "Golden Solution Prize — IVS Solution Day 2.0 2026",
    badge: "Golden Solution Prize · 1st Place",
    category: "Competition",
    period: "Sep 18, 2026",
    org: "IVS Solution Day 2.0 · FPT Software",
    team: "Flezi Polaris",
    role: "Agent Assurance solution engineering",
    description:
      "Awarded the Golden Solution Prize (1st place) at IVS Solution Day 2.0 for Flezi Polaris, an Agent Assurance solution focused on AI-agent evaluation, runtime evidence capture, and governed quality verification.",
    keyContributions: [
      "Built on the Agent Assurance architecture for trace-based AI-agent evaluation and reproducible quality verification",
      "Connected runtime evidence capture, behavioral evaluation, and regression-oriented assurance into a coherent solution workflow",
      "Presented the Agent Assurance capability as Flezi Polaris for IVS Solution Day 2.0 2026"
    ],
    images: [
      {
        src: "images/ivs-solution-day-2026-gold.jpg",
        alt: "Flezi Polaris team receiving the Golden Solution Prize at IVS Solution Day 2.0 2026",
        caption: "Award Ceremony: Flezi Polaris received the Golden Solution Prize (1st place) at IVS Solution Day 2.0 on Sep 18, 2026"
      }
    ],
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
      "Awarded 2nd place for independently architecting an AI Agent Verification engine featuring runtime evidence capture, trace-based behavioral evaluation, and governed quality gates; its core capabilities were subsequently integrated into Omni-Agent.",
    keyContributions: [
      "Architected LiteLLM and OpenTelemetry instrumentation for multi-turn execution evidence capture",
      "Designed trace reconstruction and durable evidence workflows with PostgreSQL-backed state",
      "Built record-first behavioral evaluation and regression gates for reproducible agent verification"
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
    title: "AI & Agentic Systems",
    items: [
      "RAG & Hybrid Retrieval",
      "LangGraph",
      "LangChain",
      "Multi-Agent Systems",
      "Model Context Protocol (MCP)",
      "Tool Calling",
      "Vector Search (Qdrant, Milvus)",
      "Docling Layout & OCR",
      "Embeddings"
    ]
  },
  {
    title: "Evaluation & Observability",
    items: [
      "LLM Evaluation",
      "Regression Testing",
      "LLM-as-a-Judge",
      "OpenTelemetry (OTel)",
      "LiteLLM Gateway",
      "Runtime Trace Reconstruction",
      "Deterministic Quality Gates",
      "Prompt Injection Testing",
      "Data Leakage Evaluation",
      "Langfuse"
    ]
  },
  {
    title: "Backend & Product Engineering",
    items: [
      "Python",
      "FastAPI",
      "Django / DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "SQLAlchemy",
      "Pydantic",
      "REST APIs & SSE",
      "Async Workflows",
      "Idempotency Contracts",
      "React",
      "TypeScript"
    ]
  },
  {
    title: "AI-Augmented Development",
    items: [
      "OpenAI Codex",
      "Claude Code",
      "GitHub Copilot",
      "Agentic Coding Workflows",
      "Multi-Agent Delegation",
      "Context Management",
      "Git Worktrees"
    ]
  },
  {
    title: "Cloud & Delivery",
    items: [
      "Google Cloud Platform (Compute Engine, budget management)",
      "DigitalOcean",
      "Heroku",
      "RunPod",
      "Cloudflare",
      "Docker & Docker Compose",
      "GitLab CI/CD",
      "Azure DevOps Pipelines",
      "Nginx",
      "MinIO (S3-Compatible)",
      "Linux"
    ]
  },
  {
    title: "ML & Model Adaptation",
    items: [
      "PyTorch",
      "LoRA / QLoRA",
      "Synthetic Data Generation",
      "Evaluation Benchmarks"
    ]
  }
];

export const supportingTools = ["Astro", "Streamlit", "Postman", "JMeter", "Katalon"];
