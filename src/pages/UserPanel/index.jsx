import { useEffect } from "react";
import { Button } from "flowbite-react";
import Modal from "../../components/UI/Modal/Modal";
import Header from "../UserPanel/Header";
import Footer from "../UserPanel/Footer";
import Categories from "../UserPanel/Categories";
import Services from "../UserPanel/Services";
import Wishes from "../UserPanel/Wishes";
import Learn from "../UserPanel/Learn";
import Courses from "../UserPanel/Courses";
import Intro from "../UserPanel/Intro";
import IkromSharif from "../UserPanel/IkromSharif";

const index = () => {
    return (
        <div className=" w-full h-screen">
            <Header />
            <Intro />
            <Courses />
            <Learn />
            <Categories />
            <Wishes />
            <IkromSharif />
            <Services />
            <Footer />
            {/* <Button color="success">Success</Button> */}
            {/* <Modal modalTitle={"Xizmatlar"} /> */}
        </div>
    );
};

export default index;
