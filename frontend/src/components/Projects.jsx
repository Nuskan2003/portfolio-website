import SectionWrapper from "./SectionWrapper";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <SectionWrapper>
      <section
        id="projects"
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <h2
            className="
              text-5xl
              font-bold
              text-center
              mb-4
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              text-center
              text-slate-600
              dark:text-slate-400
              max-w-3xl
              mx-auto
              mb-16
            "
          >
            A collection of projects showcasing my
            experience in frontend development,
            full-stack applications, database design,
            and modern user experiences.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;