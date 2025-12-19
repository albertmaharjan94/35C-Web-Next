export default function Page() {
    const handleApply = () => {
        // use client side redirect
    }
    const handleNext = () => {
        // use server side redirect/actions
    }
    return (
        <div>
            {/* Input Here */}
            <button onClick={handleApply} >Apply</button>
            <button onClick={handleNext} >Next</button>
        </div>
    );
}