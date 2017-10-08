import React from 'react';

const NavBar = () => (
  <div>
    <div className="dt dt--fixed fixed">
      <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#About">About</a>
      <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#Tour">Tour</a>
      <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#Contact">Contact</a>
    </div>
    <div className="tc bg-blue pt6 pb4">
      <span className="f1">Nazareth Tour Guide</span>
    </div>
  </div>
);

export default NavBar;
