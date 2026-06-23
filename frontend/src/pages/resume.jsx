import Navbar from "../components/Navbar";
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 pb-16 max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Resume
          </h1>

          <a
            href="/resume.pdf"
            download
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-blue-600
              text-white
              hover:bg-blue-700
              transition
            "
          >
            <FaDownload />
            Download
          </a>

        </div>

        <div
          className="
            rounded-3xl
            overflow-hidden
            shadow-2xl
            border
            border-slate-200
            dark:border-slate-700
          "
        >
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-[900px]"
          />
        </div>

      </div>
    </>
  );
}

export default Resume;