import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Destination from "../pages/destination/Destination";
import About from "../pages/about/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
        ]
    }
])

export default router;