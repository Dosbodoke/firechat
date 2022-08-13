import PropTypes from 'prop-types';

import './NavBar.css';

const NavBar = (props) => {
  return <nav id="navbar">{props.children}</nav>;
};

NavBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default NavBar;
