import PropTypes from 'prop-types';
import SidebarElement from './SidebarElement';

const Sidebar = (props) => {
  const { links, width } = props;
  const listSidebarElements = links.map(link => (
    <li key={link.key}>
      <SidebarElement page={link.page} url={link.url} />
    </li>
  ));
  return (
    <div className="sidebar">
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
        `}
      </style>
    </div>
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
  width: 160,
};

export default Sidebar;
