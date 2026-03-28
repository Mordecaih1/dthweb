import AnimatedSection from "@/components/AnimatedSection";
import ServicesList from "@/components/ServicesList";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-slate-50 py-24 relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/3"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold font-jakarta text-primary mb-6">Our Services</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We empower businesses with cutting-edge technology solutions tailored for growth. Learn more about how we can help you succeed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="container mx-auto px-6">
          <ServicesList />
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-6">
          <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-bold font-jakarta text-white mb-6">Didn't find what you're looking for?</h2>
             <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
               We offer custom solutions tailored to your unique business requirements. Let's discuss your next project.
             </p>
             <Link href="/quote" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1">
               Contact Us Now
             </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
