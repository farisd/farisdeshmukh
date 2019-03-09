import PropTypes from 'prop-types';
import SidebarElement from './SidebarElement';

const Sidebar = (props) => {
  const { links } = props;
  const listSidebarElements = links.map(link => (
    <li>
      <SidebarElement page={link} url={`/${link}`} />
    </li>
  ));
  return (
    <div>
      <ul>
        {listSidebarElements}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
