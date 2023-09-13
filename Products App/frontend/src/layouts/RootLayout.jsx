import { Outlet } from "react-router-dom";

import MainNavigation from "../components/Navigations&Footer/MainNavigation";
import Footer from "../components/Navigations&Footer/Footer";
import { Suspense } from "react";

const RootLayout = () => {
    return (
        <div id="content-wrap">
            <Suspense fallback={<p>Loading...</p>}>
                <MainNavigation />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Suspense>
        </div>
    );
};

export default RootLayout;
