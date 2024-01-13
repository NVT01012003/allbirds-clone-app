import { Outlet } from "react-router-dom";
import Footer from "./footer";
import TopNavigation from "./topNavigationBar";

function Layout() {
    return (
        <div className="layout">
            <TopNavigation />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
