import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="control">
        <NavLink to="/page1">Page 1</NavLink>
        <NavLink to="/page2">Page 2</NavLink>
        <NavLink to="/page3">Page 3</NavLink>
        <NavLink to="/page4">Page 4</NavLink>
        <NavLink to="/page5">Page 5</NavLink>
        <NavLink to="/page6">Page 6</NavLink>
      </div>
    );
  }
}

export default Nav;