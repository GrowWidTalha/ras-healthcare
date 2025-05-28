"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { Button } from "../ui/button";
import { Blog as BlogType } from "@/types/appwrite.types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BlogProps {
    blogs: BlogType[];
}

const Blog: React.FC<BlogProps> = ({ blogs }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay()]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = React.useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = React.useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="py-16 bg-gradient-to-br from-[#e0f7fa] to-[#f8fdff] overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-10">
                    <div className="w-24 h-1 bg-[#1cc6e3] mb-2 rounded-full" />
                    <h2 className="text-4xl font-extrabold text-center flex items-center gap-2">
                        <span className="text-black">LATEST</span>
                        <span className="text-[#1cc6e3]">BLOGS</span>
                    </h2>
                    <div className="w-16 h-1 bg-[#1cc6e3] mt-2 rounded-full" />
                </div>
                <div className="relative flex items-center justify-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1cc6e3] hover:bg-[#17b0c9] transition-colors rounded-full p-2 shadow-lg"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="h-6 w-6 text-white" />
                    </Button>
                    <div className="overflow-hidden w-full max-w-4xl" ref={emblaRef}>
                        <div className="flex">
                            {blogs.map((blog: BlogType) => (
                                <div
                                    key={blog.$id}
                                    className="flex-[0_0_100%] min-w-0 px-2 md:px-4 flex justify-center"
                                >
                                    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-3xl h-auto md:h-[260px]">
                                        <div className="relative w-full h-[180px] md:w-1/2 md:h-full min-w-[180px] flex-shrink-0">
                                            <img
                                                src={blog.coverImage}
                                                alt={blog.title}
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute top-4 left-4 bg-white text-gray-700 text-xs px-4 py-1 rounded-full shadow">
                                                {blog.date || '20 March 2025'}
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center p-6 md:p-8 w-full md:w-1/2">
                                            <h3 className="text-2xl font-extrabold mb-2 text-gray-900">
                                                {blog.title || 'Lorem Ipsum Dolor Sit Amet,'}
                                            </h3>
                                            <p className="text-lg font-semibold text-gray-700 mb-2">
                                                {blog.excerpt || 'Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1cc6e3] hover:bg-[#17b0c9] transition-colors rounded-full p-2 shadow-lg"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="h-6 w-6 text-white" />
                    </Button>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full border-none focus:outline-none transition-colors ${index === selectedIndex ? 'bg-[#1cc6e3]' : 'bg-gray-300'
                                }`}
                            onClick={() => emblaApi?.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
