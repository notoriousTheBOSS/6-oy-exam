import React, { useEffect, useState } from "react";
import "./style.scss";
import Serviceseclipse from "./../../../components/UI/Icons/Serviceseclipse";
import servicescardimg from "../../../assets/images/servicescardimg.png";
import Cartsvg from "./../../../components/UI/Icons/Cartsvg";
import servicesAPI from "../../../service/services";

const index = () => {
    const [data, setData] = useState([]);

    const getService = () => {
        servicesAPI
            .services()
            .then((res) => {
                console.log("resp ", res);
                setData(res?.data?.services);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getService();
    }, []);
    return (
        <section className="servicessection" id="services">
            <div className="container">
                <div className="serviceswrapper">
                    <div className="serviceswrapper-top">
                        <Serviceseclipse />
                        <div className="servicessection-content">
                            <h2 className="servicessection-h2">Services</h2>
                            <p className="servicessection-p">
                                What our student say about us
                            </p>
                        </div>
                        <span className="w-[103px]"></span>
                    </div>
                    <div className="servicescardwrapper">
                        {data?.map((item) => {
                            return (
                                <div className="servicescard">
                                    <img
                                        className="servicescard-img"
                                        src={
                                            "https://api.webhub.uz" +
                                            item?.image
                                        }
                                        alt=""
                                    />
                                    <div className="servicescardcontent">
                                        <span className="servicescardcontent-span">
                                            {item?.users.length} Students
                                            <span className="servicescardcontent-span2">
                                                {item?.createdAt}
                                            </span>
                                        </span>
                                        <h2 className="servicescardcontent-h2">
                                            {item?.title}
                                        </h2>
                                        <span className="servicescardcontent-span3">
                                            $33.99
                                            <span className="servicescardcontent-span4">
                                                <Cartsvg />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
