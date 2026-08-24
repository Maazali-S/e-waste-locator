import Navbar from "../components/layout/navbar";
import Hero from "../components/home/hero";
import DeviceCategories from "../components/home/deviceCategories";
import ImpactStats from "../components/home/impactsStats";
import HowEcoLoopWorks from "../components/home/howitworks";

export default function Home(){

  return (
    <div className="bg-[#F8FAF9] min-h-screen">

      <Navbar/>

      <Hero/>
      <DeviceCategories/>
      <ImpactStats/>
      <HowEcoLoopWorks/>

    </div>
  );
}