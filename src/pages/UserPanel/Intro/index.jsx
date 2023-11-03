import React from "react";
import "./style.scss";
import amazon from "../../../assets/icons/amazon.svg";
import amd from "../../../assets/icons/amd.svg";
import megabox from "../../../assets/icons/megabox.svg";
import najottalim from "../../../assets/icons/najottalim.svg";
import logitech from "../../../assets/icons/logitech.svg";
import uzum from "../../../assets/icons/uzum.svg";
import Searchsvg from "./../../../components/UI/Icons/Searchsvg";
import introcolapsesvg from "../../../assets/icons/introcolapsesvg.svg";
import iconreact from "../../../assets/icons/iconreact.svg";
import vuesvg from "../../../assets/icons/vuesvg.svg";
import introperson from "../../../assets/images/introperson.png";
import introGroup from "../../../assets/icons/introGroup.svg";
const index = () => {
    return (
        <>
            <section className="introsection">
                <div className="container">
                    <div className="introsectionwrapper">
                        <img
                            className="introsection-colapse"
                            src={introcolapsesvg}
                            alt=""
                        />
                        <img className="introsection-vue" src={vuesvg} alt="" />

                        <img
                            className="introsection-react"
                            src={iconreact}
                            alt=""
                        />
                        <img
                            className="introsection-group"
                            src={introGroup}
                            alt=""
                        />
                        <img
                            className="introsection-person"
                            src={introperson}
                            alt=""
                        />
                        <div className="blur"></div>
                        <h2 className="introsectionwrapper-h2">
                            Successful coaches are visionaries
                        </h2>
                        <p className="introsectionwrapper-p">
                            Good{" "}
                            <span className="introsectionwrapper-p-span">
                                coaching
                            </span>{" "}
                            is good teaching & nothing else. InshaaAlloh
                        </p>
                        <button className="introsectionwrapper-btn">
                            <a href="courses">Courses</a>
                        </button>
                        <div className="introsectionwrapper-inputwrapper">
                            <input
                                placeholder="What do you want to learn today?"
                                className="introsectionwrapper-inputwrapper-input"
                                type="text"
                            />
                            <button className="introsectionwrapper-inputwrapper-btn">
                                <Searchsvg />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="introsectionbottom">
                <div className="container">
                    <div className="introsectionbottom-wrapper">
                        <img src={amazon} alt="" />
                        <img src={amd} alt="" />
                        <img src={megabox} alt="" />
                        <img src={najottalim} alt="" />
                        <img src={logitech} alt="" />
                        <img src={uzum} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default index;
