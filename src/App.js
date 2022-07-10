import {Outlet} from "react-router-dom"
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Navbar />
        </>
  );
}
