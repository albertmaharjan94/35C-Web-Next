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
export const login = async (loginData: any)=> {
    try{
        const response = await axios.post(
            API.AUTH.LOGIN, // change
            loginData // change
        );
        return response.data; // what the backend-controller returns
    }catch(err: Error | any){
        // 4xx or 5xx counts as exception
        throw new Error(
            err.response?.data?.message // meessage from backend
            || err.message  // general error message
            || "Login failed" // fallback message // change
        );
    }
}

export const whoami = async () => { 
    try{
        const response = await axios.get(API.AUTH.WHOAMI);
        return response.data; 
    }catch(err: Error | any){
        throw new Error(
            err.response?.data?.message 
            || err.message  
            || "Failed to fetch user data" 
        );
    }
}

export const updateProfile = async (updateData: any) => {
    try{
        const response = await axios.put(
            API.AUTH.UPDATEPROFILE,
            updateData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data' // IMPORTANT: multer
                }
            }
        );
        return response.data;
    }catch(err: Error | any){
        throw new Error(
            err.response?.data?.message 
            || err.message  
            || "Failed to update profile" 
        );
    }
}