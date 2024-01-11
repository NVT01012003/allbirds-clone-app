import TopNavigationBanner from "./topNavigationBanner";
import TopNavigationBar from "./topNavigationBar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout() {
    // eslint-disable-next-line no-unused-vars
    const [topBanner, setTopBanner] = useState(null);
    const handleScroll = () => {
        const y = window.scrollY;
        console.log(y);
        // if (y >= 40) {
        //     setTopBanner(false);
        //     console.log({
        //         topBanner,
        //         status: false,
        //     });
        // } else if (y < 40) {
        //     setTopBanner(true);
        //     console.log({
        //         topBanner,
        //         status: true,
        //     });
        // }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="layout">
            <TopNavigationBanner show={topBanner} />
            <TopNavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
