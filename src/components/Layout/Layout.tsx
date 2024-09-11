import { Outlet } from "react-router-dom";
import { HeaderNavItem, PageHeader } from "./Layout.styled";

function Layout() {
  return (
    <>
      <PageHeader>
        <HeaderNavItem to="/">Home</HeaderNavItem>
        <HeaderNavItem to="/page">Page</HeaderNavItem>
      </PageHeader>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
