import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar.jsx";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="pt-24"><Outlet /></div>
        </>
    );
};

export default Main;