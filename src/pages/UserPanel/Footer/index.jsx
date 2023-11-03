import { Link } from "react-router-dom";
import Phonesvg from "../../../components/UI/Icons/Phonesvg";
import "./style.scss";
import Messagesvg from "./../../../components/UI/Icons/Messagesvg";
import Locationsvg from "./../../../components/UI/Icons/Locationsvg";
import Facebooksvg from "./../../../components/UI/Icons/Facebooksvg";
import Twittersvg from "./../../../components/UI/Icons/Twittersvg";
import Instagramsvg from "./../../../components/UI/Icons/Instagramsvg";
import Behancesvg from "./../../../components/UI/Icons/Behancesvg";
import Driblesvg from "./../../../components/UI/Icons/Driblesvg";
const index = () => {
    return (
        <footer>
            <div className="container">
                <div className="wrapper">
                    <div className="top">
                        <div className="left">
                            <h2 className="left-h2">webhub.uz</h2>
                            <p className="left-p">
                                Veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.{" "}
                            </p>
                        </div>
                        <div className="center">
                            <h2 className="center-h2">Quick Links</h2>
                            <div className="center-links">
                                <Link className="center-links-link" to="">
                                    About
                                </Link>
                                <Link className="center-links-link" to="">
                                    Blog
                                </Link>
                                <Link className="center-links-link" to="">
                                    Course
                                </Link>
                                <Link className="center-links-link" to="">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="right">
                            <h2 className="right-h2">Contact us</h2>
                            <div className="right-spans">
                                <a href="tel:+998996499807">
                                    <Phonesvg />
                                    +998 99 649 98 07
                                </a>
                                <a href="location">
                                    <Locationsvg />
                                    Toshkent , Chilonzor A9
                                </a>
                                <a href="text">
                                    <Messagesvg />
                                    webhub@example.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="bottom-p">Copyright 2023 | Mystery</p>
                        <div className="bottom-social-networks">
                            <Facebooksvg />
                            <Twittersvg />
                            <Instagramsvg />
                            <Behancesvg />
                            <Driblesvg />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default index;
