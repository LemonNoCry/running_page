interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Lemon Running Page',
  siteUrl: 'https://github.com/LemonNoCry',
  logo: 'https://i.imgur.com/w7hsPVb.jpeg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Github',
      url: 'https://github.com/LemonNoCry',
    },
    {
      name: 'About',
      url: 'https://lemonnocry.github.io/running_page/',
    },
  ],
};

export default data;
