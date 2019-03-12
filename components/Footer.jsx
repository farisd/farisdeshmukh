import { Config, Breakpoints } from './config';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>{`Faris Deshmukh ${year}`}</p>
      <style jsx>
        {
        `
        footer {
          padding: ${Config.paddingLarge};
          border-top-style: solid;
        }

        p {
          margin-left: ${Config.sidebarWidth};
        }

        @media screen and (max-width: ${Breakpoints.mobile}) {
          p {
            margin-left: 0;
          }
        }
        `
        }
      </style>
    </footer>
  );
};


export default Footer;
