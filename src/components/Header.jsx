import { Link } from "react-scroll";

const Header = () => {
  const navItems = [
    { id: "about-me", label: "ACERCA DE MI" },
    { id: "about", label: "IDIOMAS" },
    { id: "services", label: "SERVICIOS" },
    { id: "skills", label: "TECNOLOGÍAS" },
    { id: "projects", label: "PROYECTOS" },
    { id: "contact", label: "CONTACTO" },
    { id: "downloadcv", label: "CV" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-12 py-6 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <nav className="hidden md:flex space-x-8 text-base font-semibold tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-accent"
              className="cursor-pointer hover:text-accent transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;