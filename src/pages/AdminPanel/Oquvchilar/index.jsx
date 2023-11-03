import React, { useState, useEffect } from "react";
import { Breadcrumb, Pagination, Modal } from "antd";
import excel from "../../../assets/icons/excel.png";
import studentsAPI from "../../../service/students";
import checkstudentx from "../../../assets/icons/checkstudentx.png";
import checkstudenttrue from "../../../assets/icons/checkstudenttrue.png";
import warning from "../../../assets/icons/warning.png";
import edit from "../../../assets/icons/edit.png";
import { Link } from "react-router-dom";

import "./style.scss";

const index = () => {
    const [data, setData] = useState([]);
    const [studentID, setStudentID] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("choose");
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState("Content of the modal");
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText("The modal will be closed after two seconds");
        setConfirmLoading(true);
        let statusValue =
            selectedStatus === "true" ? 2 : selectedStatus === "false" ? 3 : 1;
        const putStatus = () => {
            const id = studentID;
            const updatedStatus = statusValue;
            studentsAPI
                .studentsUpdate(id, updatedStatus)
                .then((res) => {
                    console.log("status", res);
                    setStudentID("");
                    setNewStatus("");
                })
                .catch((err) => {
                    console.log("status error", err);
                });
        };
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
        putStatus();
    };
    const handleCancel = () => {
        console.log("Clicked cancel button");
        setOpen(false);
    };

    const getAllStudentsApi = () => {
        studentsAPI
            .getAllStudents()
            .then((res) => {
                console.log("res students", res);
                setData(res?.data?.students);
            })
            .catch((err) => {
                console.log("res students", err);
            });
    };

    useEffect(() => {
        getAllStudentsApi();
        handleOk();
    }, []);

    return (
        <>
            <div className="students max-w-full w-full">
                <h2 className="students-h2">O'quvchilar</h2>
                <Breadcrumb
                    items={[
                        {
                            title: <Link to="/dashboard">Bosh Sahifa</Link>,
                        },
                        {
                            title: "O'quvchilar",
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
                            <th className="w-[210px] border-r-[1px]">Kurs</th>
                            <th className="w-[200px] border-r-[1px]">
                                Ro'yxatdan o'tgan vaqti
                            </th>
                            <th className="w-[80px] border-r-[1px]">Xolat</th>
                            <th className="w-[90px]">Tahrirlash</th>
                        </tr>
                        {data?.map((item, index) => {
                            return (
                                <tbody>
                                    <tr className="h-[60px] border-b-2  w-full">
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
                                            {item?.courseId.title}
                                        </td>
                                        <td className="border-r-[1px] px-4 text-center ">
                                            {item?.createdAt}
                                        </td>
                                        <td className="border-r-[1px] grid place-content-center py-2">
                                            <button className="checkstudents">
                                                {item?.status == 2 ? (
                                                    <img
                                                        src={checkstudenttrue}
                                                        alt=""
                                                    />
                                                ) : item?.status == 3 ? (
                                                    <img
                                                        src={checkstudentx}
                                                        alt=""
                                                    />
                                                ) : item?.status === 1 ? (
                                                    <img src={warning} alt="" />
                                                ) : (
                                                    ""
                                                )}
                                            </button>
                                        </td>
                                        <td className="pl-[40px]">
                                            <button
                                                onClick={showModal}
                                                className="editstudents"
                                            >
                                                <img src={edit} alt="" />
                                            </button>
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
                            <option value="choose">Tanlang</option>
                            <option value="true">O'qiydi</option>
                            <option value="false">O'qimaydi</option>
                        </select>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default index;
