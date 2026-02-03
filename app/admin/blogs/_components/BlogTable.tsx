"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { useState } from "react";
import DeleteModal from "@/app/_components/DeleteModal";
import { handleDeleteBlog } from "@/lib/actions/admin/blog-action";
import { toast } from "react-toastify";

export default function BlogTable(
{blogs, pagination, search} : 
{ blogs: any[]; pagination: any; search: string }
) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(search);
    const handleSearch = (e: React.FormEvent) => { 
        e.preventDefault();
        router.push(`/admin/blogs?searchTerm=${searchTerm}`);
    }
    const [deleteId, setDeleteId] = useState(null);

    const onnDelete = async () => {
        // Implement delete logic here, e.g., call an API to delete the blog
        try{
            await handleDeleteBlog(deleteId!);
            toast.success("Blog deleted successfully");
        }catch(err: Error | any){
            toast.error(err.message || "Failed to delete blog");
        }finally{
            setDeleteId(null);
        }
    }
    return (
        <div>
            <DeleteModal
                isOpen={deleteId}
                onClose={() => setDeleteId(null)}
                onConfirm={onnDelete}
                title="Delete Confirmation"
                description="Are you sure you want to delete this item? This action cannot be undone."
            />
            <input type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search blogs..."
            />
            <button onClick={handleSearch}>Search</button>
            <table className="table border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map((blog) => (
                            <tr key={blog._id}>
                                <td>{blog._id}</td>
                                <td>{blog.title}</td>
                                <td>
                                    <Link href={`/admin/blogs/${blog._id}`}>View</Link> |{' '}
                                    <Link href={`/admin/blogs/${blog._id}/edit`}>Edit</Link>
                                    <button onClick={() => setDeleteId(blog._id)}  className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>    
            </table>
            <div className="pagination">
                {pagination && (
                    <>
                        {pagination.page > 1 && (
                            <Link
                                href={`/admin/blogs?page=${pagination.page - 1}&size=${pagination.size}&searchTerm=${search}`}
                            >
                                Previous
                            </Link>
                        )}
                        <span> Page {pagination.page} of {pagination.totalPages} </span>
                        {pagination.page < pagination.totalPages && (
                            <Link
                                href={`/admin/blogs?page=${pagination.page + 1}&size=${pagination.size}&searchTerm=${search}`}
                            >
                                Next
                            </Link>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}