import axios from "axios";

export default axios.create({
    baseURL:
        "http://localhost:5000/api" || 
         import.meta.env.VITE_API_URL, 
});