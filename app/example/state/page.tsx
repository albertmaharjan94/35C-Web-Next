"use client"; // CSR UI
// when user interaction and state management is needed
import  { useState, useEffect, ChangeEvent } from 'react';

export default function Page() {
    const [count, setCount] = useState(1); // count = 1
    // count - data - actual value
    // setCount - function - to update the value
    // States - any data that changes over time in your application
    // The changes are reflected in the UI automatically. 
    const increment = () => {
        setCount(count + 1); // update count value
    }

    // state/dependency change side effect
    useEffect( () => {
        alert("Component Mounted");
    }, []); // empty array - runs once when component mounts
    
    useEffect( () => {
        if(count === 0){
            alert("Count is zero")
        }
    }, [count] ); // runs when count changes
    // can have multiple useEffect hooks
    // [count, state1, state2, ...] - runs when any of these states change
    
    // form states with hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (
        // this div will re-render when count changes
        <div>
            <div>
                Count : {count}
            </div>
            <button onClick={increment} 
                className='p-1 bg-green-500 text-white rounded'>
                Increment
            </button>
            <button onClick={ () => setCount(count - 1) } // arrow function to settter
                className='p-1 bg-red-500 text-white rounded'>
                Decrement
            </button>
            {/* form */}
            <div>
                <input type="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    placeholder="Email" />
            </div>
            <div>
                <input type="password" 
                    value={password} 
                    onChange={ (e) => setPassword(e.target.value) } // arrow function
                    placeholder="Password" />
            </div>
            <button onClick={ () => alert("Email: " + email) }>Test</button>
        </div>
    );
}

// create a new page at /example/state/form
// create state for username, email, age, password and confirmPassword as input
// using useState for each input
// using useEffect alert when age is less than 18
// using useEffect alert when password and confirmPassword do not match
// create a button to submit the form and alert the username and email