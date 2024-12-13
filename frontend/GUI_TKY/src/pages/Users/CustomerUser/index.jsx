import React from 'react';
import { Card, CardBody, Row, Col, Badge, Button } from 'reactstrap'; // Bootstrap components
import tylorCustomer from '../../../assets/images/users/usersview/tylor customer.png';
import addedCutomerIcon from '../../../assets/images/users/usersview/added cutomericon.png';
// import ongoingIcon from '../../../assets/images/users/usersview/ongoing-icon.png'; // Replace with image for "Ongoing"
import finishedIcon from '../../../assets/images/users/usersview/finished icon.png'; // Replace with image for "Finished"

export default function UserProfile() {
  return (
    <div className="container py-4">
      {/* Profile Section */}
      <Row className="align-items-center">
        <Col xs="12" sm="6" md="8">
          <div className="d-flex align-items-center">
            <img
              src={tylorCustomer}
              alt="Customer"
              className="rounded-3"
              style={{ width: 120, height: 120 }}
            />
            <div className="ms-3">
              <h5 className="font-weight-bold">Elektro Solutions</h5>
              <p className="mb-1">Member since 22.12.2021</p>
              <div className="d-flex align-items-center">
                <p className="mb-0 text-secondary" style={{ fontSize: '14px' }}>
                  Added by:
                  <img
                    src={addedCutomerIcon}
                    alt="Added by"
                    style={{ width: 24, height: 24, marginLeft: 8 }}
                  />
                  Baderom Pluss AS
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Contact Information Section */}
      <Row className="mt-3">
        <Col xs="12" sm="6" md="3">
          <p className="mb-0">Address:</p>
          <p className="text-secondary">Venasvegen 42, 0672 Oslo</p>
        </Col>
        <Col xs="12" sm="6" md="3">
          <p className="mb-0">Mobile:</p>
          <p className="text-secondary">+47 21607947</p>
        </Col>
        <Col xs="12" sm="6" md="3">
          <p className="mb-0">Email:</p>
          <p className="text-secondary">tyler_hoppp@gmail.com</p>
        </Col>
        <Col xs="12" sm="6" md="3">
          <p className="mb-0">Account Number:</p>
          <p className="text-secondary">NO93 8601 1117 947</p>
        </Col>
      </Row>

      {/* Project History Section */}
      <h5 className="mt-5 mb-2">Projects History</h5>

      {/* Project Cards */}
      <Row>
        <Col xs="12">
          <Card>
            <CardBody>
              <h6>Old apartment renovation</h6>
              <p className="text-secondary">Venasvegen 42, 0672 Oslo</p>
              <div className="d-flex justify-content-end align-items-center mt-2">
                <div className="ongoing-circle d-flex justify-content-center align-items-center">
                  {/* <img
                    // src={ongoingIcon}
                    // alt="Ongoing"
                    style={{ width: 16, height: 16, marginRight: 8 }}
                  /> */}
                  <Badge color="warning" className="ongoing-label">
                    Ongoing
                  </Badge>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12">
          <Card>
            <CardBody>
              <h6>5 - Toilet renovation</h6>
              <p className="text-secondary">Venasvegen 42, 0672 Oslo</p>
              <div className="d-flex justify-content-end align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <img
                    src={finishedIcon}
                    alt="Finished"
                    style={{ width: 16, height: 16, marginRight: 8 }}
                  />
                  <Badge color="success" className="text-white">
                    Finished
                  </Badge>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
