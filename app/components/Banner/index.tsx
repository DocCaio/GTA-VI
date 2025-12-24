import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner relative w-[200px] h-[200px]">
      
    
      <Image
        src="/Banner/Circle.png"
        alt="Circle"
        width={200}
        height={200}
      />

      <Image
        src="/Banner/Play.png"
        alt="Play"
        width={100}
        height={100}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
      />

    </div>
  );
};

export default Banner;
