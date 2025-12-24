import Image from "next/image";
import Rock from "../../assets/Announcements/rockStar.png";

const Announcement = () => {
  return (
    <footer className="py-10 px-4">
      <div
        className="         
          max-w-6xl
          mx-auto
          px-8    
          py-10
          bg-[#20202F]
          rounded-2xl
          flex
          flex-col
          items-center
          text-center
          gap-6
          /* Desktop */
          md:flex-row
          md:text-left
          md:justify-between
          md:gap-2
        "
      >
        <div className="flex-shrink-0">
          <Image
            src={Rock}
            alt="Logo da Rockstar"

            className="w-10 md:w-10 h-auto"
          />
        </div>

        
          <h4 className=" text-white text-lg font-bold mb-2 ">
            RECEBER ANÚNCIOS DA ROCKSTAR
          </h4>
          <p className="text-sm text-gray-300 max-w-lg">
            Receba anúncios de jogos mais recentes, notícias
            sobre eventos especiais, promoções e muito mais
            da Rockstar Games.
          </p>
        </div>

      
    </footer>
  );
};

export default Announcement;