"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Product from "@/components/Product";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans selection:bg-[#1FA0C9] selection:text-white scroll-smooth">
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Features />
        <Product onOpenModal={handleOpenModal} />
        <Team />
      </main>

      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
