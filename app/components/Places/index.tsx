import Link from "next/link";
import Image from "next/image";
import dados from "../../../data/places.json";
import { Lugares } from "@/app/types/places";

const Places = () => {
  return (
    <section className="w-full py-10">
      <div className="
      
        flex flex-col gap-6 px-4 
        
        
        md:grid md:grid-cols-3 
        md:gap-3                
        md:max-w-[1440px]       
        md:mx-auto              
      ">
        {dados.places.map((place: Lugares) => (
          <div
            key={place.id}
            className="relative group overflow-hidden rounded-xl"
          >
            <Image
              src={place.image}
              alt={place.atl || "Place image"}

              width={800}
              height={1200}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />


            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />

            <Link
              href={place.nome}
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                bg-white text-black
                px-8 py-3 rounded-[10px]
                text-sm font-bold uppercase tracking-wider
                shadow-xl
                transition-all
                hover:bg-gray-100
                active:scale-95
                whitespace-nowrap
                z-10
              "
            >
              {place.link}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Places;