export const heroSection = {
  companyName: 'SONALI TOUR & TRAVELS',
  headline: 'Unveil the Mystic Beauty of the Mangroves',
  description:
    "Journey into the heart of the Sundarbans with us. Where the tiger roars and the river whispers, we craft experiences that blend adventure, comfort, and the raw magic of nature.",
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
    image: '/transport.jpeg',
    icon: '🚢',
    title: 'Safe Transportation',
    description:
      'Voyage in safety and style aboard our private fleet. From land to water, we ensure your passage is as smooth as the rivers we navigate.',
  },
  {
    id: 2,
    image: '/food.jpeg',
    icon: '🍽️',
    title: 'Delicious Food',
    description:
      'Savor the taste of Bengal. Our onboard chefs prepare authentic local delicacies and multi-cuisine favorites, turning every meal into a feast.',
  },
  {
    id: 3,
    image: '/accomodation.jpeg',
    icon: '🏨',
    title: 'Luxury Accommodation',
    description:
      'Rest in the lap of nature without compromising on comfort. Our curated stays offer serene views and modern amenities, ensuring your nights are as peaceful as the forest.',
  },
  {
    id: 4,
    image: '/gall-5.jpeg',
    icon: '⭐',
    title: '400 + reviews',
    description:
      'Join a community of happy explorers. With over 400 5-star experiences, our reputation is built on trust, transparency, and unforgettable memories.',
  },
];

export const whyChooseUs = {
  title: 'Why choose Sonali Tour & Travels?',
  description: 'At Sonali Tour & Travels, we don\'t just guide you; we host you. We believe in "Atithi Devo Bhava"—Guest is God. Our deep roots in Canning and the Sundarbans allow us to offer you secrets of the forest that others miss. From the moment you arrive until you wave goodbye, experience personalized care, expert guidance, and the warmth of true hospitality. We ensure your adventure is safe, your stay is comfortable, and your memories are timeless.',
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
    'Don\'t just take our word for it. Hear from those who have ventured into the wild with us and returned with stories to tell.',
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
