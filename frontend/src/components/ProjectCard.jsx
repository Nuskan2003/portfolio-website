import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
        rounded-3xl
        overflow-hidden
        shadow-xl
        bg-white
        dark:bg-slate-900
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-slate-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">

          {project.tech.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                bg-blue-100
                text-blue-600
                text-sm
              "
            >
              {item}
            </span>
          ))}

        </div>

        <Link
          to={`/case-study/${project.slug}`}
          className="
            inline-block
            mt-6
            text-blue-600
            font-semibold
          "
        >
          View Case Study →
        </Link>

      </div>
    </motion.div>
  );
}

export default ProjectCard;