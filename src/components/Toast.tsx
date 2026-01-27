"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type = "success", onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-emerald-500" : "bg-red-500";
  const icon = type === "success" ? (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div
      className={`fixed top-6 right-6 z-[120] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl text-white transition-all duration-300 transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      } ${bgColor}`}
    >
      <div className="bg-white/20 p-1 rounded-full">{icon}</div>
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wide">
          {type === "success" ? "Sucesso!" : "Erro"}
        </h4>
        <p className="text-sm font-medium opacity-90">{message}</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 text-white/60 hover:text-white transition-colors"
      >
        ✕
      </button>
    </div>
  );
}