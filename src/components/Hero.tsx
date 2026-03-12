import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative h-screen w-full">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="Elegant man in suit"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0B0A0D]/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] text-[#F7F1E8] mb-4"
          >
            Timeless Elegance
            <br />
            Modern Tailoring
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#F7F1E8]/90 mb-8 font-['Inter'] font-light"
          >
            Discover premium suits crafted for the modern gentleman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-[#F7F1E8] text-[#171419] font-['Inter'] font-medium hover:bg-[#C6A66B] hover:text-[#F7F1E8] transition-all duration-300">
              Shop Suits
            </button>
            <button className="px-8 py-4 border-2 border-[#F7F1E8] text-[#F7F1E8] font-['Inter'] font-medium hover:bg-[#F7F1E8] hover:text-[#171419] transition-all duration-300">
              Explore Collection
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


