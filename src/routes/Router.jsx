import { createBrowserRouter } from "react-router-dom";
import MainLeyout from "../leyout/MainLeyout";
import Home from "../page/home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLeyout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
], {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
});

export default Router;