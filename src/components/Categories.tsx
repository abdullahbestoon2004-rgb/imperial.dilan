import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Category {
  name: string;
  image: string;
  href?: string;
}

interface CategoriesProps {
  categories: Category[];
}

function CategoryWrapper({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: ReactNode;
}) {
  if (!href) {
    return <div className={className}>{children}</div>;
  }

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-20 bg-[#E8E1D8]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-['Playfair_Display'] text-center text-[#2F2F2F] mb-16"
        >
          Shop by Category
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CategoryWrapper
                href={category.href}
                className="group relative block overflow-hidden cursor-pointer"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#2F2F2F]/20 group-hover:bg-[#2F2F2F]/40 transition-all duration-300"></div>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-5 sm:pb-8">
                  <h3 className="text-center text-xl font-['Playfair_Display'] text-[#F6F3EE] sm:text-3xl">{category.name}</h3>
                </div>
              </CategoryWrapper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
