/**
 * Personal Portfolio Data Architecture - Shashank M
 * Centralized configuration for candidate profile, skills, projects, education, and experience.
 * Single source of truth based on Shashank M's Resume.
 */

const profileData = {
  name: "Shashank M",
  logoText: "Shashank M",
  eyebrow: "Frontend Developer",
  title: "Frontend Developer building scalable, responsive and user-focused web experiences.",
  tagline: "Frontend Developer • React.js • Next.js • JavaScript • Redux Toolkit",
  heroHeading: "Frontend Developer",
  heroHighlights: [
    "Frontend Developer specializing in React.js & Next.js",
    "Hands-on production experience at Ideafloats Technologies (Dokterz)",
    "Proficient in Redux Toolkit, React Query, Axios & REST APIs",
    "B.E. in Information Science Engineering (Nov 2021 – May 2025)"
  ],
  aboutBio: "A motivated Information Science Engineering student with nearly one year of hands-on experience in frontend development, specializing in React.js and Next.js. I have worked on real-world production projects like Dokterz, implementing scalable UI components, state management using Redux Toolkit, and efficient data handling with React Query. I enjoy building clean, user-focused interfaces, integrating REST APIs, and continuously learning modern web technologies to deliver high-quality applications.",
  phone: "+91 9110677198",
  email: "gowdashashank996@gmail.com",
  location: "Shivamogga, Karnataka",
  githubUrl: "#",
  linkedinUrl: "https://www.linkedin.com/in/shashank-m-b0b5282ab/",
  resumePath: "./resume/Shashank-M-Resume.pdf",
  avatarUrl: "./assets/images/shashank-profile.png"
};

const skillsData = [
  {
    category: "Frontend Development",
    icon: "globe",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "HTML/CSS" },
      { name: "Redux Toolkit" },
      { name: "React Query" }
    ]
  },
  {
    category: "API & Data Communication",
    icon: "code",
    skills: [
      { name: "Axios" },
      { name: "REST APIs" }
    ]
  },
  {
    category: "Programming & Database",
    icon: "database",
    skills: [
      { name: "Python" },
      { name: "SQL" }
    ]
  }
];

const projectsData = [
  {
    id: "proj-1",
    title: "Phishing Attack Detection and Prevention",
    category: "Cybersecurity & Machine Learning",
    description: "Developed a cybersecurity application to detect and prevent phishing attacks by analyzing URLs, emails, and website attributes using machine learning techniques. Implemented feature extraction for identifying suspicious patterns, integrated the detection model into a Django-based web application, and used SQL for secure data storage and reporting.",
    technologies: ["Python", "Django", "SQL"],
    features: [
      "Feature extraction for identifying suspicious patterns across URLs & emails",
      "Integration of detection model into Django web application",
      "SQL implementation for secure data storage and reporting"
    ],
    githubUrl: "",
    liveUrl: ""
  },
  {
    id: "proj-2",
    title: "Credit Card Fraud Detect",
    category: "Data Analysis & Anomaly Detection",
    description: "Developed a fraud detection system to identify suspicious credit card transactions by analyzing transaction patterns and detecting anomalies in both online and in-store purchases. Applied data analysis techniques in Python to recognize unusual spending behavior, visualized trends and anomalies using Matplotlib, and tracked development using Git for version control.",
    technologies: ["Python", "Matplotlib", "Git"],
    features: [
      "Pattern analysis for detecting anomalies in online and in-store purchases",
      "Data analysis techniques in Python recognizing unusual spending behavior",
      "Visualization of trends and anomalies using Matplotlib"
    ],
    githubUrl: "",
    liveUrl: ""
  },
  {
    id: "proj-3",
    title: "Portfolio Based",
    category: "Web Development",
    description: "A portfolio website developed to showcase skills and achievements using HTML, CSS and JavaScript.",
    technologies: ["HTML/CSS", "JavaScript"],
    features: [
      "Clean, responsive layout showcasing skills and projects",
      "Built with semantic HTML, modern CSS, and JavaScript"
    ],
    githubUrl: "",
    liveUrl: ""
  }
];

const educationData = [
  {
    degree: "B.E. in Information Science Engineering",
    branch: "Information Science Engineering",
    institution: "Adichunchanagiri Institute of Technology, Chikkamagaluru",
    duration: "Nov 2021 – May 2025",
    cgpa: "CGPA: 8.23",
    coursework: []
  },
  {
    degree: "PUC",
    branch: "",
    institution: "Vikasa PU College, Alkola, Shivamogga",
    duration: "June 2019 – May 2021",
    cgpa: "Percentage: 80%",
    coursework: []
  },
  {
    degree: "SSLC",
    branch: "",
    institution: "Navajyothi English Medium School, Konanduru, Shivamogga",
    duration: "June 2018 – May 2019",
    cgpa: "Percentage: 84%",
    coursework: []
  }
];

const certificationsData = [];

const optionalData = {
  experience: [
    {
      role: "Internship in FrontEnd Development",
      organization: "Ideafloats Technologies, Bangalore",
      location: "Bangalore",
      duration: "Jan 2025 – Present",
      project: "Dokterz – Healthcare Practice Management System",
      description: "",
      highlights: [
        "Developed scalable and production-ready frontend features for Dokterz using Next.js and React.js.",
        "Implemented global state management using Redux Toolkit.",
        "Used React Query for server-state management, caching, and API synchronization.",
        "Integrated RESTful APIs using Axios.",
        "Handled authentication, CRUD operations, loading states, and error handling.",
        "Built responsive and reusable UI components for healthcare workflows including patient records, scheduling, and dashboards.",
        "Collaborated with backend teams to ensure smooth API communication and data consistency.",
        "Optimized performance and improved user experience across dashboards and patient management modules.",
        "Gained hands-on experience with modern frontend architecture, component-based design, and scalable state management patterns."
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "React Query",
        "Axios",
        "REST APIs",
        "JavaScript"
      ]
    }
  ],
  certifications: [],
  achievements: [],
  codingProfiles: []
};

// Export objects to global scope for main.js consumption
window.portfolioConfig = {
  profile: profileData,
  skills: skillsData,
  projects: projectsData,
  education: educationData,
  certifications: certificationsData,
  optional: optionalData
};
