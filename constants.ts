
import { Experience, Project, Education, Award, Publication, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Abrar Hameem",
  email: "abrarhameem.001@gmail.com",
  phone: "+880 1841 510276",
  location: "Dhaka, Bangladesh",
  linkedin: "https://www.linkedin.com/in/abrar-hameem/",
  github: "https://github.com/abrarcse29",
  codeforces: "https://codeforces.com/profile/abrar29",
  resumePdf: "https://drive.google.com/file/d/1pQOu2QFklOS3XkHayOF5Xes5y81Yr6Zs/view?usp=sharing",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Softograph",
    location: "Dhaka, Bangladesh",
    role: "Junior AI Engineer",
    period: "May 2025 – Present",
    bullets: [
      "Developing advanced AI solutions using NLP, Prompt Engineering, and model training for task-specific applications, enhancing system intelligence.",
      "Implementing image processing solutions with YOLO and automated speech recognition to support real-time AI applications.",
      "Designing and optimizing APIs using Flask for seamless backend integration and scalability across multiple services.",
      "Managing MySQL, PostgreSQL, and MongoDB databases while integrating Redis for caching to improve retrieval efficiency.",
      "Collaborating with cross-functional teams to integrate AI solutions and analyzing requirements to align on project goals."
    ]
  },
  {
    company: "Softograph",
    location: "Dhaka, Bangladesh",
    role: "AI Developer Intern",
    period: "Feb 2025 – Apr 2025",
    bullets: [
      "Developed Generative AI solutions using LangChain and Prompt Engineering to create intelligent, context-aware applications.",
      "Managed and queried MySQL databases to support data-driven applications, ensuring efficient data retrieval and storage."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Data Dialogue",
    association: "Associated with Softograph",
    tags: ["LangChain", "Ollama", "Flask", "RabbitMQ", "Celery"],
    bullets: [
      "Developed a scalable conversational AI system utilizing LangChain and Ollama models connected to a Flask backend.",
      "Implemented a data-centric module to process user queries and deliver insights from database connections.",
      "Integrated Celery task queue with RabbitMQ to handle asynchronous processing efficiently."
    ]
  },
  {
    title: "Document OCR",
    association: "Associated with Softograph",
    tags: ["YOLO", "Qwen3-VL", "Celery", "Redis", "Flask"],
    bullets: [
      "Developed an automated Document OCR and Classification pipeline for structured data extraction.",
      "Used a custom-trained YOLO model to detect and classify document types with high accuracy.",
      "Integrated a local vision-language model (Qwen3-VL) to extract key information in a structured JSON format."
    ]
  },
  {
    title: "RAG Implementation",
    association: "Individual Project",
    tags: ["Langchain", "QdrantDB", "Flask", "Gemini API"],
    bullets: [
      "Implemented a Retrieval-Augmented Generation (RAG) system using LangChain and Google Gemini.",
      "Combined document retrieval with generative AI to answer user queries accurately based on uploaded documents.",
      "Leveraged tools for text splitting, vector storage, and context-aware generation."
    ],
    githubUrl: "https://github.com/abrarCSE29/Retrieval-Augmented-Generation.git"
  },
  {
    title: "MediMate - Healthcare Mobile App",
    association: "Individual Project",
    tags: ["JAVA", "Android", "Ollama", "Llama3.2"],
    bullets: [
      "Created a Java-based Android application utilizing Llama3.2 via Ollama for AI-powered medical report summaries.",
      "Features include medicine reminders, doctor notifications, and simplified personal health management."
    ],
    githubUrl: "https://github.com/abrarCSE29/Medimate.git"
  },
  {
    title: "Voice Assistant",
    association: "Individual Project",
    tags: ["Flask", "Whisper", "Google TTS", "Ollama"],
    bullets: [
      "Created a bilingual (Bengali/English) voice assistant capable of query handling and response generation.",
      "Utilized Ollama for intelligence and SQLite3 for storing interaction history."
    ],
    githubUrl: "https://github.com/abrarCSE29/Voice-Assistant.git"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "JavaScript"]
  },
  {
    category: "AI/ML",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "YOLO", "Langsmith", "MLFlow", "OpenCV","RAG", "Vector DB", ]
  },
  {
    category: "Backend & Frameworks",
    items: ["Node.js", "React.js", "Flask", "FastAPI","Django", "Celery", "RabbitMQ", "Ollama", "Celery"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"]
  },
  {
    category: "Tools",
    items: ["Git", "Github", "Docker"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Jahangirnagar University",
    location: "Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science and Engineering",
    cgpa: "3.70",
    period: "2020 – 2025",
    thesis: "Evaluation of LLMs for Generating Counterfactual Reasoning in Text"
  },
  {
    institution: "BAF Shaheen College",
    location: "Dhaka, Bangladesh",
    degree: "Higher Secondary Certificate (Science)",
    cgpa: "5.00",
    period: "2019"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Evaluation of LLMs for Generating Counterfactual Reasoning in Text",
    date: "Dec 2025",
    venue: "Accepted in IEEE Big Data Conference 2025 : LLMs4All, Macau, China"
  }
];

export const AWARDS: Award[] = [
  {
    title: "CodeSamurai Hackathon 2024",
    description: "Finalist, demonstrating teamwork and innovation under pressure."
  },
  {
    title: "CTF Competitions",
    description: "Competed in IUT CTF and BUET CTF 2024, enhancing cybersecurity skills."
  },
  {
    title: "Programming Contests",
    description: "Participated in MBSTU IDPC and ICPC Preliminary 2020."
  }
];
