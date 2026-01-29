import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="inicio" className="pt-32 pb-20 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 bg-sky-100 text-[#1FA0C9] rounded-full text-xs font-bold tracking-wide uppercase mb-2">
            Inovação em Saúde
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Tecnologia que cuida de{" "}
            <span className="text-[#1FA0C9]">quem você ama</span>.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            Monitoramento inteligente de sinais vitais integrado ao seu
            celular. Segurança para os pacientes e tranquilidade para a
            família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-[#1FA0C9] text-white font-bold rounded-xl shadow-xl shadow-[#1FA0C9]/30 hover:shadow-2xl hover:-translate-y-1 transition-all text-center"
            >
              Adquirir Dispositivo
            </button>
            <Link
              href="#funcionalidades"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all text-center"
            >
              Como Funciona
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-transparent rounded-full blur-3xl opacity-60 transform scale-90" />
          <Image
            src="/image.png"
            alt="Aplicação Cuidar+ em funcionamento"
            width={600}
            height={600}
            className="relative rounded-3xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 max-h-[500px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}