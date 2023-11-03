import React, { useState, useEffect } from "react";
import { message } from "antd";
import userAPI from "../../service/user";
import menu from "../../assets/icons/menu.png";
import HeaderAvatar from "./../UI/HeaderAvatar";
import mainlogo from "../../assets/icons/mainlogo.svg";
import down from "../../assets/icons/down.png";
import settings from "../../assets/icons/settings.png";
import logout from "../../assets/icons/logout.png";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
const index = ({ onToggleSidebar }) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const updown = isOpen ? "down" : "up";
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: "success",
            content: "Loading...",
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: "seccess",
                content: "Logged out successfully",
                duration: 3,
            });
        }, 1000);
    };
    const handleLogOut = () => {
        localStorage.removeItem("token");
        success();
        navigate("/login");
    };
    const getMyInfo = () => {
        userAPI
            .getMe()
            .then((res) => {
                console.log("res getme", res);
                setData(res?.data?.admin);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getMyInfo();
    }, []);
    return (
        <header className="dashboardheader shadow-3xl">
            {contextHolder}
            <div className="header-wrapper">
                <img src={mainlogo} alt="" />
                <div className="header-right">
                    <button onClick={onToggleSidebar}>
                        <img
                            className="w-[36px] cursor-pointer h-[36px]"
                            src={menu}
                            alt=""
                        />
                    </button>
                    <button
                        onClick={toggleDropdown}
                        className="header-avatar outline-none"
                    >
                        <HeaderAvatar />
                        <p className="header-avatar-p">{data.fullName}</p>
                        <img className={updown} src={down} alt="" />
                        {isOpen && (
                            <div className="header-dropdown shadow-2xl border">
                                <NavLink to="/dashboard/user">
                                    <span className="headersettings">
                                        <img src={settings} alt="" />
                                        Sozlamalar
                                    </span>
                                </NavLink>
                                <hr className="w-full h-[2px]" />
                                <span
                                    onClick={handleLogOut}
                                    className="headerexit"
                                >
                                    <img src={logout} alt="" />
                                    Chiqish
                                </span>
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default index;
