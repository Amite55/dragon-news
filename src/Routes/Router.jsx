import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout.jsx/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsPage from "../Pages/NewsPage/NewsPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><NewsPage></NewsPage></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
])

export default router;