"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import Link from "next/link";

export default function Privacidade() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Política de Privacidade
          </h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 prose prose-slate max-w-none text-slate-600">
            <p className="text-sm text-slate-400 mb-6">Última atualização: {new Date().toLocaleDateString()}</p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">1. Coleta de Informações</h3>
            <p className="mb-4">
              Coletamos informações essenciais para o funcionamento do dispositivo, incluindo sinais vitais (temperatura, frequência cardíaca, oxigenação) e dados de cadastro básico (nome, contato).
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">2. Uso das Informações</h3>
            <p className="mb-4">
              Seus dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Fornecer o histórico clínico no aplicativo;</li>
              <li>Gerar alertas de saúde personalizados;</li>
              <li>Melhorar a precisão dos algoritmos de monitoramento.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">3. Compartilhamento de Dados</h3>
            <p className="mb-4">
              <strong>Não vendemos nem alugamos seus dados pessoais.</strong> O compartilhamento ocorre apenas se você explicitamente exportar um relatório (PDF) para enviar ao seu médico ou cuidador.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">4. Segurança</h3>
            <p className="mb-4">
              Adotamos práticas de segurança padrão da indústria, incluindo criptografia na transmissão e no armazenamento dos dados, para proteger suas informações contra acesso não autorizado.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">5. Seus Direitos</h3>
            <p>
              Você tem o direito de solicitar o acesso, correção ou exclusão dos seus dados pessoais armazenados em nossos servidores a qualquer momento, através dos canais de contato oficiais.
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