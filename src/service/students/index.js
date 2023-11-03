import api from "../axios";
const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const studentsAPI = {
    userRegister: (data) =>
        api.post("/api/v1/student/register", data, { headers }),
    getAllStudents: () => api.get("/api/v1/student", { headers }),
    noPaginate: () => api.get("/api/v1/student/get-all"),
    getPagging: (page) => api.get(`/api/v1/student?${page}`, page),
    getOne: () => api.get(`/api/v1/student?${id}`),
    studentsUpdate: (id) => api.put(`/api/v1/student/update-status?${id}`, id),
};
export default studentsAPI;
