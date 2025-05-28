import { Metadata } from "next";
import ContactForm from "./ContactForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    MapPin,
    Phone,
    Mail,
    MessageCircle,
    Facebook,
    Instagram,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with our team",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#f8fdff] py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Contact Us
                    </h1>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mt-2 mb-6"></div>
                    <p className="text-gray-700 text-lg">
                        We&apos;d love to hear from you. Get in touch with us.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="bg-teal-500">
                                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                                <CardDescription className="text-base text-teal-100">
                                    Get in touch with us through various channels
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6 p-6">
                                <div className="flex items-center space-x-4 hover:bg-teal-50 p-2 rounded-lg transition-colors duration-200">
                                    <MapPin className="h-6 w-6 text-teal-500" />
                                    <span className="text-sm md:text-base text-gray-700">
                                        74-C, First Floor, 10th Commercial Street Phase-4, D.H.A
                                        Karachi.
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4 hover:bg-teal-50 p-2 rounded-lg transition-colors duration-200">
                                    <Phone className="h-6 w-6 text-teal-500" />
                                    <span className="text-sm md:text-base text-gray-700">+92-321-2012317</span>
                                </div>
                                <div className="flex items-center space-x-4 hover:bg-teal-50 p-2 rounded-lg transition-colors duration-200">
                                    <Mail className="h-6 w-6 text-teal-500" />
                                    <a
                                        href="mailto:info@rashealthcare.com.pk"
                                        className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
                                    >
                                        info@rashealthcare.com.pk
                                    </a>
                                </div>
                                <div className="flex items-center space-x-4 hover:bg-teal-50 p-2 rounded-lg transition-colors duration-200">
                                    <MessageCircle className="h-6 w-6 text-teal-500" />
                                    <a
                                        href="https://wa.me/923212012317"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                                <div className="border-t pt-6">
                                    <h3 className="font-semibold mb-4 text-lg text-gray-800">Follow Us</h3>
                                    <div className="flex justify-center space-x-6">
                                        <Link
                                            href="https://www.facebook.com/share/UaavvK5fGnvmYS5e/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-500 hover:text-teal-700 transform hover:scale-110 transition-all duration-200"
                                        >
                                            <Facebook className="h-7 w-7" />
                                            <span className="sr-only">Facebook</span>
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com/rashealthcarekhi/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-500 hover:text-teal-700 transform hover:scale-110 transition-all duration-200"
                                        >
                                            <Instagram className="h-7 w-7" />
                                            <span className="sr-only">Instagram</span>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
