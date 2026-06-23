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

          <h2 className="text-5xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

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