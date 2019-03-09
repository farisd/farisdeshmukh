import Link from 'next/link';
import PropTypes from 'prop-types';

const SidebarElement = (props) => {
  const { page, url } = props;
  return (
    <div>
      <Link href={url}>
        <a href={url}>{page}</a>
      </Link>
    </div>
  );
};

SidebarElement.propTypes = {
  page: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default SidebarElement;
