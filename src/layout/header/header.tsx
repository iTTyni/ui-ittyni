import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC<any> = ({Logo, LeftMenu, MiddleMenu}) => {
 
  return (
    <>
      {/* left menu */}
      <div style={{ display: "flex" }}>
        
        <HeaderLogo />

       <HeaderLinks />

      </div>
 

      {/* right menu */}
      <div>auth button</div>
    </>
  );
};

export default Header;


// header logo 
const HeaderLogo = () => {

  return (
    <div style={{ display: "flex", background: "red" }}>
      {/* Logo */}
      <div>i<span style={{color: "red"}}>TT</span>yni</div>
    </div>
  )
}
// header links
const HeaderLinks: React.FC<any> = () => {

  return (
    <div style={{ display: "flex" }}>
      links
    </div>
  )
}
// header links