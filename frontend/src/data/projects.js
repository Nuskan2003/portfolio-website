import sports from "../assets/images/projects/bookshop.png";
import travel from "../assets/images/projects/travel-system.png";
import library from "../assets/images/projects/library-system.png";

const projects = [
  {
    id: 1,
    title: "Indoor Sports Booking System",
    slug: "indoor-sports-booking",
    image: sports,

    tech: [
      "React",
      "Node.js",
      "MySQL",
    ],

    description:
      "Modern booking platform for indoor sports facilities.",

    problem:
      "Users needed a simpler way to book sports venues online.",

    solution:
      "Developed a responsive booking platform with real-time availability tracking.",
  },

  {
    id: 2,
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
      "Travelers lacked centralized destination information.",

    solution:
      "Created a user-friendly travel planning system.",
  },

  {
    id: 3,
    title: "Library Management System",
    slug: "library-management-system",
    image: library,

    tech: [
      "C#",
      ".NET",
      "MySQL",
    ],

    description:
      "Desktop application for managing library operations.",

    problem:
      "Manual book tracking was inefficient.",

    solution:
      "Built a centralized library management system.",
  },
];

export default projects;