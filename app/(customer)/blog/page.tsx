import { getAllBlogs } from '@/actions/blog.actions'
import BlogCard from '@/components/BlogCard'
import { Blog } from '@/types/appwrite.types'
import React from 'react'

const BlogPage = async () => {
    const blogs = await getAllBlogs()
    return (
        <div className='min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#f8fdff] py-16'>
            <div className='container mx-auto px-5'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6'>
                    Welcome to Ras Healthcare Blog
                </h1>
                <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog: Blog) => (
                        <BlogCard type='user' blog={blog} key={blog.$id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPage
