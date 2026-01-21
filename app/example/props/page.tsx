"use client";

import { useState } from "react";

export default function Page() {
    return (
        <div>
            <ParentComponent />
        </div>
    );
}
function ParentComponent(){
    const count = 1;
    const [num, setNum] = useState(0);
    const title = 10
    return (
        <div>
            Parent Component
            <button onClick={() => setNum(num + 1)}>Increment {num}</button>
            <ChildComponent count={count} num={num} title={title}/> 
        </div>
    )
}
function ChildComponent(
    { count, num, title } : { count: number, num: number, title: number } // Props
){
    return (
        <div>
            Child with {count} {num}
            <GrandChildComponent title={title}/>
        </div>
    )
}
interface Props{
    title: number;
}
function GrandChildComponent({ title } : Props){
    return (
        <div>{title}</div>
    )
}