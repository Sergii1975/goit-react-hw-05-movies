import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
// import css from './Layout.module.css'


export const Layout = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>
};