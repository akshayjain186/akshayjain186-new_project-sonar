import React from 'react'
import { useState } from "react";
import {
    Card,
    CardBody,
    Col,
    Row,
} from "reactstrap";
import { Link } from 'react-router-dom';

const ChooseBigCategories = ({ worker, projectmanager, toggleTab, activeTab }) => {

    const [selectedBathroomWorkers, setSelectedBathroomWorkers] = useState([]);
    const [selectedOutsideWorks, setSelectedOutsideWorks] = useState([]);
    const [selectedKitchenWorkers, setSelectedKitchenWorkers] = useState([]);
    const [selectedOutsideWorkers2, setSelectedOutsideWorkers2] = useState([]);
    const toggleSelectionForOutsideWork2 = (id, setSelected, selected) => {
        setSelectedOutsideWorkers2((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleSelectionForKitchen = (id, setSelected, selected) => {
        setSelectedKitchenWorkers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleSelectionForOutsideWorks = (id, setSelected, selected) => {
        setSelectedOutsideWorks((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    const toggleSelectionForBathroom = (id, setSelected, selected) => {
        setSelectedBathroomWorkers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <>
            <Row className="justify-content-center">
                <Col xl="7" sm="7">
                    <Card className="rounded-4">
                        <CardBody className="ms-3">
                            <div>
                                <h4 className="text-start mb-3 fw-semibold">
                                    Choose what workers you need for Bathroom
                                </h4>
                            </div>

                            <span>Rooms</span>
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: '#41619A' }}
                            >
                                {worker.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedBathroomWorkers.includes(worker.id)
                                                ? 'border-primary'
                                                : ''
                                            }`}
                                        style={{
                                            minWidth: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            toggleSelectionForBathroom(
                                                worker.id,
                                                setSelectedBathroomWorkers,
                                                selectedBathroomWorkers
                                            )
                                        }
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedBathroomWorkers.includes(
                                                worker.id
                                            )
                                                    ? 'selected'
                                                    : ''
                                                }`}
                                            style={{
                                                background:
                                                    selectedBathroomWorkers.includes(
                                                        worker.id
                                                    )
                                                        ? 'blue'
                                                        : '#F4F8FC',
                                                color: selectedBathroomWorkers.includes(
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
                                            name={`bathroomWorker${worker.id}`}
                                            id={`workerType${worker.id}`}
                                            checked={selectedBathroomWorkers.includes(
                                                worker.id
                                            )}
                                            onChange={() =>
                                                toggleSelectionForBathroom(
                                                    worker.id,
                                                    setSelectedBathroomWorkers,
                                                    selectedBathroomWorkers
                                                )
                                            }
                                            style={{ display: 'none' }} // Hide default checkbox
                                        />
                                    </label>
                                ))}
                            </div>

                            <span>Outside work</span>
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: '#41619A' }}
                            >
                                {projectmanager.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedOutsideWorks.includes(worker.id)
                                                ? 'border-primary'
                                                : ''
                                            }`}
                                        style={{
                                            minWidth: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            toggleSelectionForOutsideWorks(
                                                worker.id,
                                                setSelectedOutsideWorks,
                                                selectedOutsideWorks
                                            )
                                        }
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedOutsideWorks.includes(worker.id)
                                                    ? 'selected'
                                                    : ''
                                                }`}
                                            style={{
                                                background: selectedOutsideWorks.includes(
                                                    worker.id
                                                )
                                                    ? 'blue'
                                                    : '#F4F8FC',
                                                color: selectedOutsideWorks.includes(
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
                                            name={`outsideWork${worker.id}`}
                                            id={`workerType${worker.id}`}
                                            checked={selectedOutsideWorks.includes(
                                                worker.id
                                            )}
                                            onChange={() =>
                                                toggleSelectionForOutsideWorks(
                                                    worker.id,
                                                    setSelectedOutsideWorks,
                                                    selectedOutsideWorks
                                                )
                                            }
                                            style={{ display: 'none' }} // Hide default checkbox
                                        />
                                    </label>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xl="7" sm="7">
                    <Card className="rounded-4">
                        <CardBody className="ms-3">
                            <div>
                                <h4 className="text-start mb-3 fw-semibold">
                                    Choose what workers you need for Kitchen
                                </h4>
                            </div>
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: '#41619A' }}
                            >
                                {worker.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedKitchenWorkers.includes(worker.id)
                                                ? 'border-primary'
                                                : ''
                                            }`}
                                        style={{
                                            minWidth: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            toggleSelectionForKitchen(
                                                worker.id,
                                                setSelectedKitchenWorkers,
                                                selectedKitchenWorkers
                                            )
                                        }
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedKitchenWorkers.includes(worker.id)
                                                    ? 'selected'
                                                    : ''
                                                }`}
                                            style={{
                                                background:
                                                    selectedKitchenWorkers.includes(
                                                        worker.id
                                                    )
                                                        ? 'blue'
                                                        : '#F4F8FC',
                                                color: selectedKitchenWorkers.includes(
                                                    worker.id
                                                )
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
                                        <input
                                            type="checkbox"
                                            name={`kitchenWorker${worker.id}`}
                                            id={`workerType${worker.id}`}
                                            checked={selectedKitchenWorkers.includes(
                                                worker.id
                                            )}
                                            onChange={() =>
                                                toggleSelectionForKitchen(
                                                    worker.id,
                                                    setSelectedKitchenWorkers,
                                                    selectedKitchenWorkers
                                                )
                                            }
                                            style={{ display: 'none' }} // Hide default checkbox
                                        />
                                    </label>
                                ))}
                            </div>
                            <span>Outside work</span>
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: '#41619A' }}
                            >
                                {projectmanager.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedOutsideWorkers2.includes(worker.id)
                                                ? 'border-primary'
                                                : ''
                                            }`}
                                        style={{
                                            minWidth: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            toggleSelectionForOutsideWork2(
                                                worker.id,
                                                setSelectedOutsideWorkers2,
                                                selectedOutsideWorkers2
                                            )
                                        }
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedOutsideWorkers2.includes(
                                                worker.id
                                            )
                                                    ? 'selected'
                                                    : ''
                                                }`}
                                            style={{
                                                background:
                                                    selectedOutsideWorkers2.includes(
                                                        worker.id
                                                    )
                                                        ? 'blue'
                                                        : '#F4F8FC',
                                                color: selectedOutsideWorkers2.includes(
                                                    worker.id
                                                )
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
                                        <input
                                            type="checkbox"
                                            name={`outsideWorkWorker${worker.id}`}
                                            id={`workerType${worker.id}`}
                                            checked={selectedOutsideWorkers2.includes(
                                                worker.id
                                            )}
                                            onChange={() =>
                                                toggleSelectionForOutsideWork2(
                                                    worker.id,
                                                    setSelectedOutsideWorkers2,
                                                    selectedOutsideWorkers2
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
                            className={` btn btn-primary p-2 (activeTab === 3 ? "next disabled" : "next" )`}
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
        </>
    )
}

export default ChooseBigCategories