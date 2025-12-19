import Banner from "@/app/components/Banner";
import GameDescription from "@/app/components/GameDescription";
import MainCaracters from "@/app/components/MainCaracters";
import NavBar from "@/app/components/NavBar";


const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <GameDescription/>
        <MainCaracters/>

    </div>
  )
}

export default HomePage;