import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar.jsx";
import Footer from "../components/shared/footer/Footer.jsx";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="pt-24"><Outlet /></div>
            <Footer />
        </>
    );
};

export default Main;