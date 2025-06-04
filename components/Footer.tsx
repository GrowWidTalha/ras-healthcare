import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#e0f7fa] to-[#f8fdff] pt-10 pb-4 text-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    {/* Logo & Social */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src="/ras-logo.png" alt="RAS Healthcare Logo" className="w-28 mb-4 mix-blend-multiply" />
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="bg-white shadow rounded-full p-2 hover:bg-[#1cc6e3] transition-colors">
                                <Facebook className="w-5 h-5 text-[#1cc6e3]" />
                            </a>
                            <a href="#" className="bg-white shadow rounded-full p-2 hover:bg-[#1cc6e3] transition-colors">
                                <Instagram className="w-5 h-5 text-[#1cc6e3]" />
                            </a>
                            <a href="#" className="bg-white shadow rounded-full p-2 hover:bg-[#1cc6e3] transition-colors">
                                <Linkedin className="w-5 h-5 text-[#1cc6e3]" />
                            </a>
                            <a href="#" className="bg-white shadow rounded-full p-2 hover:bg-[#1cc6e3] transition-colors">
                                <Youtube className="w-5 h-5 text-[#1cc6e3]" />
                            </a>
                        </div>
                    </div>
                    {/* Mission */}
                    <div>
                        <h4 className="text-lg font-bold mb-2">Mission</h4>
                        <p className="text-sm text-gray-700">
                        We are a consumer-focused, science-driven company. Through continuous innovation, we optimize our products to meet evolving needs.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-2">Quick Links</h4>
                        <ul className="text-sm space-y-1">
                            <li><Link href="/" className="hover:text-[#1cc6e3] flex items-center"><span className="mr-2">»</span> Home</Link></li>
                            <li><Link href="/shop" className="hover:text-[#1cc6e3] flex items-center"><span className="mr-2">»</span> Shop</Link></li>
                            <li><Link href="/about" className="hover:text-[#1cc6e3] flex items-center"><span className="mr-2">»</span> About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-[#1cc6e3] flex items-center"><span className="mr-2">»</span> Blogs</Link></li>
                            <li><Link href="/contact" className="hover:text-[#1cc6e3] flex items-center"><span className="mr-2">»</span> Contact Us</Link></li>
                        </ul>
                    </div>
                    {/* Get In Touch */}
                    <div>
                        <h4 className="text-lg font-bold mb-2">Get In Touch</h4>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center"><Phone className="w-4 h-4 text-[#1cc6e3] mr-2" /> +92-321-2012317</li>
                            <li className="flex items-center"><Mail className="w-4 h-4 text-[#1cc6e3] mr-2" /> info@rashealthcare.com.pk</li>
                            <li className="flex items-start"><MapPin className="w-4 h-4 text-[#1cc6e3] mr-2 mt-0.5" /> 74-C, First Floor, 10th Commercial Street<br />Phase-4, DHA Karachi.</li>
                        </ul>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-t border-gray-200 my-6" />
                {/* Copyright */}
                <div className="text-center text-sm text-gray-600">
                    © Copyright 2025 <Link href="/" className="text-[#1cc6e3] hover:underline">RAS Healthcare</Link> All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
