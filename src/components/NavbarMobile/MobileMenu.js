import React from 'react';
import { Link } from 'react-router-dom';
import AppPaths from '../../AppPaths';

const MobileMenu = () => {
  return (
    <div className="mobileMenu__wrapper">
      <ul className="mobileMenuLinkWrapper">
        <li className="mobileMenuLinkItem">
          <Link to="#" className="mobileMenuLink">Projects</Link>
        </li>
        <li className="mobileMenuLinkItem">
          <Link to="#" className="mobileMenuLink">Capabilities</Link>
        </li>
        <li className="mobileMenuLinkItem">
          <Link to="#" className="mobileMenuLink">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
