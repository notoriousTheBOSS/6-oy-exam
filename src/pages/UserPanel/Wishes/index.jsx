import React from "react";
import "./style.scss";
import Wishestriangle from "./../../../components/UI/Icons/Wishestriangle";
import phone from "../../../assets/images/phone.png";
const index = () => {
    return (
        <section className="wishessection">
            <div className="container">
                <div className="wisheswrapper">
                    <div className="wishesleft">
                        <img src={phone} alt="" />
                    </div>
                    <div className="wishesright">
                        <h2 className="wishesright-h2">
                            The number one factor in{" "}
                            <span className="h2-span">
                                relevance drives out resistance.
                            </span>
                        </h2>
                        <p className="wishesright-p">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <button className="wishesright-btn">
                            <a href="">Learn More</a>
                        </button>
                        <Wishestriangle />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
