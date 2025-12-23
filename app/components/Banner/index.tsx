import "./Banner.css";
import Image from "next/image";
import Play from "../../../assets/NavBar/play.png";
import Circle from "../../../assets/NavBar/circle.png";

const Banner = () => {
  return (
    <div className="banner">
           <Image src={Play} alt="Logo letra 1" width={45} height={30} />
            <Image src={Circle} alt="Logo letra 2" width={18} height={10} />


    </div>
  )
}

export default Banner;