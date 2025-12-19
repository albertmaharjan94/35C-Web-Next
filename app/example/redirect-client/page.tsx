"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // client side redirection
export default function Page() {
    const [username, setUsername] = useState('');
    const router = useRouter();
    const handleSubmit = () => {
        if(username == "admin"){
            router.push('/example/hook-example');
        }else{
            router.push('/example/state');
        }
    }
    return (
        <div className='mx-auto max-w-lg border p-4'>
            <label>Username: </label>
            <input type="text" value={username} className='p-2 border rounded'
                onChange={ (e) => setUsername(e.target.value) } ></input>
            <button onClick={handleSubmit} 
                className='p-2 bg-blue-500 rounded'>Go</button>
        </div>
    );
}