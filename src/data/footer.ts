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
    url: 'https://www.facebook.com/share/17cxppswUh/',
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
  }
];

export const footerInfo = {
  companyName: 'Bablu haldar ',
  companyUrl: 'https://sonalitourandtravels.com/',
  tagline: 'Your Travel Partner',
  copyright: `© ${new Date().getFullYear()} Created by<a href="https://sonalitourandtravels.com/">Sonali Tour & Travels</a>. All rights reserved.`,
  address: 'Canning Railway New Market , Canning Town, India, 743329',
  email: 'babluhalder8520@gmail.com',
  phone: '9614731529 / 9609691144',
};
