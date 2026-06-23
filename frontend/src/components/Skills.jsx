import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
    ],
  },

  {
    title: "Database",
    skills: [
      "MySQL",
      "MongoDB",
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      "Java",
      "Python",
      "C#",
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
    ],
  },
];

function Skills() {
  return (
    <SectionWrapper>
      <section
        id="skills"
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
            Skills & Technologies
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
            Technologies, tools, and programming
            languages I use to design and develop
            modern software solutions.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">

            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="
                  rounded-3xl
                  bg-white/80
                  dark:bg-slate-900/70
                  backdrop-blur-xl
                  border
                  border-slate-200
                  dark:border-slate-700
                  shadow-xl
                  p-8
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-6
                    bg-gradient-to-r
                    from-blue-500
                    via-purple-500
                    to-cyan-400
                    text-transparent
                    bg-clip-text
                  "
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-blue-100
                        dark:bg-slate-800
                        text-blue-700
                        dark:text-blue-300
                        text-sm
                        font-medium
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;