import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SmallJobs from '../../../../assets/images/leads/smallJobIcon.png';
import EmployeesIcon from '../../../../assets/images/leads/EmployeesIcon.png';
import AreasIcon from '../../../../assets/images/leads/AreasIcon.png';
import NoSubcontractorsIcon from '../../../../assets/images/leads/NoSubcontractorsIcon.png';
import artBuilding from '../../../../assets/images/leads/ArtBuildingIcon.png';
import CopyPastIcon from '../../../../assets/images/leads/CopyPastIcon.png';
import { Link } from 'react-router-dom';

export default function ArtBuilding() {
  return (
    <div className="" style={{ backgroundColor: 'transparent' ,marginTop:"100px"}} >
      <div
        className="container me-6"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="card-body" style={{ backgroundColor: 'transparent' }}>
          <div className="mb-3">
            <small className="text-muted">Leads &gt; Company 1990</small>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="card-title mb-1">
                <img src={artBuilding} alt="" />
                Art Building
              </h5>
              <div className="">
                <p className="text-muted mb-4 ">
                  Organisation number: 817158722{' '}
                  <img src={CopyPastIcon} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <p className="mb-1">
                <strong>Address:</strong> <br /> Vossegata 22, 0475 Oslo
              </p>
              <p className="mb-1">
                <strong>Email:</strong>
                <br /> post@artbuild.com
              </p>
            </div>
            <div className="col-md-6">
              <p className="mb-1">
                <strong>Company manager:</strong>
                <br /> Harry Stone
              </p>
              <p className="mb-1">
                <strong>Mobile phone:</strong>
                <br /> +4721607947
              </p>
            </div>
          </div>

          {/* Small Jobs Section */}
          <div
            className="border p-3 rounded mb-4"
            style={{ backgroundColor: 'white' }}
          >
            <h6 className="fw-bold">
              {' '}
              <img
                src={SmallJobs}
                alt=""
                style={{ width: '100%', maxWidth: '30px' }}
              />
              Small jobs
            </h6>
            <button
              className="btn btn-primary btn-sm me-2"
              style={{
                background: '#F4F8FC',
                color: '#41619A',
                border: 'none',
                // width: '100%',
                // maxWidth: '10%',
              }}
            >
              Plumber
            </button>
            <div className="mt-2">
              <p className="text-muted mb-0">Comment:</p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Info Badges */}
          <div
            className="d-flex flex-wrap gap-3 text-align-start "
            style={{ fontSize: '1rem', borderRadius: '5px' }}
          >
            <button
              className="badge  text-dark p-3 border"
              style={{
                backgroundColor: 'white',
                border: 'none',
                width: '100%',
                maxWidth: '20%',
                borderRadius: '10px',
              }}
            >
              <img
                src={EmployeesIcon}
                alt="image"
                style={{ width: '100%', maxWidth: '15px', textAlign: 'start' }}
              />
              Up to 30 employees
            </button>
            <button
              className="badge  text-dark p-3 border"
              style={{
                backgroundColor: 'white',
                border: 'none',
                width: '100%',
                maxWidth: '20%',
                borderRadius: '10px',
              }}
            >
              <img
                src={AreasIcon}
                alt="image"
                style={{ width: '100%', maxWidth: '15px', gap: '3px' }}
              />{' '}
              Up to 5 areas
            </button>
            <button
              className="badge  text-dark p-3 border w-40"
              style={{
                backgroundColor: 'white',
                border: 'none',
                width: '100%',
                maxWidth: '20%',
                borderRadius: '10px',
              }}
            >
              <img
                src={NoSubcontractorsIcon}
                alt="image"
                style={{ width: '100%', maxWidth: '15px', gap: '3px' }}
              />
              No subcontractors
            </button>
          </div>

          {/* Footer Button */}
          <div className="mt-4 text-end">
            <Link to="/UploadPhoto"> 
            <button
              className="btn btn-primary"
              style={{
                backgroundColor: '#41619A',
                width: '100% ',
                maxWidth: '120px',
              }}
            >
              Give access
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
