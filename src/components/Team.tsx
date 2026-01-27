import Image from "next/image";

export default function Team() {
  const developers = [
    { name: "Bruno Santana", img: "/Bruno.png" },
    { name: "Felipe da Silva", img: "/Felipe.jpeg" },
    { name: "Isaias Silva", img: "/Isaias.jpeg" },
    { name: "Marcelo Cruz", img: "/Marcelo.jpeg" },
    { name: "Mateus Costa", img: "/Mateus.jpeg" },
    { name: "Matheus Cruz", img: "/Matheus.jpeg" },
  ];

  const consultants = [
    "Edward Moreno",
    "Debora Nascimento",
    "Giovanny Lucero",
    "Adicinéia Oliveira",
  ];

  return (
    <section id="equipe" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Quem faz acontecer
            </h2>
            <p className="text-slate-500">
              Conheça os talentos por trás do projeto.
            </p>
          </div>
        </div>

        {/* Developers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {developers.map(({ name, img }) => (
            <div
              key={name}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#1FA0C9]/30 relative">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <p className="text-sm font-bold text-slate-800">{name}</p>
              <p className="text-xs text-slate-500 mt-1">Developer</p>
            </div>
          ))}
        </div>

        {/* Consultores */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center md:text-left">
            Consultoria Especializada
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {consultants.map((name) => (
              <div
                key={name}
                className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1FA0C9]/10 text-[#1FA0C9] flex items-center justify-center font-bold text-lg">
                  {name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-800">{name}</p>
                  <p className="text-xs text-slate-500">Consultor(a)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
