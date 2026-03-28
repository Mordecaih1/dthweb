import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Globe, Clock } from "lucide-react";

export default function Quote() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold font-jakarta mb-6">Get a Quote</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or need a service? Let’s help you bring your ideas to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50 relative -mt-16 z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            
            {/* Contact Info Sidebar */}
            <div className="bg-blue-900 text-white p-12 flex flex-col relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/3 opacity-30"></div>
              
              <h3 className="text-2xl font-bold font-jakarta mb-2 relative z-10">Contact Information</h3>
              <p className="text-blue-200 mb-12 relative z-10">Fill out the form and our team will get back to you promptly.</p>
              
              <div className="space-y-8 flex-grow relative z-10">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-blue-100">info@discoverytechhub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Website</h4>
                    <p className="text-blue-100">www.discoverytechhub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-blue-100">Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Working Hours</h4>
                    <p className="text-blue-100">Mon – Fri: 8:00 AM – 6:00 PM</p>
                    <p className="text-blue-100">Saturday: 9:00 AM – 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-12 lg:col-span-2">
              <h3 className="text-2xl font-bold font-jakarta text-primary mb-8">Send us a message</h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
