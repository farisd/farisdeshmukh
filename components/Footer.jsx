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
          padding: 16px;
          border-top-style: solid;
        }

        p {
          margin-left: ${Config.sidebarWidth}px;
        }

        @media screen and (max-width: ${Breakpoints.mobile}px) {
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
