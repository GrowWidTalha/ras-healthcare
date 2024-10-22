import React from "react";
import BlogCard from "../BlogCard";
import { Button } from "../ui/button";

const Blog = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((blog) => (
            <BlogCard key={blog} />
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
