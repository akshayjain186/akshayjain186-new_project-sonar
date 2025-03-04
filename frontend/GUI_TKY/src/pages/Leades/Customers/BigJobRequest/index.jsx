import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';
import fileIconImage from '../../../../assets/images/leads/imagepdficon.png';
import BigJobRequestImage from '../../../../assets/images/leads/bigJobicon.png';
import ApartmentImage from '../../../../assets/images/leads/apartmenticon.png';
import BathroomTitleIcon from '../../../../assets/images/users/usersview/bathroomicon.png';
import ToiletTitleIcon from '../../../../assets/images/users/usersview/toileticon.png';
import { Link } from 'react-router-dom';
import crosemarkImage from '../../../../assets/images/icons/iconcrose11.png';

import checkmarkImage from '../../../../assets/images/icons/iconrighit11.png';
const BigJobRequest = () => {
  const projects = [
    {
      titleIcon: BathroomTitleIcon,
      title: 'Bathroom',
      floor: '2',
      roles: [
        { name: 'Carpenter and building tradesmen', active: true },
        { name: 'Cleaner', active: true },
        { name: 'Demolition, tiling and concrete sawing', active: true },
        { name: 'Electrician', active: true },
        { name: 'Plumber', active: true },
        { name: 'Tiler, bricklayer and plastering', active: true },
        { name: 'Project manager', active: true },
        { name: 'Interior designer', active: false },
        { name: 'Appraiser', active: false },
        { name: 'Builder', active: false },
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      files: [
        { name: 'Room.pdf', url: '#' },
        { name: 'IMG-433.jpeg', url: '#' },
      ],
      fileIcon: fileIconImage,
    },
    {
      titleIcon: ToiletTitleIcon,
      title: 'Toilet',
      floor: '2',
      roles: [
        { name: 'Carpenter and building tradesmen', active: true },
        { name: 'Cleaner', active: true },
        { name: 'Demolition, tiling and concrete sawing', active: true },
        { name: 'Electrician', active: true },
        { name: 'Plumber', active: true },
        { name: 'Tiler, bricklayer and plastering', active: true },
        { name: 'Project manager', active: true },
        { name: 'Interior designer', active: false },
        { name: 'Appraiser', active: false },
        { name: 'Builder', active: false },
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      files: [{ name: 'Room.pdf', url: '#' }],
      fileIcon: fileIconImage,
    },
  ];

  return (
    <div className="card card-header">
      <div
        className="row mb-2 align-items-center"
        style={{ width: '100%', overflowX: 'hidden' }}
      >
        {/* Top Header Section */}
        <header className="d-flex justify-content-between align-items-center p-3 ">
          <div className="d-flex align-items-center">
            <h4 className="mb-0">Leads</h4>
            <h4 className="mb-0 ml-3" style={{ padding: '10px' }}>
              Customer 1990
            </h4>{' '}
          </div>
        </header>
        {/* Image below the header */}

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex " style={{ maxWidth: '100%', width: '500px' }}>
            <img
              src={BigJobRequestImage}
              alt="Icon"
              style={{ width: '40px', height: '40px' }}
            />
            <h4>Big job request</h4>
          </div>
          <button
            className="btn btn-primary mb-0"
            style={{
              color: '#41619A',
              backgroundColor: '#FFFFFF',
              border: 'none',
            }}
          >
            <img src={ApartmentImage} alt="" /> Apartment
          </button>
        </div>

        <main className="p-4">
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
                <p> Venåsvegen 42, 0672 Oslo</p>
              </Col>
              <Col xs={12} sm={0}>
                <h6 style={{ color: '#A8AFB9' }}>Comment:</h6>
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
            </Row>
          </div>

          {/* Project Cards Section */}
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="border rounded p-3"
                  style={{ background: '#FFFFFF' }}
                >
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">
                      <img
                        src={project.titleIcon}
                        alt={`${project.title} Icon`}
                        className="mb-1 p-2"
                      />
                      {project.title}
                    </span>
                    <span className="text-muted">{project.floor} floor</span>
                  </div>

                  {/* <div className="mb-3">
                    {project.roles.map((role, idx) => (
                      // <div
                      //   key={idx}
                      //   className={`badge ${
                      //     role.active ? '' : 'bg-secondary'
                      //   } me-2 btn btn-outline-primary mx-1`}
                      //   style={{
                      //     backgroundColor: role.active ? '#F4F8FC' : '#FBFCFE',
                      //     color: role.active ? '#41619A' : '#A8AFB9',height: '30px',
                      //   }}
                      // >
                      //   {role.name}
                      // </div>
                      <button
                        key={idx}
                        className={`badge ${
                          role.active ? '' : 'bg-secondary'
                        } btn btn-outline-primary me-1 ms-1`}
                        style={{
                          backgroundColor: role.active ? '#F4F8FC' : '#FBFCFE',
                          color: role.active ? '#41619A' : '#A8AFB9',
                          height: '30px',
                        }}
                      >
                        {role.name}
                      </button>
                    ))}
                  </div> */}
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.roles.map((role, idx) => (
                      <button
                        key={idx}
                        className={`badge border-0 ${
                          role.active ? '' : '#FBFCFE'
                        } btn btn-outline-primary p-2`}
                        style={{
                          backgroundColor: role.active ? '#F4F8FC' : '#FBFCFE',
                          color: role.active ? '#41619A' : '#A8AFB9',
                          height: '33px',
                        }}
                      >
                        {role.active  ? (
                          <img
                            src={checkmarkImage}
                            style={{
                              width: '16px',
                              height: '16px',
                              marginRight: '5px',
                            }}
                          />
                        ) : (
                          <img
                            src={crosemarkImage}
                            style={{
                              width: '16px',
                              height: '16px',
                              marginRight: '5px',
                            }}
                          />
                        )}

                        {role.name}
                      </button>
                    ))}
                  </div>

                  <p className="text-muted">{project.description}</p>

                  <div>
                    {project.files.map((file, fileIdx) => (
                      <a
                        href={file.url}
                        key={fileIdx}
                        className="btn btn-link p-0 me-3 text-decoration-none "
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: '#EAEEF4',
                          color: '#3A465C',
                          width: '100%',
                          maxWidth: '120px',
                          borderRadius: 20,
                        }}
                      >
                        <img
                          src={project.fileIcon}
                          alt="File Icon"
                          className="mb-1 p-2"
                        />
                        {file.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Post a Project Button */}
          <Link to="/SmallJobRequest">
            <div className="text-end mt-4">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: '#41619A' }}
              >
                Post a project
              </button>
            </div>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default BigJobRequest;
