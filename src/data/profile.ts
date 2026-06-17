export const site = {
  name: "Tran Quoc Truong",
  shortName: "TQT",
  role: "Applied AI Backend Engineer",
  tagline: "AI Agent Hub · RAG · Agent Testing · Django/DRF",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "I build Django/DRF-based AI agent systems, RAG workflows, and agent testing/evaluation platforms. I combine backend engineering, QA automation, and LLM evaluation to build traceable, testable AI workflows."
};

export const cases = [
  {
    slug: "omni-agent",
    label: "Flagship project",
    title: "Omni-Agent",
    subtitle: "Django/DRF AI Agent Hub for Knowledge Builder & Agent Testing",
    summary:
      "A Django/DRF-based AI Agent Hub where the main backend owns product logic, domain state, workflow rules, jobs, artifacts, and APIs, while stateless workers and services execute technical AI tasks.",
    role: "Solo architecture and implementation",
    outcome:
      "Designed domain boundaries, version control, document processing flow, worker contracts, and backend/frontend product surfaces.",
    href: "projects/omni-agent/",
    tags: [
      "Django/DRF",
      "AI Agent Hub",
      "Agent Testing",
      "RAG",
      "Async Workers",
      "S3 Artifacts",
      "PostgreSQL",
      "React/Vite"
    ],
    highlights: [
      "Designed Omni-Agent as the main Django/DRF backend for project-centric AI agent products, owning domain logic, permissions, workflow state, job lifecycle, artifact metadata, and product module boundaries.",
      "Built Knowledge Builder as the first product module, supporting versioned document workflows, OCR/chunking pipelines, S3-compatible artifacts, presigned preview/download URLs, and traceable RAG foundations.",
      "Modeled external workers and REST services as stateless executors for technical tasks such as OCR, document parsing, chunking, embedding, retrieval, and evaluation, with Django persisting domain results.",
      "Proposed ATA as an Agent Testing and Audit module for evaluating RAG and LLM-agent workflows through eval datasets, judge/critic/meta-judge patterns, and regression reports.",
      "Prototyped React/Vite console workflows for project navigation, product switching, document workspace review, version selection, preview tabs, and processing status visibility."
    ]
  },
  {
    slug: "apit",
    label: "AI evaluation",
    title: "APIT",
    subtitle: "Agent Programmatic Integration Testing",
    summary:
      "Analyzes API documentation and generates structured test cases using data synthesis, LoRA fine-tuning, RAG, and automated evaluation.",
    role: "System Architect",
    outcome: "Qwen-2.5-3B LoRA reached 0.655 macro-F1 on structured API test generation.",
    href: "projects/apit/",
    tags: ["LLM fine-tuning", "LoRA", "Qwen", "RAG", "API Testing", "Evaluation"],
    highlights: [
      "1,258 controlled synthetic samples for bilingual API testing",
      "LoRA/QLoRA evaluation pipeline with structured metrics",
      "LLM-as-judge rubric for generated test quality"
    ]
  },
  {
    slug: "banking-automation",
    label: "Industry delivery",
    title: "Banking QA Automation",
    subtitle: "Core Banking & Payment Hub validation",
    summary:
      "Automation and integration testing across Core Banking and financial transaction systems.",
    role: "Applied AI & QA Automation Engineer",
    outcome: "40% test coverage increase, 70% manual effort reduction, ~20 man-month omnichannel contract.",
    href: "projects/banking-automation/",
    tags: ["Core Banking", "Payment Hub", "Katalon", "Postman", "SQL", "JMeter"],
    highlights: [
      "1,500+ SQL validations for Payment Hub integration",
      "API, Web, and Mobile automation delivery",
      "Regression and stress testing across banking domains"
    ]
  },
  {
    slug: "self-driving-car",
    label: "Earlier AI research",
    title: "Self-driving Car Problem",
    subtitle: "Second prize computer vision research",
    summary:
      "Award-winning research paper on a simulated self-driving pipeline combining Unity, YOLOv8, and PID control.",
    role: "Primary author and implementer",
    outcome: "Completed the simulation benchmark in 125.8 seconds with full marks.",
    href: "projects/self-driving-car/",
    tags: ["YOLOv8", "Computer Vision", "Unity", "Segmentation", "PID", "Research Paper"],
    highlights: [
      "Second prize award in research paper competition",
      "YOLOv8 traffic sign classification and lane segmentation",
      "PID-based control in Unity simulation environment"
    ]
  }
];

export const timeline = [
  {
    period: "Dec 2024 — Present",
    title: "Applied AI Engineer & QA Automation Engineer",
    org: "FPT Software · Ho Chi Minh City, Vietnam",
    bullets: [
      "Built AI-assisted QA workflows for document understanding, RAG Q&A, test-case generation, duplicate bug detection, traceability, and change impact analysis.",
      "Designed backend orchestration with Django/DRF, FastAPI, Redis/Celery, PostgreSQL, async workers, service layers, and clear domain boundaries.",
      "Delivered API, Web, and Mobile automation solutions that increased test coverage and reduced manual regression effort."
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
    title: "Applied AI & Agent Evaluation",
    items: [
      "RAG",
      "Hybrid RAG",
      "LangGraph",
      "LangChain",
      "LiteLLM",
      "Langfuse",
      "LLM Evaluation",
      "LLM-as-a-Judge",
      "eval datasets",
      "judge/critic/meta-judge patterns"
    ]
  },
  {
    title: "Backend & Systems",
    items: [
      "Python",
      "Django/DRF",
      "FastAPI",
      "PostgreSQL",
      "Redis/Celery",
      "Docker",
      "REST APIs",
      "async workers",
      "service layers",
      "domain modeling"
    ]
  },
  {
    title: "QA Automation & Banking",
    items: [
      "Agentic QA",
      "Agent Testing",
      "API Testing",
      "Postman",
      "Katalon",
      "Appium",
      "JMeter",
      "SQL validation",
      "Core Banking",
      "Payment Hub"
    ]
  },
  {
    title: "Frontend Prototyping",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "internal dashboard UI",
      "AI-assisted development"
    ]
  }
];