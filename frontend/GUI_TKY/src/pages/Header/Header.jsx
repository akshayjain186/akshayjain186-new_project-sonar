import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';

// Redux Store
// import { showRightSidebarAction, toggleLeftmenu } from "../../../../store/actions";

// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

// Import menuDropdown

import trunkeylogoblue from '../../assets/images/turnkey logo blue.png';
import roof from '../../assets/images/roof.png';

import facade from '../../assets/images/facade.png';
import demolition from '../../assets/images/demolition.png';
import vector from '../../assets/images/Vector (1).png';
import ground from '../../assets/images/ground.png';
import glass from '../../assets/images/glass.png';

// i18n
import { withTranslation } from 'react-i18next';

const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <header id="page-topbar" style={{ left: '0' }}>
        <div className="navbar-header">
          <div className="d-flex ">
            {}
            <div className="navbar-brand-box d-md-block  ">
              <Link to="/" className="logo">
                <span className="logo-lg-sm ">
                  <img src={trunkeylogoblue} alt="" />
                </span>
              </Link>
            </div>

            {}
            <Dropdown
              className="dropdown-mega  d-md-block "
              isOpen={menu}
              style={{ marginLeft: 'auto' }}
            >
              <DropdownToggle className="btn header-item " caret tag="button">
                {props.t('Find professional')}
              </DropdownToggle>
            </Dropdown>
            {}
            <Dropdown
              className="dropdown-mega  d-md-block"
              isOpen={menu}
              toggle={() => setMenu(!menu)}
            >
              <DropdownToggle
                className="btn header-item ms-5 particuler-color"
                caret
                tag="button"
              >
                {props.t('Store')} <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu particuler-color">
                <Row className="dropdown-row">
                  <Col sm={7}>
                    <Row>
                      <Col md={4} className="column-4">
                        <h5 className="font-size-14 mt-0">
                          <i className="fas fa-hammer me-2 all-icon"></i>
                          {props.t('Carpeter and building tradesmen')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Building materials')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Nails and screws')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Lumber')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Fittings and suspensions')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Glue & putty')}
                            </Link>
                          </li>
                        </ul>
                        <h5 className="font-size-14 mt-0">
                          <img src={glass} className=" foundationimage me-2" />
                          {props.t('Glass master and glazier')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Doors')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Windows')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Accessories for doors')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Accessories for windows')}
                            </Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4} className="column-4">
                        <h5 className="font-size-14 mt-0">
                          <i className="fas fa-broom me-2 all-icon"></i>
                          {props.t('Cleaner')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Cleaning machines')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Work clothes')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Ladders')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Detergents')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Mops and brooms')}
                            </Link>
                          </li>
                        </ul>
                        <h5 className="font-size-14 mt-0">
                          <i className="fa fa-faucet me-2 all-icon"></i>
                          {props.t('Plumber')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Drains')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Shower')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Washing machines')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Taps & sinks')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Filters')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Toilets')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Pipes & hoses')}
                            </Link>
                          </li>
                        </ul>
                      </Col>
                      <Col md={4} style={{ marginLeft: '-30px' }}>
                        <h5 className="font-size-14 mt-0">
                          <img src={demolition} className="me-2 megaMenuIcon" />
                          {props.t('Demolition, tiling and concrete sawing')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Tiles')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Windows')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Floor')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Paint and wallpaper')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Interior')}
                            </Link>
                          </li>
                        </ul>

                        <h5 className="font-size-14 mt-0">
                          <img src={vector} className="me-2 foundationimage" />
                          {props.t('Project manager')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Decorative items')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Windows')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Floor')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Paint and wallpaper')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Interior')}
                            </Link>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>

                  <Col sm={5}>
                    <Row>
                      <Col md={4} className="column-md4">
                        <h5 className="font-size-14 mt-0">
                          <i className="fa fa-bolt me-2 all-icon"></i>
                          {props.t('Electrician')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Lighting')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Heat')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Electrical equipment')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Cables & wires')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Ventilation')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Smart home')}
                            </Link>
                          </li>
                        </ul>
                        <h5 className="font-size-14 mt-0">
                          <img src={roof} alt='' className="me-2 megaMenuIcon" />
                          {props.t('Roofer and tinsmith')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Lighting')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Heat')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Electrical equipment')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Cables & wires')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Ventilation')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Smart home')}
                            </Link>
                          </li>
                        </ul>
                      </Col>
                      <Col md={4} className="">
                        <h5 className="font-size-14 mt-0">
                          <img src={facade} className="me-2 foundationimage" />
                          {props.t('Foundation and landscaping worker')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Garden machines')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Watering')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Stones and walls')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Garage')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Fences')}
                            </Link>
                          </li>
                        </ul>

                        <h5 className="font-size-14 mt-0">
                          <i className="bx bx-paint-roll me-2 all-icon"></i>
                          {props.t('Tiler, bricklayer and plastering')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Paints')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Painting equipment')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Wallpaper')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Paint and wallpaper')}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-black">
                              {props.t('Interior')}
                            </Link>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="bottom-div-sm12">
                  <Col sm={12}>
                    <div className="d-flex  justify-content-between align-items-center">
                      <h5 className="font-size-14 ">
                        <i className="fas fa-bath me-2"></i>
                        {props.t('Bathroom')}
                      </h5>
                      <h5 className="font-size-14">
                        <i className="bx bx-coffee me-2"></i>
                        {props.t('Kitchen')}
                      </h5>

                      <h5 className="font-size-14">
                        <i className="fas fa-couch me-2"></i>
                        {props.t('Living Room')}
                      </h5>
                      <h5 className="font-size-14">
                        <i className="fas fa-toilet me-2"></i>
                        {props.t('Toilet')}
                      </h5>
                      <h5 className="font-size-14">
                        <i className="fas fa-bed me-2"></i>
                        {props.t('Bedroom')}
                      </h5>
                      <h5 className="font-size-14">
                        <i className="fas fa-tshirt me-2"></i>
                        {props.t('Washing Room')}
                      </h5>
                      <h5 className="font-size-14">
                        <img src={glass} className="me-2 foundationimage" />
                        {props.t('Children Room')}
                      </h5>
                      <h5 className="font-size-14">
                        <i className="bx bx-trash-alt me-2"></i>
                        {props.t('Storage Room')}
                      </h5>
                      <h5 className="font-size-14">
                        <i className="bx bx-home me-2"></i>
                        {props.t('Hallway')}
                      </h5>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="d-flex justify-content-between">
                      <h5 className="font-size-14">
                        <img
                          src={roof}
                          className="me-2 megaMenuIcon"
                          style={{ marginLeft: '0' }}
                        />
                        {props.t('Roofing')}
                      </h5>
                      <h5 className="font-size-14 ms-4">
                        <img src={facade} className="me-2 foundationimage" />
                        {props.t('Facade')}
                      </h5>
                      <h5 className="font-size-14 ms-4">
                        <img src={ground} className="me-2 foundationimage" />
                        {props.t('Ground Work')}
                      </h5>
                    </div>
                  </Col>
                </div>
              </DropdownMenu>
            </Dropdown>
          </div>

          {/* Right side buttons */}
          <div className="d-flex align-items-center">
            <button
              className="btn  d-md-none"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-align-justify" />
            </button>

            <div
              className={`menu-container ${
                isMobileMenuOpen ? 'mobile-menu-show' : ' d-md-flex'
              }`}
            >
              <div className="dropdown d-md-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon"
                  onClick={() => setSearch(!search)}
                  id="page-header-search-dropdown"
                >
                  <i className="bx bx-search mb-1 text-black" />
                </button>
                
              </div>

              {/* Cart Icon */}
              <div className="dropdown d-md-inline-block">
                <button type="button" className="btn header-item noti-icon">
                  <i className="bx bx-cart mb-1 text-black" />
                </button>
              </div>

              {/* Login Button */}
              <div className="dropdown d-md-inline-block me-2">
                <Link
                  to="/login"
                  className="btn header-item noti-icon text-black text-decoration-underline"
                  style={{ marginTop: '30px' }}
                >
                  Login
                </Link>
              </div>

              {/* Join as Pro */}
              <div className="d-md-inline-block mt-2">
                <button
                  type="button"
                  className="btn header-item noti-icon mb-2"
                >
                  <i className="bx bx-building particuler-color" />
                </button>
                <Link
                  to="/bigjob"
                  className="btn header-item noti-icon mt-4 particuler-color"
                >
                  Join as Pro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

Header.propTypes = {
  t: PropTypes.any,
};

const mapStatetoProps = (state) => {
  return { layoutType: state.Layout.layoutType };
};

export default connect(mapStatetoProps, {
  // showRightSidebarAction,
  // toggleLeftmenu,
})(withTranslation()(Header));
