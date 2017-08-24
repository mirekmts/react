import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink exact activeClassName='active' to='/'>
          Home
      </NavLink>
      {" | "}
      <NavLink exact activeClassName='active' to='/courses'>
          Courses
      </NavLink>
      {" | "}
      <NavLink exact activeClassName='active' to='/about'>
          About
      </NavLink>
    </nav>
  );
};

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Header;
