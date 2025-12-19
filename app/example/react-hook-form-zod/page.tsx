"use client";
import { useForm } from "react-hook-form";
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from './schema';

// if not public folder, import like below
import image2 from "@/app/assets/image2.jpg";
// to ensure image is contained in the build
import Image from "next/image"; // next/image component
// optimized img tag


// export const loginSchema = z.object({
//     email: z.email({ message: "Invalid email address" }),
//     password: z.string().min(
//         6, { message: "Password sano bhayo" }
//     )
// });
// export type LoginFormData = z.infer<typeof loginSchema>;

export default function Page() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } 
        = useForm<LoginFormData>({
            resolver: zodResolver(loginSchema)
        });

    const onSubmit = async (data: LoginFormData) => {
        alert(data.email)
    };
    return (
        <div>
            <Image src="/image1.jpg" alt="Image 1" width={300} height={200} />
            <Image src={image2} alt="Image 2"/>

            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md p-2">
                <input { ...register( "email" ) } placeholder="Email" />
                { 
                    errors.email && 
                    <span className="text-red-600">{errors.email.message}</span> 
                }
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
        </div>
    );
}