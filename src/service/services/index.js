import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const servicesAPI = {
    services: () => api.get("/api/v1/service"),
    getOneService: () => api.get(`/api/v1/services?${id}`),
    updateService: () => api.put(`/api/v1/services/${{ id }}`),
    createService: (data) => api.post("/api/v1/service", data, { headers }),
    registerService: () => api.post("/api/v1/user/register"),
};

export default servicesAPI;
