import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";
import Wallet from '../components/Wallet'
import Profile from '../components/Profile'
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/wallet',
                element: <PrivateRoute>
                    <Wallet />
                </PrivateRoute>
            },
            {
                path: '/profile',
                element:
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
            },

        ],
    },

])
export default router;