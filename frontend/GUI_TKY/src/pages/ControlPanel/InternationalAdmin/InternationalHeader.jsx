import React from 'react';
import logo from '../../../assets/images/turnkey logo.png';
import navprofile from '../../../assets/images/navprofile.png';
import ProfileMenu from '@/components/CommonForBoth/TopbarDropdown/ProfileMenu';
import { Link } from 'react-router-dom';
const InternationalHeader = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: '#41619A', height: '70px' }}
      >
        <div className="container-fluid ms-3">
          {/* Logo image */}
          <Link to="/licenses" className="logo logo-dark">
            <img src={logo} alt="Company Logo" style={{ height: '30px' }} />
          </Link>

          {/* User Avatar */}
          {/* <div className="d-flex me-5">
                        <img
                            src={navprofile}
                            alt="User Avatar"
                            className="rounded-circle"
                        />
                    </div> */}
          <ProfileMenu />
        </div>
      </nav>
    </>
  );
};
export default InternationalHeader;
