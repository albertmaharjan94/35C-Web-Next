"use server";
import { revalidatePath } from "next/cache";
import { getAllBlogs, deleteBlog } from "@/lib/api/admin/blog";

export async function handleGetAllBlogs(
    page: number, size: number, searchTerm?: string
) {
    try {
        const response = await getAllBlogs(page, size, searchTerm);
        if (response.success) {
            return {
                success: true,
                blogs: response.data,
                paginatation: response.pagination,
                message: response.message
            }
        }
        return {
            success: false,
            message: response.message || 'Failed to fetch blogs.'
        }
    } catch (error: Error | any) {
        return {
            success: false,
            message: error.message || 'Failed to fetch blogs.'
        }
    }
}

export async function handleDeleteBlog(id: string) {
    try {
        const response = await deleteBlog(id);
        if (response.success) {
            // Revalidate the admin blogs path to reflect the deletion
            revalidatePath('/admin/blogs');
            return {
                success: true,
                message: response.message
            }
        }
        return {
            success: false,
            message: response.message || 'Failed to delete blog.'
        }
    } catch (error: Error | any) {
        return {
            success: false,
            message: error.message || 'Failed to delete blog.'
        }
    }
}