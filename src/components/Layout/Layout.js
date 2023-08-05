import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {Header, HeaderNav, Link, Logo} from './Layout.styled';


export const Layout = () => {
    return <>
        <Header>
            <HeaderNav>
                <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Cinema search
        </Logo>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </HeaderNav>
        </Header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>
};