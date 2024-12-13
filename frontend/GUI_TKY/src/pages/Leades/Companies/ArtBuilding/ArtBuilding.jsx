import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SmallJobs from '../../../../assets/images/leads/smallJobIcon.png';
import EmployeesIcon from '../../../../assets/images/leads/EmployeesIcon.png';
import AreasIcon from '../../../../assets/images/leads/AreasIcon.png';
import NoSubcontractorsIcon from '../../../../assets/images/leads/NoSubcontractorsIcon.png';

// Page Component
export default function ArtBuilding() {
  return (
    <div className=" mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="mb-3">
            <small className="text-muted">Leads &gt; Company 1990</small>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="card-title mb-1">Art Building</h5> <br />
              <p className="text-muted mb-4">Organisation number: 817158722</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <p className="mb-1">
                <strong>Address:</strong> Vossegata 22, 0475 Oslo
              </p>
              <p className="mb-1">
                <strong>Email:</strong> post@artbuild.com
              </p>
            </div>
            <div className="col-md-6">
              <p className="mb-1">
                <strong>Company manager:</strong> Harry Stone
              </p>
              <p className="mb-1">
                <strong>Mobile phone:</strong> +4721607947
              </p>
            </div>
          </div>
          {/* <div className="mb-4">
        <span className="text-muted">Leads &gt; </span>
        <span className="fw-bold">Company 1990</span>
      </div>

   
      <div className="row mb-4">
        <div className="col-md-6">
          <h5 className="fw-bold">Art Building</h5>
          <p className="text-muted mb-1">
            Organisation number: <span className="fw-bold">8171158722</span>
          </p>
          <p className="mb-1">Address: Vossegata 22, 0475 Oslo</p>
          <p className="mb-1">
            Email: <a href="mailto:post@artbuild.com">post@artbuild.com</a>
          </p>
        </div>
        <div className="col-md-6">
          <p className="mb-1">Company manager: Harry Stone</p>
          <p>
            Mobile phone: <a href="tel:+4721607947">+47 216 079 47</a>
          </p>
        </div>
      </div> */}

          {/* Small Jobs Section */}
          <div className="border p-3 rounded mb-4">
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
            className="d-flex flex-wrap gap-3 w-50"
            style={{ fontSize: '1rem' }}
          >
            <button
              className="badge  text-dark p-3 border"
              style={{ backgroundColor: 'white', border: 'none' }}
            >
              <img src={EmployeesIcon} alt="" style={{width:"100%", maxWidth:'15px' , gap:'3px'}} />
              Up to 30 employees
            </button>
            <button
              className="badge bg-light text-dark p-3 border"
              style={{ backgroundColor: 'white', border: 'none' }}
            >
              <img src={AreasIcon} alt=""style={{width:"100%", maxWidth:'15px' , gap:'3px'}} /> Up to 5 areas
            </button>
            <button
              className="badge bg-light text-dark p-3 border"
              style={{ backgroundColor: 'white', border: 'none' }}
            >
              <img src={NoSubcontractorsIcon} alt="" style={{width:"100%", maxWidth:'15px' , gap:'3px'}} />
              No subcontractors
            </button>
          </div>

          {/* Footer Button */}
          <div className="mt-4 text-end">
            <button className="btn btn-primary">Give access</button>
          </div>
        </div>
      </div>
    </div>
  );
}
