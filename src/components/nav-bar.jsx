import React from 'react';

const NavBar = () => (
  <div className="w-100">
    <div className="fixed">
      <div className="w-40 bg-black-10 pv4 fl">
        <span className="f2 mh5 yellow">Eshi Zoaby</span>
      </div>
      <div className="dt dt--fixed w-60 fr">
        <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#About">About</a>
        <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#Tour">Tour</a>
        <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#Contact">Contact</a>
      </div>
    </div>
    <div className="tc bg-blue pt6 pb4">
      <span className="f1 yellow">Nazareth Tour Guide</span>
    </div>
  </div>
);

export default NavBar;
