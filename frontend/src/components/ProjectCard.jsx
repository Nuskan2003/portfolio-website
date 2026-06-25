import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowRight } from "react-icons/fa";

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
        transition-all
        duration-300
      "
    >
      {/* Project Image */}

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

      {/* Card Body */}

      <div className="p-6 flex flex-col min-h-[390px]">

        {/* Title */}

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

        {/* Description */}

        <p
          className="
            mt-3
            text-slate-600
            dark:text-slate-300
            leading-7
            min-h-[72px]
          "
        >
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mt-5 mb-8">

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

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-3 mt-auto">

          <Link
            to={`/case-study/${project.slug}`}
            className="
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              transition
            "
          >
            Case Study
            <FaArrowRight />
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-xl
              border
              border-slate-300
              dark:border-slate-600
              bg-white
              dark:bg-slate-800
              hover:bg-slate-100
              dark:hover:bg-slate-700
              text-slate-800
              dark:text-white
              font-semibold
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;