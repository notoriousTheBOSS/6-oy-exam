import api from "../axios";

const headers = {
    "Content-Type": "application/json/form-data/multipart",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const coursesAPI = {
    getApiCourses: () => api.get("/api/v1/course"),
    getOneCourse: () => api.get(`/api/v1/course?${id}`),
    updateCourse: () => api.put(`/api/v1/course/${{ id }}?title&description`),
    createCourse: () => api.post("/api/v1/course", { headers }),
};

export default coursesAPI;
