import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { SiX } from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.THREE) {
      setVantaEffect(
        window.VANTA.WAVES({
          el: heroRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500,
          minWidth: 500,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x111144,
          shininess: 80,
          waveHeight: 30,
          waveSpeed: 1.5,
          zoom: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white font-light overflow-hidden"
    >
      <Header />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center w-full pt-48 px-6">
        <div className="w-full md:w-auto flex justify-center md:justify-end mb-14 md:mb-0 md:mr-20">
          <img
            src="/perfil.jpg"
            alt="Lloyd Higgs"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-violet-500 shadow-xl object-cover mt-6"
        />

        </div>
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-light mb-4 leading-tight">
            Hola, soy <span className="font-bold">Lloyd Higgs</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Desarrollador full stack | Ingeniero Informático
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 text-base">
            <span className="uppercase tracking-widest">CONECTEMOS</span>
            <span className="text-yellow-400 text-lg">➤</span>
            <div className="flex gap-4 text-2xl">
              <a href="https://web.facebook.com/Lloydbalonmanista" className="hover:text-accent transition">
                <FaFacebook />
              </a>
              <a href="https://www.github.com/LloydHiggsBennison" className="hover:text-accent transition">
                <FaGithub />
              </a>
              <a href="https://x.com/lloyd_higgs" className="hover:text-accent transition">
                <SiX />
              </a>
              <a href="https://www.linkedin.com/in/lloyd-higgs-bennison-476319174/" className="hover:text-accent transition">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/lloyd.higgs.b/" className="hover:text-accent transition">
                <FaInstagram />
              </a>
              <a href="mailto:007.lloyd.higgs@gmail.com" className="hover:text-accent transition">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
