"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please tell us a little bit about what you need."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    alert("Message sent! We will get back to you shortly.");
  };

  return (
    <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen selection:bg-brand-orange/30">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-brand-orange font-mono text-sm mb-4">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-4">Let's talk about your project.</h1>
        <p className="text-brand-white/70">Fill out the form below. We will set up a quick call to understand your needs and see how we can help.</p>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-6 bg-brand-gray/10 p-8 rounded-xl border border-brand-gray/50"
      >
        <div>
          <label className="block text-brand-white/70 text-sm font-semibold mb-2">Your Name</label>
          <input 
            {...register("name")}
            className="w-full bg-brand-dark border border-brand-gray/50 rounded-md p-4 text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-2 font-mono">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-brand-white/70 text-sm font-semibold mb-2">Work Email</label>
          <input 
            {...register("email")}
            className="w-full bg-brand-dark border border-brand-gray/50 rounded-md p-4 text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="name@company.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-2 font-mono">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-brand-white/70 text-sm font-semibold mb-2">Tell us what you need help with</label>
          <textarea 
            {...register("message")}
            rows={5}
            className="w-full bg-brand-dark border border-brand-gray/50 rounded-md p-4 text-brand-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
            placeholder="I'm looking to build..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-2 font-mono">{errors.message.message}</p>}
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-orange text-brand-white py-4 rounded-md font-bold tracking-wide hover:shadow-[0_0_20px_rgba(255,94,0,0.4)] transition-all disabled:opacity-50 flex justify-center"
        >
          {isSubmitting ? <span className="animate-pulse">Sending...</span> : "Send Message"}
        </button>
      </motion.form>
    </main>
  );
}