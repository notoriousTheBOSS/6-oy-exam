import React, { useEffect, useState } from "react";
import { Breadcrumb, Pagination, Modal } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";
import userAPI from "./../../../service/user/index";

const index = () => {
    const [checked, setChecked] = useState(false);
    console.log("check", checked);
    const [data, setData] = useState([]);

    const handleForm = () => {
        console.log("gg");
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
        <>
            <div className="settings bg-white max-w-full w-full h-[100px] rounded-[8px]">
                <h2 className="settings-h2">Sozlamalar</h2>
                <Breadcrumb
                    items={[
                        {
                            title: <Link to="/dashboard">Bosh Sahifa</Link>,
                        },
                        {
                            title: "Sozlamalar",
                        },
                    ]}
                />
            </div>
            <div className="setting bg-slate-200">
                <form
                    onSubmit={handleForm}
                    className="settingwrapper shadow-2xl relative"
                >
                    <div className="mt-[20px]">
                        <div className="settingname">
                            <h2 className="text-[#0963eb] mb-[10px] text-[22px]">
                                F.I.SH
                            </h2>
                            {/* <input
                                disabled
                                className="max-w-full border-slate-400 bg-gray-200 w-full rounded-md"
                                type="text"
                            /> */}
                            <div className="max-w-full h-[42px] flex items-center px-3 border border-slate-400 bg-gray-200 w-full rounded-md">
                                {data?.fullName}
                            </div>
                        </div>
                        <div className="settingname mt-[15px]">
                            <h2 className="text-[#0963eb] mb-[10px] text-[22px]">
                                Foydalanuvchi nomi
                            </h2>
                            {/* <input
                                disabled
                                className="max-w-full border-slate-400 bg-gray-200 w-full rounded-md"
                                type="text"
                            /> */}
                            <div className="max-w-full h-[42px] flex items-center px-3 border border-slate-400 bg-gray-200 w-full rounded-md">
                                {data?.username}
                            </div>
                        </div>
                        <div className="settingname mt-[15px]">
                            <h2 className="text-[#0963eb] mb-[10px] text-[22px]">
                                Foydalanuvchi paroli
                            </h2>
                            {/* <input
                                disabled
                                className="max-w-full border-slate-400 bg-gray-200 w-full rounded-md"
                                type={!checked ? "password" : "text"}
                            /> */}
                            <div className="max-w-full h-[42px] flex items-center px-3 border border-slate-400 bg-gray-200 w-full rounded-md">
                                {checked ? <p>{data?.password}</p> : "•••••••"}
                            </div>
                        </div>
                        <div className="settingcheckbox mt-[20px]">
                            <input
                                onClick={() => setChecked(!checked)}
                                type="checkbox"
                                className="logincheckbox-input rounded-[3px]"
                            />
                            <p className="logincheckbox-p">Parolni ko'rish</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="setting-enter rounded-[8px]"
                    >
                        Tahrirlash
                    </button>
                </form>
            </div>
        </>
    );
};

export default index;
