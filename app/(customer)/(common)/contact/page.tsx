import { Metadata } from 'next'
import ContactForm from './ContactForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Get in touch with us through various channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>74-C, First Floor, 10th Commercial Street
                Phase-4, D.H.A Karachi.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+92-321-2012317</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:info@rashealthcare.com.pk" className="text-primary hover:underline">info@rashealthcare.com.pk</a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
                <a href="https://wa.me/923212012317" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <div className="flex  space-x-4">
                  <a href="https://facebook.com/rashealthcare" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com/rashealthcare" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://instagram.com/rashealthcare" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="https://linkedin.com/company/rashealthcare" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
