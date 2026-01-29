interface ProductProps {
  onOpenModal: () => void;
}

export default function Product({ onOpenModal }: ProductProps) {
  const manualLink =
    "https://drive.google.com/file/d/1D0Wm7kH5oOYyPB80er8ditt0ZQAyp97T/view?usp=sharing";
  const specsLink =
    "https://drive.google.com/file/d/1NdmEZr7QZqt_orehjY4vk1pFyPHhCeAX/view?usp=sharing";

  return (
    <section
      id="produto"
      className="py-24 px-6 bg-[#1FA0C9] text-white overflow-hidden relative"
    >
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 border border-white/20">
            Alta Tecnologia
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Leve o cuidado para casa.
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            O Kit Cuidar+ inclui o <strong>dispositivo de monitorização</strong>{" "}
            inteligente e acesso vitalício à aplicação móvel Premium. Segurança
            e autonomia em um só lugar.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Sincronização Bluetooth 5.0",
              "Bateria com 7 dias de autonomia",
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-[#1FA0C9] flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <span className="font-medium text-lg">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-white text-[#1FA0C9] font-bold rounded-xl shadow-xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all"
            >
              Comprar Agora
            </button>
            <div className="flex gap-2">
              <a
                href={manualLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#1FA0C9] border border-white/30 text-white font-bold rounded-xl hover:bg-[#1689ad] hover:border-white/50 transition-colors flex items-center justify-center gap-2"
                title="Manual do Usuário"
              >
                <span>Manual</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
              <a
                href={specsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#1FA0C9] border border-white/30 text-white font-bold rounded-xl hover:bg-[#1689ad] hover:border-white/50 transition-colors flex items-center justify-center gap-2"
                title="Especificações Técnicas"
              >
                <span>Specs</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-[450px] w-full bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center p-8 shadow-2xl">
          <div className="text-center w-full">
            <p className="text-white/60 text-sm mb-6 tracking-widest uppercase">
              Visualização do Hardware
            </p>
            <div className="w-full h-64 flex items-center justify-center">
              <span className="text-white/60 text-lg italic">
                Imagem do hardware em breve
              </span>
            </div>
            <p className="mt-8 font-bold text-3xl">Kit Cuidar+</p>
            <p className="text-white/70 text-sm">Monitor de Sinais Vitais</p>
          </div>
        </div>
      </div>
    </section>
  );
}
