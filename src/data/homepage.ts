export const heroSection = {
  companyName: 'SUNDARBAN HOLIDAY TRIP',
  headline: 'Experience Nature Like Never Before',
  description:
    "Nestled in the heart of one of the world's most breathtaking UNESCO World Heritage Sites, our exclusive tour packages offer a unique opportunity to explore the lush mangroves, diverse wildlife, and vibrant culture of the Sundarbans.",
  ctaText: 'Explore Sundarbans with Sonali Tour & Travels',
  videoUrl: '/footage-homepage.mp4',
};

export interface FeatureCard {
  id: number;
  image: string;
  icon: string;
  title: string;
  description: string;
}

export const featureCards: FeatureCard[] = [
  {
    id: 1,
    image: '/transport.webp',
    icon: '🚢',
    title: 'Safe Transportation',
    description:
      'Travel worry-free with our well-maintained vehicles and licensed boat services ensuring your complete safety.',
  },
  {
    id: 2,
    image: '/food.jpg',
    icon: '🍽️',
    title: 'Delicious Food',
    description:
      'Enjoy freshly prepared local and multi-cuisine meals made with love, served hot during your entire journey.',
  },
  {
    id: 3,
    image: '/accomoddation.jpg',
    icon: '🏨',
    title: 'Luxury Accommodation',
    description:
      'Enjoy a relaxing stay in our hand-picked luxury accommodations, where comfort meets the beauty of nature. Each location is designed for unforgettable experiences and breathtaking views.',
  },
  {
    id: 4,
    image: '/reviews.jpg',
    icon: '⭐',
    title: '400 + reviews',
    description:
      'Trusted by hundreds of travelers — read over 400 positive reviews that speak for our quality service and memorable experiences.',
  },
];

export const whyChooseUs = {
  title: 'Why choose Sonali Tour & Travels?',
  description: 'Because at Sonali Tour & Travels you’re not just booking a room — you’re stepping into an experience where heart-felt hospitality, natural beauty and comfort come together. Nestled in a serene location, our homestay offers you: Warm, personal care like family, where every guest is treated with respect and genuine attention.A peaceful retreat away from the city’s hustle—wake up to birdsong, breathe fresh air, and unwind.Beautifully maintained accommodation with modern comfort in a clean, safe and welcoming environment.Locally inspired cuisine, fresh ingredients and the chance to taste authentic flavours you won’t get anywhere else.A base from which to explore nearby attractions, relax in tranquillity and create unforgettable memories.In short: We believe your stay should feel effortless, memorable and positive—and at Sonali Tour & Travels, that’s exactly what we deliver.',
};
export interface ReviewItem {
  id: number;
  name: string;
  rating: number;
  review: string;
  imageUrl: string;
}

export const reviewSection = {
  title: 'What Our Customers Say',
  description:
    'Experience the best of nature with our exclusive tour packages. Nestled in the heart of one of the world\'s most breathtaking UNESCO World Heritage Sites, our tour packages offer a unique opportunity to explore the lush mangroves, diverse wildlife, and vibrant culture of the Sundarbans.',
  reviewItems: [  
    {
      id: 1,
      name: 'Ananya Roy',
      rating: 5,
      review: 'A peaceful place surrounded by nature and very close to the Sundarban. The hosts were so caring — it truly felt like home!"',
      imageUrl: '/reviews.jpg',
    },
    {
      id: 2,
      name: 'Rahul Dutta',
      rating: 5,
      review: 'Loved every moment here. After exploring the Sundarban all day, coming back to this cozy and clean homestay was perfect!',
      imageUrl: '/reviews.jpg'
    },
    {
      id: 3,
      name: 'Sneha Mukherjee',
      rating: 5,
      review: 'Perfect getaway for a Sundarban trip. Friendly staff, great hospitality, and a relaxing atmosphere.',
      imageUrl: '/reviews.jpg'
    },
    {
      id: 4,
      name: 'Arjun Sen',
      rating: 4,
      review: 'We enjoyed both — the beauty of Sundarban and the comfort of Sonali Tour & Travels. Truly a memorable experience!',
      imageUrl: '/reviews.jpg'
    },
    {
      id: 5,
      name: 'Priya Das',
      rating: 5,
      review: 'Best homestay near Sundarban! The hosts treat you like family and guide you for the best local tours.',
      imageUrl: '/reviews.jpg'
    }
  ] as ReviewItem[]
};
