import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-black py-8 px-6 border-t border-gray-700">
      <div className="max-w-5xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Lloyd Higgs. Todos los derechos reservados.
        </p>

        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/LloydHiggsBennison?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/lloyd-higgs-bennison-476319174"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:007.lloyd.higgs@gmail.com"
            className="hover:text-accent transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;