import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses";
import Details from "../components/Details";
import Home from "../components/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/courses',
            element: <Courses></Courses>,
            loader: async() => fetch('https://e-learning-server-wheat.vercel.app/courses')
        },
        {
            path: '/courses/:id',
            element: <Details></Details>,
            loader: async({params}) => fetch(`https://e-learning-server-wheat.vercel.app/courses/${params.id}`)
        }
    ]}
])



// export default router;