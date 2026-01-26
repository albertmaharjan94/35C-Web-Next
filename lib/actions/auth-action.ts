// server side processing of auth actions
"use server";
import { register, login, whoami } from "../api/auth";
import { setAuthToken, setUserData } from "../cookie";

export const handleRegister = async (formData: any) => {
    try{
        // how to get data from component
        const result = await register(formData);
        // how to send back to component
        if(result.success){
            return {
                success: true,
                message: "Registration successful",
                data: result.data 
            };
        }
        return {
            success: false, message: result.message || "Registration failed"
        }
    }catch(err: Error | any){
        return { success: false, message: err.message || "Registration failed"};
    }
}
export const handleLogin = async (formData: any) => {
    try{
        // how to get data from component
        const result = await login(formData); // change
        // how to send back to component
        if(result.success){
            await setAuthToken(result.token);
            await setUserData(result.data);
            return {
                success: true,
                message: "Login successful", // change
                data: result.data 
            };
        }
        return {
            success: false, message: result.message || "Login failed" // change
        }
    }catch(err: Error | any){
        return { success: false, message: err.message || "Login failed"}; // change
    }
}

export const handleWhoAmI = async () => {  
    try{
        const result = await whoami();
        if(result.success){
            return {
                success: true,
                data: result.data 
            };
        }
        return {
            success: false, message: result.message || "Failed to fetch user data"
        }
    } catch(err: Error | any){
        return { success: false, message: err.message || "Failed to fetch user data"};
    }
}