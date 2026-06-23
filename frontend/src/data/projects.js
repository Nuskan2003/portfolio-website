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
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    description:
      "Modern sports venue booking platform.",
    problem:
      "Users needed a simple and efficient way to reserve indoor sports facilities.",
    solution:
      "Developed a responsive booking platform with venue management capabilities.",
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
  },

  {
    id: 3,
    title: "Travel Information System",
    slug: "travel-information-system",
    image: travel,
    tech: ["PHP", "JavaScript", "MySQL"],
    description:
      "Travel planning and destination information platform.",
    problem:
      "Travel information was scattered across multiple sources.",
    solution:
      "Created a centralized platform for travel planning and destination exploration.",
  },

  {
    id: 4,
    title: "Library Management System",
    slug: "library-management-system",
    image: library,
    tech: ["C#", ".NET", "MySQL"],
    description:
      "Library operation management application.",
    problem:
      "Manual management of books and records was inefficient.",
    solution:
      "Automated book tracking, member management, and borrowing workflows.",
  },

  {
    id: 5,
    title: "Bookshop Website",
    slug: "bookshop-website",
    image: bookshop,
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive online bookshop website.",
    problem:
      "Customers needed an easier way to browse available books online.",
    solution:
      "Developed a responsive storefront with intuitive navigation and product browsing.",
  },
];

export default projects;