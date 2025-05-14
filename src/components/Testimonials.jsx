import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonios = [
  {
    autor: "Emilio del Solar",
    cargo: "Seremi de Salud - Gobierno de Chile",
    texto: "Conozco el trabajo de Lloyd y puedo afirmar que se integra de forma impecable en entornos institucionales exigentes. Destaca por su capacidad para estructurar soluciones en ciclos de trabajo iterativos, con entregas claras y eficientes. Su profesionalismo y enfoque metódico han sido clave para mantener la alineación técnica y operativa del equipo.",
  },
  {
  autor: "Pablo Ibarra",
  cargo: "Cloud Engineer - Mach",
  texto: "En mis conversaciones con Lloyd el demuestra tener conocimientos para desplegar soluciones web en entornos productivos.",
  },
  {
    autor: "Ernesto Pérez",
    cargo: "Canales no Presenciales - Iberdrola España",
    texto:
      "Lloyd demostró una gran capacidad para desarrollar soluciones eficientes y automatizadas usando GAS. Un profesional impecable.",
  },
  {
    autor: "Marco Oneto",
    cargo: "CEO - Maoz29.cl",
    texto:
      "Destaca por su dominio en soluciones tecnológicas, profesionalismo y compromiso. La calidad de su trabajo supera constantemente las expectativas.",
  },
  {
    autor: "Alejandro Gajardo",
    cargo: "Team Leader Senior - Nespresso Chile",
    texto:
      "Excelente dominio de React y gran actitud de colaboración. Siempre dispuesto a proponer mejoras técnicas en nuestros procesos.",
  },
  {
    autor: "Carlos Méndez",
    cargo: "Evaluador Académico - Duoc UC",
    texto:
      "Entrega proyectos con un nivel profesional altísimo. Destaca por su diseño, lógica y claridad en documentación técnica.",
  },
  {
    autor: "Annays Bustos",
    cargo: "Ing. Civil Industrial - UNAB",
    texto:
      "Excelente dominio de Python. Resuelve dudas con claridad y ejemplifica de forma didáctica y eficaz.",
  },
];

const variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % testimonios.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <section className="py-20 px-6 bg-white text-gray-800 font-medium">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-violet-700 mb-10">TESTIMONIOS</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="p-10 rounded-2xl bg-violet-100 text-violet-900 shadow-[0_10px_25px_rgba(124,58,237,0.1)]"
            >
              <p className="text-xl italic mb-6">“{testimonios[index].texto}”</p>
              <h4 className="text-lg font-semibold text-violet-800">
                {testimonios[index].autor}
              </h4>
              <p className="text-sm text-violet-700">
                {testimonios[index].cargo}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-6">
            <button
              onClick={anterior}
              className="bg-violet-700 text-white text-xl px-5 py-2 rounded-full hover:bg-violet-800 transition"
            >
              ←
            </button>
            <button
              onClick={siguiente}
              className="bg-violet-700 text-white text-xl px-5 py-2 rounded-full hover:bg-violet-800 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;