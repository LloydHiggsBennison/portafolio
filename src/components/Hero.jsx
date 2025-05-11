import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import profilePic from "../assets/Perfil.jpg";

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
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white font-light overflow-hidden"
    >
      <Header />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center w-full pt-36 px-6">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img
            src={profilePic}
            alt="Lloyd Higgs"
            className="w-52 h-52 md:w-60 md:h-60 rounded-full border-4 border-violet-500 shadow-xl object-cover"
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
              <a href="#" className="hover:text-accent transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-accent transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-accent transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-accent transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-accent transition">
                <FaInstagram />
              </a>
              <a
                href="mailto:correo@correo.cl"
                className="hover:text-accent transition"
              >
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