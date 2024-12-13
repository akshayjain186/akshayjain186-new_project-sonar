import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import './Dashbord.scss';

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";
import active from "../../assets/images/active.png"
import customer from '../../assets/images/customers.png'
import companies from '../../assets/images/companies.png'
import product from '../../assets/images/product.png'
import portaluser from '../../assets/images/portaluser.png'

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const Dashboard = (props) => {

  const DashboardProperties = createSelector(
    (state) => state.Dashboard,
    (dashboard) => ({
      
    })
  );

  const {
    chartsData
  } = useSelector(DashboardProperties);


  //meta title
  document.title = "Dashboard | Bry Air";

  return (
    // <React.Fragment>
    //   <div className="page-content">
    //     <Container fluid>
        

    //       <Row>
    //         <Col xl="4">
             
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>

    // </React.Fragment>
    <>
    <div className="container-fluid p-3 ">
    {/* Header Section */}

    {/* Statistics Section */}
    <div className="mt-5 py-5">
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body d-flex justify-content-between ">
              <h6 className="m-0 text-color">PORTAL USERS</h6>
              <img src={portaluser} alt="gh" />
            </div>
            <div className="ms-4">
              <h3 className="number-color">60</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body d-flex justify-content-between ">
              <h6 className="m-0 text-color">New leads</h6>
              <img src={customer} alt="gh" />
            </div>
            <div className="ms-4">
              <h3 className="number-color">6</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card ">
            <div className="card-body d-flex justify-content-between align-items-center m-0">
              <h6 className="m-0 text-color">Companies</h6>
              <img src={companies} alt="gh" />
            </div>
            <div className="ms-4 m-0">
              <h3 className="number-color">48</h3>
            </div>
          </div>

        </div>
        <div className="col-md-3">
          <div className="card ">
            <div className="card-body d-flex justify-content-between align-items-center">
              <h6 className="m-0 text-color">Products</h6>
              <img src={product} alt="gh" />
            </div>
            <div className="ms-4">
              <h3 className="number-color">578</h3>
            </div>
          </div>
        </div>
      </div>

      {/* New Customers Leads Table */}
      <div className="card my-">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h5 className="ms-4 fw-bold">New Customers Leads</h5>
          <a href="/view-all" className="text-color me-4 border-bottom border-1">View all</a>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Mobile phone</th>
                  <th>Type of project</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className=" border-none">
                    <td>19</td>
                    <td>Alan Cooper</td>
                    <td>alan.cooper@gmail.com</td>
                    <td>+4721607947</td>
                    <td>{index % 2 === 0 ? "Big job" : "Small job"}</td>
                    <td>25.12.2022 11:15</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-link text-primary">
                          <img src={active} alt="" />
                        </button>
                        <div className="vertical-line"></div> {/* Vertical line */}
                        <button className="btn btn-link text-danger border-bottom fs-5">Delete</button>
                      </div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* New Companies Leads Table */}
      <div className="card">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h5 className="ms-4 fw-bold">New Companies Leads</h5>
          <a href="/view-all" className="text-color me-4 border-bottom border-1">View all</a>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Manager</th>
                  <th>Mobile phone</th>
                  <th>City</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((_, index) => (
                  <tr key={index}>
                    <td>376</td>
                    <td>Art Building</td>
                    <td>artbuilding@gmail.com</td>
                    <td>Harry Stone</td>
                    <td>+4721607947</td>
                    <td>Oslo</td>
                    <td>25.12.2022 11:15</td>
                    <td>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-link text-primary">
                          <img src={active} alt="" />
                        </button>
                        <div className="vertical-line"></div> {/* Vertical line */}
                        <button className="btn btn-link text-danger fs-5">Delete</button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
