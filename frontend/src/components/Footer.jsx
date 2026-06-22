import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-xl font-bold">
          Nuskan Nazar
        </h2>

        <p className="mt-4 md:mt-0">
          © 2026 All Rights Reserved
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">

          <a href="#">
            <FaGithub size={22} />
          </a>

          <a href="#">
            <FaLinkedin size={22} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;