// Services.jsx
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaProjectDiagram,
  FaNetworkWired,
  FaDesktop,
} from "react-icons/fa";

const servicios = [
  {
    icon: <FaCode className="text-6xl text-violet-600 mb-4" />,
    titulo: "Desarrollo Web",
    descripcion: "Diseño y desarrollo web responsivo a medida.",
  },
  {
    icon: <FaDatabase className="text-6xl text-violet-600 mb-4" />,
    titulo: "Bases de Datos",
    descripcion: "Diseño y optimización de bases de datos SQL/NoSQL.",
  },
  {
    icon: <FaServer className="text-6xl text-violet-600 mb-4" />,
    titulo: "Backend y APIs",
    descripcion: "Lógica de negocio y APIs REST seguras y escalables.",
  },
  {
    icon: <FaProjectDiagram className="text-6xl text-violet-600 mb-4" />,
    titulo: "Requerimientos y Análisis",
    descripcion: "Documentación técnica, flujos y modelado UML.",
  },
  {
    icon: <FaNetworkWired className="text-6xl text-violet-600 mb-4" />,
    titulo: "Redes y Linux",
    descripcion: "Infraestructura, CLI, usuarios, permisos y scripting.",
  },
  {
    icon: <FaDesktop className="text-6xl text-violet-600 mb-4" />,
    titulo: "Aplicaciones de Escritorio",
    descripcion: "Desarrollo de herramientas simples para escritorio.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white text-center text-gray-800 font-medium">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-violet-700 mb-4">¿QUÉ PUEDO OFRECER?</h2>
        <p className="text-lg text-gray-600 mb-12">
          Estas son algunas de las cosas que puedo hacer por ti
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-[0_10px_25px_rgba(124,58,237,0.15)] border border-violet-100 hover:shadow-lg transition duration-300"
            >
              {servicio.icon}
              <h3 className="text-xl font-medium text-violet-700 mb-2 uppercase">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {servicio.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
