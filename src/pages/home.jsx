import Navbar from "../components/layout/navbar";
import Hero from "../components/home/hero";
import DeviceCategories from "../components/home/deviceCategories";
import ImpactStats from "../components/home/impactsStats";
import HowEcoLoopWorks from "../components/home/howitworks";
import FindFacilitySection from "../components/home/findfacility";
import KnowledgeSnapshot from "../components/home/knowledgesnap";
import DeviceLookupPreview from "../components/home/DeviceLookupPreview";
import BottomFeatureBar from "../components/home/BottomFeatureBar";
import Footer from "../components/layout/footer";

export default function Home(){

  return (
    <div className="bg-[#F8FAF9] min-h-screen">

      <Hero/>
      <DeviceCategories/>
      <ImpactStats/>
      <HowEcoLoopWorks/>
      <FindFacilitySection/>
      <KnowledgeSnapshot/>
      <DeviceLookupPreview/>
      <BottomFeatureBar/>

    </div>
  );
}