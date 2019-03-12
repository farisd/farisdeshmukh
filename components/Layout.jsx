import Head from 'next/head';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import {
  Config, Breakpoints, GlobalStyles, sidebarLinks,
} from './config';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Head>
        <title>Faris Deshmukh</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Faris Deshmukh's website" />
      </Head>
      <div className="app">
        <Header title="Faris Deshmukh" />
        <Sidebar links={sidebarLinks} width={Config.sidebarWidth} />
        <main className="content">
          { children }
        </main>
        <Footer />
      </div>
      <GlobalStyles />
      <style jsx>
        {`
          * {
            font-family: ${Config.defaultFontFamily}, sans-serif;
          }

          html {
            background-color: ${Config.secondaryColour};
          }
          main {
            position: relative;
            margin-left: ${Config.sidebarWidth};
            padding: ${Config.paddingLarge};
            background-color: ${Config.secondaryColour};
            height: auto;
            min-height: 500px;
          }
          
          @media screen and (max-width: ${Breakpoints.mobile}) {
            .title {
              margin-left: 0;
            }
            main {
              margin-left: 0;
            }
          }

          .app {
            max-width: 900px;
            margin: auto;
          }
      `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
