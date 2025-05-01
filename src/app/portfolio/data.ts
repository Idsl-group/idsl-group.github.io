const johnDoe = {
  personal_info: {
    name: "John Doe",
    title: "Data Scientist & Machine Learning Engineer",
    email: "john.doe@example.com",
    phone: "+1-555-123-4567",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    location: "Boston, MA",
    profile_image: "/profile.jpg",
    banner_image: "/banner.jpg",
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Illinois at Urbana–Champaign",
      dates: "Sep 2010 – May 2014",
      institution_logo: "https://example.com/images/uiuc_logo.png",
    },
    {
      degree: "Master of Science in Data Science",
      institution: "University of Washington",
      dates: "Sep 2014 – Jun 2016",
      institution_logo: "https://example.com/images/uw_logo.png",
    },
    {
      degree: "Ph.D. in Artificial Intelligence",
      institution: "Massachusetts Institute of Technology",
      dates: "Sep 2016 – Dec 2019",
      institution_logo: "https://example.com/images/mit_logo.png",
    },
  ],
  experience: [
    {
      role: "Data Scientist",
      company: "InnovaTech Solutions",
      location: "Boston, MA",
      dates: "Jan 2020 – Present",
      company_logo: "https://example.com/images/innovatech_logo.png",
      responsibilities: [
        "Designed and deployed end-to-end ML pipelines for customer churn prediction, improving retention by 15%.",
        "Led a team of 4 engineers to build real-time recommender systems using collaborative filtering and deep learning.",
        "Optimized data ingestion workflows in Spark, reducing ETL processing time by 40%.",
      ],
    },
    {
      role: "Machine Learning Engineer",
      company: "NextGen Analytics",
      location: "Cambridge, MA",
      dates: "Jun 2018 – Dec 2019",
      company_logo: "https://example.com/images/nextgen_logo.png",
      responsibilities: [
        "Developed computer vision models (CNNs) for defect detection in manufacturing lines, achieving 98% accuracy.",
        "Implemented natural language processing pipelines for customer feedback analysis using transformer architectures.",
        "Collaborated with DevOps to containerize models in Docker and deploy using Kubernetes.",
      ],
    },
    {
      role: "Graduate Research Assistant",
      institution: "MIT CSAIL",
      location: "Cambridge, MA",
      dates: "Sep 2016 – May 2018",
      institution_logo: "https://example.com/images/csail_logo.png",
      responsibilities: [
        "Conducted research on reinforcement learning algorithms for autonomous robotics navigation.",
        "Published 3 peer-reviewed papers in top AI conferences (ICML, NeurIPS).",
        "Co-mentored 2 undergraduate students through lab projects and thesis work.",
      ],
    },
  ],
  skills: {
    programming_languages: ["Python", "R", "Java", "C++"],
    machine_learning_frameworks: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "XGBoost",
    ],
    data_science_tools: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"],
    nlp_cv_libraries: ["Transformers", "spaCy", "OpenCV"],
    big_data: ["Spark", "Hadoop"],
    cloud_devops: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    version_control: ["Git", "GitHub", "GitLab"],
    methodologies: ["Agile", "Scrum", "TDD"],
    skill_icons: {
      TensorFlow: "https://example.com/icons/tensorflow.png",
      PyTorch: "https://example.com/icons/pytorch.png",
      Docker: "https://example.com/icons/docker.png",
      Kubernetes: "https://example.com/icons/kubernetes.png",
    },
  },
  projects: [
    {
      name: "Machine Learning Predictive Model",
      description:
        "Developed a comprehensive predictive model using advanced machine learning techniques to forecast customer churn with 92% accuracy.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      tools: ["Jupyter Notebook", "Google Colab"],
      image_url: "https://example.com/ml-project.jpg",
      github_link: "https://github.com/johndoe/ml-predictive-model",
    },
    {
      name: "Data Visualization Dashboard",
      description:
        "Created an interactive web-based dashboard for real-time data visualization and analysis using modern web technologies.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      tools: ["Webpack", "Babel"],
      image_url: "https://example.com/dashboard-project.jpg",
    },
    {
      name: "Smart Traffic Forecasting",
      description:
        "Developed an LSTM-based model to predict city-wide traffic flow, achieving 90% correlation with ground truth data.",
      technologies: ["Python", "TensorFlow", "Keras", "PostgreSQL"],
      tools: ["Jupyter Notebook", "Git", "Docker"],
      image_url: "https://example.com/images/project_traffic_forecasting.jpg",
    },
    {
      name: "AI-Enhanced Fraud Detection",
      description:
        "Built an ensemble of XGBoost and neural network models to detect fraudulent transactions in real time, reducing false positives by 30%.",
      technologies: ["Python", "scikit-learn", "Spark", "AWS Lambda"],
      tools: ["Airflow", "GitLab CI", "Docker"],
      image_url: "https://example.com/images/project_fraud_detection.jpg",
    },
    {
      name: "Chatbot for Mental Health Support",
      description:
        "Implemented a transformer-based conversational agent to provide empathetic responses and crisis resources.",
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "Flask"],
      tools: ["Heroku", "Postman", "Git"],
      image_url: "https://example.com/images/project_chatbot.jpg",
    },
    {
      name: "Autonomous Drone Navigation",
      description:
        "Researched and prototyped reinforcement learning policies for obstacle avoidance and target tracking in UAVs.",
      technologies: ["Python", "OpenAI Gym", "ROS", "C++"],
      tools: ["Gazebo", "Git", "Docker"],
      image_url: "https://example.com/images/project_drone_navigation.jpg",
    },
    {
      name: "Dynamic Pricing Engine",
      description:
        "Created a real-time pricing recommendation system for e-commerce platforms using gradient boosting and time-series analysis.",
      technologies: ["R", "XGBoost", "MongoDB", "Docker"],
      tools: ["Shiny", "GitHub Actions"],
      image_url: "https://example.com/images/project_pricing_engine.jpg",
    },
  ],
  publications: {
    journal_publications: [
      {
        title:
          "Transformer-Based Dialogue Systems for Mental Health Interventions",
        journal:
          "Transactions of the Association for Computational Linguistics",
        year: 2018,
        pdf_url:
          "https://example.com/publications/transformer_dialogue_mental_health.pdf",
      },
      {
        title: "LSTM Networks for City-Scale Traffic Forecasting",
        journal: "Journal of Intelligent Transportation Systems",
        year: 2020,
        pdf_url:
          "https://example.com/publications/lstm_traffic_forecasting.pdf",
      },
    ],
    conference_publications: [
      {
        title:
          "Adaptive Reinforcement Learning for Real-Time Drone Path Planning",
        conference: "ICRA 2017",
        year: 2017,
        pdf_url:
          "https://example.com/publications/adaptive_rl_drone_path_planning.pdf",
      },
      {
        title:
          "Ensemble Methods for Financial Fraud Detection in Streaming Data",
        conference: "ICDM 2019",
        year: 2019,
        pdf_url:
          "https://example.com/publications/ensemble_methods_fraud_detection.pdf",
      },
      {
        title:
          "Post-Quantum Cryptography in Cloud-Based Machine Learning Workflows",
        conference: "SoCC 2021",
        year: 2021,
        pdf_url:
          "https://example.com/publications/post_quantum_crypto_ml_workflows.pdf",
      },
    ],
  },
};

export default johnDoe;
