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
            background-color: #A7DBD8;
            width: ${width}px;
            position: absolute;
          }

          ul {
            list-style-type: none;
          }

          @media screen and (max-width: ${Breakpoints.mobile}px) {
            .sidebar {
              width: 100%;
              height: auto;
              position: relative;
              display: flex;
              padding: 8px;
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
  width: PropTypes.number,
};

Sidebar.defaultProps = {
  width: Config.sidebarWidth,
};

export default Sidebar;
