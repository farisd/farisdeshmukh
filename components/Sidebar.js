import PropTypes from 'prop-types';
import SidebarElement from './SidebarElement';

const Sidebar = (props) => {
  const { links, width } = props;
  const listSidebarElements = links.map(link => (
    <li>
      <SidebarElement page={link} url={`/${link}`} />
    </li>
  ));
  return (
    <div className="sidebar">
      <ul>
        {listSidebarElements}
        <SidebarElement page="linkedIn" url="https://www.linkedin.com/in/faris-deshmukh/" />
        <SidebarElement page="twitter" url="https://www.twitter.com/farisd" />
      </ul>
      <style jsx>
        {`
          .sidebar {
            height: 100%;
            background-color: #A7DBD8;
            width: ${width}px;
            position: fixed;
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
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.number,
};

Sidebar.defaultProps = {
  width: 160,
};

export default Sidebar;
