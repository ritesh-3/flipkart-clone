import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://flipkart-clone-ochre-three.vercel.app",
    withCredentials:true
})

export default axiosInstance;