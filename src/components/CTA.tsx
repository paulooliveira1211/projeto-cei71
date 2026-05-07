import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      id="contato"
      className="py-16 md:py-24 bg-blue-950 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <div className="max-w-4xl mx-auto px-4 text-center">

        <span className="text-yellow-300 font-semibold uppercase tracking-widest">
          Entre em contato
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
          Agende uma visita e conheça nossa escola
        </h2>

        <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10">
          Estamos preparados para acolher seu filho com carinho,
          segurança e atenção em cada etapa do desenvolvimento.
        </p>

        <a
          href="https://wa.me/5515999999999"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 hover:scale-105 shadow-2xl px-10 py-5 rounded-2xl text-lg font-semibold transition duration-300"
        >
          Falar no WhatsApp
        </a>

      </div>

    </motion.section>
  );
}