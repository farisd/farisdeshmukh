import Link from 'next/link';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const sidebarLinks = ['about', 'cv'];
const sidebarWidth = 160;
const headerHeight = 80;

const Layout = (props) => {
  console.log('test');
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
          <h1>
            <Link href={{ pathname: '/' }}>
              <a href={{ pathname: '/' }}>Faris Deshmukh</a>
            </Link>
          </h1>
        </header>
        <Sidebar links={sidebarLinks} width={sidebarWidth} />
        <main className="content">
          { children }
        </main>
      </div>
      <style jsx>
        {`
      @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Roboto:400,700');

      * {
        font-family: 'Lato', sans-serif;
      }

      h1, a {
        color: black;
      }
      h1 {
        margin-left: ${sidebarWidth}px;
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
    `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
