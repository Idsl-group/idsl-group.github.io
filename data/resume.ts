interface Degree {
  name: string;
  field: string;
  startYear: number;
  endYear: number;
  gpa: string;
  status: string;
  location: string;
  highlights?: string[];
  relevantCoursework?: string[];
  researchFocus?: string[];
}

interface EducationEntry {
  institution: string;
  degrees: Degree[];
}

interface Project {
  title: string;
  startDate: string;
  endDate: string;
  associatedWith: string | null;
  description: string;
  skills: string[];
  link: string | null;
  notes: string | null;
}

interface CurrentPosition {
  company: string;
  location: string;
  period: string;
  title: string;
  link: string;
  email: string;
}

interface WorkExperienceEntry {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  details: string[];
}

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  submittedTo: string;
  status: string;
  year: number;
  citations: number;
  doi: string;
}

interface PublicationMetrics {
  totalCitations: number;
  citationsSince2020: number;
  hIndex: number;
  hIndexSince2020: number;
  i10Index: number;
  i10IndexSince2020: number;
  citationsByYear: { [year: string]: number };
}

interface Course {
  name: string;
  grade: string;
}

interface Resume {
  summary: string[];
  focusAreas: string[];
  callToAction: string[];
  courses: Course[];
  projects: Project[];
  currentPositions: CurrentPosition[];
  education: EducationEntry[];
  workExperience: WorkExperienceEntry[];
  publications: Publication[];
  publicationMetrics: PublicationMetrics;
}

const resume: Resume = {
  summary: [
    "I’ve always been driven by the challenge of transforming raw data into meaningful insights. Working in IT, I’ve seen firsthand how businesses struggle to extract value from their data, optimize decision-making, and stay ahead in an increasingly AI-driven world. These experiences have fueled my passion for Machine Learning and Data Science—not just as analytical tools, but as powerful solutions to real-world problems. With a strong background in Deep Learning, Predictive Analytics, and AI Automation, my goal is to design intelligent systems that go beyond identifying patterns—they predict, optimize, and automate processes for greater efficiency and innovation.",
    "Too often, I’ve seen organizations react to challenges after they happen. Whether it's forecasting demand, detecting fraud, or preventing system failures, the real game-changer is using AI to anticipate problems before they arise. That’s where I want to make an impact—by bridging the gap between data and intelligent action. Working with major industry players like Fujitsu, CGI, Telus, and IBM, I’ve learned that data-driven strategies aren’t just a competitive advantage—they’re essential for survival in today’s fast-moving world.",
  ],
  focusAreas: [
    "Predictive AI: Building models that forecast trends, risks, and outcomes with high accuracy.",
    "Anomaly Detection: Identifying fraud, cybersecurity threats, and operational failures before they escalate.",
    "AI-Driven Automation: Designing self-learning systems that adapt and optimize processes in real time.",
    "Scalable Data Solutions: Creating ML pipelines that can handle vast amounts of data efficiently.",
  ],
  callToAction: [
    "I’m looking to collaborate with AI research teams, innovative companies, and forward-thinking data science professionals who are passionate about:\n✅ Developing AI-powered business intelligence tools.\n✅ Creating real-time predictive analytics models for industries like finance, healthcare, and cybersecurity.\n✅ Building scalable ML pipelines that bring research into production.\nIf you're working on exciting projects in AI, ML, or data-driven automation, or just want to exchange ideas over coffee in Montreal, I’d love to connect! Open to research roles, collaborations, and impactful AI/ML opportunities.",
  ],

  courses: [
    {
      name: "Neural Networks",
      grade: "A+",
    },
    {
      name: "Advanced Signal Processing",
      grade: "A+",
    },
    {
      name: "Probability and Stochastic Processes",
      grade: "A+",
    },
    {
      name: "Distributed Software Systems",
      grade: "A",
    },
    {
      name: "Error Detecting and Correcting Codes",
      grade: "A+",
    },
    {
      name: "Microprocessors",
      grade: "A",
    },
  ],

  projects: [
    {
      title: "Log classification using BERT and LLMs",
      startDate: "May 2025",
      endDate: "Present",
      associatedWith: null,
      description:
        "This project focuses on error-log classification using BERT and LLMs. While the real system was built for a company named ZOHO, this version uses synthetic data — the problem-solving architecture remains identical to the production implementation.",
      skills: [
        "BERT",
        "LLMs",
        "Machine Learning",
        "Cybersecurity",
        "Log Classification",
        "Data Preprocessing",
        "Intrusion Detection",
      ],
      link: "https://github.com/pranav-k-jha/kaggle-notebooks/blob/main/CIC-IDS-2017%20BERT%20Classification.ipynb",
      notes: null,
    },
    {
      title:
        "Predictive Modeling and Real-Time Control of Urban Flooding Using Deep Learning and Edge-based IoT Sensor Networks",
      startDate: "May 2025",
      endDate: "Present",
      associatedWith: "MKJHA CONSULTING",
      description:
        "This research aims to develop a machine learning-based predictive system for urban flood forecasting and prevention. A hybrid deep learning model (e.g., CNN-LSTM) is trained on multi-source spatial-temporal data including rainfall, terrain elevation, soil absorption, drainage sensor outputs, and weather forecasts. The system is integrated with an edge-IoT infrastructure to enable real-time monitoring and actuation (e.g., dynamic control of floodgates and alerts). The framework supports adaptive learning to improve predictions over time and provides actionable insights to urban planners and emergency services.",
      skills: [
        "CNN-LSTM",
        "Deep Learning",
        "Edge IoT",
        "Machine Learning",
        "Time Series Analysis",
        "Data Visualization",
        "IoT",
        "Edge Computing",
        "Urban Planning",
      ],
      link: null,
      notes: null,
    },
    {
      title: "MKJHA Consulting Website",
      startDate: "April 2025",
      endDate: "Present",
      associatedWith: null,
      description:
        "Designed, developed, and currently maintain the MKJHA Consulting website using Next.js, React, Tailwind CSS, and TypeScript. The site features a modern, responsive design with an emphasis on user experience and accessibility.",
      skills: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Web Development",
        "Website Design",
        "Website Development",
      ],
      link: "https://www.mkjhaconsulting.com",
      notes: null,
    },
    {
      title:
        "Machine Learning–Driven Forecasting of Travel Patterns: A Minnesota Case Study",
      startDate: "April 2025",
      endDate: "Present",
      associatedWith: "MKJHA CONSULTING",
      description:
        "This work-in-progress presents a machine learning framework for forecasting travel demand in Minnesota using multimodal inputs—GPS trajectories, transit schedules, weather data, and socio-demographic indicators. We train and compare ensemble models (random forests, gradient boosting) alongside LSTM networks, achieving preliminary error reductions of ~20% versus classical time-series forecasts. These early findings demonstrate the potential of data-driven approaches to inform dynamic service planning and infrastructure investment for regional transportation agencies.",
      skills: [
        "Random Forests",
        "Gradient Boosting",
        "LSTM",
        "Time Series Forecasting",
        "Machine Learning",
        "Travel Forecasting",
        "Predictive Analytics",
      ],
      link: null,
      notes: "Findings will be submitted for publication in a reputed journal.",
    },
    {
      title: "Binary Classification with XGBoost on CIC-IDS-2017 Dataset",
      startDate: "January 2025",
      endDate: "January 2025",
      associatedWith: null,
      description:
        "This notebook focuses on binary classification using the CIC-IDS-2017 cybersecurity dataset, employing XGBoost (Extreme Gradient Boosting)—a powerful gradient boosting framework optimized for structured numerical data. The objective is to improve Intrusion Detection Systems (IDS) by leveraging XGBoost's efficiency in handling complex, high-dimensional datasets. The study involves preprocessing network traffic data, fine-tuning XGBoost hyperparameters, and evaluating the model's performance using metrics such as accuracy, precision, recall, and F1-score.",
      skills: [
        "XGBoost",
        "Machine Learning",
        "Cybersecurity",
        "Binary Classification",
        "Data Preprocessing",
        "Intrusion Detection",
      ],
      link: "https://github.com/pranav-k-jha/kaggle-notebooks/blob/main/CIC-IDS-2017%20BERT%20Classification.ipynb",
      notes: null,
    },
    {
      title: "YouTube Analysis Data Engineering Project",
      startDate: "July 2024",
      endDate: "July 2024",
      associatedWith: null,
      description:
        "This project aims to securely manage, streamline, and analyze structured and semi-structured YouTube video data based on video categories and trending metrics.",
      skills: [
        "Data Analysis",
        "Cloud Services",
        "Video Analytics",
        "Data Engineering",
        "Amazon S3",
        "AWS IAM",
        "Amazon QuickSight",
        "AWS Glue",
        "AWS Lambda",
        "AWS Athena",
      ],
      link: "https://github.com/pranav-k-jha/youtube-analysis-data-engineering-project",
      notes: null,
    },
    {
      title: "E-Commerce App",
      startDate: "April 2024",
      endDate: "April 2024",
      associatedWith: null,
      description:
        "Built a complete e-commerce webshop with an admin dashboard using Next.js (SSR/SSG), Stripe for payments, TypeScript for type safety, and Payload CMS for content management. The stack ensures scalability, security, and real-time functionality.",
      skills: [
        "Next.js",
        "Stripe",
        "TypeScript",
        "Payload CMS",
        "SSR",
        "SSG",
        "Web Development",
        "E-commerce",
        "Full-stack",
      ],
      link: "https://github.com/pranav-k-jha/e-commerce-ts-next-payload-cms",
      notes: null,
    },
    {
      title: "Real Estate Price Prediction",
      startDate: "January 2024",
      endDate: "January 2024",
      associatedWith: null,
      description:
        "Demonstrated building a real estate price prediction website using the Bangalore home prices dataset from Kaggle. Developed a linear regression model with scikit-learn to predict home prices.",
      skills: [
        "scikit-learn",
        "Linear Regression",
        "Machine Learning",
        "Price Prediction",
        "Real Estate",
      ],
      link: "https://github.com/pranav-k-jha/Real-Estate-Price-Prediction",
      notes: null,
    },
    {
      title:
        "Digitizing the Sports Industry Through Lift-Ride Data Analysis Using Microservices and Distributed Systems",
      startDate: "January 2023",
      endDate: "April 2023",
      associatedWith: null,
      description:
        "A distributed system to digitalize the sports industry by aggregating lift-ride data from geographically spread resorts. Implemented a server-side API and a multithreaded Java client to generate ~10,000 POST requests with retry logic, and performed performance profiling (mean/median response times, throughput, p99).",
      skills: [
        "Java",
        "Spring Boot",
        "gRPC",
        "RabbitMQ",
        "Microservices",
        "Performance Profiling",
        "Distributed Systems",
        "Client-server architecture",
        "Multithreading",
      ],
      link: "https://github.com/pranav-k-jha/lift-ride-digitalization",
      notes: null,
    },
    {
      title:
        "Edu Analytics: A Distributed System with gRPC and Message-Driven Data Processing",
      startDate: "January 2023",
      endDate: "April 2023",
      associatedWith: null,
      description:
        "Developed a microservice architecture using gRPC for RPC communication and RabbitMQ for message-driven data processing on a MongoDB cluster. Processed Kaggle's EduCostStat dataset to query tuition and room & board statistics, calculate top states by cost growth, and perform region-wise aggregations. Implemented Java-based gRPC services and clients, and designed message flows for efficient data handling.",
      skills: [
        "Java",
        "gRPC",
        "RabbitMQ",
        "MongoDB",
        "Microservices",
        "Data Processing",
        "RPC Communication",
        "Message-Driven Architecture",
      ],
      link: "https://github.com/pranav-k-jha/message-driven-data-processing",
      notes: null,
    },
  ],

  currentPositions: [
    {
      company: "Fujitsu",
      location: "Montreal, Quebec, Canada",
      period: "August 2023 - Present (1 year 10 months)",
      title: "Senior Application Support",
      link: "https://www.fujitsu.com/",
      email: "pranav.jha@fujitsu.com",
    },
    {
      company: "MKJHA CONSULTING",
      location: "Severn, Maryland, United States",
      period: "March 2024 - Present (1 year 3 months)",
      title: "Research Scientist",
      link: "https://www.mkjhaconsulting.com/",
      email: "pranav.jha@mkjhaconsult.com",
    },
    {
      company: "LivNSense",
      location: "Montreal, Quebec, Canada",
      period: "April 2025 - Present (1 month)",
      title: "AI Engineer",
      link: "https://vicas.ai.livnsense.com/#/home",
      email: "pranav.jha@livnsense.com",
    },
  ],

  education: [
    {
      institution: "Concordia University",
      degrees: [
        {
          name: "Master of Engineering (M.Eng.)",
          field: "Electrical and Computer Engineering",
          startYear: 2021,
          endYear: 2023,
          gpa: "3.71/4.3",
          status: "Graduated",
          location: "Montreal, Quebec, Canada",
          highlights: [
            "Specialized in Communication Systems and Computer Engineering",
            "Recipient of Concordia Graduate Scholarship for Academic Excellence",
          ],
          relevantCoursework: [
            "Neural Networks",
            "Distributed Software Systems",
            "Software Engineering",
            "Error Control Coding",
          ],
        },
      ],
    },
    {
      institution: "Concordia University",
      degrees: [
        {
          name: "Doctor of Philosophy (Ph.D.) Candidate",
          field: "Electrical and Computer Engineering",
          startYear: 2018,
          endYear: 2021,
          gpa: "3.90/4.3",
          status: "Transferred",
          location: "Montreal, Quebec, Canada",
          highlights: [
            "Recipient of Concordia International Award for Excellence from 2018 to 2020",
          ],
          relevantCoursework: [
            "Advanced Signal Processing",
            "Probability and Stochastic Processes",
            "Digital Communication",
          ],
        },
      ],
    },
    {
      institution: "National Institute of Technology, Tiruchirappalli",
      degrees: [
        {
          name: "Master of Science (M.S.)",
          field: "Electronics and Communications Engineering",
          startYear: 2016,
          endYear: 2018,
          gpa: "8.2/10",
          status: "Graduated",
          location: "Tiruchirappalli, Tamil Nadu, India",
        },
      ],
    },
    // {
    //   institution: "West Bengal University of Technology",
    //   degrees: [
    //     {
    //       name: "Bachelor of Technology (B.Tech.)",
    //       field: "Electronics and Communications Engineering",
    //       startYear: 2008,
    //       endYear: 2012,
    //       gpa: "7.95/10",
    //       status: "Graduated",
    //       location: "Kolkata, West Bengal, India",
    //       highlights: [
    //         "Received the prestigious National Institute of Technology, Tiruchirappalli, Tamil Nadu, India",
    //         "Received the prestigious National Institute of Technology, Tiruchirappalli, Tamil Nadu, India",
    //         "Received the prestigious National Institute of Technology, Tiruchirappalli, Tamil Nadu, India",
    //       ],
    //       relevantCoursework: [
    //         "Neural Networks",
    //         "Advanced Signal Processing",
    //         "Probability and Stochastic Processes",
    //         "Distributed Software Systems",
    //       ],
    //     },
    //   ],
    // },
  ],

  workExperience: [
    {
      company: "Fujitsu",
      title: "Senior Application Support",
      startDate: "August 2023",
      endDate: "Present",
      duration: "1 year 10 months",
      location: "Montreal, Quebec, Canada",
      details: [
        "Provided technical support operations for Active Directory user accounts, ensuring secure access control and compliance with IT policies.",
        "Streamlined incident management by reducing ticket resolution time through effective escalation and collaboration with DevOps and cybersecurity teams.",
        "Resolved complex hardware, software, and network issues weekly, minimizing downtime and improving end-user satisfaction.",
        "Mentored junior support staff, enhancing team performance and technical expertise.",
      ],
    },
    {
      company: "MKJHA CONSULTING",
      title: "Research Scientist",
      startDate: "March 2024",
      endDate: "Present",
      duration: "1 year 3 months",
      location: "Severn, Maryland, United States",
      details: [
        "Conducted in-depth literature reviews on cybersecurity and machine learning, identifying 15+ vulnerabilities in CAN protocol security.",
        "Performed exploratory data analysis (EDA) to uncover key patterns, leading to an 18% improvement in model accuracy.",
        "Optimized machine learning models (Random Forest, XGBoost, SVM) through hyperparameter tuning, achieving an F1-score of 0.92.",
        "Submitted research for publication in a reputed journal.",
      ],
    },
    {
      company: "DataAnnotation",
      title: "Data Scientist",
      startDate: "June 2024",
      endDate: "March 2025",
      duration: "10 months",
      location: "Montreal, Quebec, Canada",
      details: [
        "Developed and implemented machine learning models for data analysis and prediction.",
        "Collaborated with cross-functional teams to design and implement data pipelines.",
        "Conducted data analysis and visualization to identify trends and insights.",
      ],
    },
    {
      company: "DataAnnotation",
      title: "AI Trainer",
      startDate: "February 2024",
      endDate: "June 2024",
      duration: "5 months",
      location: "Montreal, Quebec, Canada",
      details: [
        "Trained AI models using Python, TensorFlow, and PyTorch to improve accuracy and efficiency.",
        "Developed custom training pipelines for specific datasets, ensuring optimal performance.",
        "Collaborated with data scientists to fine-tune models and implement advanced training techniques.",
      ],
    },
    {
      company: "BeauT Ai",
      title: "Backend Engineer (Node.js)",
      startDate: "November 2024",
      endDate: "January 2025",
      duration: "3 months",
      location: "Montreal, Quebec, Canada",
      details: [
        "Developed robust, cross-platform mobile applications using React Native, seamlessly integrating GraphQL APIs to streamline data fetching.",
        "Engineered a scalable backend with NestJS, TypeORM, GraphQL, and MySQL, ensuring strong performance and easy maintainability.",
        "Designed and fine-tuned authentication systems to boost security and safeguard data.",
        "Created a personalized user preferences page to deliver tailored service recommendations.",
        "Enhanced overall application performance by optimizing database queries and refining schema design.",
      ],
    },
    {
      company: "Alorica",
      title: "IT Support Specialist",
      startDate: "March 2023",
      endDate: "April 2023",
      duration: "2 months",
      location: "Montreal, Quebec, Canada",
      details: [
        "Supported IT operations by troubleshooting and resolving software and configuration issues.",
        "Reduced ticket resolution time by escalating complex issues (BIOS failures, network drive errors) to DevOps and cybersecurity teams.",
      ],
    },
    {
      company: "IO Solutions Contact Center",
      title: "Information Technology Sales Specialist",
      startDate: "January 2023",
      endDate: "March 2023",
      duration: "3 months",
      location: "Montreal, Quebec, Canada",
      details: [
        "Supported IT operations by troubleshooting and resolving software and configuration issues.",
      ],
    },
    {
      company: "Concordia University",
      title: "Graduate Teaching Assistant",
      startDate: "September 2021",
      endDate: "December 2021",
      duration: "4 months",
      location: "Montreal, Quebec, Canada",
      details: [
        "Worked as a Graduate Teaching Assistant for Concordia University.",
      ],
    },
    {
      company: "Concordia University",
      title: "Graduate Research Assistant",
      startDate: "August 2018",
      endDate: "August 2021",
      duration: "3 years 1 month",
      location: "Montreal, Quebec, Canada",
      details: [
        "Analyzed hybrid precoding techniques for mmWave MIMO systems using deep learning.",
      ],
    },
    {
      company: "National Institute of Technology, Tiruchirappalli",
      title: "Research Assistant",
      startDate: "February 2016",
      endDate: "July 2018",
      duration: "2 years 6 months",
      location: "Tiruchirappalli, Tamil Nadu, India",
      details: [
        "Analyzed cooperative relaying systems and contributed to IEEE conference publications.",
      ],
    },
    {
      company: "INFONET BPO SERVICES PRIVATE LIMITED",
      title: "IT Executive",
      startDate: "May 2015",
      endDate: "January 2016",
      duration: "9 months",
      location: "Pune, Maharashtra, India",
      details: [
        "Supported IT operations by troubleshooting and resolving software and configuration issues.",
      ],
    },
  ],

  publications: [
    {
      title:
        "Challenges and potentials for visible light communications: State of the art",
      authors: ["PK Jha", "N Mishra", "DS Kumar"],
      venue: "AIP conference proceedings 1849 (1)",
      submittedTo: "AIP Conference Proceedings",
      status: "Published",
      year: 2017,
      citations: 17,
      doi: "https://doi.org/10.1063/1.4984154",
    },
    {
      title:
        "Achievable rate analysis of relay assisted cooperative NOMA over Rician fading channels",
      authors: ["PK Jha", "DS Kumar"],
      venue:
        "2018 4th International Conference on Recent Advances in Information",
      submittedTo: "IEEE",
      status: "Published",
      year: 2018,
      citations: 14,
      doi: "10.1109/RAIT.2018.8388972",
    },
    {
      title:
        "Performance analysis of FSO using relays and spatial diversity under log-normal fading channel",
      authors: ["PK Jha", "N Kachare", "K Kalyani", "DS Kumar"],
      venue:
        "2018 4th International Conference on Electrical Energy Systems (ICEES), 121-125",
      submittedTo: "IEEE",
      status: "Published",
      year: 2018,
      citations: 12,
      doi: "10.1109/ICEES.2018.8442405",
    },
    {
      title:
        "An opportunistic-non orthogonal multiple access based cooperative relaying system over Rician fading channels",
      authors: ["PK Jha", "SS Shree", "DS Kumar"],
      venue:
        "2018 4th International Conference on Recent Advances in Information",
      submittedTo: "IEEE",
      status: "Published",
      year: 2018,
      citations: 5,
      doi: "10.1109/RAIT.2018.8388973",
    },

    {
      title:
        "Performance analysis of dual-hop optical wireless communication systems over k-distribution turbulence channel with pointing error",
      authors: ["N Mishra", "PK Jha"],
      venue: "AIP Conference Proceedings 1849 (1)",
      submittedTo: "AIP Conference Proceedings",
      status: "Published",
      year: 2017,
      citations: 2,
      doi: "https://doi.org/10.1063/1.4984158",
    },
    {
      title:
        "Adversarial Machine Learning: Attacks, Defenses, and Open Challenges",
      authors: ["PK Jha"],
      venue: "arXiv preprint arXiv:2502.05637",
      submittedTo: "arXiv",
      status: "Published",
      year: 2025,
      citations: 0,
      doi: "https://arxiv.org/pdf/2502.05637",
    },
    {
      title:
        "ML-Driven Data Structure Optimization for Connected and Autonomous Vehicle Networks",
      authors: ["Pranav K Jha", "Manoj K Jha, PhD"],
      venue: "",
      submittedTo: "MDPI Vehicle",
      status: "under Review",
      year: 2025,
      citations: 0,
      doi: "not_available",
    },
  ],

  publicationMetrics: {
    totalCitations: 53,
    citationsSince2020: 2,
    hIndex: 4,
    hIndexSince2020: 1,
    i10Index: 3,
    i10IndexSince2020: 0,
    citationsByYear: {
      "2017": 17, // Challenges and potentials (17)
      "2018": 14, // Achievable rate (14)
      "2019": 0,
      "2020": 0,
      "2021": 0,
      "2022": 0,
      "2023": 0,
      "2024": 0,
      "2025": 2, // Adversarial Machine Learning
    },
  },
};

export default resume;
