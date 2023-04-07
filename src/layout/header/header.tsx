import * as React from 'react';
import { Link } from 'react-router-dom';
import { WrapperHeader } from '../../ui/ui_wrappers';
import { ReactComponent as AuthIcon } from '../../assets/icons/user.svg'
import { ReactComponent as Microscope } from '../../assets/icons/microscope.svg';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import { ReactComponent as Xray } from '../../assets/icons/x-ray.svg';
import { ReactComponent as Stethoscope } from '../../assets/icons/stethoscope.svg';
import { ReactComponent as Medicine } from '../../assets/icons/medicin.svg';



export const Header: React.FC<any> = ({ user }) => {

  return (
    <WrapperHeader>
      {/* left menu */}
      <div style={{ display: "flex" }}>

        {/* Logo */}
        <div style={{
          padding: '5px 20px',
          fontSize: '25px',
          fontWeight: 700,
          color: 'rgb(255, 46, 61)'
        }}>i<span style={{ color: "red" }}>TT</span><span>yni</span></div>


        <div style={{ display: 'flex' }}>
          <div style={{ padding: "5px", fontSize: "20px", color: "#96999a" }}>
            <Link to={`/`}><Microscope width="25" height="25" fill="#0c5cb3" /></Link>
          </div>
          <div style={{ padding: "5px", fontSize: "20px", color: "#96999a" }}>
            <Link to={`https://cabinet.ittyni.com/rx`}><Xray width="25" height="25" /></Link>
          </div>
          <div style={{ padding: "5px", fontSize: "20px", color: "#96999a" }}>
            <Link to={`https://clinic.ittyni.com`}><Medicine width="25" height="25" /></Link>
          </div>
          <div style={{ padding: "5px", fontSize: "20px", color: "#96999a" }}>
            <Link to={`https://cabinet.ittyni.com`}><Stethoscope width="25" height="25" /></Link>
          </div>
        </div>

      </div>


      {/* right menu */}
      {user && <div style={{padding: '5px 15px'}}><img src={user.picture} height='25px' width='25px'/></div>}
      {!user && <div><AuthIcon width='25px' height='25px' /></div>}
    </WrapperHeader>
  );
};

export default Header;