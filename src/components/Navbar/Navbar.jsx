import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import { getTopNavOfUser, getTopNavOfOwner } from './navbars';
import './Navbar.css';
import logo2 from '../../pictures/logo2.svg'
//import logo2 from "../../pictures/logo.svg"
const Navbar = (props) => {
  const{setUserId} = props;
  const [NavRole, setNavRole] = useState(props.NavRole);
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 

  const location = useLocation(); 
  useEffect(() => {
    if(NavRole === "OWNER"){
      setNavItems(getTopNavOfOwner());
    } else if(NavRole === "USER"){
      setNavItems(getTopNavOfUser());
    }
  }, []);

  useEffect(() => { 
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.href === currentPath);
    if (currentItem) {
      setSelectedItem(currentItem.id);
    }
  }, [location, navItems]); 

  const onToggle = () => {
    setCollapse(prevCollapse => !prevCollapse);
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <div className="nav__left">
            <div className="nav__brand-box">
            <img src={logo2} alt="logo" className="nav__brand-logo" /> 
            </div>
            <div className={`toggler__icon ${collapse ? 'toggle' : ''}`} onClick={onToggle}>
              <div className="line__1"></div>
              <div className="line__2"></div>
              <div className="line__3"></div>
            </div>
          </div>
          <ul className={`nav__menu ${collapse ? 'nav__collapse' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item"> 
                <NavLink to={item.href} className="nav__link" style={{ color: selectedItem === item.id ? 'black' : '' }} activeClassName="nav__link--active">
                  {item.label}
                </NavLink>  
              </li>
            ))}
            <li key={0} className="nav__item" style={{color:"red"}}> 
                <NavLink onClick={()=>setUserId(0) }to="/" className="nav__link" style={{ color: selectedItem === 4 ? 'red' : '' }} activeClassName="nav__link--active">
                  Logout
                </NavLink>  
              </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;