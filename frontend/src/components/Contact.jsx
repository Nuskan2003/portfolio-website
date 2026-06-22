import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-3xl font-semibold mb-4">
              Let's Work Together
            </h3>

            <p className="text-slate-500">
              Feel free to contact me regarding
              freelance work, collaborations,
              internships, or software development
              opportunities.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-4">
                <FaEnvelope />
                <span>
                  your-email@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub />
                <span>
                  github.com/yourusername
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin />
                <span>
                  linkedin.com/in/yourprofile
                </span>
              </div>

            </div>

          </div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border"
            />

            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-xl"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;