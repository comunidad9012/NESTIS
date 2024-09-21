import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import GlobalLayout from "../components/GlobalLayout";


export const Route = createRootRoute({
    component: () => (
        <GlobalLayout>
            <div>
                <Link to="/">Home</Link>{' '}
                <Link to="/about">About</Link>{' '}
                <Link to="/login">Login</Link>{' '}
                <Link to="/registro">Registro</Link>
            </div>
            <hr />
            <TanStackRouterDevtools />
        </GlobalLayout>

        
    ),
})
