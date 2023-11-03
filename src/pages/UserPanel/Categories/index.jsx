import React from "react";
import "./style.scss";
import DigitalMsvg from "./../../../components/UI/Icons/DigitalMsvg";
import GraphicD from "./../../../components/UI/Icons/GraphicD";
import ITSowtware from "./../../../components/UI/Icons/ITSowtware";
import PersonalD from "./../../../components/UI/Icons/PersonalD";
import ArtHumanity from "./../../../components/UI/Icons/ArtHumanity";
import WebDsvg from "./../../../components/UI/Icons/WebDsvg";

const index = () => {
    return (
        <section className="categorysection">
            <div className="container">
                <div className="categorywrapper">
                    <h2 className="category-h2">
                        Top <span className="category-h2-span">Categories</span>
                    </h2>
                    <p className="category-p">
                        12,000+ unique online course list designs
                    </p>
                    <div className="categorycardswrapper">
                        <div className="categorycard">
                            <div className="categorycardbg1">
                                <DigitalMsvg />
                            </div>
                            <p className="categorycard-p">Digtal Marketing</p>
                            <span className="categorycard-span">
                                25 Courses
                            </span>
                        </div>
                        <div className="categorycard">
                            <div className="categorycardbg2">
                                <WebDsvg />
                            </div>
                            <p className="categorycard-p">Web Development </p>
                            <span className="categorycard-span">
                                16 Courses
                            </span>
                        </div>
                        <div className="categorycard">
                            <div className="categorycardbg3">
                                <ArtHumanity />
                            </div>
                            <p className="categorycard-p">Art & Humanities</p>
                            <span className="categorycard-span">
                                76 Courses
                            </span>
                        </div>
                        <div className="categorycard">
                            <div className="categorycardbg4">
                                <PersonalD />
                            </div>
                            <p className="categorycard-p">
                                Personal Development
                            </p>
                            <span className="categorycard-span">
                                22 Courses
                            </span>
                        </div>
                        <div className="categorycard">
                            <div className="categorycardbg5">
                                <ITSowtware />
                            </div>
                            <p className="categorycard-p">IT and Software</p>
                            <span className="categorycard-span">
                                110 Courses
                            </span>
                        </div>
                        <div className="categorycard">
                            <div className="categorycardbg6">
                                <GraphicD />
                            </div>
                            <p className="categorycard-p">Graphic Design</p>
                            <span className="categorycard-span">
                                85 Courses
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
