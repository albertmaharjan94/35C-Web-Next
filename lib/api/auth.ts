// API Layer
// Call api from backent

import axios from "./axios"; // IMPORTANT: "./axios" not "axios"
import { API } from "./endpoints";

export const register = async (registerData: any) => {
    try{
        const response = await axios.post(
            API.AUTH.REGISTER, // API path '/api/auth/register'
            registerData // body data
        );
        return response.data; // what the backend-controller returns
    }catch(err: Error | any){
        // 4xx or 5xx counts as exception
        throw new Error(
            err.response?.data?.message // meessage from backend
            || err.message  // general error message
            || "Registration failed" // fallback message
        );
    }
}