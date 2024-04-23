import { Outlet } from "react-router-dom";
import React from "react";
import Loading from "../ui/Loading";

const Layout: React.FC = () => {
    return (<>
        <React.Suspense fallback={<div className="container"><Loading /></div>}>
            <Outlet />
        </React.Suspense>

    </>)
}

export default Layout;