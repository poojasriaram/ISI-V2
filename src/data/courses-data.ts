export interface Course {
  id: string;
  title: string;
  category: "Core" | "Specialized";
  categoryLabel: string;
  duration: string;
  hours: number;
  batchSize: number;
  description: string;
  iconName: string;
  badge?: string;
}

export const coursesData: Course[] = [
  {
    id: "C1",
    title: "AI Certification",
    category: "Core",
    categoryLabel: "Artificial Intelligence",
    duration: "3 Months",
    hours: 90,
    batchSize: 15,
    badge: "Flagship",
    description: "Industry-aligned certification program in Artificial Intelligence and Machine Learning fundamentals.",
    iconName: "Brain"
  },
  {
    id: "C2",
    title: "Cyber-Security",
    category: "Core",
    categoryLabel: "Cyber Security",
    duration: "3 Months",
    hours: 90,
    batchSize: 15,
    badge: "Flagship",
    description: "Core principles of cyber defense, threat intelligence, network protection, and security management.",
    iconName: "ShieldCheck"
  },
  {
    id: "C3",
    title: "IoT & Industrial Automation",
    category: "Core",
    categoryLabel: "Internet of Things",
    duration: "3 Months",
    hours: 90,
    batchSize: 15,
    badge: "Flagship",
    description: "Connected sensor systems, edge node deployment, and smart industrial automation architectures.",
    iconName: "Cpu"
  },
  {
    id: "C4",
    title: "Automotive Cyber-Security & EV",
    category: "Specialized",
    categoryLabel: "Automotive & EV",
    duration: "3 Months",
    hours: 90,
    batchSize: 15,
    badge: "Specialized",
    description: "Securing connected vehicle networks, ECU protocols, and electric vehicle powertrain intelligence.",
    iconName: "Zap"
  },
  {
    id: "C5",
    title: "High-Performance Computing",
    category: "Specialized",
    categoryLabel: "Supercomputing & HPC",
    duration: "3 Months",
    hours: 90,
    batchSize: 15,
    badge: "Specialized",
    description: "Parallel computing architectures, cluster management, and high-throughput workload processing.",
    iconName: "Server"
  },
  {
    id: "C6",
    title: "Robotics, Drones & Industrial Automation",
    category: "Specialized",
    categoryLabel: "Robotics & Avionics",
    duration: "3 Months",
    hours: 90,
    batchSize: 15,
    badge: "Specialized",
    description: "Autonomous robotic control, UAV drone navigation systems, and smart factory mechatronics.",
    iconName: "Bot"
  },
  {
    id: "C7",
    title: "Quantum Computing",
    category: "Specialized",
    categoryLabel: "Quantum Technologies",
    duration: "3 Months",
    hours: 90,
    batchSize: 15,
    badge: "Specialized",
    description: "Quantum algorithms, qubit mechanics, and next-generation quantum computing paradigm foundations.",
    iconName: "Atom"
  },
  {
    id: "C8",
    title: "Master Trainer Program",
    category: "Specialized",
    categoryLabel: "Train the Trainer",
    duration: "3 Months",
    hours: 120,
    batchSize: 10,
    badge: "Advanced",
    description: "Advanced pedagogical training and practical technical instruction for technology educators and leads.",
    iconName: "GraduationCap"
  },
  {
    id: "C9",
    title: "IEEE BLP",
    category: "Specialized",
    categoryLabel: "IEEE Blended Learning",
    duration: "2 Months",
    hours: 60,
    batchSize: 20,
    badge: "Specialized",
    description: "IEEE Blended Learning Program focusing on industry-standard engineering practices and tech skills.",
    iconName: "BookOpen"
  }
];

export const whyChooseData = [
  {
    title: "Government-Backed Certification",
    description: "CDAC brand equity and government-backed certification trusted by industry and academia.",
    iconName: "Award"
  },
  {
    title: "Hands-on Lab Infrastructure",
    description: "Physical centres with hands-on lab infrastructure and dual-shift scheduling.",
    iconName: "Building2"
  },
  {
    title: "Industry-Aligned Learning",
    description: "Technology programs focused on current and emerging industry requirements.",
    iconName: "Target"
  },
  {
    title: "Accessible Premium Education",
    description: "High-impact structured programs designed to make premium technology education accessible.",
    iconName: "CheckCircle2"
  }
];

export const courseDeliveryData = [
  {
    title: "Flexible Duration Options",
    description: "Structured 3-month comprehensive programs & specialized 2-month IEEE BLP pathway.",
    badge: "Duration"
  },
  {
    title: "Hands-on Practical Training",
    description: "Emphasis on physical lab infrastructure, practical exercises, and real-world tools.",
    badge: "Methodology"
  },
  {
    title: "Dual-Shift Scheduling",
    description: "Weekend and evening batches available to accommodate working professionals and students.",
    badge: "Schedules"
  },
  {
    title: "Physical Lab Infrastructure",
    description: "State-of-the-art facilities located at CDAC-MEPZ Digital Technology Centre.",
    badge: "Infrastructure"
  }
];

export const targetAudienceData = [
  {
    title: "Students & Graduates",
    description: "For learners looking to build technology skills and improve career readiness.",
    iconName: "GraduationCap"
  },
  {
    title: "Working Professionals",
    description: "For professionals seeking technology upskilling and career progression.",
    iconName: "Briefcase"
  },
  {
    title: "Corporate Teams",
    description: "For organizations looking for structured technology training.",
    iconName: "Users"
  },
  {
    title: "Technology Aspirants",
    description: "For learners targeting emerging domains such as AI, Cyber-Security, EV, Robotics, HPC and Quantum Computing.",
    iconName: "Compass"
  }
];
