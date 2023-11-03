import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DHeader from "../../components/DHeader";
import Sidebar from "../../components/Sidebar";
import "./style.scss";

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const handleToggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const outletClassName = isSidebarOpen ? "outletOpen" : "outlet";
    return (
        <>
            <div>
                <DHeader onToggleSidebar={handleToggleSidebar} />
                <div className="flex mt-[70px] app">
                    <Sidebar
                        isOpen={isSidebarOpen}
                        onClose={handleToggleSidebar}
                    />
                    <main className={outletClassName}>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layout;
