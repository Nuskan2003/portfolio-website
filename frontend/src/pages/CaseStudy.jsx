import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";

function CaseStudy() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const previousProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* Hero Section */}

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-[400px]
            object-cover
            rounded-3xl
            shadow-2xl
          "
        />

        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            mt-12
            bg-gradient-to-r
            from-blue-500
            via-purple-500
            to-cyan-400
            text-transparent
            bg-clip-text
          "
        >
          {project.title}
        </h1>

        <p className="text-xl mt-6 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Overview */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {project.overview}
          </p>
        </section>

        {/* Problem */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Problem Statement
          </h2>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {project.problem}
          </p>
        </section>

        {/* Objectives */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Objectives
          </h2>

          <ul className="space-y-4">
            {project.objectives.map(
              (objective, index) => (
                <li
                  key={index}
                  className="
                    p-5
                    rounded-2xl
                    bg-white/80
                    dark:bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    shadow-xl
                  "
                >
                  • {objective}
                </li>
              )
            )}
          </ul>
        </section>

        {/* Role */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            My Role
          </h2>

          <div
            className="
              p-6
              rounded-2xl
              bg-white/80
              dark:bg-slate-900/70
              backdrop-blur-xl
              border
              border-slate-200
              dark:border-slate-700
              shadow-xl
            "
          >
            {project.role}
          </div>
        </section>

        {/* Solution */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Solution
          </h2>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {project.solution}
          </p>
        </section>

        {/* Features */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map(
              (feature, index) => (
                <div
                  key={index}
                  className="
                    p-5
                    rounded-2xl
                    bg-white/80
                    dark:bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    shadow-xl
                  "
                >
                  {feature}
                </div>
              )
            )}
          </div>
        </section>

        {/* Technologies */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  font-medium
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Screenshot Gallery */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Project Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  h-56
                  rounded-2xl
                  bg-white/80
                  dark:bg-slate-900/70
                  backdrop-blur-xl
                  border
                  border-slate-200
                  dark:border-slate-700
                  shadow-xl
                  flex
                  items-center
                  justify-center
                "
              >
                Screenshot {item}
              </div>
            ))}

          </div>
        </section>

        {/* Challenges */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Challenges Faced
          </h2>

          <ul className="space-y-4">
            {project.challenges.map(
              (challenge, index) => (
                <li
                  key={index}
                  className="
                    p-5
                    rounded-2xl
                    bg-white/80
                    dark:bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    shadow-xl
                  "
                >
                  {challenge}
                </li>
              )
            )}
          </ul>
        </section>

        {/* Lessons */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Lessons Learned
          </h2>

          <ul className="space-y-4">
            {project.lessons.map(
              (lesson, index) => (
                <li
                  key={index}
                  className="
                    p-5
                    rounded-2xl
                    bg-white/80
                    dark:bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    shadow-xl
                  "
                >
                  {lesson}
                </li>
              )
            )}
          </ul>
        </section>

        {/* Future Improvements */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Future Improvements
          </h2>

          <ul className="space-y-4">
            {project.futureImprovements.map(
              (item, index) => (
                <li
                  key={index}
                  className="
                    p-5
                    rounded-2xl
                    bg-white/80
                    dark:bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    shadow-xl
                  "
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </section>

        {/* Navigation */}

        <div className="mt-20">

          <div className="flex justify-between items-center gap-4 flex-wrap">

            <div>
              {previousProject && (
                <Link
                  to={`/case-study/${previousProject.slug}`}
                  className="
                    px-6
                    py-3
                    rounded-xl
                    bg-white/80
                    dark:bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    shadow-xl
                  "
                >
                  ← {previousProject.title}
                </Link>
              )}
            </div>

            <Link
              to="/"
              className="
                px-8
                py-4
                rounded-xl
                bg-blue-600
                text-white
                font-semibold
                hover:bg-blue-700
                transition
              "
            >
              Back to Portfolio
            </Link>

            <div>
              {nextProject && (
                <Link
                  to={`/case-study/${nextProject.slug}`}
                  className="
                    px-6
                    py-3
                    rounded-xl
                    bg-white/80
                    dark:bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    shadow-xl
                  "
                >
                  {nextProject.title} →
                </Link>
              )}
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default CaseStudy;