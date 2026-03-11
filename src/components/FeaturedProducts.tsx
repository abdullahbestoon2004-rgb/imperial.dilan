import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  imageHover: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-[1700px] mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-['Playfair_Display'] text-center text-[#0B0B0B] mb-4"
        >
          Featured Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#666] font-['Inter'] mb-16"
        >
          Discover our best-selling suits
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2px] gap-y-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/5] mb-5 overflow-hidden bg-[#E5E5E5]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
                    hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <ImageWithFallback
                  src={product.imageHover}
                  alt={`${product.name} alternate view`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick Add to Cart Button */}
                <div
                  className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
                    hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <button className="w-full bg-[#0B0B0B] text-white py-3 font-['Inter'] hover:bg-[#C6A96B] transition-colors">
                    Quick Add to Cart
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-['Inter'] text-[#0B0B0B] mb-2">{product.name}</h3>
              <p className="text-xl font-['Playfair_Display'] text-[#C6A96B]">${product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
