import { createBrowserRouter } from "react-router-dom";
import Layout from "../Common/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Upload from "../Pages/Upload";

export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[{
            index: true,
            element:<HomeScreen/>
        }]
    },
    {
        path:"/upload-book",
        element:<Upload/>
    }
])