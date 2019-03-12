import Head from 'next/head';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from './Header';
import { Config, Breakpoints, sidebarLinks } from './config';

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
      </div>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=${Config.defaultFontFamily}:400,700');

          body { 
            background-color: #A7DBD8;
            font-family: 11px ${Config.defaultFontFamily};
          }
        `}
      </style>
      <style jsx>
        {`
          * {
            font-family: ${Config.defaultFontFamily}, sans-serif;
          }

          html {
            background-color: #A7DBD8;
          }
          main {
            position: relative;
            margin-left: ${Config.sidebarWidth}px;
            padding: 16px;
            background-color: #E0E4CC;
            height: fill-available;
          }
          
          @media screen and (max-width: ${Breakpoints.mobile}px) {
            .title {
              margin-left: 0;
            }
            main {
              margin-left: 0;
            }
          }

          .app {
            max-width: 960px;
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
