export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  order: number;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    order: 1,
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/about',
    order: 2,
  },
  {
    id: 'tour-packages',
    label: 'Tour Packages',
    path: '/tour-packages',
    order: 3,
  },
  {
    id: 'booking',
    label: 'Booking',
    path: '/booking',
    order: 4,
  },
  {
    id: 'gallery',
    label: 'Gallery',
    path: '/gallery',
    order: 5,
  },
  {
    id: 'contact',
    label: 'Contact Us',
    path: '/contact',
    order: 6,
  },
];
