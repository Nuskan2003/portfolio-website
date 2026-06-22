import { useParams } from "react-router-dom";
import projects from "../data/projects";

function CaseStudy() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto py-24 px-6">

      <h1 className="text-5xl font-bold">
        {project.title}
      </h1>

      <p className="mt-6 text-lg">
        {project.description}
      </p>

      <div className="mt-12">
        <h2 className="text-3xl font-bold">
          Problem Statement
        </h2>

        <p className="mt-4">
          This section will contain the business problem.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold">
          Proposed Solution
        </h2>

        <p className="mt-4">
          This section will contain the proposed solution.
        </p>
      </div>

    </div>
  );
}

export default CaseStudy;