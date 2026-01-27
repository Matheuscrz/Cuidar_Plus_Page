import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Logo Cuidar+"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-[#1FA0C9]">Cuidar+</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link
            href="/#inicio"
            className="hover:text-[#1FA0C9] transition-colors"
          >
            Início
          </Link>
          <Link
            href="/#funcionalidades"
            className="hover:text-[#1FA0C9] transition-colors"
          >
            Funcionalidades
          </Link>
          <Link
            href="/#produto"
            className="hover:text-[#1FA0C9] transition-colors"
          >
            O Produto
          </Link>
          <Link
            href="/#equipe"
            className="hover:text-[#1FA0C9] transition-colors"
          >
            Equipe
          </Link>
        </div>

        <button
          onClick={onOpenModal}
          className="hidden md:block px-5 py-2.5 bg-[#1FA0C9] text-white text-sm font-bold rounded-full hover:bg-[#1689ad] transition-transform hover:scale-105 shadow-lg shadow-[#1FA0C9]/20"
        >
          Adquirir Agora
        </button>
      </div>
    </nav>
  );
}
