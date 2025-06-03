import { getAllBlogs } from "@/actions/blog.actions";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Blog } from "@/types/appwrite.types";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
  try {
    const blogs = await getAllBlogs();
    
    // If blogs is undefined or null, return empty array
    const blogList = blogs || [];

    return (
      <div className="container mx-auto py-10 px-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Blog Page</h1>
          <Button className="">
            <Link href="/admin/blog/create" className="flex items-center">
              Create
            </Link>
          </Button>
        </div>
        {blogList.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No blogs found. Create your first blog post!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogList.map((blog: Blog) => (
              <BlogCard type="admin" blog={blog} key={blog.$id} />
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error loading blogs:", error);
    return (
      <div className="container mx-auto py-10 px-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Blog Page</h1>
          <Button className="">
            <Link href="/admin/blog/create" className="flex items-center">
              Create
            </Link>
          </Button>
        </div>
        <div className="text-center py-10">
          <p className="text-red-500">Failed to load blogs. Please try again later.</p>
        </div>
      </div>
    );
  }
};

export default BlogPage;
