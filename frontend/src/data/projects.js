import sports from "../assets/images/projects/sports-booking.png";
import portfolio from "../assets/images/projects/portfolio.png";
import travel from "../assets/images/projects/travel-system.png";
import library from "../assets/images/projects/library-system.png";
import bookshop from "../assets/images/projects/bookshop.png";

const projects = [
  {
    id: 1,
    title: "Indoor Sports Booking System",
    slug: "indoor-sports-booking",
    image: sports,

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
    ],

    description:
      "Modern sports venue booking platform.",

    problem:
      "Users needed a simple and efficient way to reserve indoor sports facilities.",

    solution:
      "Developed a responsive booking platform with venue management capabilities.",

    overview:
      "A web-based platform designed to simplify indoor sports venue reservations by providing users with a centralized booking experience.",

    objectives: [
      "Provide an easy booking experience",
      "Display venue availability",
      "Reduce manual booking conflicts",
    ],

    role:
      "Frontend Developer (Team Project)",

    features: [
      "Responsive user interface",
      "Venue listing system",
      "Booking workflow",
      "Modern user experience",
    ],

    challenges: [
      "Designing a user-friendly booking interface",
      "Managing component structure and state",
    ],

    lessons: [
      "Team collaboration",
      "React component architecture",
      "UI/UX design principles",
    ],

    futureImprovements: [
      "Online payments",
      "User authentication",
      "Real-time availability updates",
    ],
  },

  {
    id: 2,
    title: "Portfolio Website",
    slug: "portfolio-website",
    image: portfolio,

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MySQL",
    ],

    description:
      "Modern developer portfolio showcasing projects and skills.",

    problem:
      "Needed a professional platform to showcase technical expertise and projects.",

    solution:
      "Built an interactive portfolio with animations, case studies, and responsive design.",

    overview:
      "A modern portfolio website created to present projects, technical skills, and professional experience in an engaging way.",

    objectives: [
      "Showcase technical projects",
      "Improve personal branding",
      "Provide recruiter-friendly navigation",
    ],

    role:
      "Full Stack Developer (Individual Project)",

    features: [
      "Dark and light mode",
      "Interactive animations",
      "Project case studies",
      "Responsive design",
    ],

    challenges: [
      "Creating a modern UI",
      "Implementing reusable components",
    ],

    lessons: [
      "Advanced React development",
      "Animation integration",
      "Responsive UI design",
    ],

    futureImprovements: [
      "Blog section",
      "Admin dashboard",
      "Analytics integration",
    ],
  },

  {
    id: 3,
    title: "Travel Information System",
    slug: "travel-information-system",
    image: travel,

    tech: [
      "PHP",
      "JavaScript",
      "MySQL",
    ],

    description:
      "Travel planning and destination information platform.",

    problem:
      "Travel information was scattered across multiple sources.",

    solution:
      "Created a centralized platform for travel planning and destination exploration.",

    overview:
      "A web application that helps users discover destinations and organize travel plans more efficiently.",

    objectives: [
      "Provide travel information",
      "Improve destination discovery",
      "Simplify travel planning",
    ],

    role:
      "Full Stack Developer (Individual Project)",

    features: [
      "Destination listings",
      "Travel planning tools",
      "User-friendly navigation",
    ],

    challenges: [
      "Database design",
      "Managing travel-related data",
    ],

    lessons: [
      "PHP backend development",
      "Database management",
      "System design",
    ],

    futureImprovements: [
      "User accounts",
      "Hotel booking integration",
      "Location services",
    ],
  },

  {
    id: 4,
    title: "Library Management System",
    slug: "library-management-system",
    image: library,

    tech: [
      "C#",
      ".NET",
      "MySQL",
    ],

    description:
      "Library operation management application.",

    problem:
      "Manual management of books and records was inefficient.",

    solution:
      "Automated book tracking, member management, and borrowing workflows.",

    overview:
      "A desktop application developed to streamline library operations and improve record management.",

    objectives: [
      "Reduce manual processes",
      "Improve record tracking",
      "Increase operational efficiency",
    ],

    role:
      "Software Developer (Individual Project)",

    features: [
      "Book management",
      "Member management",
      "Borrowing and return tracking",
    ],

    challenges: [
      "Database relationships",
      "Desktop application architecture",
    ],

    lessons: [
      "Object-oriented programming",
      "Database integration",
      "Application design",
    ],

    futureImprovements: [
      "Barcode support",
      "Report generation",
      "Cloud synchronization",
    ],
  },

  {
    id: 5,
    title: "Bookshop Website",
    slug: "bookshop-website",
    image: bookshop,

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    description:
      "Responsive online bookshop website.",

    problem:
      "Customers needed an easier way to browse available books online.",

    solution:
      "Developed a responsive storefront with intuitive navigation and product browsing.",

    overview:
      "A frontend-focused website designed to showcase books and provide an engaging browsing experience.",

    objectives: [
      "Showcase available books",
      "Provide intuitive navigation",
      "Improve user experience",
    ],

    role:
      "Frontend Developer (Individual Project)",

    features: [
      "Book catalog",
      "Responsive design",
      "Interactive interface",
    ],

    challenges: [
      "Responsive layout design",
      "Maintaining UI consistency",
    ],

    lessons: [
      "Frontend development",
      "CSS layout techniques",
      "User-centered design",
    ],

    futureImprovements: [
      "Shopping cart",
      "Payment gateway",
      "Customer accounts",
    ],
  },
];

export default projects;