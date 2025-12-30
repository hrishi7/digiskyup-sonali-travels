import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Sonali Tour & Travels',
  defaultTitle: 'Sonali Tour & Travels - Your Travel Partner',
  description: 'Explore amazing tour packages and destinations with Sonali Tour & Travels',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sonalitourandtravels.com/',
    siteName: 'Sonali Tour & Travels',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sonali Tour & Travels',
      },
    ],
  },
  twitter: {
    handle: '@Sonali Tour & Travels',
    site: '@Sonali Tour & Travels',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'keywords',
      content: 'travel, tours, packages, vacation, holiday, destinations',
    },
  ],
};

export const pageSEO = {
  home: {
    title: 'Home',
    description: 'Welcome to Sonali Tour & Travels - Your trusted travel partner for unforgettable journeys',
  },
  about: {
    title: 'About Us',
    description: 'Learn more about Sonali Tour & Travels and our commitment to providing exceptional travel experiences',
  },
  tourPackages: {
    title: 'Tour Packages',
    description: 'Browse our curated selection of tour packages for your next adventure',
  },
  gallery: {
    title: 'Gallery',
    description: 'Explore stunning photos from our tours and destinations',
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with us for inquiries, bookings, and travel assistance',
  },
};
