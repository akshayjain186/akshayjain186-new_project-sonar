import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tabs,
  Tab,
  Image,
} from 'react-bootstrap';
import AdminELogo from '../../../assets/images/users/usersview/AdminElogo.png';
import electriciationicon from '../../../assets/images/users/usersview/electriciationicon.png';
import sewingIcon from '../../../assets/images/users/usersview/sawingicon.png';
import dsbqualification from '../../../assets/images/users/usersview/dsbquali.png';
import mvaqualification from '../../../assets/images/users/usersview/mvaquali.png';
import EditIcon from '../../../assets/images/users/usersview/editicon.png';
import FmdGoodIcon from '../../../assets/images/users/usersview/material-symbols_location-on.png';
import CheckIcon from '../../../assets/images/users/usersview/righticon.png';
import Manager from '../AdminUserView/Manager/Manager';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default function AdminUserView() {
  const [tabIndex, setTabIndex] = useState(0);
  const [rating, setRating] = useState(5);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container className="mt-4">
      {/* Header Section */}
      <Row className="align-items-center">
        <Col xs={12} sm={6} md={8}>
          <div className="d-flex align-items-center gap-3">
            <Image src={AdminELogo} width={120} height={120} />
            <div>
              <h5>Elektro Solutions</h5>
              <p>Member since 22.12.2021</p>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex align-items-center gap-1">
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'gold',
                      borderRadius: '50%',
                    }}
                  ></div>{' '}
                  {/* Placeholder for rating */}
                  <span>5 reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex gap-2 mt-3">
            <Button
              variant="light"
              size="sm"
              className="d-flex align-items-center"
            >
              <Image
                src={electriciationicon}
                alt="electrician"
                width={20}
                height={20}
              />
              Electrician
            </Button>
            <Button
              variant="light"
              size="sm"
              className="d-flex align-items-center"
            >
              <Image src={sewingIcon} alt="sewing" width={20} height={20} />
              Demolition, tiling and concrete sawing
            </Button>
          </div>
        </Col>

        <Col xs={12} sm={6} md={4} className="text-sm-end mt-3 mt-sm-0">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <h6>Admin ADVANCED</h6>
                <Button variant="link" size="sm">
                  <Image src={EditIcon} width={20} height={20} alt="edit" />
                </Button>
              </div>
              <div className="d-flex align-items-center gap-1">
                <Image src={CheckIcon} width={16} height={16} />
                <span>2/4 designations</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <Image src={CheckIcon} width={16} height={16} />
                <span>3/5 areas</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <Image src={CheckIcon} width={16} height={16} />
                <span>6/30 employees</span>
              </div>
              <div className="d-flex justify-content-end">
                <h5>500 kr/month</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Address Section */}
      <Row className="mt-4">
        <Col xs={12} sm={3}>
          <h6>Address:</h6>
          <p>Vossgata 22, 0475 Oslo</p>
        </Col>
        <Col xs={12} sm={3}>
          <h6>Organization number:</h6>
          <p>817158722</p>
        </Col>
        <Col xs={12} sm={3}>
          <h6>Email:</h6>
          <p>post@elektrosolutions.com</p>
        </Col>
        <Col xs={12} sm={3}>
          <h6>Account number:</h6>
          <p>NO93 8601 1117 947</p>
        </Col>
      </Row>

      {/* Description Section */}
      <Row className="mt-3">
        <Col xs={12} sm={8}>
          <h6>Description:</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </Col>
      </Row>

      {/* Areas Section */}
      <Row className="mt-3">
        <Col xs={12}>
          <h6>Areas:</h6>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-2">
              <Image src={FmdGoodIcon} width={16} height={16} />
              <span>Oslo</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Image src={FmdGoodIcon} width={16} height={16} />
              <span>Viken (all cities)</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Image src={FmdGoodIcon} width={16} height={16} />
              <span>Vestfold og Telemark (all cities)</span>
            </div>
          </div>
        </Col>
      </Row>

      {/* Qualifications Section */}
      <Row className="mt-3">
        <Col xs={12}>
          <h6>Qualifications:</h6>
          <div className="d-flex gap-3">
            <Image
              src={dsbqualification}
              alt="Qualification 1"
              width={70}
              height={70}
            />
            <Image
              src={mvaqualification}
              alt="Qualification 2"
              width={70}
              height={70}
            />
          </div>
        </Col>
      </Row>

      {/* Tabs Section */}
      <Row className="mt-4">
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
        <Col xs={12}>
          <Tabs
            activeKey={tabIndex}
            onSelect={(k) => setTabIndex(k)}
            id="admin-user-tabs"
            className="mb-3 custom-tabs"
          >
            <Tab eventKey={0} title="Managers">
              <Manager />
            </Tab>
            <Tab eventKey={1} title="Employees">
              {/* Employee component can go here */}
            </Tab>
            <Tab eventKey={3} title="Customers">
              <p>Customer details go here...</p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
