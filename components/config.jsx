export const Config = {
  sidebarWidth: '160px',
  headerHeight: '80px',
  h1FontFamily: 'Lato',
  h1FontWeight: 700,
  defaultFontFamily: 'Lato',
  defaultFontWeight: 400,
  primaryColour: '#A7DBD8',
  secondaryColour: '#E0E4CC',
  paddingLarge: '16px',
  paddingSmall: '8px',
};

export const Breakpoints = {
  mobile: '700px',
};

export const sidebarLinks = [
  {
    page: 'cv',
    url: '/cv',
    key: 1,
  },
  {
    page: 'linkedin',
    url: 'https://www.linkedin.com/in/faris-deshmukh/',
    key: 2,
  },
  {
    page: 'twitter',
    url: 'https://www.twitter.com/farisd',
    key: 3,
  },
  {
    page: 'github',
    url: 'https://www.github.com/farisd',
    key: 4,
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

        a {
          color: black;
        }

        a:visited {
          color: black;
        }
      `}
  </style>
);
