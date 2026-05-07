import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-[90vh] flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/fachada.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* CONTEÚDO */}
      <motion.div
        className="relative text-center text-white px-6 max-w-3xl bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Um lugar seguro e acolhedor para seu filho crescer
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow-md">
          Educação infantil com cuidado, atenção e desenvolvimento diário
        </p>

        <a
          href="https://wa.me/5515999999999"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 hover:scale-105 shadow-xl px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
        >
          Agendar visita
        </a>

      </motion.div>

    </section>
  );
}