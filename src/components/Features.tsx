export default function Features() {
  const features = [
    {
      title: "Temperatura Corporal",
      desc: "Sensores de alta precisão para detetar febre instantaneamente.",
    },
    {
      title: "Frequência Cardíaca",
      desc: "Acompanhamento contínuo dos batimentos cardíacos.",
    },
    {
      title: "Oxigenação (SpO2)",
      desc: "Monitorização da saturação de oxigénio no sangue.",
    },
    {
      title: "Alertas em Tempo Real",
      desc: "Notificações sonoras e visuais em caso de anomalias.",
    },
    {
      title: "Histórico Clínico",
      desc: "Armazenamento seguro de dados para consulta médica.",
    },
    {
      title: "Relatórios Exportáveis",
      desc: "Gere PDFs detalhados para partilhar com o médico.",
    },
  ];

  return (
    <section id="funcionalidades" className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Monitorização Completa
          </h2>
          <p className="text-slate-500">
            O sistema integra hardware de precisão e um aplicativo intuitivo
            para fornecer dados em tempo real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#1FA0C9]/30 hover:shadow-xl hover:shadow-[#1FA0C9]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1FA0C9] mb-6 group-hover:bg-[#1FA0C9] group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
