import { motion } from 'motion/react';

export function Newsletter() {
  return (
    <section className="py-20 bg-[#1E2430]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#F7F1E8] mb-4">
            Join the Gentleman Club
          </h2>
          <p className="text-[#F7F1E8]/70 font-['Inter'] mb-8">
            Get exclusive updates on new collections, special offers, and style tips.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-[#F7F1E8] text-[#171419] font-['Inter'] focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#C6A66B] text-[#F7F1E8] font-['Inter'] font-medium hover:bg-[#6E5A44] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


