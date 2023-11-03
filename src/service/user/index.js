import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const userAPI = {
    login: (user) => api.post("/api/v1/admin/login", user),
    getMe: () => api.get("/api/v1/admin/get-my-data", { headers }),
    updateLogin: () => api.put("/api/v1/admin/update", { headers }),
};

export default userAPI;
