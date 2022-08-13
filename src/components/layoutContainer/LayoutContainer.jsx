import PropTypes from 'prop-types';

import './LayoutContainer.css';

const LayoutContainer = (props) => {
  return <div id="layout-container">{props.children}</div>;
};

LayoutContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default LayoutContainer;
