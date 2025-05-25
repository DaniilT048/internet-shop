import type {JSX} from "react";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Shop from "./components/Shop.tsx";
import Cart from "./components/Cart.tsx";
import ItemShop from "./components/ItemShop.tsx";


interface RoutesType {
    path?: string;
    element: JSX.Element;
    label?: string;
    children?: RoutesType[];
}

let routes: RoutesType[];
routes = [
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
        children:
            [{
            path: ":id",
            element: <ItemShop/>,
        }],
    },
    {
        path: "/cart",
        element: <Cart/>,
        label: "Cart",
    },
];

export default routes;