"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { useCart } from "./providers/CartContext";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const {cart} = useCart()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 md:hidden text-blue-600 hover:text-blue-800"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <User size={24} />
                    <span>Account</span>
                  </Link>
                  <Link
                    href="/cart"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <div className="relative">
                      <ShoppingCart size={24} />
                      {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {cart.length}
                        </span>
                      )}
                    </div>
                    <span>Cart</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Image
              src="/ras-logo.png"
              alt="RAS Health Care Logo"
              width={120}
              height={40}
            />
          </div>
          <div className="hidden md:block flex-1 max-w-xl mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products"
                className="w-full pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-blue-600 hover:text-blue-800"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Search className="h-6 w-6" />
              )}
              <span className="sr-only">
                {isSearchOpen ? "Close search" : "Open search"}
              </span>
            </Button>
            <Link
              href="#"
              className="hidden md:inline-block text-gray-600 hover:text-blue-600"
            >
              <User size={24} />
            </Link>
            <Link
              href="#"
              className="hidden md:inline-block text-gray-600 hover:text-blue-600"
            >
              <Heart size={24} />
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-blue-600">
              <div className="relative">
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </nav>
        </div>
        {isSearchOpen && (
          <div className="mt-4 md:hidden">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products"
                className="w-full pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        )}
      </div>
      <nav className="bg-muted">
        <ul className="container mx-auto flex justify-between py-4 px-4 text-sm font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Blog", href: "/blog" },
            { name: "Contact Us", href: "/contact" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "About us", href: "/about" },
          ].map(({ name, href }) => (
            <li key={href} className="hidden md:block">
              <Link href={href} className="hover:text-primary">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
