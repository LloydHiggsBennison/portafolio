import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const idiomas = [
  { idioma: "Español", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "Avanzado B2 (Cambridge)" },
  { idioma: "Portugués", nivel: "Básico" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-neutral text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* Columna izquierda: ¿Quién soy? */}
        <div>
          <h2 className="text-3xl font-extrabold text-violet-600 mb-4">¿QUIÉN SOY?</h2>
          <h3 className="text-xl font-semibold mb-4">Desarrollador | Ingeniero Informático</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Soy estudiante de Ingenieria en Informática en INACAP y profesional enfocado en el desarrollo de soluciones web, automatización de procesos y análisis técnico.
            Tengo experiencia en empresas como <strong>Iberdrola España</strong>, <strong>Unicef Chile</strong> y <strong>Nespresso Chile</strong>, con foco en eficiencia y calidad.
            Manejo herramientas como React, Python, Google Apps Script, y Linux. 
            Me apasiona la tecnología y la mejora continua, con un enfoque en trabajo colaborativo y entrega de valor.
          </p>
          <div className="mt-6 flex gap-4 text-xl text-gray-600">
            <a href="https://github.com/LloydHiggsBennison" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-violet-500" />
            </a>
            <a href="https://www.linkedin.com/in/lloyd-higgs-bennison-476319174/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-violet-500" />
            </a>
            <a href="mailto:007.lloyd.higgs@gmail.com">
              <FaEnvelope className="hover:text-violet-500" />
            </a>
            <a href="https://x.com/lloyd_higgs" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-violet-500" />
            </a>
          </div>
        </div>

        {/* Columna derecha: Idiomas */}
        <div>
          <h2 className="text-3xl font-extrabold text-violet-600 mb-4">¿IDIOMAS?</h2>
          <p className="text-gray-700 text-base mb-6">Puedo ser de ayuda.</p>
          <ul className="space-y-4">
            {idiomas.map((item, i) => (
              <li key={i}>
                <p className="font-semibold text-gray-800 uppercase">
                  {item.idioma}: <span className="text-sm font-normal capitalize">{item.nivel}</span>
                </p>
                <div className="w-full bg-gray-200 rounded h-2 mt-1">
                  <div
                    className="bg-violet-500 h-2 rounded"
                    style={{
                      width:
                        item.nivel.includes("Nativo")
                          ? "100%"
                          : item.nivel.includes("Avanzado")
                          ? "80%"
                          : "40%",
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
