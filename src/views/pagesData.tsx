import { routerType } from "../types/router.types";
import About from "./About/index";
import Home from "./Home/index";
import Portfolio from "./Portfolio/index";
import EditProfile from "./EditProfile/index"

const pagesData: routerType[] = [
    {
        path: "",
        element: <Home />,
        title: "home"
    },
    {
        path: "about",
        element: <About />,
        title: "about"
    },
    {
        path: "portfolio",
        element: <Portfolio />,
        title: "Portfolio"
    },
    {
        path: "EditProf",
        element: <EditProfile />,
        title: "EditPage"
    }
];

export default pagesData;