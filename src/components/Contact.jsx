import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("time", new Date().toLocaleString("es-CL"));

    emailjs
      .send("service_s9x2uaw", "template_0y6zhnd", Object.fromEntries(formData), "FuDgALxUGZbzmFpVo")
      .then(() => {
        setEnviado(true);
        form.current.reset();
      })
      .catch((error) => {
        alert("Error al enviar: " + error.text);
      });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white text-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <FaEnvelopeOpenText className="text-5xl text-violet-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contáctame</h2>

        <motion.form
          ref={form}
          onSubmit={enviarFormulario}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 bg-white shadow-lg p-6 rounded-lg border border-violet-100"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="p-3 rounded-md border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-800 placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="p-3 rounded-md border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-800 placeholder-gray-400"
          />
          <input
            type="text"
            name="title"
            placeholder="Asunto del mensaje"
            required
            className="p-3 rounded-md border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-800 placeholder-gray-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tu mensaje"
            required
            className="p-3 rounded-md border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-800 placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 text-white font-semibold py-3 rounded hover:opacity-90 transition"
          >
            Enviar Mensaje
          </button>
          {enviado && (
            <p className="text-green-600 text-sm font-medium text-center mt-2">
              ¡Mensaje enviado con éxito!
            </p>
          )}
        </motion.form>

        <p className="mt-6 text-sm text-gray-600">O envíame un mensaje por WhatsApp:</p>
        <a
          href="https://wa.me/56976874245?text=Hola%20Lloyd%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte."
          target="_blank"
          rel="noreferrer"
          className="text-violet-600 font-medium underline hover:text-violet-800"
        >
          WhatsApp Directo
        </a>
      </div>
    </section>
  );
};

export default Contact;
