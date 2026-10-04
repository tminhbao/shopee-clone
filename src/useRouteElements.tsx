/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList/ProductList'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import Profile from './pages/Profile/Profile'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const RejectedRoute = () => {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

const useRouteElements = () => {
    const routeElements = useRoutes([
        {
            path: "/",
            element: <MainLayout>
                <ProductList />
            </MainLayout>
        },
        {
            path: "",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/profile",
                    element: <MainLayout>
                        <Profile/>
                    </MainLayout>
                }
            ]
        },
        {
            path: "",
            element: <RejectedRoute />,
            children: [
                {
                    path: "/login",
                    element: <RegisterLayout>
                        <Login />
                    </RegisterLayout>
                },
                {
                    path: "/register",
                    element: <RegisterLayout>
                        <Register />
                    </RegisterLayout>
                }
            ]
        },
    ])
    return routeElements
}

export default useRouteElements