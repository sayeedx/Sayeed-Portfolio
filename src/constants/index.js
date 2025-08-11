import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  firebase,
  python,
  java,
  mysql,
  pandas,
  numpy,
  tensorflow,
  gdg,
  tmu,
  cibc,
  waterloo,
  gamescout,
  ecotrack,
  meditrack,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full Stack Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Machine Learning Enthusiast", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Firebase", icon: firebase },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "Pandas", icon: pandas },
  { name: "NumPy", icon: numpy },
  { name: "TensorFlow", icon: tensorflow },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Figma", icon: figma },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Google Developer Groups on Campus – TMU",
    icon: gdg,
    iconBg: "#383E56",
    date: "Dec 2024 – Present",
    points: [
      "Developed the SolutionsHack backend using Firebase and React.",
      "Migrated application form data fetching from Realtime Database to Firestore for improved scalability.",
      "Implemented efficient API calls and optimized data handling logic for faster load times.",
    ],
  },
  {
    title: "Student Ambassador",
    company_name: "Faculty of Engineering & Architectural Science – TMU",
    icon: tmu,
    iconBg: "#E6DEDD",
    date: "Sep 2024 – Present",
    points: [
      "Represented TMU’s engineering programs at the Ontario Universities’ Fair (OUF).",
      "Led campus tours and promoted TMU during Open House events.",
    ],
  },
  {
    title: "Co-op – Production Application Support Analyst",
    company_name: "CIBC",
    icon: cibc,
    iconBg: "#383E56",
    date: "Sep 2022 – Aug 2023",
    points: [
      "Gained hands-on experience with Microsoft Azure, Azure Machine Learning, Axway, and Autosys.",
      "Led client onboarding initiatives by coordinating cross-functional technology teams.",
      "Resolved technical issues across proprietary and vendor applications, improving operational efficiency.",
    ],
  },
  {
    title: "Machine Learning Trainee",
    company_name: "University of Waterloo – WatSPEED",
    icon: waterloo,
    iconBg: "#E6DEDD",
    date: "May 2025 – Dec 2025",
    points: [
      "Pursuing Machine Learning Practitioner and Project Specialist certifications.",
      "Applied Python, Pandas, NumPy, scikit-learn, and TensorFlow in real-world ML projects.",
      "Completed Neural Networks and Python for Machine Learning certifications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sayeed’s backend development work was critical for improving our event registration platform's scalability.",
    name: "GDG TMU Lead",
    designation: "Chapter Lead",
    company: "Google Developer Groups",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "His professionalism and enthusiasm as a Student Ambassador left a great impression on prospective students.",
    name: "Event Coordinator",
    designation: "Coordinator",
    company: "TMU",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Sayeed handled critical application support at CIBC with a proactive and solutions-focused mindset.",
    name: "Manager",
    designation: "Team Lead",
    company: "CIBC",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Gamescout",
    description:
      "Full-stack web app with Flask (REST API) and React frontend implementing ML-based recommendation algorithms for gamers.",
    tags: [
      { name: "flask", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: gamescout,
    source_code_link: "https://github.com/sayeedx/gamescout",
  },
  {
    name: "Eco Track",
    description:
      "React-based mobile app promoting sustainability through carbon footprint awareness, with gamified eco-friendly actions.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "ux", color: "pink-text-gradient" },
    ],
    image: ecotrack,
    source_code_link: "https://github.com/sayeedx/eco-track",
  },
  {
    name: "MediTrack",
    description:
      "Scalable medical database system for managing 5,000+ patient records, with optimized SQL queries and RBAC.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
      { name: "oracle", color: "pink-text-gradient" },
    ],
    image: meditrack,
    source_code_link: "https://github.com/sayeedx/meditrack",
  },
];

export { services, technologies, experiences, testimonials, projects };
