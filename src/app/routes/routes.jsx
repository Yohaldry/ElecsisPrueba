import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'
import TopSellingTable from '../views/dashboard/shared/TopSellingTable'
import PantallaUsers from '../views/dashboard/shared/PantallaUsers'
import Analytics from 'app/views/dashboard/Analytics'
import MatxCustomizer from 'app/components/MatxCustomizer/MatxCustomizer'
import { MatxDivider } from 'app/components'

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <AuthGuard>
                    <MatxLayout />
                </AuthGuard>
            ),
            children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="/ElecsisPrueba/dashboard/default" />,
        },
        {
            path: '/ElecsisPrueba/TableUsuarios',
            element: <PantallaUsers />,
        },
        {
            path: '/ElecsisPrueba/dashboard',
            element: <MatxLayout />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
