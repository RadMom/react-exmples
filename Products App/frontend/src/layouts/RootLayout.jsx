import { Outlet } from "react-router-dom";

import MainNavigation from "../components/Navigations&Footer/MainNavigation";
import MainNavTesting from "../components/Navigations&Footer/MainNavTesting";
import Footer from "../components/Navigations&Footer/Footer";
import { Suspense } from "react";

const RootLayout = () => {
    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                {/* <MainNavigation /> */}
                <MainNavTesting />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Suspense>
        </>
    );
};

export default RootLayout;
