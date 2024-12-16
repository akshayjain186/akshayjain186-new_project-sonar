import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Row,
} from "reactstrap";

const ChooseWorkType = ({ workerTypes, Projectm, setSelectedWorker, toggleTab, activeTab }) => {
  // Initialize selectedWorkers as an empty array
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [selectedProjectManagers, setSelectedProjectManagers] = useState([]);
  const handleWorkerSelect = (id) => {
    setSelectedWorkers((prev) => {
      const updatedWorkers = prev.includes(id)
        ? prev.filter((workerId) => workerId !== id) // Remove ID
        : [...prev, id]; // Add ID
      console.log('Clicked ID:', id); // Log the clicked ID
      console.log('Updated Workers:', updatedWorkers); // Log the updated state
      return updatedWorkers;
    });
  };
  const handleProjectManagerSelect = (id) => {
    setSelectedProjectManagers(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((managerId) => managerId !== id) // Deselect if already selected
          : [...prevSelected, id] // Add to selection if not selected
    );
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col xl="7" sm="7">
          <Card className="rounded-4">
            <CardBody className="ms-3">
              <h4 className="text-start mb-3 fw-semibold">
                Choose type of worker you need
              </h4>
              <span className="text-muted">worker</span>
              <div className="d-flex flex-wrap gap-3 mt-2">
                {workerTypes.map((worker) => (
                  <label
                    key={worker.id}
                    className={`card-radio-label text-center ${selectedWorkers.includes(worker.id)
                        ? 'selected'
                        : ''
                      }`}
                    style={{
                      width: 'auto',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleWorkerSelect(worker.id)}
                  >
                    <div
                      className={`card-radio py-4 border rounded d-flex ${selectedWorkers.includes(worker.id)
                          ? 'border-primary'
                          : ''
                        }`}
                      style={{
                        background: selectedWorkers.includes(worker.id)
                          ? 'blue'
                          : '#fff',
                        color: selectedWorkers.includes(worker.id)
                          ? 'white'
                          : '#000',
                      }}
                    >
                      <img
                        src={worker.iconClass}
                        alt={worker.label}
                        style={{
                          height: '20px',
                          width: '20px',
                          marginTop: '7px',
                        }}
                        className="me-2"
                      />
                      <div>
                        <div>{worker.label}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* <div className="d-flex flex-wrap mt-2 gap-4">
                {Projectm.map((worker) => (
                  <label
                    key={worker.id}
                    className={`card-radio-label text-center ${
                      selectedProjectManagers.includes(worker.id)
                        ? 'selected'
                        : ''
                    }`}                    style={{ minWidth: "" }}
                  >
                    <div className="card-radio py-4 px-5 border rounded  d-flex">
                      <img
                        src={worker.iconClass}
                        style={{
                          height: "20px",
                          width: "20px",
                          marginTop: "7px",
                        }}
                        className="me-2"
                      />
                      <div>
                        <div className="mt-2">{worker.label}</div>
                      </div>
                    </div>

                    <input
                      type="radio"
                      name="currency"
                      id={`workerType${worker.id}`}
                      className="card-radio-input"
                    />
                  </label>
                ))}
              </div> */}
              <span className="text-muted">Project manager</span>
              <div className="d-flex flex-wrap mt-2 gap-4">
                {Projectm.map((worker) => (
                  <label
                    key={worker.id}
                    className={`card-radio-label text-center ${selectedProjectManagers.includes(worker.id)
                        ? 'selected'
                        : ''
                      }`}
                    style={{
                      cursor: 'pointer',
                      minWidth: 'auto',
                    }}
                    onClick={() =>
                      handleProjectManagerSelect(worker.id)
                    }
                  >
                    <div
                      className={`card-radio py-4 px-5 border rounded d-flex ${selectedProjectManagers.includes(
                        worker.id
                      )
                          ? 'border-primary'
                          : ''
                        }`}
                      style={{
                        background:
                          selectedProjectManagers.includes(
                            worker.id
                          )
                            ? 'blue'
                            : '#fff',
                        color: selectedProjectManagers.includes(
                          worker.id
                        )
                          ? 'white'
                          : '#000',
                      }}
                    >
                      <img
                        src={worker.iconClass}
                        alt={worker.label}
                        style={{
                          height: '20px',
                          width: '20px',
                          marginTop: '7px',
                        }}
                        className="me-2"
                      />
                      <div>
                        <div>{worker.label}</div>
                      </div>
                    </div>

                    <input
                      type="checkbox" // Use checkbox for multi-select
                      checked={selectedProjectManagers.includes(
                        worker.id
                      )} // Sync with state
                      onChange={() =>
                        handleProjectManagerSelect(worker.id)
                      } // Handle select/deselect
                      id={`projectManager${worker.id}`}
                      className="card-radio-input"
                      style={{ display: 'none' }} // Hide checkbox UI
                    />
                  </label>
                ))}
              </div>

            </CardBody>
          </Card>
          <div className="actions clearfix text-end">
            <button
              style={{ width: "100px" }}
              className={`btn btn-primary p-2 text-white`}
            >
              <Link
                className="text-white"
                to="#"
                onClick={() => {
                  toggleTab(activeTab + 1);
                }}
              >
                Next
              </Link>
            </button>
          </div>
        </Col>
      </Row>  
      <div className="d-flex flex-wrap mt-2 gap-4">
        {Projectm.map((worker) => (
          <label
            key={worker.id}
            className={`card-radio-label text-center ${selectedProjectManagers.includes(worker.id)
                ? 'selected'
                : ''
              }`} style={{ minWidth: "" }}
          >
            <div className="card-radio py-4 px-5 border rounded  d-flex">
              <img
                src={worker.iconClass}
                style={{
                  height: "20px",
                  width: "20px",
                  marginTop: "7px",
                }}
                className="me-2"
              />
              <div>
                <div className="mt-2">{worker.label}</div>
              </div>
            </div>

            <input
              type="radio"
              name="currency"
              id={`workerType${worker.id}`}
              className="card-radio-input"
            />
          </label>
        ))}
      </div>
    </>
  );
};

export default ChooseWorkType;
