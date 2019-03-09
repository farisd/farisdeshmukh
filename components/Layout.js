import Link from 'next/link';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const sidebarLinks = [
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
const sidebarWidth = 160;
const headerHeight = 80;

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Head>
        <title>Faris Deshmukh</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="app">
        <header>
          <div className="title">
            <h1>
              <Link href={{ pathname: '/' }}>
                <a href={{ pathname: '/' }}>Faris Deshmukh</a>
              </Link>
            </h1>
          </div>
        </header>
        <Sidebar links={sidebarLinks} width={sidebarWidth} />
        <main className="content">
          { children }
        </main>
      </div>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Roboto:400,700');

          body { 
            background-color: #A7DBD8;
            font-family: 11px 'Lato';
          }
        `}
      </style>
      <style jsx>
        {`
          * {
            font-family: 'Lato', sans-serif;
          }

          html {
            background-color: #A7DBD8;
          }

          h1, a {
            color: black;
            text-decoration: none;
          }
          h1 {
            font-family: 'Roboto';
            font-weight: 700;
          }
          header {
            background-color: #A7DBD8;
            position: relative;
            padding: 16px;
            height: ${headerHeight}px;
          }
          main {
            position: relative;
            margin-left: ${sidebarWidth}px;
            padding: 16px;
            background-color: #E0E4CC;
            height: fill-available;
          }

          .title {
            margin-left: ${sidebarWidth}px;
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
