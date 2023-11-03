import { Avatar } from "primereact/avatar";
import "primeicons/primeicons.css";

const HeaderAvatar = () => {
    return (
        <div className="min-h-[40px] min-w-[40px]">
            <Avatar icon="pi pi-user" size="large" shape="circle" />
        </div>
    );
};

export default HeaderAvatar;
