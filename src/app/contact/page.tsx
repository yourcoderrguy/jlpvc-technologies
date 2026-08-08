"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please tell us a little bit about what you need."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen selection:bg-brand-blue/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-brand-orange font-mono text-sm mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">Let's talk about your project.</h1>
          <p className="text-brand-white/80 mb-12 text-lg leading-relaxed">
            Fill out the form to set up a quick discovery call, or reach out to us directly through our official channels. We are ready to engineer your solution.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-brand-white/5 border border-brand-white/10">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p className="text-sm font-mono text-brand-white/50">DIRECT LINE</p>
                <p className="text-lg font-bold text-brand-white">+234 916 617 7467</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg bg-brand-white/5 border border-brand-white/10">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p className="text-sm font-mono text-brand-white/50">ELECTRONIC MAIL</p>
                <p className="text-lg font-bold text-brand-white">jlpvctech@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6 bg-brand-white/5 p-8 rounded-2xl border border-brand-white/10 backdrop-blur-sm shadow-2xl"
        >
          {submitStatus === "success" && (
            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-md text-green-400 font-medium text-center">
              Message securely transmitted. We will contact you shortly.
            </div>
          )}

          <div>
            <label className="block text-brand-white/80 text-sm font-semibold mb-2">Your Name</label>
            <input 
              {...register("name")}
              className="w-full bg-[#2A2D2E] border border-brand-white/10 rounded-md p-4 text-brand-white focus:outline-none focus:border-brand-blue transition-colors shadow-inner"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-2 font-mono">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-brand-white/80 text-sm font-semibold mb-2">Work Email</label>
            <input 
              {...register("email")}
              className="w-full bg-[#2A2D2E] border border-brand-white/10 rounded-md p-4 text-brand-white focus:outline-none focus:border-brand-blue transition-colors shadow-inner"
              placeholder="name@company.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-2 font-mono">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-brand-white/80 text-sm font-semibold mb-2">Project Details</label>
            <textarea 
              {...register("message")}
              rows={4}
              className="w-full bg-[#2A2D2E] border border-brand-white/10 rounded-md p-4 text-brand-white focus:outline-none focus:border-brand-blue transition-colors resize-none shadow-inner"
              placeholder="Tell us what you need help with..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-2 font-mono">{errors.message.message}</p>}
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-blue text-brand-white py-4 rounded-md font-bold tracking-wide hover:bg-brand-orange shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-all disabled:opacity-50 flex justify-center"
          >
            {isSubmitting ? <span className="animate-pulse">Transmitting...</span> : "Send Message"}
          </button>
        </motion.form>
      </div>
    </main>
  );
}