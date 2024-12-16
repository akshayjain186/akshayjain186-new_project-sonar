import React from 'react'
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    Col,
    Row,

} from "reactstrap";
const ChooseCategories = ({ Rooms, outsidework, newbuilding, selectedWorker, toggleTab, activeTab ,type="smalljob"}) => {
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
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: "#41619A" }}
                            >
                                {Rooms.map((worker) => (
                                    <label
                                        className="card-radio-label  text-center"
                                        key={worker.id}
                                        style={{ minWidth: "auto" }}
                                    >
                                        <div
                                            className="card-radio py-1 border rounded-5 d-flex"
                                            style={{ background: "#F4F8FC" }}
                                        >
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
                                    </label>
                                ))}
                            </div>

                            <span>Outside work</span>
                            <div
                                className="d-flex flex-wrap  gap-3 mt-2"
                                style={{ color: "#41619A" }}
                            >
                                {outsidework.map((worker) => (
                                    <label
                                        className="card-radio-label text-center"
                                        key={worker.id}
                                        style={{ minWidth: "auto" }}
                                    >
                                        <div
                                            className="card-radio py-1 border rounded-5  d-flex"
                                            style={{ background: "#F4F8FC" }}
                                        >
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
                                    </label>
                                ))}
                            </div>
                            <span>New building</span>
                            <div
                                className="d-flex flex-wrap  gap-3 mt-2"
                                style={{ color: "#41619A" }}
                            >
                                {newbuilding.map((worker) => (
                                    <label
                                        className="card-radio-label text-center"
                                        key={worker.id}
                                        style={{ minWidth: "auto" }}
                                    >
                                        <div
                                            className="card-radio py-1 px-3 border rounded-5  d-flex "
                                            style={{ background: "#F4F8FC" }}
                                        >
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
                            <div
                                className="d-flex flex-wrap gap-3 mt-2"
                                style={{ color: "#41619A" }}
                            >
                                {Rooms.map((worker) => (
                                    <label
                                        key={worker.id}
                                        className="card-radio-label text-center"
                                        style={{ minWidth: "auto" }}
                                        onClick={() => setSelectedWorker(worker.id)}
                                    >
                                        <div
                                            className={`card-radio py-1 border rounded-5 d-flex ${selectedWorker === worker.id
                                                    ? "selected"
                                                    : ""
                                                }`}
                                            style={{
                                                background:
                                                    selectedWorker === worker.id
                                                        ? "blue"
                                                        : "#F4F8FC",
                                            }}
                                        >
                                            <img
                                                src={worker.iconClass}
                                                alt={worker.label}
                                                style={{
                                                    height: "20px",
                                                    width: "20px",
                                                    marginTop: "7px",
                                                }}
                                                className="me-2"
                                            />
                                            <div>
                                                <div
                                                    className="mt-2"
                                                    style={{
                                                        color:
                                                            selectedWorker === worker.id
                                                                ? "white"
                                                                : "#41619A",
                                                    }}
                                                >
                                                    {worker.label}
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                            <span>Outside work</span>
                            <div
                                className="d-flex flex-wrap  gap-3 mt-2"
                                style={{ color: "#41619A" }}
                            >
                                {outsidework.map((worker) => (
                                    <label
                                        className="card-radio-label text-center"
                                        key={worker.id}
                                        style={{ minWidth: "auto" }}
                                    >
                                        <div
                                            className="card-radio py-1 border rounded-5  d-flex"
                                            style={{ background: "#F4F8FC" }}
                                        >
                                            <img
                                                src={worker.iconClass}
                                                // alt={worker.label}
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
                                    </label>
                                ))}
                            </div>

                            <span>New building</span>
                            <div
                                className="d-flex flex-wrap  gap-3 mt-2"
                                style={{ color: "#41619A" }}
                            >
                                {newbuilding.map((worker) => (
                                    <label
                                        className="card-radio-label text-center"
                                        key={worker.id}
                                        style={{ minWidth: "auto" }}
                                    >
                                        <div
                                            className="card-radio py-1 px-3 border rounded-5  d-flex "
                                            style={{ background: "#F4F8FC" }}
                                        >
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
                                    </label>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                    <div className="actions clearfix text-end">
                        <button
                            style={{ width: "100px" }}
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

export default ChooseCategories