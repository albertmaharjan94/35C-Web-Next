import { useState, ChangeEvent } from "react";

// A custom hook to manage login form state
// "use" prefix is mandatory for custom hooks
export const useLoginForm = () => {
    const [email, setEmail ] = useState('');
    const [firstName, setFirstName ] = useState('');
    const [lastName, setLastName ] = useState('');

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleSubmit = () => {
        alert("Email: "+ email);
    }
    // hooks return object with states and handlers
    return {
        email, firstName, lastName, // can export states
        setFirstName, setLastName, // can export settter
        handleEmail, handleSubmit // can export functions/handlers
    }
    // returned object are optional
    // return only what is needed to be exposed to the component
}