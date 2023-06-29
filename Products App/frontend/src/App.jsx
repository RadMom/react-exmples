import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

//layouts
import RootLayout from "./layouts/RootLayout";
import ProductsLayout from "./layouts/ProductsLayout";

//pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: "products",
                    element: <ProductsLayout />,
                    children: [
                        { index: true, element: <ProductsPage /> },
                        { path: ":productId", element: <ProductDetailsPage /> },
                    ],
                },
                { path: "about", element: <AboutPage /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
