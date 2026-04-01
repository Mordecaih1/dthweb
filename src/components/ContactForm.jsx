import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgopzpvo";

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        // Reset success after 5s
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all";
  const labelClass = "block text-sm font-medium text-slate-700 mb-2";

  return (
    <div className="relative">
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl border border-green-100 p-6"
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2 font-jakarta">Message Sent!</h3>
            <p className="text-slate-600 text-center max-w-xs">
              Thank you! Your message has been sent to info@discoverytechhub.com. 
              We'll get back to you shortly.
            </p>
          </motion.div>
        )}
        {isError && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl border border-red-100 p-6"
          >
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <XCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Submission Failed</h3>
            <p className="text-slate-600 text-center max-w-xs">
              Please try again or email us directly at info@discoverytechhub.com
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className={labelClass}>Full Name *</label>
            <input 
              {...register("fullName", { required: "Full Name is required" })}
              className={`${inputClass} ${errors.fullName ? "border-red-500 focus:ring-red-100" : ""}`}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>Email Address *</label>
            <input 
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
              })}
              className={`${inputClass} ${errors.email ? "border-red-500 focus:ring-red-100" : ""}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input 
              {...register("phone", { required: "Phone is required" })}
              className={`${inputClass} ${errors.phone ? "border-red-500 focus:ring-red-100" : ""}`}
              placeholder="+234 123 456 7890"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Service Needed */}
          <div>
            <label className={labelClass}>Service Needed *</label>
            <select 
              {...register("service", { required: "Please select a service" })}
              className={`${inputClass} ${errors.service ? "border-red-500 focus:ring-red-100" : "text-slate-700"}`}
            >
              <option value="">Select a service...</option>
              <option value="Web Design & Development">Web Design & Development</option>
              <option value="ICT Training">ICT Training</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Branding & Identity">Branding & Identity</option>
              <option value="Printing Services">Printing Services</option>
              <option value="Proposal & Report Writing">Proposal & Report Writing</option>
              <option value="ICT Consultancy">ICT Consultancy</option>
              <option value="Other">Other</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
          </div>

          {/* Budget Range (Optional) */}
          <div className="md:col-span-2">
            <label className={labelClass}>Budget Range (Optional)</label>
            <select 
              {...register("budget")}
              className={`${inputClass} text-slate-700`}
            >
              <option value="">Select budget range...</option>
              <option value="<$1,000">Less than N500k</option>
              <option value="$1,000-$5,000">N500k - N2M</option>
              <option value="$5,000-$10,000">N2M - N5M</option>
              <option value=">$10,000">More than N5M</option>
              <option value="Not sure">Not sure yet</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className={labelClass}>Message *</label>
            <textarea 
              {...register("message", { required: "Message is required", maxLength: 1000 })}
              rows={5}
              className={`${inputClass} resize-none ${errors.message ? "border-red-500 focus:ring-red-100" : ""}`}
              placeholder="Tell us about your project..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

