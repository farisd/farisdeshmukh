export const Config = {
  sidebarWidth: 160,
  headerHeight: 80,
  h1FontFamily: 'Lato',
  h1FontWeight: 700,
  defaultFontFamily: 'Lato',
  primaryColour: '#A7DBD8',
  secondaryColour: '#E0E4CC',
};

export const Breakpoints = {
  mobile: 700,
};

export const sidebarLinks = [
  {
    page: 'about',
    url: '/about',
    key: 1,
  },
  {
    page: 'cv',
    url: '/cv',
    key: 2,
  },
  {
    page: 'linkedin',
    url: 'https://www.linkedin.com/in/faris-deshmukh/',
    key: 3,
  },
  {
    page: 'twitter',
    url: 'https://www.twitter.com/farisd',
    key: 4,
  },
  {
    page: 'github',
    url: 'https://www.github.com/farisd',
    key: 5,
  },
];

export const GlobalStyles = () => (
  <style jsx global>
    {`
        @import url('https://fonts.googleapis.com/css?family=${Config.defaultFontFamily}:400,700');

        body { 
          background-color: ${Config.primaryColour};
          font-family: 11px ${Config.defaultFontFamily};
        }

        a:visited {
          color: black;
        }
      `}
  </style>
);
