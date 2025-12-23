import Banner from "@/app/components/Banner";
import GameDescription from "@/app/components/GameDescription";
import MainCaracters from "@/app/components/MainCaracters";
import NavBar from "@/app/components/NavBar";
import OtherCaracters from "@/app/components/OtherCaracters";
import Places from "@/app/components/Places";


const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <GameDescription/>
        <MainCaracters/>
        <OtherCaracters/>
        <Places/>

    </div>
  )
}

export default HomePage;