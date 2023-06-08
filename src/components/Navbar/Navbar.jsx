import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import { getTopNav } from './navbars';
import './Navbar.css';

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState('nav__menu');
  const [toggleIcon, setToggleIcon] = useState('toggler__icon');
  const [selectedItem, setSelectedItem] = useState(null); 

  const location = useLocation(); 
  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  useEffect(() => { 
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.href === currentPath);
    if (currentItem) {
      setSelectedItem(currentItem.id);
    }
  }, [location, navItems]); 

  const onToggle = () => {
    setCollapse(prevCollapse => prevCollapse === 'nav__menu' ? 'nav__menu nav__collapse' : 'nav__menu');
    setToggleIcon(prevToggleIcon => prevToggleIcon === 'toggler__icon' ? 'toggler__icon toggle' : 'toggler__icon');
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <div className="nav__left">
            <div className="nav__brand-box">
              <span className="nav__brand">SPORGANIZE</span>
            </div>
            <div className={toggleIcon} onClick={onToggle}>
              <div className="line__1"></div>
              <div className="line__2"></div>
              <div className="line__3"></div>
            </div>
          </div>
          <ul className={collapse}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item"> 
                <NavLink to={item.href} className="nav__link" style={{ color: selectedItem === item.id ? 'black' : '' }} activeClassName="nav__link--active">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;