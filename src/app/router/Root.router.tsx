import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootPage from "../../pages/Root.page.tsx";
import StartTestPage from "../../pages/StartTest.page.tsx";
import ListTestPage from "../../pages/ListTest.page.tsx";
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
        path: "question",
        children: [
            {
                index: true,
                path: "/question/start",
                element: <StartTestPage />,
            },
            {
                path: "/question/:questionId",
                element: <ListTestPage />
            },
            {
                path: "/question/end",
                element: <EndTestPage />,
            },

        ]
    },
]);

export default function RootRouter() {
    return <RouterProvider router={router} />
}
