import Link from 'next/link';
import PropTypes from 'prop-types';
import { Config, Breakpoints } from './config';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <div className="title">
        <h1>
          <Link href={{ pathname: '/' }}>
            <a href={{ pathname: '/' }}>{title}</a>
          </Link>
        </h1>
      </div>
      <style jsx>
        {
      `     
      h1, a {
        color: black;
        text-decoration: none;
      }

      h1 {
        font-family: ${Config.h1FontFamily};
        font-weight: ${Config.h1FontWeight};
      }

      header {
        background-color: ${Config.primaryColour};
        position: relative;
        padding: ${Config.paddingLarge};
        height: ${Config.headerHeight};
      }
      .title {
        margin-left: ${Config.sidebarWidth};
      }
      @media screen and (max-width: ${Breakpoints.mobile}) {
        .title {
          margin-left: 0;
        }
      }
      `
      }
      </style>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
