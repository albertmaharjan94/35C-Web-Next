// "use client"
import { exampleAction } from "@/lib/actions/example-action";
import { notFound } from "next/navigation";

export default async function Page() {
    const result = await exampleAction();

    if(!result.success){
        throw new Error("Some error");
    }

    if(!result.data){
        notFound();
    }

    return (
        <div>Page is ready</div>
    );
}