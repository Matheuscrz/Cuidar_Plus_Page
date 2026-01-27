"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Termos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Termos e Condições de Uso
          </h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 prose prose-slate max-w-none text-slate-600">
            <p className="text-sm text-slate-400 mb-6">Última atualização: {new Date().toLocaleDateString()}</p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">1. Aceitação dos Termos</h3>
            <p className="mb-4">
              Ao acessar e usar o site e os produtos Cuidar+, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">2. Uso do Dispositivo</h3>
            <p className="mb-4">
              O dispositivo Cuidar+ é uma ferramenta de auxílio ao bem-estar e monitoramento. <strong>Ele não substitui diagnósticos médicos profissionais.</strong> Em caso de sintomas graves ou emergências, procure imediatamente um médico ou serviço de urgência.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">3. Privacidade de Dados</h3>
            <p className="mb-4">
              Nós levamos sua privacidade a sério. Os dados coletados pelo dispositivo são utilizados exclusivamente para gerar seu histórico no aplicativo e não são vendidos a terceiros. Para mais detalhes, consulte nossa Política de Privacidade.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">4. Garantia e Devoluções</h3>
            <p className="mb-4">
              O hardware possui garantia de 1 ano contra defeitos de fabricação. Devoluções por arrependimento podem ser feitas em até 7 dias após o recebimento, desde que o produto esteja na embalagem original e sem uso.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">5. Alterações nos Termos</h3>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso contínuo do serviço após tais alterações constitui sua aceitação dos novos termos.
            </p>
          </div>
          
          <div className="mt-8">
            <Link href="/" className="text-[#1FA0C9] font-bold hover:underline flex items-center gap-2">
              <span>←</span> Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}