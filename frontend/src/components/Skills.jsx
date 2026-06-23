import SectionWrapper from "./SectionWrapper";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MySQL",
  "HTML",
  "Git",
  "GitHub",
  "Figma",
  "Java",
  "Python",
];

function Skills() {
  return (
    <SectionWrapper>
      <section
        id="skills"
        className="py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  backdrop-blur-lg
                  bg-white/60
                  dark:bg-slate-800/60
                  border
                  rounded-3xl
                  p-8
                  text-center
                  shadow-lg
                  hover:scale-105
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >
                {skill}
              </div>
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;