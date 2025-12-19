"use client";
import { useForm } from "react-hook-form";
export default function Page() {
    const {
        register, // bind input to states
        handleSubmit, // handle form submit
        formState: { errors, isSubmitting }, // form state for validation
    } = useForm(
        {
            values: { email: "", password: "" } // form states/input
        }
    );
    const onSubmit = async (data: any) => { // data contains form input values
        await new Promise( resolve => setTimeout(resolve, 1000) ); // simulate async
        alert(data.email);
        console.log("Form Data: ", data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md p-2">
                <div className="mt-2">
                    <label>Email: </label>
                    <input { ...register( "email", { required: "Email chaiyo" } ) } />
                    { 
                        errors.email && // conditional rendering
                        <span className="text-red-600">{errors.email.message}</span> 
                    }
                    {/* Input for password */}
                    
                </div>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
        </div>
    );
}