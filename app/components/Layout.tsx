import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout() {
  return (
    <>
    <Navbar variant="home" />
    <Outlet />
    <Footer variant="home" />
    </>
  )
}
