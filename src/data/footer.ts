export interface FooterLink {
  id: string;
  label: string;
  path: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const footerSections: FooterSection[] = [
  {
    id: 'quick-links',
    title: 'Quick Links',
    links: [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'about', label: 'About Us', path: '/about' },
      { id: 'tour-packages', label: 'Tour Packages', path: '/tour-packages' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { id: 'gallery', label: 'Gallery', path: '/gallery' },
      { id: 'contact', label: 'Contact Us', path: '/contact' },
    ],
  },
];

export const socialMediaLinks: SocialMedia[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/Maalaxmihomestaysundarban?mibextid=ZbWKwL',
    icon: 'Facebook',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'Instagram',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'LinkedIn',
  },
  {
    id: 'digiskyup',
    name: 'DigiskyUp',
    url: 'https://digiskyup.com/',
    icon: 'web',
  }
];

export const footerInfo = {
  companyName: 'MOHAN KUMAR DAS ',
  companyUrl: 'https://digiskyup.com/',
  tagline: 'Your Travel Partner',
  copyright: `© ${new Date().getFullYear()} Created by<a href="https://digiskyup.com/">DigiskyUp</a>. All rights reserved.`,
  address: 'Jharkhali , Sardar More, Sundarban , Jharkhali park road , 743312 , Basanti, India, 743312',
  email: 'info@digiskyup.com',
  phone: '9564546823 / 9064483605 ',
};
