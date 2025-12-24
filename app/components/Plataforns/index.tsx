import Image from "next/image";
import Logo from "../../assets/Plataforns/logo.png";
import Ps from "../../assets/Plataforns/ps.png";
import Xbox from "../../assets/Plataforns/xbox.png";
import Link from "next/link";

const Plataforns = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 bg-gray-50
    bg-[linear-gradient(135deg,_#0a0f2e_0%,_rgba(122,0,255,0.7)_100%)]"
    >


      <Image
        src={Logo}
        alt="Logo"
        width={200}
        height={200}
        className="mb-4"
      />


      <h3 className="text-center text-lg md:text-2xl font-bold mb-2 
    bg-gradient-to-r from-[#FFD27B] via-[#DF3A93] to-[#5C1663] 
    text-transparent bg-clip-text">
        Disponível em 19 de novembro de 2026
      </h3>

      <span className="text-white mb-6 cursor-pointer hover:text-pink-500 transition">
        Adicionar à sua lista de desejos
      </span>



      <div className="flex gap-4 md:gap-8">

        <Link href="/">
          <Image
            src={Ps}
            alt="PlayStation"
            width={120}
            height={120}
            className="hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/">
          <Image
            src={Xbox}
            alt="Xbox"
            width={150}
            height={150}
            className="hover:scale-105 transition-transform"
          />
        </Link>

      </div>
    </div>
  );
};

export default Plataforns;
