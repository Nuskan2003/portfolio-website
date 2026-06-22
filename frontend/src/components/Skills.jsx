const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
  "Java",
  "Python",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;