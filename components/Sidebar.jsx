import PropTypes from 'prop-types';
import SidebarElement from './SidebarElement';
import { Breakpoints, Config } from './config';

const Sidebar = (props) => {
  const { links, width } = props;
  const listSidebarElements = links.map(link => (
    <li key={link.key}>
      <SidebarElement page={link.page} url={link.url} />
    </li>
  ));
  return (
    <nav className="sidebar">
      <ul>
        {listSidebarElements}
      </ul>
      <style jsx>
        {`
          .sidebar {
            height: 100%;
            background-color: ${Config.primaryColour};
            width: ${width};
            position: absolute;
          }

          ul {
            list-style-type: none;
          }

          @media screen and (max-width: ${Breakpoints.mobile}) {
            .sidebar {
              width: 100%;
              height: auto;
              position: relative;
              display: flex;
              padding: ${Config.paddingSmall};
            }
            ul {
              padding: 0;
              margin: 0;
              display: flex;
              justify-content: center;
            }
          }
        `}
      </style>
    </nav>
  );
};

Sidebar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    page: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
  })).isRequired,
  width: PropTypes.string,
};

Sidebar.defaultProps = {
  width: Config.sidebarWidth,
};

export default Sidebar;
