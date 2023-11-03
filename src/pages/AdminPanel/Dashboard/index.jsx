import React, { useEffect, useState } from "react";
import summaryAPI from "../../../service/summary";
import student from "../../../assets/icons/student.png";
import check from "../../../assets/icons/check.png";
import checkdouble from "../../../assets/icons/checkdouble.png";
import prohibition from "../../../assets/icons/prohibition.png";
import customer64 from "../../../assets/icons/customer64.png";
import courses64 from "../../../assets/icons/courses64.png";
import customerservice from "../../../assets/icons/customerservice.png";
import "./style.scss";

const index = () => {
    const [data, setData] = useState([]);
    const getSummaryInfo = () => {
        summaryAPI
            .getSummary()
            .then((res) => {
                console.log("res summary", res);
                setData(res?.data?.summary);
            })
            .catch((err) => {
                console.log("summary error", err);
            });
    };
    useEffect(() => {
        getSummaryInfo();
    }, []);

    return (
        <div className="dashboard-cards">
            <div className="dashboard-card bg-white shadow-2xl">
                <h2 className="card-h2 text-[#22d3ee]">O'quvchilar</h2>
                <div className="flex items-center justify-between p-5">
                    <p className="card-p text-[#22d3ee]">
                        {data?.student?.total}
                    </p>
                    <img src={student} alt="" />
                </div>
            </div>
            <div className=" dashboard-card bg-white shadow-2xl">
                <h2 className="card-h2 text-[#fbbf24]">Yangi O'quvchilar</h2>
                <div className="flex items-center justify-between p-5">
                    <p className="card-p text-[#fbbf24]">
                        {data?.student?.new}
                    </p>
                    <img src={check} alt="" />
                </div>
            </div>
            <div className="dashboard-card bg-white shadow-2xl">
                <h2 className="card-h2 text-[#16a34a]">O'qiydiganlar</h2>
                <div className="flex items-center justify-between p-5">
                    <p className="card-p text-[#16a34a]">
                        {data?.student?.resolve}
                    </p>
                    <img src={checkdouble} alt="" />
                </div>
            </div>
            <div className="dashboard-card bg-white shadow-2xl">
                <h2 className="card-h2 text-[#dc2626]">O'qimaydiganlar</h2>
                <div className="flex items-center justify-between p-5">
                    <p className="card-p text-[#dc2626]">
                        {data?.student?.reject}
                    </p>
                    <img src={prohibition} alt="" />
                </div>
            </div>
            <div className="dashboard-card bg-white shadow-2xl">
                <h2 className="card-h2 text-[#1e40af]">Buyurtmachilar</h2>
                <div className="flex items-center justify-between p-5">
                    <p className="card-p text-[#1e40af]">{data?.user?.total}</p>
                    <img src={customer64} alt="" />
                </div>
            </div>
            <div className="dashboard-card bg-white shadow-2xl">
                <h2 className="card-h2 text-[#3f3f46]">Xizmatlar</h2>
                <div className="flex items-center justify-between p-5">
                    <p className="card-p text-[#3f3f46]">
                        {data?.service?.total}
                    </p>
                    <img src={customerservice} alt="" />
                </div>
            </div>
            <div className="dashboard-card bg-white shadow-2xl">
                <h2 className="card-h2 text-[#6d28d9]">Kurslar</h2>
                <div className="flex items-center justify-between p-5">
                    <p className="card-p text-[#6d28d9]">
                        {data?.course?.total}
                    </p>
                    <img src={courses64} alt="" />
                </div>
            </div>
        </div>
    );
};

export default index;
