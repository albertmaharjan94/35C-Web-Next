"use client";
import { useState, useTransition } from 'react';
import { loginAction } from './actions/login';

export default function Page() {
    const [username, setUsername] = useState('');
    const [pending, startTransition] = useTransition();
    // pending: boolean to indicate transition state
    // startTransition: function to start transition
    const handleSubmit = async () => {
        startTransition( async () => {
            const res = await loginAction(username);
            if(res?.error) alert(res.error);
        });
    }
    return (
        <div className='mx-auto max-w-lg border p-4'>
            <label>Username: </label>
            <input type="text" value={username} className='p-2 border rounded'
                onChange={ (e) => setUsername(e.target.value) } ></input>
            <button onClick={handleSubmit} 
                disabled={pending}
                className='p-2 bg-blue-500 rounded disabled:bg-blue-400'>
                    { pending ? 'Loading...' : 'Go' }
                </button>
        </div>
    );
}