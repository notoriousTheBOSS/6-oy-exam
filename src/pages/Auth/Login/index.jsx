import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { message } from "antd";
import "./style.scss";
import userAPI from "../../../service/user/index";
import mainlogo from "../../../assets/icons/mainlogo.svg";

const index = () => {
    const [checked, setChecked] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            password,
        };
        console.log("user", newUser);

        if (username.trim().length > 0) {
            userAPI
                .login(newUser)
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        localStorage.setItem("token", res.data.token);
                        setTimeout(() => {
                            navigate("/dashboard");
                        }, 1000);
                    }
                })
                .catch(() => {
                    console.log("login failed");
                });
            setUserName("");
            setPassword("");
        } else {
            console.log("else");
        }
    };

    return (
        <div className="login bg-slate-200">
            <form
                onSubmit={handleForm}
                className="loginwrapper shadow-2xl relative"
            >
                <span className="w-full h-[8px] bg-blue-600 top-0 left-0 block absolute"></span>
                <div>
                    <img className="login-logo" src={mainlogo} alt="" />
                    <div className="login-name">
                        <label htmlFor="username" className="login-name-h3">
                            Foydalanuvchi nomi
                        </label>
                        <input
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            name="username"
                            id="username"
                            message="Iltimos, foydalanuvchi nomingizni kiriting!"
                            className="login-name-input"
                            type="text"
                            placeholder="Foydalanuvchi nomi..."
                        />
                    </div>
                    <div className="login-password">
                        <label htmlFor="password" className="login-password-h3">
                            Parol
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            id="password"
                            className="login-password-input"
                            type={!checked ? "password" : "text"}
                            placeholder="Parol..."
                        />
                    </div>
                    <div className="logincheckbox">
                        <input
                            onClick={() => setChecked(!checked)}
                            type="checkbox"
                            className="logincheckbox-input rounded-[3px]"
                        />
                        <p className="logincheckbox-p">Parolni ko'rish</p>
                    </div>
                </div>

                <button type="submit" className="login-enter rounded-[8px]">
                    Kirish
                </button>
            </form>
        </div>
    );
};

export default index;
