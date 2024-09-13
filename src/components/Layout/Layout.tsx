import { Outlet } from "react-router-dom";
import { HeaderNavItem, PageHeader } from "./Layout.styled";
import { Suspense } from "react";

function Layout() {
  return (
    <>
      <PageHeader>
        <HeaderNavItem to="/">Home</HeaderNavItem>
        <HeaderNavItem to="/page">Page</HeaderNavItem>
      </PageHeader>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
