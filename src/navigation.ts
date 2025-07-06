import { getPermalink } from './utils/permalinks';
// import { getPermalink, getAsset } from './utils/permalinks';


export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Events',
      href: '/events',
    },
    {
      text: 'Donate',
      href: '/donate',
    },
    {
      text: 'Who We Are',
      href: '/who-we-are',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Menu',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Events', href: '/events' },
        { text: 'Donate', href: '/donate' },
        { text: 'Who We Are', href: '/who-we-are' },
        { text: 'Recruiting New Singers', href: '/#recruiting' },
        { text: 'Contact', href: '/contact' },
        { text: 'Gallery', href: '/who-we-are#gallery' },
        { text: 'History', href: '/who-we-are#history' },
      ],
    },


    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/JoyousSingers/' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Site by <a class="text-blue-600 underline dark:text-muted" href="https://www.stevebraaksma.com/"> Steve Braaksma</a>
  `,
};