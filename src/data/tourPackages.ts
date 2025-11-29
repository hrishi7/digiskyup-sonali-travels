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
    title: 'Sundarban Tour Packages',
    breadcrumb: {
      home: 'Home',
      current: 'Sundarban Tour Packages',
    },
  },
  packagesSection: {
    sectionLabel: 'OUR PACKAGES',
    title: 'Sundarban Tour Packages',
    description:
      'At {highlight}, we provide exciting tour packages that let you explore the stunning Sundarbans. Enjoy wildlife safaris, peaceful boat rides, and comfortable stays while tasting delicious local food. Our flexible options are perfect for everyone, ensuring you have a memorable adventure tailored just for you!',
    highlightText: 'Sundarban Holiday Trip',
  },
  packages: [
    {
      id: 1,
      image: '/economic.webp',
      title: 'Sundarban Economical Tour Package',
      description:
        'Experience the beauty of the Sundarbans in a single day with thrilling wildlife sightings, scenic boat rides, and a taste of local cuisine.',
      price: '₹ 3500 / person',
      features: [
        { icon: Eye, label: 'Sightseeing' },
        { icon: Ship, label: 'Transportation' },
        { icon: Hotel, label: 'Hotel' },
        { icon: Utensils, label: 'Meal' },
        { icon: Anchor, label: 'Boat Safari' },
        { icon: Eye, label: 'Adventure' },
      ],
      details: {
        subtitle: 'Sundarban Trip Economical',
        fullDescription: 'Delve into the mystique of the Sundarbans with our bespoke 1 Night, 2 Days sojourn. Plunge deep into the bosom of Mother Nature, relishing exhilarating nautical safaris, and recline in intimate lodgings for an enduring escapade.',
        heroImages: ['/sundarban-hero.jpg'],
        pricePerHead: '3500',
        highlights: [
          'Breakfast To Lunch Food Menu',
          'Jungle Boat Safari',
          'Jungle Permission',
          'Professional tour Guide',
          'Camp Fire'
        ],
        itinerary: [
          {
            day: 'Day 1',
            title: 'Sundarban 1 Day',
            items: [
              {
                time: '',
                description: 'Visit Jharkhali Park, local zoo & nearby sightseeing spots.'
              },
              
            ]
          },
          {
            day: 'Day 2',
            title: 'Sundarban 2 Day',
            items: [
              {
                time: '',
                description: 'Explore Dobaki, Pir Khali, Gazikhali, Bonbibi Bharani, Deul Bharani, Panchamukhani, and return to Jharkhali for night stay (Hotel / Boat)'
              },
              
            ]
          },
          {
            day: 'Day 3',
            title: 'Sundarban 3 Day',
            items: [
              {
                time: '',
                description: 'Cruise through Bidyadhari River, visit Gosaba, Rabindranath’s Beacon Bungalow, Hamilton Bungalow, Pakhir Jungle, Pakhiralay, and return to Jharkhali.(Optional: Boni Camp, Suryamoni Jungle, Parshemari Canal)'
              },
              
            ]
          }
        ],
        includes: [
          'Evening Entertainment & Cultural Delight',
         'Experience the rhythm of Bengal under the stars!',
         'Traditional Tribal Dance & soulful Baul Music performances',
         'Campfire Nights filled with fun, music, and togetherness',
         'Enjoy authentic rural vibes and unforgettable moments'
        ],
        menuDetails: [
          {
            day: 'Day 1 – Traditional Welcome Meal',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Aloo Curry, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Fish Pakora / Veg Pakora, Tea or Coffee' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Mixed Curry, Vetki Fish Curry, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Chicken Pakora, Tea or Coffee' },
              { mealType: 'Dinner :-', items: 'Jeera Rice, Mutton Curry, Salad' }
            ]
          },
          {
            day: '🍱 Day 2 – Flavors of the Delta',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Chana Masala, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Pakora / Chips, Tea' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Chingri Malai Curry, Rui / Katla Kalia, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Mixed Chowmein, Coffee' },
              { mealType: 'Dinner :-', items: 'Fried Rice, Chicken Kosha, Salad' }
            ]
          },
          {
            day: '🥗 Day 3 – Farewell Feast',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Chana Masala, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Pakora / Chips, Tea' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Chingri Malai Curry, Rui / Katla Kalia, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Mixed Chowmein, Coffee' },
              { mealType: 'Dinner :-', items: 'Fried Rice, Chicken Kosha, Salad' }
            ]
          }
        ],
        thingsToCarry: [
          'Pack specific medicines for any personal health needs.',
          'Ensure you carry a valid photo ID for travel purposes.',
          'Foreign visitors must have their original passports on hand.',
          'Equip yourself with a camera or binoculars for capturing distant wildlife and landscapes.',
          'Travel light with easily portable baggage.',
          'Opt for comfortable footwear suitable for exploration.',
          'Shield yourself from the sun with sunglasses, a hat cap, and sunscreen during your Sundarban adventure.',
          'It\'s advisable to carry cash, as accessing ATMs may be limited. Note that an SBI ATM is available in Gosaba.'
        ]
      }
    },
    {
      id: 2,
      image: '/standard.webp',
      title: 'Sundarban Standard Tour Package',
      description:
        'Experience the beauty of the Sundarbans in a single day with thrilling wildlife sightings, scenic boat rides, and a taste of local cuisine.',
      price: '₹ 4200 / person',
      features: [
        { icon: Eye, label: 'Sightseeing' },
        { icon: Ship, label: 'Transportation' },
        { icon: Hotel, label: 'Hotel' },
        { icon: Utensils, label: 'Meal' },
        { icon: Anchor, label: 'Boat Safari' },
        { icon: Eye, label: 'Adventure' },
      ],
      details: {
        subtitle: 'Sundarban Trip Standard',
        fullDescription: 'Delve into the mystique of the Sundarbans with our bespoke 1 Night, 2 Days sojourn. Plunge deep into the bosom of Mother Nature, relishing exhilarating nautical safaris, and recline in intimate lodgings for an enduring escapade.',
        heroImages: ['/sundarban-hero.jpg'],
        pricePerHead: '4200',
        highlights: [
          'Breakfast To Lunch Food Menu',
          'Jungle Boat Safari',
          'Jungle Permission',
          'Professional tour Guide',
          'Camp Fire'
        ],
        itinerary: [
          {
            day: 'Day 1',
            title: 'Sundarban 1 Day',
            items: [
              {
                time: '',
                description: 'Visit Jharkhali Park, local zoo & nearby sightseeing spots.'
              },
              
            ]
          },
          {
            day: 'Day 2',
            title: 'Sundarban 2 Day',
            items: [
              {
                time: '',
                description: 'Explore Dobaki, Pir Khali, Gazikhali, Bonbibi Bharani, Deul Bharani, Panchamukhani, and return to Jharkhali for night stay (Hotel / Boat)'
              },
              
            ]
          },
          {
            day: 'Day 3',
            title: 'Sundarban 3 Day',
            items: [
              {
                time: '',
                description: 'Cruise through Bidyadhari River, visit Gosaba, Rabindranath’s Beacon Bungalow, Hamilton Bungalow, Pakhir Jungle, Pakhiralay, and return to Jharkhali.(Optional: Boni Camp, Suryamoni Jungle, Parshemari Canal)'
              },
              
            ]
          }
        ],
        includes: [
          'Evening Entertainment & Cultural Delight',
         'Experience the rhythm of Bengal under the stars!',
         'Traditional Tribal Dance & soulful Baul Music performances',
         'Campfire Nights filled with fun, music, and togetherness',
         'Enjoy authentic rural vibes and unforgettable moments'
        ],
        menuDetails: [
          {
            day: 'Day 1 – Traditional Welcome Meal',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Aloo Curry, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Fish Pakora / Veg Pakora, Tea or Coffee' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Mixed Curry, Vetki Fish Curry, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Chicken Pakora, Tea or Coffee' },
              { mealType: 'Dinner :-', items: 'Jeera Rice, Mutton Curry, Salad' }
            ]
          },
          {
            day: '🍱 Day 2 – Flavors of the Delta',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Chana Masala, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Pakora / Chips, Tea' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Chingri Malai Curry, Rui / Katla Kalia, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Mixed Chowmein, Coffee' },
              { mealType: 'Dinner :-', items: 'Fried Rice, Chicken Kosha, Salad' }
            ]
          },
          {
            day: '🥗 Day 3 – Farewell Feast',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Chana Masala, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Pakora / Chips, Tea' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Chingri Malai Curry, Rui / Katla Kalia, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Mixed Chowmein, Coffee' },
              { mealType: 'Dinner :-', items: 'Fried Rice, Chicken Kosha, Salad' }
            ]
          }
        ],
        thingsToCarry: [
          'Pack specific medicines for any personal health needs.',
          'Ensure you carry a valid photo ID for travel purposes.',
          'Foreign visitors must have their original passports on hand.',
          'Equip yourself with a camera or binoculars for capturing distant wildlife and landscapes.',
          'Travel light with easily portable baggage.',
          'Opt for comfortable footwear suitable for exploration.',
          'Shield yourself from the sun with sunglasses, a hat cap, and sunscreen during your Sundarban adventure.',
          'It\'s advisable to carry cash, as accessing ATMs may be limited. Note that an SBI ATM is available in Gosaba.'
        ]
      }
    },
     {
      id: 3,
      image: '/premium.webp',
      title: 'Sundarban Premium Tour Package',
      description:
        'Experience the beauty of the Sundarbans in a single day with thrilling wildlife sightings, scenic boat rides, and a taste of local cuisine.',
      price: '₹ 5000 / person',
      features: [
        { icon: Eye, label: 'Sightseeing' },
        { icon: Ship, label: 'Transportation' },
        { icon: Hotel, label: 'Hotel' },
        { icon: Utensils, label: 'Meal' },
        { icon: Anchor, label: 'Boat Safari' },
        { icon: Eye, label: 'Adventure' },
      ],
      details: {
        subtitle: 'Sundarban Trip Standard',
        fullDescription: 'Delve into the mystique of the Sundarbans with our bespoke 1 Night, 2 Days sojourn. Plunge deep into the bosom of Mother Nature, relishing exhilarating nautical safaris, and recline in intimate lodgings for an enduring escapade.',
        heroImages: ['/sundarban-hero.jpg'],
        pricePerHead: '5000',
        highlights: [
          'Breakfast To Lunch Food Menu',
          'Jungle Boat Safari',
          'Jungle Permission',
          'Professional tour Guide',
          'Camp Fire'
        ],
        itinerary: [
          {
            day: 'Day 1',
            title: 'Sundarban 1 Day',
            items: [
              {
                time: '',
                description: 'Visit Jharkhali Park, local zoo & nearby sightseeing spots.'
              },
              
            ]
          },
          {
            day: 'Day 2',
            title: 'Sundarban 2 Day',
            items: [
              {
                time: '',
                description: 'Explore Dobaki, Pir Khali, Gazikhali, Bonbibi Bharani, Deul Bharani, Panchamukhani, and return to Jharkhali for night stay (Hotel / Boat)'
              },
              
            ]
          },
          {
            day: 'Day 3',
            title: 'Sundarban 3 Day',
            items: [
              {
                time: '',
                description: 'Cruise through Bidyadhari River, visit Gosaba, Rabindranath’s Beacon Bungalow, Hamilton Bungalow, Pakhir Jungle, Pakhiralay, and return to Jharkhali.(Optional: Boni Camp, Suryamoni Jungle, Parshemari Canal)'
              },
              
            ]
          }
        ],
        includes: [
          'Evening Entertainment & Cultural Delight',
         'Experience the rhythm of Bengal under the stars!',
         'Traditional Tribal Dance & soulful Baul Music performances',
         'Campfire Nights filled with fun, music, and togetherness',
         'Enjoy authentic rural vibes and unforgettable moments'
        ],
        menuDetails: [
          {
            day: 'Day 1 – Traditional Welcome Meal',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Aloo Curry, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Fish Pakora / Veg Pakora, Tea or Coffee' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Mixed Curry, Vetki Fish Curry, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Chicken Pakora, Tea or Coffee' },
              { mealType: 'Dinner :-', items: 'Jeera Rice, Mutton Curry, Salad' }
            ]
          },
          {
            day: '🍱 Day 2 – Flavors of the Delta',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Chana Masala, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Pakora / Chips, Tea' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Chingri Malai Curry, Rui / Katla Kalia, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Mixed Chowmein, Coffee' },
              { mealType: 'Dinner :-', items: 'Fried Rice, Chicken Kosha, Salad' }
            ]
          },
          {
            day: '🥗 Day 3 – Farewell Feast',
            meals: [
              { mealType: 'Breakfast :-', items: 'Luchi, Chana Masala, Boiled Egg, Tea' },
              { mealType: 'Snacks :-', items: 'Pakora / Chips, Tea' },
              { mealType: 'Lunch :-', items: 'Rice, Dal, Fried Veg, Chingri Malai Curry, Rui / Katla Kalia, Chutney, Papad' },
              { mealType: 'Evening :-', items: 'Mixed Chowmein, Coffee' },
              { mealType: 'Dinner :-', items: 'Fried Rice, Chicken Kosha, Salad' }
            ]
          }
        ],
        thingsToCarry: [
          'Pack specific medicines for any personal health needs.',
          'Ensure you carry a valid photo ID for travel purposes.',
          'Foreign visitors must have their original passports on hand.',
          'Equip yourself with a camera or binoculars for capturing distant wildlife and landscapes.',
          'Travel light with easily portable baggage.',
          'Opt for comfortable footwear suitable for exploration.',
          'Shield yourself from the sun with sunglasses, a hat cap, and sunscreen during your Sundarban adventure.',
          'It\'s advisable to carry cash, as accessing ATMs may be limited. Note that an SBI ATM is available in Gosaba.'
        ]
      }
    },
  ],
};
