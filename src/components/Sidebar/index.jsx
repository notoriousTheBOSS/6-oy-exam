import { NavLink } from "react-router-dom";
import dashboard from "../../assets/icons/dashboard.png";
import students from "../../assets/icons/students.png";
import courses from "../../assets/icons/courses.png";
import customers from "../../assets/icons/customers.png";
import services from "../../assets/icons/services.png";
import "./style.scss";

const index = ({ isOpen }) => {
    const sidebarClassName = isOpen ? "sidebarOpen" : "sidebar";
    return (
        <aside className={sidebarClassName}>
            <NavLink
                to="/dashboard"
                activeClassName="active-link"
                className="non-active-link"
            >
                <img src={dashboard} alt="" />
                <h1 className="navlink-h1">Dashboard</h1>
            </NavLink>
            <NavLink
                to="/dashboard/students"
                activeClassName="active-link"
                className="non-active-link"
            >
                <img src={students} alt="" />
                <h1 className="navlink-h1 ">O'quvchilar</h1>
            </NavLink>
            <NavLink
                to="/dashboard/courses"
                activeClassName="active-link"
                className="non-active-link"
            >
                <img src={courses} alt="" />
                <h1 className="navlink-h1 ">Kurslar</h1>
            </NavLink>
            <NavLink
                to="/dashboard/customers"
                activeClassName="active-link"
                className="non-active-link"
            >
                <img src={customers} alt="" />
                <h1 className="navlink-h1 ">Buyurtmachilar</h1>
            </NavLink>
            <NavLink
                to="/dashboard/services"
                activeClassName="active-link"
                className="non-active-link"
            >
                <img src={services} alt="" />
                <h1 className="navlink-h1 ">Xizmatlar</h1>
            </NavLink>
        </aside>
    );
};

export default index;
