import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        rounded-3xl
        overflow-hidden
        bg-white/80
        dark:bg-slate-900/70
        backdrop-blur-xl
        border
        border-slate-200
        dark:border-slate-700
        shadow-xl
        hover:shadow-2xl
      "
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-56
            w-full
            object-cover
            transition
            duration-500
            hover:scale-110
          "
        />
      </div>

      <div className="p-6 flex flex-col min-h-[380px]">

        <h3
          className="
            text-2xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-3
            text-slate-600
            dark:text-slate-300
            min-h-[72px]
          "
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5 mb-6">

          {project.tech.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                bg-blue-100
                dark:bg-slate-800
                text-blue-700
                dark:text-blue-300
                text-sm
                font-medium
              "
            >
              {item}
            </span>
          ))}

        </div>

        <div className="flex gap-3 mt-auto">

          <Link
            to={`/case-study/${project.slug}`}
            className="
              flex-1
              text-center
              py-3
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            View Case Study
          </Link>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;