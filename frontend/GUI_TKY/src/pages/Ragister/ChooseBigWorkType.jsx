import React from 'react'
import { useState } from "react";
import {
    Card,
    CardBody,
    Col,
    Row,
} from "reactstrap";
import { Link } from 'react-router-dom';

const ChooseBigWorkType = ({ Roomsrenovation, Outsidework, Newbuilding, toggleTab, activeTab }) => {
    const [selectedWorkers, setSelectedWorkers] = useState([]);
    const [selectedProjectManagers, setSelectedProjectManagers] = useState([]);
    const [selectedNewBuildingManagers, setSelectedNewBuildingManagers] = useState([]);
    const handleMultiSelect = (id, setSelected, selected) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleSelectionForNewBuilding = (id, setSelected, selected) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleSelection = (id, setSelected, selected) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
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
                                {Roomsrenovation.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-start ${selectedWorkers.includes(worker.id)
                                                ? 'border-primary'
                                                : ''
                                            }`}
                                        style={{
                                            width: '180px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            toggleSelection(
                                                worker.id,
                                                setSelectedWorkers,
                                                selectedWorkers
                                            )
                                        }
                                    >
                                        <div
                                            className={`card-radio py-4 border rounded d-flex text-start ${selectedWorkers.includes(worker.id)
                                                    ? 'border-primary'
                                                    : ''
                                                }`}
                                            style={{
                                                background: selectedWorkers.includes(
                                                    worker.id
                                                )
                                                    ? 'blue'
                                                    : '#F4F8FC',
                                                color: selectedWorkers.includes(worker.id)
                                                    ? 'white'
                                                    : 'black',
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
                                                <div className="mt-2">{worker.label}</div>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <span className="text-muted">Project manager</span>
                            <div className="d-flex flex-wrap mt-2 gap-4">
                                {Outsidework.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedProjectManagers.includes(worker.id)
                                                ? 'border-primary'
                                                : ''
                                            }`}
                                        style={{
                                            minWidth: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            handleMultiSelect(
                                                worker.id,
                                                setSelectedProjectManagers,
                                                selectedProjectManagers
                                            )
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
                                                        : '#F4F8FC',
                                                color: selectedProjectManagers.includes(
                                                    worker.id
                                                )
                                                    ? 'white'
                                                    : 'black',
                                            }}
                                        >
                                            <img
                                                src={worker.iconClass}
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    marginTop: '7px',
                                                }}
                                                className="me-2"
                                                alt={worker.label}
                                            />
                                            <div>
                                                <div className="mt-2">{worker.label}</div>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            name={`projectManager${worker.id}`}
                                            id={`workerType${worker.id}`}
                                            checked={selectedProjectManagers.includes(
                                                worker.id
                                            )}
                                            onChange={() =>
                                                handleMultiSelect(
                                                    worker.id,
                                                    setSelectedProjectManagers,
                                                    selectedProjectManagers
                                                )
                                            }
                                            style={{ display: 'none' }} // Hide default checkbox
                                        />
                                    </label>
                                ))}
                            </div>

                            <span className="text-muted">Project manager</span>
                            <div className="d-flex flex-wrap mt-2 gap-4">
                                {Newbuilding.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedNewBuildingManagers.includes(
                                            worker.id
                                        )
                                                ? 'border-primary'
                                                : ''
                                            }`}
                                        style={{
                                            minWidth: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            toggleSelectionForNewBuilding(
                                                worker.id,
                                                setSelectedNewBuildingManagers,
                                                selectedNewBuildingManagers
                                            )
                                        }
                                    >
                                        <div
                                            className={`card-radio py-4 px-5 border rounded d-flex ${selectedNewBuildingManagers.includes(
                                                worker.id
                                            )
                                                    ? 'border-primary'
                                                    : ''
                                                }`}
                                            style={{
                                                background:
                                                    selectedNewBuildingManagers.includes(
                                                        worker.id
                                                    )
                                                        ? 'blue'
                                                        : '#F4F8FC',
                                                color:
                                                    selectedNewBuildingManagers.includes(
                                                        worker.id
                                                    )
                                                        ? 'white'
                                                        : 'black',
                                            }}
                                        >
                                            <img
                                                src={worker.iconClass}
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    marginTop: '7px',
                                                }}
                                                className="me-2"
                                                alt={worker.label}
                                            />
                                            <div>
                                                <div className="mt-2">{worker.label}</div>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            name={`newBuildingManager${worker.id}`}
                                            id={`workerType${worker.id}`}
                                            checked={selectedNewBuildingManagers.includes(
                                                worker.id
                                            )}
                                            onChange={() =>
                                                toggleSelectionForNewBuilding(
                                                    worker.id,
                                                    setSelectedNewBuildingManagers,
                                                    selectedNewBuildingManagers
                                                )
                                            }
                                            style={{ display: 'none' }} // Hide default checkbox
                                        />
                                    </label>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                    <div className="actions clearfix text-end">
                        <button
                            style={{ width: '100px' }}
                            className={`  btn btn-primary p-2 text-white (activeTab === 3 ? "next disabled" : "next" )`}
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
            </Row></>
    )
}

export default ChooseBigWorkType