import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollTop from "../common/ScrollTop";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
        <ScrollTop />
      <Footer />
    </>
  );
}