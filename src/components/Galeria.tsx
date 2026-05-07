import { motion } from "framer-motion";

const imagens = [
  "/galeria/foto1.jpeg",
  "/galeria/foto2.jpg",
  "/galeria/foto3.jpg",
  "/galeria/foto4.jpeg",
  "/galeria/foto5.jpg",
  "/galeria/foto6.jpeg",
];

export default function Galeria() {
  return (
    <motion.section
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
            Galeria
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4">
            Conheça nosso espaço
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {imagens.map((img, index) => (

            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <img
                src={img}
                alt="Galeria da escola"
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-500"
              />

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}