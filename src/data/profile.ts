export const site = {
  name: "Tran Quoc Truong",
  shortName: "TQT",
  role: "Applied AI / Python Backend Engineer",
  tagline: "RAG · Agentic QA · Django · LLM Systems",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "I build RAG, Agentic QA, and document-intelligence systems with Django, async workers, LLM workflows, and QA automation experience."
};

export const cases = [
  {
    slug: "omni-agent",
    label: "Flagship project",
    title: "Omni-Agent",
    subtitle: "Enterprise AI Platform for Agentic QA & RAG",
    summary:
      "A production-oriented platform for document intelligence, Agentic QA workflows, RAG, versioned artifacts, async workers, and evaluation.",
    role: "Solo architecture and implementation",
    outcome:
      "Designed domain boundaries, version control, document processing flow, worker contracts, and backend/frontend product surfaces.",
    href: "projects/omni-agent/",
    tags: ["Django/DRF", "RAG", "Celery", "S3", "Vector DB", "LangGraph", "Document intelligence"],
    highlights: [
      "Versioned document processing pipeline with OCR, chunking, and artifact storage",
      "Async worker architecture with typed command/result envelopes",
      "RAG layer with vector sync and retrieval tracing"
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
    outcome: "Delivered Payment Hub API, database, regression, and stress testing workflows.",
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
    title: "Applied AI / RAG / Agents",
    items: ["LangGraph", "LangChain", "RAG", "Hybrid RAG", "LLM evaluation", "LLM-as-Judge", "LoRA/QLoRA"]
  },
  {
    title: "Backend / Systems",
    items: ["Python", "Django/DRF", "FastAPI", "PostgreSQL", "Redis/Celery", "Docker", "REST APIs", "async workers"]
  },
  {
    title: "QA Automation / Banking",
    items: ["Agentic QA", "API Testing", "Katalon", "Postman", "JMeter", "SQL validation", "Core Banking", "Payment Hub"]
  },
  {
    title: "Frontend Prototyping",
    items: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "AI-assisted development"]
  }
];