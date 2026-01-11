export interface ImagePostcard {
  id: string;
  image: string;
  alt: string;
  rotation: number;
}

export interface AboutPageContent {
  hero: {
    title: string;
    breadcrumb: {
      home: string;
      current: string;
    };
  };
  postcards: ImagePostcard[];
  content: {
    sectionLabel: string;
    title: string;
    titleHighlight: string;
    paragraphs: string[];
    highlightText: string;
    highlightBold: string;
  };
  footer: {
    googleReviews: {
      rating: string;
      label: string;
    };
    support: {
      text: string;
    };
  };
}

export const aboutPageContent: AboutPageContent = {
  hero: {
    title: 'About Us',
    breadcrumb: {
      home: 'Home',
      current: 'About Us',
    },
  },
  postcards: [
    {
      id: '1',
      image: '/gall-19.jpeg',
      alt: 'Sundarban Tour Group Photo',
      rotation: -24,
    },
    {
      id: '2',
      image: '/gall-3.jpeg',
      alt: 'Sundarban Accommodation',
      rotation: 24,
    },
    // {
    //   id: '3',
    //   image: '/food.jpg',
    //   alt: 'Sundarban Local Cuisine',
    //   rotation: -30,
    // },
  ],
  content: {
    sectionLabel: 'ABOUT US',
    title: 'Sonali Tour & Travels',
    titleHighlight: 'Sonali Tour & Travels',
    paragraphs: [
      'is your premier gateway to the wild mangroves, rooted in Canning and dedicated to curating the finest',
      '. We are more than just a travel agency; we are storytellers of the jungle. Our team of local experts and passionate naturalists ensures that every journey into the mystic heart of the mangroves is safe, comfortable, and truly mesmerizing. We pride ourselves on our deep local knowledge and commitment to sustainable tourism.',
      'Exploring the Sundarbans is a journey into a world where land and water dance in harmony. Beyond mere sightseeing, we offer an immersive experience that connects you with the raw beauty of this UNESCO World Heritage Site. From thrilling boat safaris to serene nature walks, our personalized packages are designed to create memories that last a lifetime.',
    ],
    highlightText: 'Sonali Tour & Travels',
    highlightBold: 'Sundarban tour packages',
  },
  footer: {
    googleReviews: {
      rating: '5.0',
      label: 'Reviews',
    },
    support: {
      text: '24 x 7 Support // Call Now',
    },
  },
};
