import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout";
import Courses from "../components/Courses";
import Details from "../components/Details";
import Home from "../components/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: async () => fetch('https://e-learning-server-wheat.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <Details></Details>,
                loader: async ({ params }) => fetch(`https://e-learning-server-wheat.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://e-learning-server-wheat.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])



// export default router;