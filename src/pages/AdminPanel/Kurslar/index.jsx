import React, { useEffect, useState } from "react";
import { Breadcrumb, Pagination, Modal, Button, Upload } from "antd";
import { Link } from "react-router-dom";
import add from "../../../assets/icons/add.png";
import excel from "../../../assets/icons/excel.png";
import edit from "../../../assets/icons/edit.png";
import { UploadOutlined } from "@ant-design/icons";

import "./style.scss";
import coursesAPI from "../../../service/courses";

const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
        authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const index = () => {
    const [newCourseData, setNewCourseData] = useState({
        title: "",
        description: "",
        image: "",
    });
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
        coursesAPI
            .createCourse()
            .then((res) => {
                console.log("res courses", res);
                setNewCourseData({
                    title: "",
                    description: "",
                    image: "",
                });
                setOpen(false);
            })
            .catch((err) => {
                console.log("courses error", err);
            });
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log("Clicked cancel button");
        setOpen(false);
    };

    const [open1, setOpen1] = useState(false);
    const [confirmLoading1, setConfirmLoading1] = useState(false);
    const [modalText1, setModalText1] = useState("Content of the modal");
    const showModal1 = () => {
        setOpen1(true);
    };
    const handleOk1 = () => {
        setModalText1("The modal will be closed after two seconds");
        setConfirmLoading1(true);

        setTimeout(() => {
            setOpen1(false);
            setConfirmLoading1(false);
        }, 2000);
    };
    const handleCancel1 = () => {
        console.log("Clicked cancel button");
        setOpen1(false);
    };
    const getCourses = () => {
        coursesAPI
            .getApiCourses()
            .then((res) => {
                console.log("res courses", res);
                setData(res?.data?.courses);
            })
            .catch((err) => {
                console.log("err courses", err);
            });
    };

    useEffect(() => {
        getCourses();
        handleOk();
    }, []);
    return (
        <>
            <div className="courses bg-white max-w-full w-full h-[100px] rounded-[8px]">
                <div>
                    <h2 className="courses-h2">Kurslar</h2>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to="/dashboard">Bosh Sahifa</Link>,
                            },
                            {
                                title: "Kurslar",
                            },
                        ]}
                    />
                </div>
                <div onClick={showModal} className="courses-add">
                    <img onClick={showModal} src={add} alt="" />
                </div>
            </div>
            <div className="coursestablewrapper max-w-full w-full">
                <button className="coursesbutton">
                    Export to Excel
                    <img src={excel} alt="" />
                </button>
                <div className="coursestable">
                    <table className="max-w-full w-full border">
                        <tr className="h-[40px] border-b-2 bg-gray-100 w-full">
                            <th className="w-[30px] border-r-[1px]">#</th>
                            <th className="w-[250px] border-r-[1px]">
                                Kurs id
                            </th>
                            <th className="w-[210px] border-r-[1px]">
                                Kurs nomi
                            </th>
                            <th className="w-[100px] border-r-[1px]">
                                O'quvchilar soni
                            </th>
                            <th className="w-[200px] border-r-[1px]">
                                Yaratilgan vaqti
                            </th>
                            <th className="w-[90px]">Tahrirlash</th>
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
                                            {item?.id}
                                        </td>
                                        <td className="border-r-[1px] px-4 text-center">
                                            {item?.title}
                                        </td>
                                        <td className="w-[210px] border-r-[1px] px-4 text-center">
                                            {item?.students?.length}
                                        </td>
                                        <td className="border-r-[1px] px-4 text-center ">
                                            {item?.createdAt}
                                        </td>

                                        <td className="pl-[40px]">
                                            <button
                                                onClick={showModal1}
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
                    title="Kurs qo'shish"
                    open={open}
                    width={800}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <div className="border-t-2 flex flex-col ">
                        <div className="mt-[20px]">
                            <h2 className="text-[#0963eb]  mb-[10px] text-[20px]">
                                Kurs nomi
                            </h2>
                            <div className="flex items-center border border-slate-400 rounded-md">
                                <Upload {...props}>
                                    <Button
                                        className="h-[42px] border-slate-400"
                                        icon={<UploadOutlined />}
                                    >
                                        Kurs rasmi
                                    </Button>
                                </Upload>
                                <div className=" w-full border-l-white rounded-md  h-[42px] "></div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#0963eb] mt-[10px] mb-[10px] text-[20px]">
                                Kurs nomi
                            </h2>
                            <input
                                type="text"
                                placeholder="Kurs nomi"
                                className="w-full rounded-md border-slate-400"
                                value={newCourseData.title}
                                onChange={(e) =>
                                    setNewCourseData({
                                        ...newCourseData,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <h2 className="text-[#0963eb] mt-[10px] mb-[10px] text-[20px]">
                                Kurs haqida
                            </h2>
                            <textarea
                                name=""
                                id=""
                                className="w-full h-[200px] overflow-hidden rounded-md border-slate-400"
                                placeholder="Kurs haqida"
                                value={newCourseData.description}
                                onChange={(e) =>
                                    setNewCourseData({
                                        ...newCourseData,
                                        description: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>
                </Modal>
                <Modal
                    title="Kursni tahrirlash"
                    open={open1}
                    width={800}
                    onOk={handleOk1}
                    confirmLoading={confirmLoading1}
                    onCancel={handleCancel1}
                >
                    <div className="border-t-2 flex flex-col ">
                        <div className="mt-[20px]">
                            <h2 className="text-[#0963eb] mb-[10px] text-[20px]">
                                Kurs rasmi
                            </h2>
                            <div className="flex items-center border border-slate-400 rounded-md">
                                <Upload {...props}>
                                    <Button
                                        className="h-[42px] border-slate-400"
                                        icon={<UploadOutlined />}
                                    >
                                        Kurs rasmi
                                    </Button>
                                </Upload>
                                <div className=" w-full border-l-white rounded-md  h-[42px] "></div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#0963eb] mt-[10px] mb-[10px] text-[20px]">
                                Kurs nomi
                            </h2>
                            <input
                                type="text"
                                placeholder="Kurs nomi"
                                className="w-full rounded-md border-slate-400"
                            />
                        </div>
                        <div>
                            <h2 className="text-[#0963eb] mt-[10px] mb-[10px] text-[20px]">
                                Kurs haqida
                            </h2>
                            <textarea
                                name=""
                                id=""
                                className="w-full h-[200px] overflow-hidden rounded-md border-slate-400"
                                placeholder="Kurs haqida"
                            ></textarea>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default index;
