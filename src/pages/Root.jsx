import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header.jsx";
import Footer from "../components/UI/Footer.jsx";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
