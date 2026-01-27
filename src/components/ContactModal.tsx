"use client";

import { useState, useEffect } from "react";
import Toast from "./Toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen && !showToast) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        onClose();
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 2500);
    }, 1000);
  };

  return (
    <>
      {/* TOAST NOTIFICATION */}
      {showToast && (
        <Toast 
          message="Sua mensagem foi enviada com sucesso!" 
          onClose={() => setShowToast(false)} 
        />
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="text-xl font-bold text-slate-800">
                Adquirir Cuidar+
              </h3>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 transition-colors text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <p className="text-sm text-slate-500 mb-4">
                Preencha seus dados abaixo. Um de nossos consultores entrará em contato para finalizar a aquisição.
              </p>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
                <input
                  required
                  disabled={isSubmitting}
                  type="text"
                  className="w-full px-4 py-3 bg-white text-slate-900 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1FA0C9] focus:border-[#1FA0C9] outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                  <input
                    required
                    disabled={isSubmitting}
                    type="email"
                    className="w-full px-4 py-3 bg-white text-slate-900 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1FA0C9] focus:border-[#1FA0C9] outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                    placeholder="exemplo@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Telefone</label>
                  <input
                    required
                    disabled={isSubmitting}
                    type="tel"
                    className="w-full px-4 py-3 bg-white text-slate-900 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1FA0C9] focus:border-[#1FA0C9] outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Mensagem (Opcional)</label>
                <textarea
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white text-slate-900 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1FA0C9] focus:border-[#1FA0C9] outline-none transition-all resize-none placeholder:text-slate-400 disabled:opacity-50"
                  placeholder="Dúvidas ou melhor horário para contato..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1FA0C9] text-white font-bold rounded-xl hover:bg-[#1689ad] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#1FA0C9]/20 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Solicitar Contato"
                )}
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                Ao enviar, você concorda com nossa <a href="/privacidade" target="_blank" className="underline hover:text-[#1FA0C9]">Política de Privacidade</a>.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}