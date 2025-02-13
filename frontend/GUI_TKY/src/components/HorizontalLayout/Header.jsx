import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions";
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown

import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import logo from "../../assets/images/logo.svg";
import logoNew from "../../assets/images/turnkey logo.png";
import userImage from "../../assets/images/userprofile.png";

//i18n
import { withTranslation } from "react-i18next";

const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                 <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
              
                <span className="logo-lg">
                  <img src={logoNew} alt="" height="40" />
                </span>
              </Link>
             
            </div>
            <div className="d-flex align-items-center ms-5 ">
                <div className="me-2 ">
                    <span className="logo-lg">
                       <img src={userImage} alt="" />
                    </span>
                  </div>
              <div>Bhaskar Enterprises </div>
            </div>
          </div>
            <div className="d-flex align-items-center" >
                <div className="ms-2  me-5">
                  <div>Welcome  <span className="fw-bold">Jayant M Shah</span></div>
                </div>
            <NotificationDropdown/>
            <ProfileMenu />
            <div className="dropdown d-inline-block">
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header));
