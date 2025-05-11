import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const proyectos = [
  {
    nombre: "Tetris en React",
    descripcion:
      "Juego de Tetris con ranking en tiempo real usando Google Sheets como backend.",
    demo: "https://tetrislloyd.vercel.app/",
    repo: "https://github.com/LloydHiggsBennison/Tetris",
  },
  {
    nombre: "Market Place",
    descripcion:
      "Página tipo Marketplace como Yapo.cl desarrollada con Python y Flask.",
    demo: "",
    repo: "https://github.com/LloydHiggsBennison/Market_Place",
  },
  {
    nombre: "Calculadora de Potencias",
    descripcion:
      "Página web realizada para optimizar procedimientos reduciendo un 70% el TMO y 100% los errores.",
    demo: "",
    repo: "https://github.com/LloydHiggsBennison/CalculadoraPotenciaYAhorro",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white text-gray-900 text-center font-medium"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-violet-700 mb-4">MIS PROYECTOS</h2>
        <p className="text-lg text-gray-600 mb-12">
          Echa un vistazo a algunos de mis repositorios y aplicaciones destacadas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {proyectos.map((proyecto, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-violet-100 shadow-md hover:shadow-xl transition-all"
            >
              <div>
                <h3 className="text-xl font-medium text-violet-700 mb-2">
                  {proyecto.nombre}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {proyecto.descripcion}
                </p>
              </div>

              <div className="mt-auto flex gap-4 text-sm text-violet-600 font-semibold">
                {proyecto.repo && (
                  <a
                    href={proyecto.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {proyecto.demo && (
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <FaExternalLinkAlt /> Ver demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
