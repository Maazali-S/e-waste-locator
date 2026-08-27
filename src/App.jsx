import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/home";
import FindFacility from "./pages/FindFacility";
import DeviceLookup from "./pages/DeivceLookup";
import Dashboard from "./pages/Dashboard";
import Rewards from "./pages/Rewards";
import KnowledgeHub from "./pages/KnowledgeHub";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
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