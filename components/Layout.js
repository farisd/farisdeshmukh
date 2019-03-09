import Link from 'next/link';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const sidebarLinks = ['about', 'cv'];

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
        <Sidebar links={sidebarLinks} />
        { children }
        <footer>
          Footer
        </footer>
      </div>
      <style global jsx>
        {`
              :root {
                  --green:  #65C5D9; 
                  --white: #F4F5F7;
                  --light-gray: #EAEEEF;
              }
              ...
              body{...}
          `}

      </style>
      <style jsx>
        {`
              header{ ...}
              header h1 a{ ...}
              h2{....}
              footer { ...}

          `}

      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
