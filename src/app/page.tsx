import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Code, Paintbrush, TrendingUp, Presentation, Users, Briefcase, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const whyChooseUs = [
    { title: "One-stop digital solutions", icon: <MonitorSmartphone className="w-6 h-6" /> },
    { title: "Experienced professionals", icon: <Users className="w-6 h-6" /> },
    { title: "Client-focused approach", icon: <Briefcase className="w-6 h-6" /> },
    { title: "Affordable & transparent", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Timely project delivery", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Ongoing support & training", icon: <Presentation className="w-6 h-6" /> },
  ];

  const process = [
    { title: "Discover", desc: "Understanding your goals and challenges" },
    { title: "Strategize", desc: "Crafting a tailored solution" },
    { title: "Design & Develop", desc: "Building with precision" },
    { title: "Review & Refine", desc: "Perfecting the solution" },
    { title: "Deliver & Deploy", desc: "Launching your project" },
    { title: "Support & Grow", desc: "Ensuring long-term success" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh] bg-primary">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
            alt="DiscoveryTech Hub Tech Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        </div>

        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-40 z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-30 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-bold font-jakarta text-white leading-tight mb-6">
                Your Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Transformation</span> Partner
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Empowering businesses, organizations, and individuals with innovative, affordable, and high-quality technology solutions.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-1 flex items-center justify-center gap-2 border border-blue-500">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white backdrop-blur-md rounded-full font-medium shadow-sm hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-1">
                View Services
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <AnimatedSection className="w-full md:w-1/2">
              <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-100 to-indigo-50 border border-white shadow-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="glassmorphism p-8 rounded-2xl max-w-xs text-center border-white">
                  <MonitorSmartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-jakarta mb-2">End-to-End Solutions</h3>
                </div>
              </div>
            </AnimatedSection>
            
            <div className="w-full md:w-1/2">
              <AnimatedSection>
                <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">About Us</h2>
                <h3 className="text-4xl font-bold font-jakarta text-primary mb-6">Built for the digital age</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  DiscoveryTech Hub is a premier ICT solutions company operating at the intersection of technology, creativity, and education. We deliver end-to-end digital services designed to help our clients thrive in a fast-paced, technology-driven world.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  From web development and branding to ICT training and consultancy, we provide everything you need under one roof.
                </p>
                <Link href="/about" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
                  Learn more about our mission <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
             <h3 className="text-3xl md:text-4xl font-bold font-jakarta text-primary">Your trusted technology partner</h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glassmorphism p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 group border border-slate-100">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold font-jakarta text-primary mb-3">{item.title}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary text-white relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-blue-300 font-bold tracking-wider uppercase text-sm mb-2">Our Process</h2>
             <h3 className="text-3xl md:text-4xl font-bold font-jakarta border-b border-blue-800 pb-8 inline-block">How We Make It Happen</h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative">
                <div className="flex flex-col">
                  <span className="text-6xl font-black font-jakarta text-blue-800 absolute -top-10 -left-4 opacity-50 z-0">{i + 1}</span>
                  <div className="relative z-10 bg-blue-900/40 p-8 rounded-2xl border border-blue-800/50 backdrop-blur-md hover:bg-blue-800/60 transition-colors">
                    <h4 className="text-xl font-bold mb-2 font-jakarta text-blue-100">{step.title}</h4>
                    <p className="text-blue-300">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-jakarta text-primary mb-8 max-w-3xl mx-auto leading-tight">
              Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">extraordinary</span> together.
            </h2>
            <Link href="/quote" className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-blue-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
               Get a Quote <ChevronRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
