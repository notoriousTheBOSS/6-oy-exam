import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const customersAPI = {
    customers: () => api.get("/api/v1/user", { headers }),
    getCustomers: () => api.get("/api/v1/user/get-all"),
};
export default customersAPI;
