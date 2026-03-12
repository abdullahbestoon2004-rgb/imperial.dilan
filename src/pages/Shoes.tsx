import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Newsletter } from '../components/Newsletter';

export default function Shoes() {
  const [sortBy, setSortBy] = useState('featured');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');

  const selectClassName = "appearance-none bg-[#7A4A2A] border border-[#6E6A66] px-6 py-3 pr-10 font-['Inter'] text-[#E7D7C4] cursor-pointer hover:border-[#D6A25B] transition-colors focus:outline-none focus:border-[#D6A25B]";
  const selectOptionStyle = { backgroundColor: '#1B1411', color: '#E7D7C4' };

  const allShoes = [
    {
      id: 101,
      name: 'Carter Calfskin Sneaker',
      price: 248,
      color: 'black',
      brand: 'Polo Ralph Lauren',
      style: 'sneakers',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 102,
      name: 'Mayfair Tassel Loafer',
      price: 398,
      color: 'brown',
      brand: 'Purple Label',
      style: 'loafers',
      image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 103,
      name: 'Stanton Cap-Toe Oxford',
      price: 315,
      color: 'black',
      brand: 'Polo Ralph Lauren',
      style: 'dress',
      image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 104,
      name: 'Bedford Suede Chukka Boot',
      price: 342,
      color: 'brown',
      brand: 'Polo Ralph Lauren',
      style: 'boots',
      image: 'https://images.unsplash.com/photo-1608256246200-53e8b47b4f25?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 105,
      name: 'Southport Leather Sandal',
      price: 182,
      color: 'beige',
      brand: 'Polo Ralph Lauren',
      style: 'sandals',
      image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 106,
      name: 'Hudson Suede Driver',
      price: 286,
      color: 'blue',
      brand: 'Purple Label',
      style: 'drivers',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 107,
      name: 'Westbrook Retro Sneaker',
      price: 219,
      color: 'green',
      brand: 'Polo Ralph Lauren',
      style: 'sneakers',
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 108,
      name: 'Pimlico Penny Loafer',
      price: 332,
      color: 'gray',
      brand: 'Polo Ralph Lauren',
      style: 'loafers',
      image: 'https://images.unsplash.com/photo-1612181346599-a6bfbd67be86?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 109,
      name: 'Savile Wholecut Oxford',
      price: 465,
      color: 'red',
      brand: 'Purple Label',
      style: 'dress',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 110,
      name: 'Alden Rugged Chelsea Boot',
      price: 389,
      color: 'black',
      brand: 'Polo Ralph Lauren',
      style: 'boots',
      image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1608256246200-53e8b47b4f25?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 111,
      name: 'Marina Boat Shoe',
      price: 198,
      color: 'blue',
      brand: 'Polo Ralph Lauren',
      style: 'drivers',
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 112,
      name: 'Riviera Cross-Strap Sandal',
      price: 176,
      color: 'beige',
      brand: 'Polo Ralph Lauren',
      style: 'sandals',
      image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=80',
      imageHover: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  let filteredShoes = allShoes;

  if (selectedStyle !== 'all') {
    filteredShoes = filteredShoes.filter((shoe) => shoe.style === selectedStyle);
  }

  if (selectedColor !== 'all') {
    filteredShoes = filteredShoes.filter((shoe) => shoe.color === selectedColor);
  }

  const sortedShoes = [...filteredShoes].sort((a, b) => {
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <>
      <section className="relative h-[60vh] bg-[#2F2F2F] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F2F2F]/50 to-[#2F2F2F]/70"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-['Playfair_Display'] text-[#F6F3EE] mb-4"
          >
            Premium Shoes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#F6F3EE]/80 font-['Inter']"
          >
            Refined footwear for every moment, from boardroom to weekend.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[#E8E1D8]">
        <div className="max-w-[1700px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)} className={selectClassName}>
                  <option style={selectOptionStyle} value="all">All Styles</option>
                  <option style={selectOptionStyle} value="sneakers">Sneakers</option>
                  <option style={selectOptionStyle} value="loafers">Loafers</option>
                  <option style={selectOptionStyle} value="dress">Dress Shoes</option>
                  <option style={selectOptionStyle} value="boots">Boots</option>
                  <option style={selectOptionStyle} value="sandals">Sandals</option>
                  <option style={selectOptionStyle} value="drivers">Drivers & Boat Shoes</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D6A25B] pointer-events-none" />
              </div>

              <div className="relative">
                <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className={selectClassName}>
                  <option style={selectOptionStyle} value="all">All Colors</option>
                  <option style={selectOptionStyle} value="black">Black</option>
                  <option style={selectOptionStyle} value="blue">Blue</option>
                  <option style={selectOptionStyle} value="gray">Gray</option>
                  <option style={selectOptionStyle} value="beige">Beige</option>
                  <option style={selectOptionStyle} value="brown">Brown</option>
                  <option style={selectOptionStyle} value="green">Green</option>
                  <option style={selectOptionStyle} value="red">Red</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D6A25B] pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#6E6A66] font-['Inter'] text-sm">Sort by:</span>
              <div className="relative">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClassName}>
                  <option style={selectOptionStyle} value="featured">Featured</option>
                  <option style={selectOptionStyle} value="priceLow">Price: Low to High</option>
                  <option style={selectOptionStyle} value="priceHigh">Price: High to Low</option>
                  <option style={selectOptionStyle} value="name">Name</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D6A25B] pointer-events-none" />
              </div>
            </div>
          </div>

          <p className="text-[#6E6A66] font-['Inter'] mb-8">
            {sortedShoes.length} {sortedShoes.length === 1 ? 'shoe' : 'shoes'} found
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2px] gap-y-10">
            {sortedShoes.map((shoe, index) => (
              <ProductCard key={shoe.id} product={shoe} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}