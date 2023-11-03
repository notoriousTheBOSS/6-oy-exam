import React, { useState, useEffect } from "react";
import coursesAPI from "../../../service/courses";
import servicesAPI from "../../../service/services";
import { Modal } from "antd";
import "./style.scss";
import CoursesRound from "./../../../components/UI/Icons/CoursesRound";
import Cartsvg from "./../../../components/UI/Icons/Cartsvg";
import studentsAPI from "../../../service/students";

const index = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [service, setService] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState("Content of the modal");
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        const newUserInfo = {
            name,
            phone,
            selectedService,
        };
        studentsAPI
            .userRegister(newUserInfo)
            .then((res) => {
                console.log("registered", res);
                setName(res?.data);
                setPhone(res?.data);
            })
            .catch((err) => {
                console.log("register failed", err);
            });
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

    const getCourse = () => {
        coursesAPI
            .getApiCourses()
            .then((res) => {
                console.log("res courses", res);
                setData(res?.data?.courses);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getServices = () => {
        servicesAPI
            .services()
            .then((res) => {
                console.log("servislar", res);
                setService(res?.data?.services);
            })
            .catch((err) => {
                console.log("servis error", err);
            });
    };
    useEffect(() => {
        getCourse();
        getServices();
    }, []);
    return (
        <section className="coursessection" id="courses">
            <div className="container">
                <CoursesRound />
                <div className="coursessectionwrapper">
                    <h2 className="coursessectionwrapper-h2">
                        Featured <span className="h2-span">Course</span>
                    </h2>
                    <p className="coursessectionwrapper-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod temporidunt ut labore veniam...
                    </p>
                    <div className="coursescardswrapper">
                        {data?.map((item) => {
                            return (
                                <div className="coursescard">
                                    <img
                                        className="coursescard-img"
                                        src={item?.image}
                                        alt=""
                                    />
                                    <div className="coursescardcontent">
                                        <span className="coursescardcontent-span">
                                            {item?.students.length} Students
                                            <span className="coursescardcontent-span2">
                                                {item?.createdAt}
                                            </span>
                                        </span>
                                        <h2 className="coursescardcontent-h2">
                                            {item?.title}
                                        </h2>
                                        <span className="coursescardcontent-span3">
                                            $1999.99
                                            <span
                                                onClick={showModal}
                                                className="coursescardcontent-span4"
                                            >
                                                <Cartsvg />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button className="coursesbtn">Explore courses</button>
                    <Modal
                        open={open}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                    >
                        <h2 className="text-[25px] px-2 py-1 bg-blue-600 w-[120px] flex rounded-md items-center text-white">
                            Kurslar
                        </h2>
                        <div className=" flex flex-col pt-[15px] mt-[5px]">
                            <h2 className="text-[22px] mb-3">
                                Ism familiya sharifingiz
                            </h2>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder="F.I.SH"
                                className="rounded-[5px] border border-slate-300"
                            />
                            <h2 className="text-[22px] mb-3">
                                Telefon raqamingiz
                            </h2>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                type="tel"
                                className="rounded-[5px] border border-slate-300"
                                placeholder="901234567"
                            />
                            <label for="service" className="text-[22px] mb-3">
                                Xizmatni tanglang
                            </label>
                            <select
                                value={selectedService}
                                className="rounded-[5px] border border-slate-300"
                                name="service"
                                id="service"
                            >
                                {service?.map((ser) => {
                                    return <option>{ser?.title}</option>;
                                })}
                            </select>
                        </div>
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default index;
