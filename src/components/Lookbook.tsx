import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LookbookImage {
  image: string;
  title: string;
}

interface LookbookProps {
  images: LookbookImage[];
}

export function Lookbook({ images }: LookbookProps) {
  return (
    <section className="py-20 bg-[#2F2F2F]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-['Playfair_Display'] text-center text-[#F6F3EE] mb-4"
        >
          Style Inspiration
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#F6F3EE]/70 font-['Inter'] mb-16"
        >
          Curated looks for the modern gentleman
        </motion.p>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-lg font-['Playfair_Display'] text-[#F6F3EE] sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-4 border-2 border-[#F6F3EE] text-[#F6F3EE] font-['Inter'] font-medium hover:bg-[#F6F3EE] hover:text-[#2F2F2F] transition-all duration-300">
            View Lookbook
          </button>
        </motion.div>
      </div>
    </section>
  );
}


