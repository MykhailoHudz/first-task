import { NavLink, Outlet } from "react-router-dom";
import { PageHeader} from "./Layout.styled";

function Layout() {
  return (
    <>
      <PageHeader>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page">Page</NavLink>
      </PageHeader>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
