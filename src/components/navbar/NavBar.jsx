import './NavBar.css';

function NavBar(props) {
  return <nav className="navbar">{props.children}</nav>;
}

export default NavBar;
