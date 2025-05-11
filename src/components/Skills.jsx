import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaLinux,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPython,
  SiFlask,
} from "react-icons/si";

const techs = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3 + Tailwind" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiFlask />, label: "Flask" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <FaGitAlt />, label: "Git & GitHub" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaLinux />, label: "Linux" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-neutral text-gray-800 text-center font-medium">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-violet-700 mb-4">TECNOLOGÍAS</h2>
        <p className="text-lg text-gray-600 mb-12">
          Aquí encontrarás algunas de las tecnologías que utilizo en mis proyectos.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_10px_25px_rgba(124,58,237,0.15)] border border-violet-100 flex flex-col items-center transition-all hover:shadow-lg"
            >
              <div className="text-6xl text-violet-600 mb-4">{tech.icon}</div>
              <p className="text-base font-medium text-gray-800">{tech.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;