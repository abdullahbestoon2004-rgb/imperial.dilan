import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Lookbook } from '../components/Lookbook';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';

export default function Home() {
  // Category images
  const categories = [
    {
      name: 'Suits',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1199698_alternate10?$rl_4x5_pdp$',
      href: '/suits'
    },
    {
      name: 'Jackets',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710968117004_alternate10?$rl_4x5_pdp$'
    },
    {
      name: 'Shirts',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1266689_lifestyle?$rl_4x5_zoom$'
    },
    {
      name: 'Shoes',
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1183688_lifestyle?$rl_1x1_pdp$',
      href: '/shoes'
    }
  ];

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Classic Black Suit',
      price: 420,
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1199699_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1199699_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 2,
      name: 'Navy Blue Suit',
      price: 450,
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI715A12700001_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI715A12700001_lifestyle?$rl_4x5_zoom$'
    },
    {
      id: 3,
      name: 'Beige Linen Suit',
      price: 390,
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798971254003_alternate10?$rl_4x5_pdp$',
      imageHover: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798971254003_lifestyle?$rl_4x5_zoom$'
    },
  ];

  // Lookbook images
  const lookbookImages = [
    {
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798963805001_alternate10?$rl_4x5_pdp$',
      title: 'Urban Sophistication'
    },
    {
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798945028001_alternate10?$rl_4x5_pdp$',
      title: 'Formal Excellence'
    },
    {
      image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI798977343001_alternate10?$rl_4x5_pdp$',
      title: 'Business Casual'
    }
  ];

  return (
    <>
      <Hero heroImage="/dilan.png" />
      <Categories categories={categories} />
      <FeaturedProducts products={featuredProducts} />
      <Lookbook images={lookbookImages} />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}