import { handleGetAllBlogs } from "@/lib/actions/admin/blog-action";
import BlogTable from "./_components/BlogTable";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const query = await searchParams;
    const page = query.page ? parseInt(query.page as string, 10) : 1;
    const size = query.size ? parseInt(query.size as string, 10) : 10;
    const search = query.searchTerm ? (query.searchTerm as string) : '';
    console.log("Search params:", { page, size, search });
    // call api
    const response = await handleGetAllBlogs(page, size, search);
    if(!response.success){
        throw new Error(response.message);
    }
    if(!response.blogs || !response.paginatation){
        throw new Error("No blogs data found.");
    }
    
    return (
        <div>
            <BlogTable
                blogs={response.blogs}
                pagination={response.paginatation}
                search={search}
            />
            Page : {page}
            <br/>
            Size : {size}
            <br/>
            Search : {search}
        </div>
    );
}