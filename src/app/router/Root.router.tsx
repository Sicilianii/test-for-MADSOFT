import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootPage from "../../pages/Root.page.tsx";
import StartTestPage from "../../pages/StartTest.page.tsx";
import EndTestPage from "../../pages/EndTest.page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
    },
    {
        path: "login",
        element: <div>About</div>,
    },
    {
        path: "start",
        element: <StartTestPage />,
    },
    {
        path: "end",
        element: <EndTestPage />,
    },
    {
        path: "question",
        element: <EndTestPage />,
    },
]);

export default function RootRouter() {
    return <RouterProvider router={router} />
}
