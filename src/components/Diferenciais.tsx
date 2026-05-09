import { motion } from "framer-motion";

const diferenciais = [
  {
    titulo: "Ambiente seguro",
    descricao:
      "Espaços preparados para garantir conforto, segurança e tranquilidade.",
    emoji: "🛡️",
  },
  {
    titulo: "Equipe qualificada",
    descricao:
      "Profissionais dedicados ao cuidado e desenvolvimento infantil.",
    emoji: "👩‍🏫",
  },
  {
    titulo: "Aprendizado diário",
    descricao:
      "Atividades educativas e recreativas adaptadas para cada idade.",
    emoji: "📚",
  },
];

export default function Diferenciais() {
  return (
    <motion.section
      id="diferenciais"
      className="py-16 md:py-24 bg-blue-50"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <div className="max-w-6xl mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center mb-14">

          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Diferenciais
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4">
            Um espaço pensado para o desenvolvimento infantil
          </h2>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {diferenciais.map((item, index) => (

            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:scale-105 hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              <div className="text-5xl mb-6">
                {item.emoji}
              </div>

              <h3 className="text-xl font-bold text-blue-950 mb-4">
                {item.titulo}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.descricao}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}