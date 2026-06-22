import { useParams } from "react-router-dom";
import projects from "../data/projects";

function CaseStudy() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto py-24 px-6">

      <img
        src={project.image}
        alt={project.title}
        className="
          w-full
          h-[400px]
          object-cover
          rounded-3xl
        "
      />

      <h1 className="text-5xl font-bold mt-12">
        {project.title}
      </h1>

      <p className="text-xl mt-4">
        {project.description}
      </p>

      <div className="mt-16">

        <h2 className="text-3xl font-bold">
          Problem Statement
        </h2>

        <p className="mt-4">
          {project.problem}
        </p>

      </div>

      <div className="mt-16">

        <h2 className="text-3xl font-bold">
          Solution
        </h2>

        <p className="mt-4">
          {project.solution}
        </p>

      </div>

      <div className="mt-16">

        <h2 className="text-3xl font-bold">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-3 mt-6">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                bg-blue-100
                text-blue-600
                rounded-full
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}

export default CaseStudy;