
import Announcements from "@/app/components/Announcements";
import Banner from "@/app/components/Banner";
import GameDescription from "@/app/components/GameDescription";
import MainCaracters from "@/app/components/MainCaracters";
import NavBar from "@/app/components/NavBar";
import OtherCaracters from "@/app/components/OtherCaracters";
import Places from "@/app/components/Places";
import Plataforns from "@/app/components/Plataforns";


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className=" bg-[linear-gradient(135deg,_#0a0f2e_0%,_rgba(122,0,255,0.7)_100%)]">
        <Banner />
        <GameDescription />
        <MainCaracters />
        <OtherCaracters />
        <Places />
        <Plataforns />
        <Announcements/>
      
      </div>

    </div>
  )
}

export default HomePage;