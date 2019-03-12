import Link from 'next/link';
import PropTypes from 'prop-types';
import { Config } from './config';

const SidebarElement = (props) => {
  const { page, url } = props;
  return (
    <div>
      <Link href={url}>
        <a href={url}>{page}</a>
      </Link>
      <style jsx>
        {`
          div {
            padding: ${Config.paddingSmall};
          }
        `}
      </style>
    </div>
  );
};

SidebarElement.propTypes = {
  page: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default SidebarElement;
