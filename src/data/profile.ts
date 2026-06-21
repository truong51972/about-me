export type ProjectGroup =
  | "featured-systems"
  | "applied-ai-systems"
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
  role: "Applied AI Backend Engineer",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "I design and build production-oriented Python systems for applied AI, spanning agentic workflows, RAG, evaluation, and machine learning services."
};

export const cases: ProjectCase[] = [
  {
    slug: "omni-agent",
    label: "Flagship system",
    title: "Omni-Agent",
    subtitle: "Django/DRF AI Agent Hub for Knowledge Builder and Agent Testing",
    summary:
      "A Django/DRF AI Agent Hub where the main backend owns product logic, domain state, workflow rules, jobs, artifacts, and APIs while stateless workers execute technical AI tasks.",
    group: "featured-systems",
    visualTier: "flagship",
    homepageFeatured: true,
    period: "2026-Present",
    role: "Solo architecture and implementation",
    outcome:
      "Designed domain boundaries, versioned document workflows, worker contracts, artifact handling, and backend/frontend product surfaces.",
    tags: [
      "Django/DRF",
      "AI Agent Hub",
      "RAG",
      "Agent Testing",
      "Async Workers",
      "S3 Artifacts",
      "PostgreSQL",
      "React/Vite"
    ],
    highlights: [
      "Designed Omni-Agent as the main Django/DRF backend for project-centric AI products, owning domain logic, permissions, workflow state, job lifecycle, artifact metadata, and module boundaries.",
      "Built Knowledge Builder as the first product module, supporting versioned document workflows, OCR/chunking pipelines, S3-compatible artifacts, presigned URLs, and traceable RAG foundations.",
      "Modeled external workers and REST services as stateless executors for OCR, document parsing, chunking, embedding, retrieval, and evaluation tasks.",
      "Proposed ATA as an Agent Testing and Audit module for evaluating RAG and LLM-agent workflows through datasets, judge/critic patterns, and regression reports.",
      "Prototyped React/Vite console workflows for project navigation, product switching, document review, version selection, preview tabs, and processing status visibility."
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
    subtitle: "Core Banking, Payment Hub, API, database, web, and mobile validation",
    summary:
      "Enterprise QA automation and integration testing across Core Banking, Payment Hub, API, database, web, and mobile systems.",
    group: "featured-systems",
    visualTier: "featured",
    homepageFeatured: true,
    period: "2024-2026",
    role: "Applied AI and QA Automation Engineer",
    outcome:
      "Delivered confidential banking QA automation work across transaction integrity, regression, API, database, web, and mobile validation.",
    tags: ["Core Banking", "Payment Hub", "Katalon", "Postman", "SQL", "JMeter"],
    highlights: [
      "Built API, web, and mobile automation coverage for complex banking journeys.",
      "Validated financial transaction behavior through API assertions, SQL checks, and regression scenarios.",
      "Used Katalon, Appium, Postman, and JMeter across omnichannel banking QA contexts."
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
    title: "Applied AI Engineer and QA Automation Engineer",
    org: "FPT Software · Ho Chi Minh City, Vietnam",
    bullets: [
      "Built AI-assisted QA workflows for document understanding, RAG Q&A, test-case generation, duplicate bug detection, traceability, and change impact analysis.",
      "Designed backend orchestration with Django/DRF, FastAPI, Redis/Celery, PostgreSQL, async workers, service layers, and clear domain boundaries.",
      "Delivered API, web, and mobile automation solutions in confidential banking QA contexts."
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
    note: "Computer vision, machine learning, QA automation, and LLM systems."
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
      "Agentic workflows",
      "Vector search",
      "LangGraph",
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
    title: "Quality engineering",
    items: [
      "API and integration testing",
      "SQL validation",
      "Regression testing",
      "Performance testing",
      "Katalon",
      "Appium",
      "Postman and JMeter"
    ]
  }
];

export const supportingTools = ["React", "Astro", "Streamlit"];
