import { INavLink } from './types';

export const navLinks: INavLink[] = [
  {
    label: 'Paths',
    href: '/',
    icon: 'chalkboard',
  },
  {
    label: 'Groups',
    href: '/groups',
    icon: 'user-group',
    isComingSoon: true,
  },
  {
    label: 'Tools',
    href: '/tools',
    icon: 'screwdriver-wrench',
    isComingSoon: true,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: 'profile',
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: 'cogs',
  },
];
