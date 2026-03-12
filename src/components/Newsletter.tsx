import { motion } from 'motion/react';

export function Newsletter() {
  return (
    <section className="py-20 bg-[#3A2418]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#E7D7C4] mb-4">
            Join the Gentleman Club
          </h2>
          <p className="text-[#E7D7C4]/70 font-['Inter'] mb-8">
            Get exclusive updates on new collections, special offers, and style tips.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-[#E7D7C4] text-[#1B1411] font-['Inter'] focus:outline-none focus:ring-2 focus:ring-[#D6A25B]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#D6A25B] text-[#0E0E0E] font-['Inter'] font-medium hover:bg-[#E7D7C4] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


