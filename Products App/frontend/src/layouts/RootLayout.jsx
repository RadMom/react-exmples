import { Outlet } from "react-router-dom";

import MainNavigation from "../components/Navigations&Footer/MainNavigation";
import Footer from "../components/Navigations&Footer/Footer";

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
