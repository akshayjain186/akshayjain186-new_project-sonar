import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    Col,
    Row,

} from "reactstrap";
const ChooseCategories = ({ Rooms, outsidework, newbuilding, selectedWorker, toggleTab, activeTab, type = "smalljob" }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [selectedOutsideWork, setSelectedOutsideWork] = useState([]);
    const [selectedNewBuilding, setSelectedNewBuilding] = useState([]);
    const [selectedRooms2, setSelectedRoom2] = useState([])
    const [selectedNewBuilding2, setSelectedNewBuilding2] = useState([]);
    const [selectedOutsideWork2, setSelectedOutsideWork2] = useState([]);
    const toggleNewBuilding2Selection = (id, setSelected, selected) => {
        setSelectedNewBuilding2((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    const toggleOutsideWork2Selection = (id, setSelected, selected) => {
        setSelectedOutsideWork2((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    const toggleRoom2Selection = (id, setSelected, selected) => {
        setSelectedRoom2((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    const handleRoomSelect = (id) => {
        setSelectedRooms(
            (prevSelected) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((roomId) => roomId !== id) // Deselect if already selected
                    : [...prevSelected, id] // Add to selection if not selected
        );
    };

    const handleOutsideWorkSelect = (id) => {
        setSelectedOutsideWork(
            (prevSelected) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((workId) => workId !== id) // Deselect if already selected
                    : [...prevSelected, id] // Add to selection if not selected
        );
    };

    const handleNewBuildingSelect = (id) => {
        setSelectedNewBuilding(
            (prevSelected) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((buildingId) => buildingId !== id) // Deselect if already selected
                    : [...prevSelected, id] // Add to selection if not selected
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
                                    Choose sercices you need the Electrician for
                                </h4>
                            </div>
                            <span>Rooms</span>
                            <div className="d-flex flex-wrap gap-3 mt-2" style={{ color: '#41619A' }}>
                                {Rooms.map((room) => (
                                    <label
                                        key={room.id}
                                        className={`card-radio-label text-center ${selectedRooms.includes(room.id) ? 'selected' : ''}`}
                                        style={{
                                            cursor: 'pointer',
                                            minWidth: 'auto',
                                        }}
                                        onClick={() => handleRoomSelect(room.id)} // Handle selection for first group
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedRooms.includes(room.id) ? 'border-primary' : ''
                                                }`}
                                            style={{
                                                background: selectedRooms.includes(room.id) ? '#41619A' : '#F4F8FC',
                                                color: selectedRooms.includes(room.id) ? 'white' : '#000', height:"40px"
                                            }}
                                        >
                                            <img
                                                src={room.iconClass}
                                                alt={room.label}
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    marginTop: '0px',
                                                    // filter: selectedRooms.includes(room.id) ? 'invert(1)' : 'none',
                                                    filter: selectedRooms.includes(room.id) ? 'grayscale(100%) brightness(0) invert(1)' : 'none',
                                                }}
                                                className="me-2"
                                            />
                                            <div>
                                                <div>{room.label}</div>
                                            </div>
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={selectedRooms.includes(room.id)}
                                            onChange={() => handleRoomSelect(room.id)} // Handle selection
                                            id={`room${room.id}`}
                                            className="card-radio-input"
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                ))}
                            </div>

                            <span>Outside work</span>
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: '#41619A' }}
                            >
                                {outsidework.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedOutsideWork.includes(worker.id)
                                            ? 'selected'
                                            : ''
                                            }`}
                                        style={{
                                            cursor: 'pointer',
                                            minWidth: 'auto',
                                        }}
                                        onClick={() =>
                                            handleOutsideWorkSelect(worker.id)
                                        } // Handle selection
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedOutsideWork.includes(worker.id)
                                                ? 'border-primary'
                                                : ''
                                                }`}
                                            style={{
                                                background: selectedOutsideWork.includes(
                                                    worker.id
                                                )
                                                    ? '#41619A'
                                                    : '#F4F8FC',
                                                color: selectedOutsideWork.includes(
                                                    worker.id
                                                )
                                                    ? 'white'
                                                    : '#000',height:"40px"
                                            }}
                                        >
                                            <img
                                                src={worker.iconClass}
                                                alt={worker.label}
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    marginTop: '0px',
                                                    filter: selectedOutsideWork.includes(worker.id) ? 'grayscale(100%) brightness(0) invert(1)' : 'none',
                                                }}
                                                className="me-2"
                                            />
                                            <div>
                                                <div>{worker.label}</div>
                                            </div>
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={selectedOutsideWork.includes(
                                                worker.id
                                            )} // Sync with state
                                            onChange={() =>
                                                handleOutsideWorkSelect(worker.id)
                                            } // Handle selection
                                            id={`outsideWork${worker.id}`}
                                            className="card-radio-input"
                                            style={{ display: 'none' }} // Hide checkbox UI
                                        />
                                    </label>
                                ))}
                            </div>

                            <span>New building</span>
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: '#41619A' }}
                            >
                                {newbuilding.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedNewBuilding.includes(worker.id)
                                            ? 'selected'
                                            : ''
                                            }`}
                                        style={{
                                            cursor: 'pointer',
                                            minWidth: 'auto',
                                        }}
                                        onClick={() =>
                                            handleNewBuildingSelect(worker.id)
                                        } // Handle selection
                                    >
                                        <div
                                            className={`card-radio py-1 px-3 border rounded-5 d-flex ${selectedNewBuilding.includes(worker.id)
                                                ? 'border-primary'
                                                : ''
                                                }`}
                                            style={{
                                                background: selectedNewBuilding.includes(
                                                    worker.id
                                                )
                                                    ? '#41619A'
                                                    : '#F4F8FC',
                                                color: selectedNewBuilding.includes(
                                                    worker.id
                                                )
                                                    ? 'white'
                                                    : '#000',height:"40px"
                                            }}
                                        >
                                            <img
                                                src={worker.iconClass}
                                                alt={worker.label}
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    marginTop: '0px',
                                                    filter: selectedNewBuilding.includes(worker.id) ? 'grayscale(100%) brightness(0) invert(1)' : 'none',
                                                }}
                                                className="me-2"
                                            />
                                            <div>
                                                <div>{worker.label}</div>
                                            </div>
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={selectedNewBuilding.includes(
                                                worker.id
                                            )} // Sync with state
                                            onChange={() =>
                                                handleNewBuildingSelect(worker.id)
                                            } // Handle selection
                                            id={`newBuilding${worker.id}`}
                                            className="card-radio-input"
                                            style={{ display: 'none' }} // Hide checkbox UI
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
                                    Choose sercices you need the Electrician for
                                </h4>
                            </div>

                            <span>Rooms 2</span>
                            <div className="d-flex flex-wrap gap-3 mt-2" style={{ color: '#41619A' }}>
                                {Rooms.map((room) => (
                                    <label
                                        key={room.id}
                                        className={`card-radio-label text-center ${selectedRooms2.includes(room.id) ? 'selected' : ''}`}
                                        style={{
                                            cursor: 'pointer',
                                            minWidth: 'auto',
                                        }}
                                        onClick={() => toggleRoom2Selection(room.id)} // Handle selection for second group
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedRooms2.includes(room.id) ? 'border-primary' : ''
                                                }`}
                                            style={{
                                                background: selectedRooms2.includes(room.id) ? '#41619A' : '#F4F8FC',
                                                color: selectedRooms2.includes(room.id) ? 'white' : '#000',height:"40px"
                                            }}
                                        >
                                            <img
                                                src={room.iconClass}
                                                alt={room.label}
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    marginTop: '0px',
                                                    filter: selectedRooms2.includes(room.id) ? 'grayscale(100%) brightness(0) invert(1)' : 'none',
                                                }}
                                                className="me-2"
                                            />
                                            <div>
                                                <div>{room.label}</div>
                                            </div>
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={selectedRooms2.includes(room.id)}
                                            onChange={() => toggleRoom2Selection(room.id)} // Handle selection
                                            id={`room${room.id}`}
                                            className="card-radio-input"
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                ))}
                            </div>
                            <span>Outside work</span>
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: '#41619A' }}
                            >
                                {outsidework.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedOutsideWork2.includes(worker.id)
                                            ? 'border-primary'
                                            : ''
                                            }`}
                                        style={{
                                            minWidth: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            toggleOutsideWork2Selection(
                                                worker.id,
                                                setSelectedOutsideWork2,
                                                selectedOutsideWork2
                                            )
                                        }
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedOutsideWork2.includes(worker.id)
                                                ? 'selected'
                                                : ''
                                                }`}
                                            style={{
                                                background: selectedOutsideWork2.includes(
                                                    worker.id
                                                )
                                                    ? '#41619A'
                                                    : '#F4F8FC',
                                                color: selectedOutsideWork2.includes(
                                                    worker.id
                                                )
                                                    ? 'white'
                                                    : 'black',height:"40px"
                                            }}
                                        >
                                            <img
                                                src={worker.iconClass}
                                                alt={worker.label}
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    marginTop: '0px',
                                                    filter: selectedOutsideWork2.includes(worker.id) ? 'grayscale(100%) brightness(0) invert(1)' : 'none',
                                                }}
                                                className="me-2"
                                            />
                                            <div>
                                                <div className="">{worker.label}</div>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            name={`outsideWorkWorker${worker.id}`}
                                            id={`workerType${worker.id}`}
                                            checked={selectedOutsideWork2.includes(
                                                worker.id
                                            )}
                                            onChange={() =>
                                                toggleOutsideWork2Selection(
                                                    worker.id,
                                                    setSelectedOutsideWork2,
                                                    selectedOutsideWork2
                                                )
                                            }
                                            style={{ display: 'none' }} // Hide default checkbox
                                        />
                                    </label>
                                ))}
                            </div>

                            <span>New building</span>
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: '#41619A' }}
                            >
                                {newbuilding.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className={`card-radio-label text-center ${selectedNewBuilding2.includes(worker.id)
                                            ? 'border-primary'
                                            : ''
                                            }`}
                                        style={{
                                            minWidth: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            toggleNewBuilding2Selection(
                                                worker.id,
                                                setSelectedNewBuilding2,
                                                selectedNewBuilding2
                                            )
                                        }
                                    >
                                        <div
                                            className={`card-radio py-1 px-3 border rounded-5 d-flex ${selectedNewBuilding2.includes(worker.id)
                                                ? 'selected'
                                                : ''
                                                }`}
                                            style={{
                                                background: selectedNewBuilding2.includes(
                                                    worker.id
                                                )
                                                    ? '#41619A'
                                                    : '#F4F8FC',
                                                color: selectedNewBuilding2.includes(
                                                    worker.id
                                                )
                                                    ? 'white'
                                                    : 'black',height:"40px"
                                            }}
                                        >
                                            <img
                                                src={worker.iconClass}
                                                alt={worker.label}
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    marginTop: '0px',
                                                    filter: selectedNewBuilding2.includes(worker.id) ? 'grayscale(100%) brightness(0) invert(1)' : 'none',
                                                }}
                                                className="me-2"
                                            />
                                            <div>
                                                <div className="">{worker.label}</div>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            name={`newBuildingWorker${worker.id}`}
                                            id={`workerType${worker.id}`}
                                            checked={selectedNewBuilding2.includes(
                                                worker.id
                                            )}
                                            onChange={() =>
                                                toggleNewBuilding2Selection(
                                                    worker.id,
                                                    setSelectedNewBuilding2,
                                                    selectedNewBuilding2
                                                )
                                            }
                                            style={{ display: 'none' }} // Hide the checkbox (handled via label click)
                                        />
                                    </label>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                    {}

                   <div className="d-flex flex-wrap">
                       <div className="actions clearfix text-start" style={{width:"50%"}}>
                       <button
                            style={{ width: '100px',backgroundColor:"#41619A", color:"#fff" }}
                            className={` btn p-2`}
                            onClick={() => {
                                toggleTab(activeTab - 1);
                            }}>
                         Previous
                        </button>
                        </div>
                        <div className="actions clearfix text-end" style={{width:"50%"}}>
                        <button
                            style={{ width: '100px',backgroundColor:"#41619A", color:"#fff" }}
                            className={` btn p-2 (activeTab === 3 ? "next disabled" : "next" )`}
                            onClick={() => {
                                toggleTab(activeTab + 1);
                            }}>
                         Next
                        </button>
                        
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ChooseCategories