import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import smallJobIcon from '../../../assets/images/leads/smallJob Icon.png';
import homeIcon from '../../../as';
import BathroomIcon from '../../../assets/images/users/usersview/Bathroom icon.png';
import KitchenIcon from '../../../assets/images/users/usersview/kitchen icon.png';
import imagePdfIcon from '../../../assets/images/leads/image pdf icon.png';

export default function SmallJobRequest() {
  return (
    <Container fluid className="p-4 position-relative">
      {/* Home Button - Top right */}
      {/* <div className="position-absolute top-0 end-0 mt-3 me-3">
        <Button
          variant="link"
          className="p-0"
          style={{ fontSize: '1.5rem', textDecoration: 'none' }}
        >
          <img
            src={homeIcon}
            alt="Home"
              style={{ width: '24px', height: '24px' }}
          />
        </Button>
      </div> */}

      {/* Header */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex align-items-center">
            <span className="me-2">
              {' '}
              <img src={smallJobIcon} alt="" />
            </span>
            <h5 className="m-0">Small job request</h5>
          </div>
        </Col>
      </Row>
      <div className="position-absolute d-flex top-0 end-0 mt-4 me-3">
        <Button
          variant="link"
          className="p-0"
          //   style={{
          //     fontSize: '15px',
          //     textDecoration: 'none',
          //     backgroundColor: 'white',
          //     width: '100%',
          //     maxWidth: '150px',
          //   }}

          style={{
            width: '100px',
            height: '40px',
            fontSize: '14px',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <img
            src={homeIcon}
            alt="Home"
            className="mb-0"
            style={{ width: '14px', height: '14px' }}
          />
          House
        </Button>
      </div>

      {/* Customer Info */}
      <div className="row mb-4">
        <Row className="mt-4">
          <Col xs={12} sm={3}>
            <h6>Customer:</h6>
            <p>Alan Cooper</p>
          </Col>
          <Col xs={12} sm={3}>
            <h6>Mobile phone:</h6>
            <p>+4721607947</p>
          </Col>
          <Col xs={12} sm={3}>
            <h6>Email:</h6>
            <p>tyler_hoppp@gmail.com</p>
          </Col>
          <Col xs={12} sm={3}>
            <h6>Address:</h6>
            <p>Venåsvegen 42, 0672 Oslo</p>
          </Col>
        </Row>
      </div>

      {/* Comment Section */}
      <Row className="mb-4">
        <Col>
          <h6 style={{ color: '#A8AFB9' }}>Comment:</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Row>

      {/* Cards Section */}
      <Row>
        {/* Bathroom Card */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6>
                  {' '}
                  <span className="fw-bold">
                    <img
                      src={BathroomIcon}
                      //   alt={`${project.title} Icon`}
                      className="mb-1 p-2"
                    />
                  </span>
                  Bathroom
                </h6>
                <span>2nd floor</span>
              </div>
              <div className="mb-3">
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="me-4"
                  style={{ backgroundColor: '#F4F8FC', border: 'none' }}
                >
                  Electrician
                </Button>
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{ backgroundColor: '#F4F8FC', border: 'none' }}
                >
                  Plumber
                </Button>
              </div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <div className="d-flex">
                <Button
                  variant="link"
                  className="btn btn-link p-0 me-3 text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    // background: '#EAEEF4',
                    color: '#3A465C',
                    width: '100%',
                    maxWidth: '120px',
                    borderRadius: 20,
                    border: '1px solid #3A465C',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={imagePdfIcon} alt="" className="p-1" />
                  Room.pdf
                </Button>

                <Button
                  variant="link"
                  style={{
                    color: '#3A465C',
                    border: '1px solid #3A465C',
                    height: '30px',
                    display: 'flex',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={imagePdfIcon} alt="" className="p-1" />
                  IMG-453.jpeg
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Kitchen Card */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6>
                  <span className="fw-bold">
                    <img
                      src={KitchenIcon}
                      //   alt={`${project.title} Icon`}
                      className="mb-1 p-2"
                    />
                  </span>
                  Kitchen
                </h6>
                <span>1st floor</span>
              </div>
              <div className="mb-3">
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{ backgroundColor: '#F4F8FC', border: 'none' }}
                >
                  Plumber
                </Button>
              </div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              {/* <div className="d-flex">
                <Button variant="link" className="me-2">
                  Room.pdf
                </Button>
                <Button variant="link">IMG-453.jpeg</Button>
              </div> */}
              <div className="d-flex">
                <Button
                  variant="link"
                  className="btn btn-link p-0 me-3 text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    // background: '#EAEEF4',
                    color: '#3A465C',
                    width: '100%',
                    maxWidth: '120px',
                    borderRadius: 20,
                    border: '1px solid #3A465C', // Add border
                    height: '30px', // Increase height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={imagePdfIcon} alt="" className="p-1" />
                  Room.pdf
                </Button>

                <Button
                  variant="link"
                  style={{
                    color: '#3A465C',
                    border: '1px solid #3A465C', // Add border
                    height: '30px', // Increase height
                    display: 'flex',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={imagePdfIcon} alt="" className="p-1" />
                  IMG-453.jpeg
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer Button */}
      <Row>
        <Col className="text-end">
          <Button variant="primary" style={{ backgroundColor: '#41619A' }}>
            Post a project
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
