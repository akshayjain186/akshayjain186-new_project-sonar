import React from "react";

const GeneralWorkerDashboard = () => {
  return (
    <div className="container-fluid p-5">
      {/* Header Section */}
      
      {/* Statistics Section */}
      <div className="mt-5 py-5">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card text-center ">
              <div className="card-body">
                <h6 className="card-title">PORTAL USERS</h6>
                <h3 className="card-text">60</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6 className="card-title">NEW LEADS</h6>
                <h3 className="card-text">6</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6 className="card-title">COMPANIES</h6>
                <h3 className="card-text">48</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center ">
              <div className="card-body">
                <h6 className="card-title">PRODUCTS</h6>
                <h3 className="card-text">578</h3>
              </div>
            </div>
          </div>
        </div>

        {/* New Customers Leads Table */}
        <div className="card my-5">
          <div className="d-flex justify-content-between align-items-center ">
            <h5 className="p-4">New Customers Leads</h5>
            <a href="/view-all" className="text-primary p-4">View all</a>
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
                    <tr key={index}>
                      <td>19</td>
                      <td>Alan Cooper</td>
                      <td>alan.cooper@gmail.com</td>
                      <td>+4721607947</td>
                      <td>{index % 2 === 0 ? "Big job" : "Small job"}</td>
                      <td>25.12.2022 11:15</td>
                      <td>
                        <button className="btn btn-link text-primary">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn btn-link text-danger">Delete</button>
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
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="">New Companies Leads</h5>
            <a href="/view-all" className="text-primary">View all</a>
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
                        <button className="btn btn-link text-primary">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn btn-link text-danger">Delete</button>
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
  );
};

export default GeneralWorkerDashboard;
