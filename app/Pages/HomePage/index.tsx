import Banner from "@/app/components/Banner";
import GameDescription from "@/app/components/GameDescription";
import MainCaracters from "@/app/components/MainCaracters";
import NavBar from "@/app/components/NavBar";
import OtherCaracters from "@/app/components/OtherCaracters";


const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <GameDescription/>
        <MainCaracters/>
        <OtherCaracters/>

    </div>
  )
}

export default HomePage;