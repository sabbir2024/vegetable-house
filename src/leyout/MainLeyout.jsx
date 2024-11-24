import { Outlet } from "react-router-dom";
import Footer from "../page/shared/footer/Footer";
import Header from "../page/shared/header/Navbar";

const MainLeyout = () => {
    return (
        <div className="bg-red-50 ">
            <Header />
            <div className="min-h-[calc(100vh-68px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLeyout;