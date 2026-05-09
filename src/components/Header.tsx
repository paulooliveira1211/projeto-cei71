import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-blue-950/95 shadow-xl backdrop-blur-md"
          : "bg-blue-950/70 backdrop-blur-md"
      }`}
    >

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="font-bold text-lg md:text-xl">
          CEI 71
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#sobre" className="hover:text-yellow-300 transition duration-300">Sobre</a>
          <a href="#diferenciais" className="hover:text-yellow-300 transition duration-300">Diferenciais</a>
          <a href="#estrutura" className="hover:text-yellow-300 transition duration-300">Estrutura</a>
          <a href="#contato" className="hover:text-yellow-300 transition duration-300">Contato</a>
        </nav>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          className="md:hidden text-3xl transition duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden absolute left-0 w-full bg-blue-900 transition-all duration-300 ${
          open ? "top-full opacity-100" : "-top-96 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <nav className="flex flex-col items-center gap-4 text-lg">

            <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
            <a href="#diferenciais" onClick={() => setOpen(false)}>Diferenciais</a>
            <a href="#estrutura" onClick={() => setOpen(false)}>Estrutura</a>
            <a href="#contato" onClick={() => setOpen(false)}>Contato</a>

          </nav>
        </div>
      </div>

    </header>
  );
}