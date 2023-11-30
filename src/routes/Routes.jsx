import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Destination from "../pages/destination/Destination";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/destination",
                element: <Destination />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])

export default router;