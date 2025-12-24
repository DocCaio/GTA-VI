import Image from "next/image";
import dados from "../../../data/others.json";
import { Personagem } from "@/app/types/cards";

const OtherCaracters = () => {
  return (
    <div className="bg-[linear-gradient(135deg,_#0a0f2e_0%,_rgba(122,0,255,0.7)_100%)] w-full px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="text-white opacity-80">Amigos que irão nos ajudar nessa aventura.</span>
        <h2 className="text-white text-3xl font-bold">Veja outros personagens</h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {dados.personagens.map((personagem: Personagem, index: number) => (
          <div 
            key={personagem.id} 
            className={`flex flex-col md:items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={personagem.image}
                alt={personagem.nome}
                width={400} 
                height={400}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>

        
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[#FFD86B] text-2xl font-bold mb-2">{personagem.nome}</h2>
              <span className="text-[#91DFEC] font-medium mb-4 block">{personagem.desejo}</span>
              <p className="text-white leading-relaxed">{personagem.sobre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCaracters;