import Image from "next/image";
import dados from "../../../data/db.json";
import { Personagem } from "@/app/types/cards";

const MainCaracters = () => {
  return (
    <section
      className="             
        w-full
        px-4
        py-12
      "
    >
      <div className="max-w-6xl mx-auto"> 
        <span className="text-white block mb-2">
          Quem são Jason e Lucia?
        </span>

        <h2 className="text-white text-3xl font-bold mb-10">
          Conheça nossos protagonistas
        </h2>

       
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {dados.personagens.map((personagem: Personagem) => (
            <div
              key={personagem.id}
              className="flex flex-col items-start w-full lg:w-1/2" 
            >
              <Image
                src={personagem.image}
                alt={personagem.nome}
                width={600} 
                height={600}
                className="mb-6 rounded-lg object-cover"
              />

              <h2 className="text-[#FFD86B] text-2xl font-bold text-left mb-1">
                {personagem.nome}
              </h2>

              <span className="text-[#FF7C92] text-lg font-medium text-left mb-3">
                {personagem.desejo}
              </span>

              <p className="text-white text-left leading-relaxed">
                {personagem.sobre}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCaracters;