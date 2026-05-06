export default function Home() {
  return (
    <div className="bg-blue-50 text-gray-800">

      {/* HERO */}
      <section
        className="h-[90vh] flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/fachada.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-brightness-75"></div>

        {/* conteúdo */}
        <div className="relative text-center text-white px-6 max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Um lugar seguro e acolhedor para seu filho crescer
          </h1>

          <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow-md">
            Educação infantil com cuidado, atenção e desenvolvimento diário
          </p>

          <a
            href="https://wa.me/5515999999999"
            target="_blank"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg shadow-2xl transition"
          >
            Agendar visita
          </a>

        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre a escola
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos um ambiente seguro, acolhedor e preparado para o
            desenvolvimento das crianças, com equipe qualificada e
            atividades pedagógicas diárias.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Por que escolher nossa creche?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Ambiente seguro e monitorado",
              "Alimentação balanceada",
              "Equipe qualificada e atenciosa",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md text-center"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section id="estrutura" className="py-16 md:py-24 bg-blue-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Estrutura completa
            </h2>

            <ul className="space-y-4 text-gray-700">
              {[
                "Salas adaptadas",
                "Parque infantil",
                "Atividades pedagógicas",
                "Alimentação diária",
              ].map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-300 h-64 rounded-2xl flex items-center justify-center">
            IMAGEM
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Agende uma visita
        </h2>
        <p className="mb-8">
          Venha conhecer nossa estrutura de perto
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">
          Falar no WhatsApp
        </button>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-16 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Contato</h2>
        <p>📍 Sorocaba - SP</p>
        <p>📞 (15) 99999-9999</p>
      </section>

    </div>
  );
}