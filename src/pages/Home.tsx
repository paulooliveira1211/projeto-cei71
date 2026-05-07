import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Diferenciais from "../components/Diferenciais";
import Estrutura from "../components/Estrutura";
import Galeria from "../components/Galeria";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Diferenciais />
      <Estrutura />
      <Galeria />
      <CTA />
    </>
  );
}