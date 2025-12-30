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
      image: '/reviews.jpg',
      alt: 'Sundarban Tour Group Photo',
      rotation: -24,
    },
    {
      id: '2',
      image: '/accomoddation.jpg',
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
      'is a leading tour operator based in Canning, specializing in providing the best',
      '. With years of experience and expertise in the field, we have established ourselves as a reliable and reputable name in the tourism industry. Our team comprises passionate travelers, nature enthusiasts, and expert professionals who are dedicated to creating unforgettable experiences for our clients.',
      'We understand that visiting Sundarbans is not just about ticking off another destination on your travel list, but it\'s an opportunity to immerse yourself in the beauty and diversity of this unique ecosystem. This is why we strive to provide our clients with personalized and tailor-made tour packages that cater to their individual interests and preferences.',
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
