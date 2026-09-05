import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/home";
import FindFacility from "./pages/FindFacility";
import DeviceLookup from "./pages/DeivceLookup";
import Dashboard from "./pages/Dashboard";
import Rewards from "./pages/Rewards";
import KnowledgeHub from "./pages/KnowledgeHub";
import Onboarding from "./pages/Onboarding";
import SplashScreen from "./components/common/SplashScreen";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />

        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/find-facility" element={<FindFacility />} />
        <Route path="/device-lookup" element={<DeviceLookup />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/rewards" element={<Rewards />}/>
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}