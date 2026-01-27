import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const manualLink = "https://drive.google.com/file/d/1D0Wm7kH5oOYyPB80er8ditt0ZQAyp97T/view?usp=sharing";
  const specsLink = "https://drive.google.com/file/d/1NdmEZr7QZqt_orehjY4vk1pFyPHhCeAX/view?usp=sharing";

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
             <span className="text-2xl font-bold text-white tracking-tight">Cuidar<span className="text-[#1FA0C9]">+</span></span>
          </Link>
          <p className="text-sm max-w-sm leading-relaxed">
            Desenvolvemos tecnologia acessível para monitorização de saúde e bem-estar. Cuidado e segurança na palma da sua mão.
          </p>
          <div className="pt-4">
             <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Iniciativa</div>
             <div className="text-slate-300 font-semibold">Universidade Federal de Sergipe</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Downloads</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={manualLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#1FA0C9] transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Manual do Utilizador
              </a>
            </li>
            <li>
              <a href={specsLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#1FA0C9] transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Especificações Técnicas
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
               <span className="w-1 h-1 bg-[#1FA0C9] rounded-full"></span>
               cuidar@dcomp.ufs.br
            </li>
            <li className="flex items-center gap-2">
               <span className="w-1 h-1 bg-[#1FA0C9] rounded-full"></span>
               São Cristóvão, SE
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        <p className="text-slate-500">© {currentYear} Cuidar+. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <Link href="/privacidade" className="text-slate-400 hover:text-white transition-colors">
            Política de Privacidade
          </Link>
          <Link href="/termos" className="text-slate-400 hover:text-white transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}