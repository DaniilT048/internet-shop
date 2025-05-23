import type {JSX} from "react";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Shop from "./components/Shop.tsx";
import Cart from "./components/Cart.tsx";


interface RoutesType {
    path: string;
    element: JSX.Element;
    label: string;
}

const routes: RoutesType[] = [
    {
        path: "/",
        element: <Home/>,
        label: "Home",
    },
    {
        path: "/about",
        element: <About/>,
        label: "About",
    },
    {
        path: "/shop",
        element: <Shop/>,
        label: "Shop",
    },
    {
        path: "/cart",
        element: <Cart/>,
        label: "Cart",
    },
];

export default routes;