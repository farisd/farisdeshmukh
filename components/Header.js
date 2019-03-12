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
        background-color: #A7DBD8;
        position: relative;
        padding: 16px;
        height: ${Config.headerHeight}px;
      }
      .title {
        margin-left: ${Config.sidebarWidth}px;
      }
      @media screen and (max-width: ${Breakpoints.mobile}px) {
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
