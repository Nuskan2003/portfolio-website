import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="rounded-3xl shadow-xl p-8 border"
    >
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
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        to={`/case-study/${project.slug}`}
        className="inline-block mt-6 text-blue-600 font-semibold"
      >
        View Case Study →
      </Link>
    </motion.div>
  );
}

export default ProjectCard;