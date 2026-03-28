
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Monitor, GraduationCap, Palette, PenTool, Printer, FileText, Briefcase, X, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    shortDesc: "Responsive, high-performance websites and web applications tailored to your business needs.",
    fullDesc: "We design and develop responsive, high-performance websites and web applications tailored to your business needs. From corporate websites to e-commerce platforms and custom portals, our solutions are mobile-first, SEO-optimized, and built with modern technologies.",
    icon: <Monitor className="w-8 h-8" />,
    features: ["Custom UI/UX design", "Responsive development", "SEO optimization", "Performance optimization", "Scalable architecture"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "ICT Training",
    shortDesc: "Hands-on ICT training programs for individuals, students, and organizations.",
    fullDesc: "We offer hands-on ICT training programs for individuals, students, and organizations. Our courses cover programming, Microsoft Office, graphic design, web technologies, and cybersecurity basics.",
    icon: <GraduationCap className="w-8 h-8" />,
    features: ["Practical learning approach", "Certified instructors", "Beginner to advanced levels", "Corporate training available"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Graphic Design",
    shortDesc: "Visually compelling designs that communicate your brand message effectively.",
    fullDesc: "We create visually compelling designs that communicate your brand message effectively. From social media graphics to marketing materials, we deliver creative solutions that captivate and convert.",
    icon: <Palette className="w-8 h-8" />,
    features: ["Logo design", "Social media creatives", "Marketing materials", "Infographics", "Brand visuals"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Branding & Identity",
    shortDesc: "Strong, memorable brand identities that resonate with your audience.",
    fullDesc: "We help businesses build strong, memorable brand identities that resonate with their audience. Our branding solutions ensure consistency, professionalism, and impact.",
    icon: <PenTool className="w-8 h-8" />,
    features: ["Logo & identity design", "Brand strategy", "Brand guidelines", "Visual identity systems"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Printing Services",
    shortDesc: "High-quality printing solutions with fast turnaround times.",
    fullDesc: "We deliver high-quality printing solutions with fast turnaround times. From business cards to large-format prints, we ensure sharp and vibrant results.",
    icon: <Printer className="w-8 h-8" />,
    features: ["Digital & offset printing", "Business cards & stationery", "Banners & signage", "Branded merchandise"],
    image: "https://images.unsplash.com/photo-1601247348982-fdbad2cc1e38?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Proposal & Report Writing",
    shortDesc: "Professional writing services for business and technical documents.",
    fullDesc: "We provide professional writing services for business and technical documents. Our goal is to help you communicate effectively and increase your success rate.",
    icon: <FileText className="w-8 h-8" />,
    features: ["Business plans", "Grant proposals", "Feasibility reports", "Concept notes", "Tender documents"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "ICT Consultancy",
    shortDesc: "Strategic guidance to optimize technology investments and processes.",
    fullDesc: "We provide strategic guidance to help organizations optimize their technology investments and processes. We bride the gap between business processes and technical solutions.",
    icon: <Briefcase className="w-8 h-8" />,
    features: ["ICT strategy development", "Systems audit", "Digital transformation roadmap", "Implementation support"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ServicesList() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  // Close modal on escape key
  const close = () => setActiveService(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <AnimatedSection key={service.id} delay={i * 0.1}>
             <div className="glassmorphism p-8 rounded-3xl group shadow-sm hover:shadow-xl transition-all h-full flex flex-col border border-slate-100 bg-white">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-jakarta text-primary mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow">{service.shortDesc}</p>
                <button 
                  onClick={() => setActiveService(service)}
                  className="mt-auto self-start flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors py-2 group-hover:gap-3"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
             </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop Blur */}
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" 
              onClick={close} 
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={close}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-800 hover:bg-white shadow-xl hover:scale-110 transition-all border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-slate-100 flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${activeService.image})` }}
                />
              </div>
              
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <div className="flex items-center gap-3 text-blue-600 mb-4">
                  {activeService.icon}
                  <span className="font-bold tracking-wider uppercase text-sm">Service Detail</span>
                </div>
                <h2 className="text-3xl font-bold font-jakarta text-primary mb-6">{activeService.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {activeService.fullDesc}
                </p>
                
                <h3 className="text-xl font-bold text-primary mb-4 border-b border-slate-100 pb-2">Key Features</h3>
                <ul className="space-y-4 mb-10">
                  {activeService.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/quote?service=${encodeURIComponent(activeService.title)}`}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-blue-900 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
