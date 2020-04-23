import Home from "../pages/home";
import News from "../pages/news";
import Login from "../pages/login";

const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/news",
        component: News
    }
];

export default routes;