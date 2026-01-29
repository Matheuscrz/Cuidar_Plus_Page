import Link from "next/link";

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 lg:px-8 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Cabeçalho */}
        <div className="bg-[#1FA0C9] px-8 py-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <Link 
            href="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-bold transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar ao Início
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Política de Privacidade</h1>
          <p className="text-white/90">Última atualização: 29 de Janeiro de 2026</p>
        </div>

        {/* Conteúdo */}
        <div className="p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introdução</h2>
            <p className="leading-relaxed">
              A sua privacidade é nossa prioridade. Esta Política de Privacidade descreve como o <strong>Kit Cuidar+</strong> coleta, usa e protege as suas informações pessoais e dados sensíveis de saúde, em estrita conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Dados que Coletamos</h2>
            <p className="mb-3">Para fornecer o monitoramento de saúde, coletamos as seguintes categorias de dados:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Dados Pessoais:</strong> Nome, e-mail, telefone e data de nascimento para criação de perfil.</li>
              <li><strong>Dados Sensíveis de Saúde:</strong> Frequência cardíaca, temperatura corporal, saturação de oxigênio (SpO2) e histórico de medições.</li>
              <li><strong>Dados do Dispositivo:</strong> Logs de funcionamento do hardware Cuidar+, status da bateria e conectividade Bluetooth.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalidade do Tratamento</h2>
            <p className="leading-relaxed">
              Utilizamos seus dados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3 text-slate-600">
              <li>Processar e exibir seus sinais vitais em tempo real no aplicativo.</li>
              <li>Gerar relatórios históricos para seu acompanhamento médico.</li>
              <li>Enviar alertas de segurança em caso de detecção de anomalias (ex: febre alta).</li>
              <li>Melhorar a precisão dos algoritmos do dispositivo (dados anonimizados).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Compartilhamento de Dados</h2>
            <p className="leading-relaxed border-l-4 border-[#1FA0C9] pl-4 bg-slate-50 py-2">
              <strong>Importante:</strong> Nós <strong>não vendemos</strong> seus dados pessoais. Seus dados de saúde só podem ser compartilhados com médicos ou familiares mediante sua autorização expressa dentro do aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Seus Direitos (LGPD)</h2>
            <p className="mb-3">Você tem total controle sobre suas informações:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2">Acesso e Correção</h3>
                <p className="text-sm">Solicite uma cópia de seus dados ou corrija informações desatualizadas.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2">Exclusão</h3>
                <p className="text-sm">Peça a exclusão total de seu histórico e conta a qualquer momento.</p>
              </div>
            </div>
          </section>

          <div className="pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center">
              Dúvidas sobre seus dados? Entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail <a href="#" className="text-[#1FA0C9] hover:underline">privacidade@cuidarmais.com.br</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}