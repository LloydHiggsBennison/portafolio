import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const DownloadCV = () => {
  return (
    <section
      className="py-20 px-6 text-white text-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/inf2.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto font-medium"
      >
        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          ¿Te interesa trabajar conmigo?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Descarga mi CV actualizado y conoce más sobre mi perfil profesional.
        </p>
      <a
        href="/Lloyd_Higgs_Cv.pdf"
        download="Lloyd_Higgs_Cv.pdf"
        className="inline-flex items-center gap-2 bg-white text-violet-800 font-bold px-6 py-3 rounded shadow-md hover:opacity-90 transition"
        >
        <FaDownload /> Descargar CV
      </a>

      </motion.div>
    </section>
  );
};

export default DownloadCV;
