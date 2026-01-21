"use client"; // to use context should be client
import { createContext, useState, useContext, ReactNode } from "react";
const MyContext = createContext<any>(null); 
const MyContextProvider = ({ children } : { children: ReactNode }) => {
    const [num , setNum] = useState(0);
    const title = "Some title"
    return (
        <MyContext.Provider value={{ num, setNum, title }}>
            {children}
        </MyContext.Provider>
    )
}
export default function Page() {
    return (
        <div>
            <MyContextProvider>
                <ParentComponent />
            </MyContextProvider>
        </div>
    );
}
function ParentComponent(){
    const { num, setNum } = useContext(MyContext);
    return (
        <div>
            <button onClick={() => setNum(num + 1)}>Increment {num}</button>
            {num}
            <ChildComponent />
        </div>
    )
}
function ChildComponent(){
    const { num, title } = useContext(MyContext);
    return (
        <div>
            Child with {num}
        </div>
    )
}