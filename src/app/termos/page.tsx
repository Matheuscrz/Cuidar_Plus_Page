import Link from "next/link";

export default function Termos() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 lg:px-8 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Cabeçalho */}
        <div className="bg-slate-800 px-8 py-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <Link 
            href="/" 
            className="inline-flex items-center text-white/70 hover:text-white mb-6 text-sm font-bold transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar ao Início
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Termos de Uso</h1>
          <p className="text-white/60">Última atualização: 29 de Janeiro de 2026</p>
        </div>

        {/* Conteúdo */}
        <div className="p-8 md:p-12 space-y-8">
          
          {/* Aviso Importante de Saúde */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-red-800 font-bold text-lg mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Isenção de Responsabilidade Médica
            </h3>
            <p className="text-red-700 text-sm leading-relaxed">
              O <strong>Kit Cuidar+</strong> e seu aplicativo são ferramentas de auxílio ao monitoramento e bem-estar. <strong>Eles NÃO substituem o diagnóstico, aconselhamento ou tratamento médico profissional.</strong> Em caso de emergência ou sintomas graves, procure imediatamente um serviço de urgência, independentemente das leituras do dispositivo.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="leading-relaxed">
              Ao adquirir, acessar ou utilizar o dispositivo Cuidar+ e nosso software, você concorda em cumprir estes Termos de Uso e nossa Política de Privacidade. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Uso do Equipamento</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Você é responsável por manter o dispositivo carregado e em bom estado de conservação.</li>
              <li>Não tente desmontar, modificar ou reparar o hardware por conta própria; isso anulará a garantia.</li>
              <li>O dispositivo deve ser usado conforme as instruções do Manual do Usuário para garantir a precisão das leituras.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Propriedade Intelectual</h2>
            <p className="leading-relaxed">
              Todo o conteúdo, design, logotipos, software e firmware associados ao Projeto Cuidar+ são propriedade exclusiva da nossa equipe de desenvolvimento e estão protegidos pelas leis de direitos autorais e propriedade intelectual do Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitação de Responsabilidade</h2>
            <p className="leading-relaxed">
              Não nos responsabilizamos por:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3 text-slate-600">
              <li>Falhas de conexão Bluetooth decorrentes de incompatibilidade do seu smartphone.</li>
              <li>Interrupções no serviço devido a manutenções programadas ou força maior.</li>
              <li>Decisões de saúde tomadas exclusivamente com base nos dados do aplicativo sem consulta médica.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Alterações</h2>
            <p className="leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos sobre alterações significativas através do aplicativo ou por e-mail.
            </p>
          </section>

          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Copyright © 2026 Projeto Cuidar+. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}