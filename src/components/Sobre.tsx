import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <div className="max-w-5xl mx-auto px-4 text-center">

        <span className="text-blue-700 font-semibold uppercase tracking-widest">
          Sobre nós
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 mb-6">
          Educação infantil com acolhimento e desenvolvimento
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Nossa escola oferece um ambiente seguro, acolhedor e preparado para
          estimular o aprendizado e o desenvolvimento das crianças em cada fase
          da infância, sempre com carinho, responsabilidade e atenção
          individual.
        </p>

      </div>

    </motion.section>
  );
}