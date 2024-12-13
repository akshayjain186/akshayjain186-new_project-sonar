

import React, { useState } from 'react';
import {
  Tab,
  Tabs,
  Card,
  Row,
  Col,
  Image,
  Button,
  Badge,
} from 'react-bootstrap';
import groupLogo from '../../../assets/images/users/usersview/Grouplogo.png';
import bathroomIcon from '../../../assets/images/users/usersview/bathroomicon.png';
import kitchenIcon from '../../../assets/images/users/usersview/kitchenicon.png';
import toiletIcon from '../../../assets/images/users/usersview/toileticon.png';
import facadeIcon from '../../../assets/images/users/usersview/fecadeicon.png';
import dsbqualification from '../../../assets/images/users/usersview/dsbquali.png';
import mvaqualification from '../../../assets/images/users/usersview/mvaquali.png';
import EditIcon from '../../../assets/images/users/usersview/editIcon.png';
import FmdGoodIcon from '../../../assets/images/users/usersview/material-symbols_location-on.png';
import CheckIcon from '../../../assets/images/users/usersview/righticon.png'; // Checkmark icon

import Employee from '../UsersView/Emloyee/Employee';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div className="p-2">{children}</div>}
    </div>
  );
};

export default function UserView() {
  const [tabIndex, setTabIndex] = useState(0);
  const [rating, setRating] = useState(5);

  const handleTabChange = (eventKey) => {
    setTabIndex(eventKey);
  };

  return (
    <div className="container py-4">
      {/* Header Section */}
      <Row className="mb-4">
        <Col xs={12} md={8}>
          <Row>
            <Col xs={4}>
              <Image
                src={groupLogo}
                alt="Group Logo"
                rounded
                // className="w-10"
                className="img-fluid"
              />
            </Col>
            <Col xs={8}>
              <h5>
                <strong>Baderom Pluss AS</strong>
              </h5>
              <p>Member since 22.12.2021</p>
              <div className="d-flex align-items-center">
                {/* Rating */}
                <span className="me-2">{rating} ⭐</span>
                <rating value={rating} precision={0.5} readOnly size="small" />
                <span>5 reviews</span>
              </div>
            </Col>
            <Row className="mb-4">
              <Col xs={12} className="text-center text-md-start">
                <Badge bg="light" className="me-2 mb-2">
                  <Image
                    src={bathroomIcon}
                    alt="Bathroom"
                    width="16"
                    height="16"
                  />{' '}
                  Bathroom
                </Badge>
                <Badge bg="light" className="me-2 mb-2">
                  <Image
                    src={kitchenIcon}
                    alt="Kitchen"
                    width="16"
                    height="16"
                  />{' '}
                  Kitchen
                </Badge>
                <Badge bg="light" className="me-2 mb-2">
                  <Image src={toiletIcon} alt="Toilet" width="16" height="16" />{' '}
                  Toilet
                </Badge>
                <Badge bg="light" className="me-2 mb-2">
                  <Image src={facadeIcon} alt="Facade" width="16" height="16" />{' '}
                  Facade
                </Badge>
              </Col>
            </Row>
          </Row>
        </Col>

        {/* Card Section */}
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Row className="d-flex justify-content-between">
                <Col>
                  <strong>Super admin BASIC</strong>
                </Col>
                <Col className="text-end">
                  <Button variant="link" size="sm">
                    <Image src={EditIcon} alt="Edit" width="20" height="20" />
                  </Button>
                </Col>
              </Row>
              <div className="d-flex align-items-center">
                <Image src={CheckIcon} alt="Check" width="16" height="16" />
                <span>3/10 areas</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={CheckIcon} alt="Check" width="16" height="16" />
                <span>31/50 employees</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={CheckIcon} alt="Check" width="16" height="16" />{' '}
                <span>6/10 admins</span>
              </div>
              <div className="d-flex justify-content-end ">
                <h6>800 kr/month</h6>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} sm={3}>
          <strong>Address:</strong>
          <p>Vossgata 22, 0475 Oslo</p>
        </Col>
        <Col xs={12} sm={3}>
          <strong>Organization number:</strong>
          <p>817158722</p>
        </Col>
        <Col xs={12} sm={3}>
          <strong>Email:</strong>
          <p>post@baderom.no</p>
        </Col>
        <Col xs={12} sm={3}>
          <strong>Account number:</strong>
          <p>NO93 8601 1117 947</p>
        </Col>
      </Row>

      {/* Description Section */}
      <Row className="mb-3">
        <Col xs={12} sm={8}>
          <strong>Description:</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </Col>
      </Row>

      {/* Areas Section */}
      <div className="mt-3">
        <strong>Areas:</strong>
        <ul style={{ padding: 'inherit' }}>
          <li style={{ listStyleType: 'none' }}>
            <Image src={FmdGoodIcon} alt="Location" width="16" height="16" />{' '}
            Oslo
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Image src={FmdGoodIcon} alt="Location" width="16" height="16" />{' '}
            Viken (all cities)
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Image src={FmdGoodIcon} alt="Location" width="16" height="16" />{' '}
            Vestfold og Telemark (all cities)
          </li>
        </ul>
      </div>

      {/* Qualifications Section */}
      <div className="mt-3">
        <strong>Qualifications:</strong>
        <div className="d-flex gap-2 mt-2">
          <Image
            src={dsbqualification}
            alt="Qualification 1"
            width="70"
            height="70"
            rounded
          />
          <Image
            src={mvaqualification}
            alt="Qualification 2"
            width="70"
            height="70"
            rounded
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-4">
        <style jsx>{`
          .custom-tabs .nav-item {
            margin-right: 10px; /* Adjust as needed */
          }

          .custom-tabs .nav-link.active {
            color: blue !important;
            font-weight: bold;
            background-color: transparent !important;
          }

          .custom-tabs .nav-link {
            color: gray !important;
          }
        `}</style>
        <Tabs
          activeKey={tabIndex}
          onSelect={handleTabChange}
          className="mb-3 custom-tabs"
          justify
        >
          <Tab eventKey={0} title="Managers">
            <div>Manager details go here...</div>
          </Tab>
          <Tab eventKey={1} title="Employees">
            <Employee />
          </Tab>
          <Tab eventKey={2} title="Admins">
            <div>Admin details go here...</div>
          </Tab>
          <Tab eventKey={3} title="Customers">
            <div>Customer details go here...</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
