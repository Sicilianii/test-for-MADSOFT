import {createBrowserRouter, RouterProvider} from "react-router-dom";
import StartTestPage from "../../pages/StartTest.page.tsx";
import ListTestPage from "../../pages/ListTest.page.tsx";
import EndTestPage from "../../pages/EndTest.page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StartTestPage />,
    },
    {
        path: "login",
        element: <div>About</div>,
    },
    {
        path: "question",
        element:  <ListTestPage />,
    },
    {
        path: "end",
        element: <EndTestPage />,
    },
]);

export default function RootRouter() {
    return <RouterProvider router={router} />
}
