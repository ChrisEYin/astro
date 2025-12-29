const siteMetadata = {
  title: "Chris Yin's Personal Site",
  author: 'Chris Yin',
  headerTitle: 'Chris Yin',
  description: "Chris Yin's Personal Site",
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://chrisyin.com',
  siteRepo: 'https://github.com/ChrisEYin/astro',
  // siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/avatar.png',
  email: 'ceyin.818@gmail.com',
  twitter: 'https://twitter.com/chriseyin',
  linkedin: 'https://www.linkedin.com/in/chriseyin',
  github: 'https://github.com/ChrisEYin',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-1HPV3VVEGS', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
};

module.exports = siteMetadata;
