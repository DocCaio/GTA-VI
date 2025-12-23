import Image from "next/image";
import Logo from "../../assets/Announcements/logo.png";
import Ps from "../../assets/Announcements/ps.png";
import Xbox from "../../assets/Announcements/xbox.png";

const Announcements = () => {
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
        <Image
          src={Ps}
          alt="PlayStation"
          width={100}
          height={100}
          className="hover:scale-105 transition-transform"
        />
        <Image
          src={Xbox}
          alt="Xbox"
          width={100}
          height={100}
          className="hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default Announcements;
