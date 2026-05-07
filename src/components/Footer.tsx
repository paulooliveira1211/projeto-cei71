export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 border-t border-blue-900">

      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-10">

          {/* LOGO / SOBRE */}
          <div>

            <h3 className="text-2xl font-bold mb-4">
              CEI 71
            </h3>

            <p className="text-blue-100 leading-relaxed">
              Educação infantil com carinho, acolhimento e desenvolvimento
              para cada etapa da infância.
            </p>

          </div>

          {/* CONTATO */}
          <div>

            <h4 className="text-xl font-semibold mb-4 text-yellow-300">
              Contato
            </h4>

            <ul className="space-y-3 text-blue-100">

              <li>
                📍 Sorocaba - SP
              </li>

              <li>
                📞 (15) 3217-2114
              </li>

              <li>
                ✉ contato@cei71.com.br
              </li>

            </ul>

          </div>

          {/* HORÁRIOS */}
          <div>

            <h4 className="text-xl font-semibold mb-4 text-yellow-300">
              Horários
            </h4>

            <ul className="space-y-3 text-blue-100">

              <li>
                Segunda a Sexta
              </li>

              <li>
                07h às 17h
              </li>

            </ul>

          </div>

        </div>

        {/* LINHA FINAL */}
        <div className="border-t border-blue-900 mt-10 pt-6 text-center text-blue-300 text-sm">

          © {new Date().getFullYear()} CEI 71 — Todos os direitos reservados.

        </div>

      </div>

    </footer>
  );
}