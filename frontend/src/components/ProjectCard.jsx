import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        backdrop-blur-lg
        bg-white/60
        border
        rounded-3xl
        shadow-xl
        overflow-hidden
      "
    >

      <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500" />

      <div className="p-8">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                bg-blue-100
                text-blue-600
                rounded-full
                text-sm
              "
            >
              {tech}
            </span>
          ))}

        </div>

        <Link
          to={`/case-study/${project.slug}`}
          className="
            inline-block
            mt-8
            font-semibold
            text-blue-600
          "
        >
          View Case Study →
        </Link>

      </div>

    </motion.div>
  );
}

export default ProjectCard;