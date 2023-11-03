import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "./index.scss";
const Modal = ({ modalTitle, apiEndpoint }) => {
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [select, setSelect] = useState(null);
    const cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
    ];

    const submitFrom = (e) => {
        e.preventDefault();
        const newNum = phoneNum.split("-").join("").split(" ").join("");
        const data = {
            name: name,
            phoneNumber: newNum,
            select: select.name,
        };
        console.log(data);
    };
    return (
        <div className="w-[600px]   bg-white rounded-lg mx-auto p-6 ">
            <form onSubmit={(e) => submitFrom(e)} action="">
                <div className="flex pb-5 border-b">
                    <h2 className="text-white px-4 py-2 h-fit rounded-lg bg-blue-500">
                        {modalTitle}
                    </h2>
                </div>
                <label htmlFor="fio" className="font-bold block mb-3 mt-3">
                    Ism familiya va sharifingiz
                </label>
                <InputText
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded border-slate-300 h-[40px]"
                    id="fio"
                    type="text"
                    placeholder="F.I.SH"
                />
                <label htmlFor="phone" className="font-bold block mb-3 mt-3">
                    Phone
                </label>
                <InputMask
                    onChange={(e) => setPhoneNum(e.target.value)}
                    className="w-full rounded border-slate-300 h-[40px]"
                    id="phone"
                    mask="99 999-99-99"
                    placeholder="99 999-99-99"
                ></InputMask>
                <label htmlFor="select" className="font-bold block mb-3 mt-3">
                    Xizmatni tanlang
                </label>
                <Dropdown
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                    id="select"
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    className="w-full h-[40px] flex items-center mt-3 border border-slate-300 pl-3 "
                />
                <div className="flex items-center justify-end">
                    <button
                        type="submit"
                        className="text-white px-4 py-2 rounded-lg bg-blue-500 flex  mt-5"
                    >
                        Jo'natish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Modal;
