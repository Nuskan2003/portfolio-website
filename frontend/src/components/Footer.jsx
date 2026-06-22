import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-10 border-t mt-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center">

          <h2 className="text-3xl font-bold">
            Nuskan Nazar
          </h2>

          <p className="mt-3 text-slate-500">
            Full Stack Developer
          </p>

          <div className="flex gap-6 mt-6">

            <a href="#">
              <FaGithub size={24} />
            </a>

            <a href="#">
              <FaLinkedin size={24} />
            </a>

          </div>

          <p className="mt-8 text-sm text-slate-500">
            © 2026 Nuskan Nazar. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;