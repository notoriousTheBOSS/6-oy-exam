import React, { useState, useEffect } from "react";
import excel from "../../../assets/icons/excel.png";

import customersAPI from "./../../../service/customers";
import checkstudentx from "../../../assets/icons/checkstudentx.png";
import edit from "../../../assets/icons/edit.png";
import { Breadcrumb, Pagination, Modal } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

const index = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState("Content of the modal");
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText("The modal will be closed after two seconds");
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log("Clicked cancel button");
        setOpen(false);
    };

    const getCustomers = () => {
        customersAPI
            .customers()
            .then((res) => {
                console.log("res customers", res);
                setData(res?.data?.users);
            })
            .catch((err) => {
                console.log("curstomers", err);
            });
    };
    useEffect(() => {
        getCustomers();
    }, []);
    return (
        <>
            <div className="customers bg-white max-w-full w-full h-[100px] rounded-[8px]">
                <h2 className="customers-h2">Buyurtmachilar</h2>
                <Breadcrumb
                    items={[
                        {
                            title: <Link to="/dashboard">Bosh Sahifa</Link>,
                        },
                        {
                            title: "Buyurtmachilar",
                        },
                    ]}
                />
            </div>
            <div className="studentstablewrapper max-w-full w-full">
                <button className="studentsbutton">
                    Export to Excel
                    <img src={excel} alt="" />
                </button>
                <div className="studentstable">
                    <table className="max-w-full w-full border">
                        <tr className="h-[40px] border-b-2 bg-gray-100 w-full">
                            <th className="w-[30px] border-r-[1px]">#</th>
                            <th className="w-[250px] border-r-[1px]">F.I.SH</th>
                            <th className="w-[150px] border-r-[1px]">
                                Telefon
                            </th>
                            <th className="w-[80px] border-r-[1px]">Xizmat</th>
                            <th className="w-[200px] border-r-[1px]">
                                Ro'yxatdan o'tgan vaqti
                            </th>
                        </tr>
                        {data?.map((item, index) => {
                            return (
                                <tbody>
                                    <tr
                                        className={`h-[60px] border-b-2  w-full ${
                                            (index + 1) % 2 == 0
                                                ? "bg-gray-100"
                                                : "bg-white"
                                        }`}
                                    >
                                        <td className="border-r-[1px] text-center">
                                            {index + 1}
                                        </td>
                                        <td className="border-r-[1px] px-4 text-center">
                                            {item?.fullName}
                                        </td>
                                        <td className="border-r-[1px] px-4 text-center">
                                            {item?.phoneNumber}
                                        </td>
                                        <td className="w-[210px] border-r-[1px] px-4 text-center">
                                            {item?.serviceId?.title}
                                        </td>
                                        <td className="border-r-[1px] px-4 text-center ">
                                            {item?.createdAt}
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
                <div className="flex items-center justify-between">
                    <span></span>
                    <Pagination defaultCurrent={1} total={5} />
                </div>
                <Modal
                    title="O'quvchi xolatini o'zgartirish"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <div className="border-t-2 flex flex-col">
                        <label for="status" className="text-[22px] mb-3">
                            Holatni tanlang
                        </label>

                        <select name="status" id="status">
                            <option value="volvo">Tanlang</option>
                            <option value="saab">O'qiydi</option>
                            <option value="mercedes">O'qimaydi</option>
                        </select>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default index;
