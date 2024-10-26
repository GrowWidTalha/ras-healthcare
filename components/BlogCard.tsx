import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Pencil, Trash } from "lucide-react";
import { Blog } from "@/types/appwrite.types";
import Link from "next/link";

const BlogCard = ({ blog, type }: { blog: Blog; type: "admin" | "user" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={blog.coverImage}
        alt={`Blog post`}
        width={300}
        height={100}
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4">
          Learn about the crucial role Vitamin D plays in maintaining your
          overall health and well-being.
        </p>
        <div className="flex gap-2">
          {type === "user" && (
            <Button
              asChild
              variant="expandIcon"
              Icon={ArrowRight}
              iconPlacement="right"
              className="flex items-center"
            >
              <Link href={`/blog//${blog.slug}/${blog.$id}`} className="flex items-center">
                Read More
              </Link>
            </Button>
          )}

          {type === "admin" && (
            <>
              <Button variant="outline" asChild className="flex items-center">
                <Link
                  href={`/admin/blog/${blog.$id}`}
                  className="flex items-center"
                >
                  Edit <Pencil className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="destructive" className="flex items-center">
                Delete <Trash className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
