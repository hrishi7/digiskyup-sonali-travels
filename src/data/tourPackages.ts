import { LucideIcon, Eye, Ship, Hotel, Utensils, Anchor } from 'lucide-react';

export interface PackageFeature {
  icon: LucideIcon;
  label: string;
}

export interface ItineraryItem {
  time: string;
  description: string;
}

export interface DayItinerary {
  day: string;
  title: string;
  items: ItineraryItem[];
}

export interface MenuDay {
  day: string;
  meals: {
    mealType: string;
    items: string;
  }[];
}

export interface PackageDetails {
  subtitle: string;
  fullDescription: string;
  heroImages: string[];
  pricePerHead: string;
  highlights: string[];
  itinerary: DayItinerary[];
  includes: string[];
  menuDetails: MenuDay[];
  thingsToCarry: string[];
}

export interface TourPackage {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  features: PackageFeature[];
  details?: PackageDetails;
}

export interface TourPackagesPageContent {
  hero: {
    title: string;
    breadcrumb: {
      home: string;
      current: string;
    };
  };
  packagesSection: {
    sectionLabel: string;
    title: string;
    description: string;
    highlightText: string;
  };
  packages: TourPackage[];
}

export const tourPackagesPageContent: TourPackagesPageContent = {
  hero: {
    title: 'Curated Jungle Expeditions',
    breadcrumb: {
      home: 'Home',
      current: 'Tour Packages',
    },
  },
  packagesSection: {
    sectionLabel: 'OUR PACKAGES',
    title: 'Choose Your Adventure',
    description:
      'Step into the wild with {highlight}. Whether you seek a quick escape or an immersive retreat, our itineraries are thoughtfully designed to showcase the very best of the mangrove forest. From spotting the elusive Royal Bengal Tiger to savoring the silence of the creeks, choose the journey that calls to you.',
    highlightText: 'Sonali Tour & Travels',
  },
  packages: [
    {
      id: 1,
      image: '/economic.png',
      title: 'Sundarban Economical Package',
      description:
        'An affordable gateway to adventure. Perfect for budget travelers who want to experience the raw beauty of the Sundarbans without compromising on the essential thrills.',
      price: '₹ 3500 / person',
      features: [
        { icon: Eye, label: 'Sightseeing' },
        { icon: Ship, label: 'Transportation' },
        { icon: Hotel, label: 'Cottage Stay' },
        { icon: Utensils, label: 'Home Meals' },
        { icon: Anchor, label: 'Boat Safari' },
        { icon: Eye, label: 'Adventure' },
      ],
      details: {
        subtitle: 'Essential Sundarban Experience',
        fullDescription: 'Discover the wild spirit of the Sundarbans on a budget. This package covers all the key highlights—thrilling boat safaris, jungle walks, and iconic watchtowers—ensuring you don’t miss out on the adventure. Stay in clean, comfortable cottages and enjoy home-cooked Bengali meals as you immerse yourself in the local culture.',
        heroImages: ['/sundarban-hero.jpg'],
        pricePerHead: '3500',
        highlights: [
          'Authentic Bengali Cuisine (Breakfast to Dinner)',
          'Guided Jungle Boat Safari',
          'Forest Entry Permissions Included',
          'Experienced Local Tour Guide',
          'Evening Campfire & Folk Tales'
        ],
        itinerary: [
          {
            day: 'Day 1',
            title: 'Welcome to the Jungle',
            items: [
              {
                time: '',
                description: 'Canning → Sonakhali → Gosaba → Rabindranath Tagore Bungalow → Hamilton Bungalow → Bird Jungle → Overnight stay at hotel in Pakhiralay/Dayapur.'
              },
            ]
          },
          {
            day: 'Day 2',
            title: 'Into the Wild',
            items: [
              {
                time: '',
                description: 'Sajnekhali (Watch Tower) → Sudhanyakhali (Watch Tower) → Dobanki (Watch Tower) → Panchamukhi → River Side View → Pirkhali → Gajikhali → Deulbari → Dhulibhasani → Back to Pakhiralay.'
              },
            ]
          },
          {
            day: 'Day 3',
            title: 'Village Life & Departure',
            items: [
              {
                time: '',
                description: 'Bidyadhari River → Jharkhali Park & Loknath Mandir visit → Back to Sonakhali.'
              },
            ]
          },
        ],
        includes: [
          'Cultural Evening: Tribal Dance & Baul Music',
          'All meals included (Bed tea to Dinner)',
          'Accommodation in Standard Cottages',
          'Boat permits and Forest Entry Fees',
          'Dedicated Tour Manager throughout the trip'
        ],
        menuDetails: [
          {
            day: 'Day 1 – Traditional Welcome Meal',
            meals: [
              { mealType: 'Welcome', items: 'Dab (Green Coconut) & Welcome Drink' },
              { mealType: 'Breakfast', items: 'Tea, Biscuits, Kachuri, Kashmiri Aloo Dum, Joynagar Moya/Rosogolla' },
              { mealType: '11:00 AM Snacks', items: 'Amude Fish Fry, Tea/Coffee' },
              { mealType: 'Lunch', items: 'Rice, Dal, Fry, Mixed Vegetables, Dahi Vetki, Chingri Malai Curry, Chatni, Papad, Fruits' },
              { mealType: 'Evening Snacks', items: 'Coffee, Biscuits, Egg Chowmein' },
              { mealType: 'Dinner', items: 'Rice, Dal, Fry, Desi Mutton, Salad' }
            ]
          },
          {
            day: 'Day 2 – Flavors of the Delta',
            meals: [
              { mealType: 'Bed Tea', items: 'Bed Tea, Biscuits' },
              { mealType: 'Breakfast', items: 'Poori, Cholar Dal, Sweets, Tea' },
              { mealType: '11:00 AM Snacks', items: 'French Fries OR Veg Pakoda' },
              { mealType: 'Lunch', items: 'Rice, Dal, Fry, Pabda Begun, Rui Macher Kaliya, Chatni, Papad' },
              { mealType: 'Evening Snacks', items: 'Chicken Pakoda' },
              { mealType: 'Dinner', items: 'Fried Rice, Chilli Chicken, Salad' }
            ]
          },
          {
            day: 'Day 3 – Farewell Feast',
            meals: [
              { mealType: 'Bed Tea', items: 'Bed Tea, Biscuits' },
              { mealType: 'Breakfast', items: 'Radha Ballavi, Chana Masala, Boiled Egg/Sweet, Tea' },
              { mealType: 'Lunch', items: 'Rice, Dal, Fry, Crab Masala, Katla Masala Kari, Chatni, Papad' }
            ]
          }
        ],
        thingsToCarry: [
          'Personal medications and insect repellent.',
          'Original Government ID proof (Aadhar/Voter ID/Passport).',
          'Camera and binoculars for wildlife viewing.',
          'Comfortable cotton clothes and walking shoes.',
          'Sunscreen, sunglasses, and a hat.',
          'Cash for small personal expenses (ATMs are scarce).'
        ]
      }
    },
    {
      id: 2,
      image: '/standard.png',
      title: 'Sundarban Standard Package',
      description:
        'The perfect balance of comfort and exploration. flexible itineraries and upgraded stays make this our most popular choice for families and couples.',
      price: '₹ 4200 / person',
      features: [
        { icon: Eye, label: 'Sightseeing' },
        { icon: Ship, label: 'Transportation' },
        { icon: Hotel, label: 'Deluxe Hotel' },
        { icon: Utensils, label: 'Buffet Meals' },
        { icon: Anchor, label: 'Boat Safari' },
        { icon: Eye, label: 'Adventure' },
      ],
      details: {
        subtitle: 'Comfort & Adventure Combined',
        fullDescription: 'Elevate your experience with our Standard Package. Enjoy the perfect blend of adventure and relaxation with upgraded accommodations and a more leisurely pace. From sunset cruises to cultural evenings with folk music, this tour offers a comprehensive glimpse into life in the delta, complete with personalized care and enhanced amenities.',
        heroImages: ['/sundarban-hero.jpg'],
        pricePerHead: '4200',
        highlights: [
          'Deluxe AC/Non-AC Accommodation',
          'Extended Boat Safari Routes',
          'Cultural Program & Bonfire',
          'Guided Village Walks',
          'All-Inclusive Meals'
        ],
        itinerary: [
          {
            day: 'Day 1',
            title: 'Arrival & Sunset Cruise',
            items: [
              {
                time: '',
                description: 'Pick up and transfer to the boat. Relaxed cruise through the creeks to witness the mesmerizing sunset. Check-in to hotel and enjoy a cultural program in the evening.'
              },
            ]
          },
          {
            day: 'Day 2',
            title: 'Core Jungle Safari',
            items: [
              {
                time: '',
                description: 'We venture deeper into the forest today. Visit Sudhanyakhali Watch Tower for tiger spotting, followed by a cruise through narrow creeks like Bonbibi Bharani. Experience the silent thrill of the mangroves.'
              },
            ]
          },
          {
            day: 'Day 3',
            title: 'Island Hopping',
            items: [
              {
                time: '',
                description: 'Explore the local islands, visit the bird sanctuary, and interact with the local communities at Gosaba before heading back.'
              },
            ]
          }
        ],
        includes: [
          'Evening Folk Culture Program (Jhumur/Baul)',
          'All meals (Buffet style)',
          'Accommodation in Deluxe Rooms',
          'All Entry Fees and Permits',
          'Private Boat for sightings (if group size permits)'
        ],
        menuDetails: [
          {
            day: 'Day 1',
            meals: [
              { mealType: 'Breakfast', items: 'Luchi/Kachori, Alur Dom, Sweet, Tea' },
              { mealType: 'Lunch', items: 'Rice, Dal, Fry, Vetki Curry, Prawn Malai Curry, Salad' },
              { mealType: 'Dinner', items: 'Fried Rice, Chicken Kasha, Salad, Sweet' }
            ]
          },
          {
            day: 'Day 2',
            meals: [
              { mealType: 'Breakfast', items: 'Nan/Paratha, Chana Masala, Egg' },
              { mealType: 'Lunch', items: 'Rice, Dal, Mixed Veg, Local Fish Curry, Crab Masala' },
              { mealType: 'Dinner', items: 'Roti/Rice, Mutton Kosha, Salad' }
            ]
          },
          {
            day: 'Day 3',
            meals: [
              { mealType: 'Breakfast', items: 'Bread Butter/Toast, Omelette, Fruits' },
              { mealType: 'Lunch', items: 'Rice, Dal, Fry, Fish Curry, Chutney, Papad' }
            ]
          }
        ],
        thingsToCarry: [
          'Personal medications.',
          'Valid Photo ID.',
          'Camera/Binoculars.',
          'Light woolen clothes (in winter) and cottons (in summer).',
          'Power bank and torch.'
        ]
      }
    },
     {
      id: 3,
      image: '/premium.png',
      title: 'Sundarban Premium Package',
      description:
        'Luxury in the lap of nature. Indulge in premium amenities, exclusive boat services, and gourmet dining for an unforgettable forest retreat.',
      price: '₹ 5000 / person',
      features: [
        { icon: Eye, label: 'Exclusive Sightseeing' },
        { icon: Ship, label: 'Luxury Cruise' },
        { icon: Hotel, label: 'Luxury Resort' },
        { icon: Utensils, label: 'Gourmet Meals' },
        { icon: Anchor, label: 'Private Safari' },
        { icon: Eye, label: 'Premium Service' },
      ],
      details: {
        subtitle: 'The Ultimate Sundarban Luxury',
        fullDescription: 'Experience the Sundarbans in unparalleled style. Our Premium Package is designed for the discerning traveler, offering luxury resort stays, exclusive private boats, and gourmet culinary experiences. Let us pamper you with exceptional service while you witness the majestic wildlife and serene landscapes in absolute comfort.',
        heroImages: ['/sundarban-hero.jpg'],
        pricePerHead: '5000',
        highlights: [
          'Premium AC Resort/Hotel Stay',
          'Exclusive Private Boat for Safari',
          'Special Gala Dinner',
          'Dedicated Naturalist Guide',
          'Customizable Itinerary'
        ],
        itinerary: [
          {
            day: 'Day 1',
            title: 'Welcome to Luxury',
            items: [
              {
                time: '',
                description: 'Private transfer to our premium boat. Enjoy welcome drinks and a curated lunch on board. Sunset cruise to the resort. Evening private bonfire and cultural show.'
              },
            ]
          },
          {
            day: 'Day 2',
            title: 'Exclusive Safari',
            items: [
              {
                time: '',
                description: 'A private safari experience. Visit Netidhopani Watch Tower (subject to permission) which has a 300-year-old temple legend. Enjoy a quiet lunch in the middle of the river.'
              },
            ]
          },
          {
            day: 'Day 3',
            title: 'Leisure & History',
            items: [
              {
                time: '',
                description: 'Relaxed morning at the resort. Visit the Hamilton Estate and learn about the colonial history of the Gosaba region. Departure with a special souvenir.'
              },
            ]
          }
        ],
        includes: [
          'Live BBQ & Gala Dinner',
          'All Gourmet Meals',
          'Premium AC Accommodation',
          'Exclusive Boat & Guide',
          'All Permits & Priority Access'
        ],
        menuDetails: [
          {
            day: 'Day 1',
            meals: [
              { mealType: 'Welcome', items: 'Coconut Water, Welcome Drink' },
              { mealType: 'Lunch', items: 'Basmati Rice, Dal, Jhuri Aloo Bhaja, Golda Chingri (Lobster) Malai Curry, Vetki Paturi' },
              { mealType: 'Dinner', items: 'Chicken/Mutton Biryani, Raita, Salad, Firni' }
            ]
          },
          {
            day: 'Day 2',
            meals: [
              { mealType: 'Breakfast', items: 'English Breakfast Platter / Indian Combo' },
              { mealType: 'Lunch', items: 'Rice, Dal, Crab Masala, Local Fish Fry, Parshe Fish Jhal' },
              { mealType: 'Dinner', items: 'BBQ Chicken/Paneer, Fried Rice, Chilli Fish' }
            ]
          },
          {
            day: 'Day 3',
            meals: [
              { mealType: 'Breakfast', items: 'Dosa/Idli or Puri Sabji, Sweets' },
              { mealType: 'Lunch', items: 'Rice, Dal, Mutton Kosha, Chutney, Papad, Doi' },
              { mealType: 'Dinner', items: 'Packed Snacks for journey' }
            ]
          }
        ],
        thingsToCarry: [
          'Personal medication.',
          'Valid ID Proof.',
          'Camera.',
          'Comfortable attire.',
          'Your sense of adventure!'
        ]
      }
    },
  ],
};
