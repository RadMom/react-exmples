import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import { logout } from "./redux/authSlice";

//layouts
import RootLayout from "./layouts/RootLayout";
import ProductsLayout from "./layouts/ProductsLayout";

//pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CreateProduct from "./pages/admin/CreateProduct";
import Cart from "./components/Cart/Cart";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const expirationTime = localStorage.getItem("expirationTime");
        if (expirationTime) {
            const currentTime = new Date().getTime();
            console.log(currentTime);
            console.log(expirationTime);
            if (currentTime > expirationTime) {
                dispatch(logout());
            }
        }
    }, [dispatch]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <HomePage /> },
                { path: "registration", element: <RegistrationPage /> },
                { path: "login", element: <LoginPage /> },
                {
                    path: "products",
                    element: <ProductsLayout />,
                    children: [
                        { index: true, element: <ProductsPage /> },
                        { path: ":productId", element: <ProductDetailsPage /> },
                    ],
                },
                { path: "about", element: <AboutPage /> },
                { path: "cart", element: <Cart /> },
                //admin routes
                { path: "/admin/products/create", element: <CreateProduct /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
