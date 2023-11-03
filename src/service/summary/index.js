import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const summaryAPI = {
    getSummary: () => api.get("/api/v1/summary", { headers }),
};
export default summaryAPI;
