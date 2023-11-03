import axios from "axios";

const api = axios.create({
    baseURL: "https://api.webhub.uz",
});

export default api;
