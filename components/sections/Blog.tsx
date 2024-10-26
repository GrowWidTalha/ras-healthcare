import React from "react";
import BlogCard from "../BlogCard";
import { Button } from "../ui/button";
import { getAllBlogs } from "@/actions/blog.actions";
import { Blog as BlogType } from "@/types/appwrite.types";

const Blog = async() => {
    const blogs = await getAllBlogs()
  return (
    <section className="py-16 hero">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog: BlogType) => (
            <BlogCard key={blog.$id} blog={blog} type="user" />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
