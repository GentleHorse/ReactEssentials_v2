import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer.jsx";

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
