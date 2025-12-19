"use client";
import { useState, ChangeEvent } from 'react';
import { useLoginForm } from './hooks/use-login-form';

export default function Page() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value);
    // }
    // const form = useLoginForm(); // 1. single object from custom hook
    const { email, handleEmail, firstName, lastName, setFirstName, setLastName, handleSubmit } 
        = useLoginForm(); 
    // 2. destructuring only needed states/handlers

    return (
        <div>
            <div>Form</div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={handleEmail} ></input>
            </div>

            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} 
                    onChange={ (e) => setFirstName(e.target.value) } ></input>
            </div>
            <div> 
                <label>Last Name: </label>
                <input type="text" value={lastName} 
                    onChange={ (e) => setLastName(e.target.value) } ></input>
            </div>
            <button onClick={handleSubmit} >Submit</button>

        </div>
    );
}

// under hook example, create a new page "register"
// /example/hook-example/register
// create a components on /example/hook-example/_component/register-form
// create a custom hook on /example/hook-example/hooks/use-register-form.ts
// hooks should contain states for
// firstname, lastname, email, username, password, confirm password
// handleFirstName, handleLastName, handleEmail, handleUsername, handlePassword, handleConfirmPassword
// handleSubmit function to:
//  - validate if fields are empty: Alert All fields are required
//  - validate if password and confirm password are same: Alert Passwords do not match
//  - if all validations pass: Alert Registration Successful for <username>
// return only what is needed from the custom hook, skip exporting setter functions
// use this custom hook in register-form component
// IMPORTANT: hooks/custom hooks import should be client components
// use the register-form in register page