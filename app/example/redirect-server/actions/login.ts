"use server"; // server side
import { redirect, RedirectType } from 'next/navigation'; 
// server side redirection

export async function loginAction(username: string) {
    if(username == ""){
        return { error: "Username is required" };
    }
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate api
    if(username == "admin"){
        redirect('/example/hook-example', RedirectType.replace);
    }else{
        redirect('/example/state');
    }
}

// Classroom Task
// create a new url-path
// /example/orders/success -> "Display Success"
// /example/orders/failure -> "Display Failure"
// /example/orders/unauthorized -> "Display Unathorized"
// /example/orders ->
//  input for "status", "price" with states
//  make 2 button "apply" and "next"
// on "apply" button
// check if price is below 0 and use client side redirect
// if below 0 redirect to /example/orders/failure else alert "Price is valid"
// on "next" button
// use server side redirect to check if status is "active", "inactivate"
// if active - redirect to "/example/orders/success"
// if inactive - redirect to "/example/orders/unauthorized"
// if empty or not "active/inactive" - Alert "Error message"
// make use of useTransition in every "redirection"