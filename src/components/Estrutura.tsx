import { motion } from "framer-motion";

export default function Estrutura() {
  return (
    <motion.section
      id="estrutura"
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <img
            src="/fachada.png"
            alt="Estrutura da escola"
            className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
          />

        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Nossa estrutura
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 mb-6">
            Espaços preparados para acolher e estimular
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Contamos com ambientes planejados para proporcionar conforto,
            segurança e experiências enriquecedoras para as crianças em cada
            etapa do desenvolvimento.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Salas organizadas, áreas recreativas e espaços de convivência
            ajudam a criar uma rotina leve, educativa e acolhedora.
          </p>

        </motion.div>

      </div>

    </motion.section>
  );
}