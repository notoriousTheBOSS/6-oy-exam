import { Link, NavLink } from "react-router-dom";
import mainlogo from "../../../assets/icons/mainlogo.svg";
import "./style.scss";

const index = () => {
    return (
        <header className="userheader">
            <nav>
                <div className="container">
                    <div className="wrapper">
                        <img className="headerlogo" src={mainlogo} alt="" />
                        <div className="headerlinks">
                            <a href="#courses">Courses</a>
                            <a href="#services">Services</a>
                            <NavLink to="/login">
                                <button className="headerbutton">Join</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default index;
