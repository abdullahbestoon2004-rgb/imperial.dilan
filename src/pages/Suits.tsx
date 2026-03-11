import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Newsletter } from '../components/Newsletter';

export default function Suits() {
  const [sortBy, setSortBy] = useState('featured');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const allSuits = [
    {
      id: 1,
      name: 'Classic Black Suit',
      price: 420,
      color: 'black',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1199699_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1199699_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 2,
      name: 'Navy Blue Suit',
      price: 450,
      color: 'blue',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI715A12700001_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI715A12700001_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 3,
      name: 'Kent Handmade Wool Gabardine Suit',
      price: 390,
      color: 'beige',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798971254003_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798971254003_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 4,
      name: 'Gregory Hand-Tailored Birdseye Suit',
      price: 480,
      color: 'gray',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798977343001_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798977343001_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 5,
      name: 'Kent Hand-Tailored Plaid Cashmere Suit',
      price: 410,
      color: 'brown',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798963805001_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798963805001_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 6,
      name: 'Kent Hand-Tailored Glen Plaid Suit',
      price: 520,
      color: 'black',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798945028001_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798945028001_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 7,
      name: 'Light Gray Suit',
      price: 430,
      color: 'gray',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798977343001_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798977343001_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 8,
      name: 'Gregory Hand-Tailored Wool Peak Tuxedo',
      price: 490,
      color: 'red',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1339428_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1339428_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 9,
      name: 'Kent Hand-Tailored Glen Plaid Suit',
      price: 460,
      color: 'green',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798P06907001_alternate10?$rl_4x5_zoom$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798P06907001_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 10,
      name: 'Gregory Hand-Tailored Wool Serge Blazer',
      price: 380,
      color: 'beige',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1339457_alternate10?$rl_4x5_zoom$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1339457_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 11,
      name: 'Gregory Handmade Tailcoat Tuxedo',
      price: 550,
      color: 'blue',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1375839_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1375839_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 12,
      name: 'Kent Hand-Tailored Wool Flannel Jacket',
      price: 620,
      color: 'black',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798P06876001_alternate10?$rl_4x5_zoom$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798P06876001_lifestyle?$rl_4x5_zoom$'
    }
  ];

  // Filter suits based on selections
  let filteredSuits = allSuits;

  if (selectedColor !== 'all') {
    filteredSuits = filteredSuits.filter(suit => suit.color === selectedColor);
  }

  if (selectedPrice !== 'all') {
    if (selectedPrice === 'under400') {
      filteredSuits = filteredSuits.filter(suit => suit.price < 400);
    } else if (selectedPrice === '400to500') {
      filteredSuits = filteredSuits.filter(suit => suit.price >= 400 && suit.price <= 500);
    } else if (selectedPrice === 'over500') {
      filteredSuits = filteredSuits.filter(suit => suit.price > 500);
    }
  }

  // Sort suits
  const sortedSuits = [...filteredSuits].sort((a, b) => {
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0; // featured (default order)
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#0B0B0B] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-['Playfair_Display'] text-white mb-4"
          >
            Premium Suits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 font-['Inter']"
          >
            Crafted to perfection for the modern gentleman
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1700px] mx-auto px-4 md:px-6">
          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Color Filter */}
              <div className="relative">
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="appearance-none bg-white border border-[#E5E5E5] px-6 py-3 pr-10 font-['Inter'] text-[#0B0B0B] cursor-pointer hover:border-[#C6A96B] transition-colors focus:outline-none focus:border-[#C6A96B]"
                >
                  <option value="all">All Colors</option>
                  <option value="black">Black</option>
                  <option value="blue">Blue</option>
                  <option value="gray">Gray</option>
                  <option value="beige">Beige</option>
                  <option value="brown">Brown</option>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666] pointer-events-none" />
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="appearance-none bg-white border border-[#E5E5E5] px-6 py-3 pr-10 font-['Inter'] text-[#0B0B0B] cursor-pointer hover:border-[#C6A96B] transition-colors focus:outline-none focus:border-[#C6A96B]"
                >
                  <option value="all">All Prices</option>
                  <option value="under400">Under $400</option>
                  <option value="400to500">$400 - $500</option>
                  <option value="over500">Over $500</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666] pointer-events-none" />
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-[#666] font-['Inter'] text-sm">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-[#E5E5E5] px-6 py-3 pr-10 font-['Inter'] text-[#0B0B0B] cursor-pointer hover:border-[#C6A96B] transition-colors focus:outline-none focus:border-[#C6A96B]"
                >
                  <option value="featured">Featured</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-[#666] font-['Inter'] mb-8">
            {sortedSuits.length} {sortedSuits.length === 1 ? 'suit' : 'suits'} found
          </p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2px] gap-y-10">
            {sortedSuits.map((suit, index) => (
              <ProductCard key={suit.id} product={suit} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

