import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import { setLogout } from "./redux/authSlice";

//layouts
import RootLayout from "./layouts/RootLayout";
import ProductsLayout from "./layouts/ProductsLayout";

//pages
// const HomePage = lazy(() => import("./pages/HomePage"));
// const ProductsPage = lazy(() => import("./pages/ProductsPage"));
// const AboutPage = lazy(() => import("./pages/AboutPage"));
// const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
// const ErrorPage = lazy(() => import("./pages/ErrorPage"));
// const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const Cart = lazy(() => import("./components/Cart/Cart"));

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./components/Cart/Cart";
//admin
import AdminDushboard from "./pages/admin/AdminDushboard";
import ProductsAdmin from "./components/adminComponents/ProductsAdmin";
import UsersAdmin from "./components/adminComponents/UsersAdmin";
import OrdersAdmin from "./components/adminComponents/OrdersAdmin";
import CreateProduct from "./pages/admin/ProductForm";

function App() {
    console.log("App.jsx");
    const dispatch = useDispatch();

    useEffect(() => {
        const expirationTime = localStorage.getItem("expirationTime");
        if (expirationTime) {
            const currentTime = new Date().getTime();

            if (currentTime > expirationTime) {
                dispatch(setLogout());
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
                {
                    path: "admin",
                    // element: <AdminDushboard />,
                    children: [
                        { path: "products", element: <ProductsAdmin /> },
                        { path: "users", element: <UsersAdmin /> },
                        { path: "orders", element: <OrdersAdmin /> },
                        { path: "create", element: <CreateProduct /> },
                    ],
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
