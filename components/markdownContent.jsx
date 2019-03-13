/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import marked from 'marked';

const MarkdownContent = (props) => {
  const { markup } = props;
  return <div dangerouslySetInnerHTML={{ __html: marked(markup) }} />;
};

MarkdownContent.propTypes = {
  markup: PropTypes.string,
};

MarkdownContent.defaultProps = {
  markup: '',
};

export default MarkdownContent;
