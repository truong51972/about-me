export const site = {
  name: "Tran Quoc Truong",
  shortName: "TQT",
  role: "Applied AI Engineer",
  tagline: "Agentic QA · RAG Systems · Python Backend",
  location: "Ho Chi Minh City, Vietnam",
  email: "tranquoctruong20@gmail.com",
  github: "https://github.com/truong51972",
  linkedin: "https://www.linkedin.com/in/truong51972/",
  summary:
    "I build production-oriented AI workflows around Agentic QA, RAG, document intelligence, and Python backend control planes. My strongest edge is connecting LLM workflows with typed domain models, async workers, versioned artifacts, evaluation loops, and QA automation in banking contexts."
};

export const baseStrengths = [
  {
    eyebrow: "Primary direction",
    title: "Applied AI systems, not prompt demos",
    body:
      "I focus on the control plane around AI: project boundaries, jobs, artifacts, versions, queues, traceability, and evaluation."
  },
  {
    eyebrow: "Domain edge",
    title: "Agentic QA and banking automation",
    body:
      "My QA background makes the AI work concrete: test generation, change impact, duplicate bug detection, API validation, and regression workflows."
  },
  {
    eyebrow: "Engineering proof",
    title: "From early CV research to LLM systems",
    body:
      "My work evolved from computer vision and simulation into LLM fine-tuning, RAG, and backend orchestration for production-style AI workflows."
  }
];

export const metrics = [
  { value: "0.655", label: "Macro-F1", detail: "Qwen-2.5-3B LoRA on structured API test generation in APIT." },
  { value: "1,258", label: "Samples", detail: "Controlled synthetic dataset for bilingual API testing examples." },
  { value: "1,500+", label: "SQL validations", detail: "Payment Hub integration testing queries and validation flows." },
  { value: "5/5", label: "Full marks", detail: "Self-driving simulation completed in 125.8 seconds." }
];

export const cases = [
  {
    slug: "omni-agent",
    label: "Flagship case",
    title: "Omni-Agent",
    subtitle: "Enterprise AI Platform for Agentic QA & RAG",
    summary:
      "A production-oriented platform for document intelligence, Agentic QA workflows, RAG, versioned artifacts, asynchronous workers, and evaluation loops.",
    role: "Solo architecture and implementation direction",
    outcome: "Designed domain boundaries, version control, document processing flow, worker contracts, and backend/frontend product surfaces.",
    href: "projects/omni-agent/",
    tags: ["Django/DRF", "RAG", "Celery", "S3", "Vector DB", "LangGraph", "Document intelligence"]
  },
  {
    slug: "apit",
    label: "AI capstone",
    title: "APIT",
    subtitle: "Agent Programmatic Integration Testing",
    summary:
      "A capstone project that analyzes API documentation and generates structured API test cases using controlled data synthesis, LoRA fine-tuning, RAG, and automated evaluation.",
    role: "System Architecture Designer",
    outcome: "Qwen-2.5-3B LoRA reached 0.655 macro-F1 on structured API test generation under the project evaluation setup.",
    href: "projects/apit/",
    tags: ["LLM fine-tuning", "LoRA", "Qwen", "RAG", "API Testing", "Evaluation"]
  },
  {
    slug: "banking-automation",
    label: "Industry proof",
    title: "Banking QA Automation",
    subtitle: "Core Banking & Payment Hub validation",
    summary:
      "Automation and integration testing work across Core Banking and financial transaction systems, connecting QA automation with real banking-domain constraints.",
    role: "Applied AI & QA Automation Engineer",
    outcome: "Supported a Core Banking automation PoC and delivered Payment Hub API, database, regression, and stress testing workflows.",
    href: "projects/banking-automation/",
    tags: ["Core Banking", "Payment Hub", "Katalon", "Postman", "SQL", "JMeter"]
  },
  {
    slug: "self-driving-car",
    label: "Earlier AI research",
    title: "Self-driving Car Problem",
    subtitle: "Second Prize computer vision research",
    summary:
      "An award-winning research paper on a simulated self-driving pipeline combining Unity, YOLOv8 traffic sign classification, YOLOv8 lane segmentation, and PID-based control.",
    role: "Primary author and implementer, with mentor support",
    outcome: "Completed the simulation benchmark in 125.8 seconds with full marks while documenting model limitations and environment constraints.",
    href: "projects/self-driving-car/",
    tags: ["YOLOv8", "Computer Vision", "Unity", "Segmentation", "PID", "Research Paper"]
  }
];

export const decisions = [
  {
    title: "Django as the AI control plane",
    context:
      "AI products need strong ownership, permissions, migrations, admin, auditability, and long-lived domain state.",
    decision:
      "Use Django/DRF for the control plane and keep heavy model/data tasks behind workers or service clients.",
    tradeoff:
      "Not the fastest runtime for every request, but much stronger for domain governance, admin visibility, and data integrity."
  },
  {
    title: "Stateless document worker boundary",
    context:
      "Document OCR, chunking, and artifact generation are CPU/GPU-heavy and should not own product semantics.",
    decision:
      "Keep omni-doc-processor as a technical worker: receive typed commands, publish result envelopes, and let the API own domain state.",
    tradeoff:
      "More contract design upfront, but fewer hidden state transitions and cleaner retry/replay behavior."
  },
  {
    title: "Versioned artifacts before vector sync",
    context:
      "RAG workflows break down when source documents, OCR text, chunks, and vector records drift independently.",
    decision:
      "Model DocumentVersion, ProcessingArtifact, Chunk, and ChunkVersion explicitly before syncing to the vector database.",
    tradeoff:
      "More schema work, but better traceability, rollback, comparison, and source-of-truth control."
  },
  {
    title: "Evaluation as a first-class workflow",
    context:
      "Agentic QA output is only useful if generated tests and reasoning can be judged consistently.",
    decision:
      "Represent evaluation through structured metrics, LLM-as-judge rubrics, and traceable generated artifacts instead of informal demo output.",
    tradeoff:
      "Requires stricter output schemas, but makes quality visible and discussable."
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
      "Worked on document-processing flows for OCR/preview generation, enhanced OCR strategy, version commit, chunk generation, artifact storage, and vector indexing.",
      "Delivered API, Web, and Mobile automation solutions that increased test coverage and reduced manual regression effort."
    ]
  },
  {
    period: "Sep 2024 — Dec 2024",
    title: "Full-stack Developer Intern",
    org: "FPT Software Academy · Ho Chi Minh City, Vietnam",
    bullets: [
      "Built Django-based web applications and deployed containerized services with Docker.",
      "Improved deployment reliability through production-oriented configuration and Cloudflare integration.",
      "Reduced deployment cycle time through cleaner containerized delivery workflows."
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
    title: "Applied AI, Agents & RAG",
    items: ["LangGraph", "LangChain", "MCP wrapper", "RAG", "Hybrid RAG", "Langfuse", "LLM evaluation", "LLM-as-Judge", "LoRA/QLoRA"]
  },
  {
    title: "Backend & AI Systems",
    items: ["Python", "Django/DRF", "FastAPI", "PostgreSQL", "Redis/Celery", "Docker", "REST APIs", "async workers", "service layers", "domain boundaries"]
  },
  {
    title: "QA Automation & Banking",
    items: ["Agentic QA", "API Testing", "Katalon", "Postman", "JMeter", "SQL validation", "Core Banking", "Payment Hub"]
  },
  {
    title: "Full-stack AI Prototyping",
    items: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "dashboard UI", "AI-assisted development", "document workspace UI"]
  }
];
