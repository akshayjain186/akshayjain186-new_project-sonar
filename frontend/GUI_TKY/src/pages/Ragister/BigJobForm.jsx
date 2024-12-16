import React from 'react'
import  { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  InputGroup,
  TabContent,
  TabPane,
  Button,
} from "reactstrap";
import "./Register.scss";

import { Link } from "react-router-dom";

//images
// import washingroom from "../../../assets/images/washingroom.png";
import electricianicon from "../../assets/images/icons/electrician-icon.svg";
import AppraiserIcon from "../../assets/images/icons/AppraiserIcon.png";
import CarpenterIcon from "../../assets/images/icons/CarpenterIcon .png";
import CleanerIcon from "../../assets/images/icons/CleanerIcon .png";
import DemolitionIcon from "../../assets/images/icons/DemolitionIcon .png";
import landscapingIcon from "../../assets/images/icons/landscapingIcon .png";
import GlassmasterIcon from "../../assets/images/icons/GlassmasterIcon .png";
import PlumberIcon from "../../assets/images/icons/PlumberIcon.png";
import RooferandtinsmithIcon from "../../assets/images/icons/Roofer and tinsmithIcon.png";
import TilerIcon from "../../assets/images/icons/TilerIcon .png";
import ArchitectIcon from "../../assets/images/icons/ArchitectIcon.png";
import Builder from "../../assets/images/icons/Builder.png";
import Interiordesigner from "../../assets/images/icons/Interiordesigner.png";
import ProjectmanagerIcon from "../../assets/images/icons/Project managerIcon.png";
// import Bathroom from "../../../assets/images/icons/Bathroomicon.png";
// import Kitchen from "../../assets/images/kItchenicon.png";
// import Toilet from "../../../assets/images/icons/Toileticon.png";
// import Livingroom from "../../../assets/images/icons/Livingicon.png";
// import Bedroom from "../../../assets/images/icons/Bedroomicon.png";
// import Childrenroom from "../../../assets/images/icons/Childrenicon.png";
// import Technicalroom from "../../../assets/images/icons/Technicalicon.png";
// import Storageroom from "../../../assets/images/icons/Storageicon.png";
// import Hallway from "../../../assets/images/icons/Hallwayicon.png";
// import Groundwork from "../../../assets/images/icons/Groundicon.png";
// import Superstructure from "../../../assets/images/icons/Superstructureicon.png";
// import Garage from "../../../assets/images/icons/Garageicon.png";
import Newhome from "../../assets/images/icons/homeicon.png";
import Appertment from '../../assets/images/icons/Appertment.png'
 function BigJobForm() {
const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [selectedProjectManagers, setSelectedProjectManagers] = useState([]);
  const [selectedNewBuildingManagers, setSelectedNewBuildingManagers] =
    useState([]);
  
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





    const [data_attr, setData_attr] = useState(0);
    const worker = [
      { id: 1, label: "Carpenter and building tradesmen", iconClass: CarpenterIcon },
      { id: 2, label: "Cleaner", iconClass: CleanerIcon },
      { id: 3, label: "Demolition, tiling and concrete sawing", iconClass: DemolitionIcon },
      { id: 4, label: "Electrician", iconClass: electricianicon},
      { id: 5, label: "Foundation and landscaping worker", iconClass: landscapingIcon },
      { id: 6, label: "Glass master and glazier", iconClass: GlassmasterIcon},
      { id: 7, label: "Plumber", iconClass: PlumberIcon },
      { id: 8, label: "Roofer and tinsmith", iconClass: RooferandtinsmithIcon},
      { id: 9, label: "Tiler, bricklayer and plastering", iconClass: TilerIcon },
     
    ];
    const projectmanager = [
      { id: 1, label: "Appraiser", iconClass: landscapingIcon },
      { id: 2, label: "Architect", iconClass: RooferandtinsmithIcon },
      { id: 3, label: "Builder", iconClass:  Builder },
      { id: 4, label: "interiordesigner", iconClass: Interiordesigner },
      { id: 5, label: "Projectmanager", iconClass: ProjectmanagerIcon },
    //   { id: 2, label: "Garage", iconClass: Garage },
    //   { id: 3, label: "New home", iconClass: Newhome },
    ];
  
  
  const toggleSelection = (id, setSelected, selected) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  
    const Roomsrenovation = [
      {
        id: 1,
        label: "Bathroom",
        iconClass: CarpenterIcon,
      },
      { id: 2, label: "Washing room", iconClass: CleanerIcon },
      {
        id: 3,
        label: "Living room",
        iconClass: DemolitionIcon,
      },
      { id: 4, label: "kitchen", iconClass: electricianicon },
      {
        id: 5,
        label: "Toilet",
        iconClass: landscapingIcon,
      },
      { id: 6, label: "Bedroom", iconClass: GlassmasterIcon },
      { id: 7, label: "Children room", iconClass: PlumberIcon },
      { id: 8, label: "Technical room", iconClass: RooferandtinsmithIcon },
      { id: 11, label: "Storage room", iconClass: TilerIcon },
      { id: 10, label: "Hallway", iconClass: RooferandtinsmithIcon },
      { id: 9, label: "Other", iconClass: TilerIcon },
    ];
    const Outsidework = [
      { id: 1, label: "Facade", iconClass: AppraiserIcon },
      { id: 2, label: "Roofing", iconClass: ArchitectIcon },
      { id: 3, label: "Ground work", iconClass: Builder },
    ];
    const Newbuilding = [
        { id: 1, label: "Superstructure an extension", iconClass: AppraiserIcon },
        { id: 2, label: "Build a garage", iconClass: ArchitectIcon },
        { id: 3, label: "New home", iconClass: Builder },
      ];
    //meta title
    document.title = "Ragister | Trunkey";
  
    const [activeTab, setactiveTab] = useState(1);
    const [passedSteps, setPassedSteps] = useState([1]);
    const [selectedWorker, setSelectedWorker] = useState();
  
    function toggleTab(tab) {
      if (activeTab !== tab) {
        var modifiedSteps = [...passedSteps, tab];
        if (tab >= 1 && tab <= 4) {
          setactiveTab(tab);
          setPassedSteps(modifiedSteps);
        }
      }
    }
  return (
    <React.Fragment>
      <Container fluid={true} style={{ fontFamily: "Montserrat" }}>
        <div className="text-center mb-4 ">
          <Row className="justify-content-center">
            <Col lg="10">
              <button className="border-0 rounded-4 p-2 mt-3 text-muted">
                Small job request
              </button>
            </Col>
          </Row>
        </div>
        <div className="text-center mb-4">
          <Row className="justify-content-center">
            <Col lg="10">
              <h4 className="fs-3 fw-bold ">Register your next project!</h4>
              <span className="text-muted fs-5">
                Let us what you need and we'll be in touch as soon as possible{" "}
              </span>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg="12">
            <div className="wizard clearfix">
              <Row className="justify-content-center">
                {/* <Col lg="6">
                  <div className="progress-bar-container">
                    <div
                      className={`step me-3 ${
                        activeTab >= 1 ? "completed" : ""
                      }`}
                    >
                      <div
                        className={`circle ms- ${
                          activeTab === 1 ? "active" : ""
                        } ${activeTab >= 1 ? "completed" : ""}`}
                        onClick={() => activeTab >= 1 && setactiveTab(1)}
                      >
                        1
                      </div>
                      <span className="label">Work type</span>
                    </div>
                    <div
                      className={`line mb-4  ${
                        activeTab > 1 ? "completed" : ""
                      }`}
                    ></div>
                    <div
                      className={`step ${activeTab >= 2 ? "completed" : ""}`}
                    >
                      <div
                        className={`circle ms-4 ${
                          activeTab === 2 ? "active" : ""
                        } ${activeTab >= 2 ? "completed" : ""}`}
                        onClick={() => activeTab >= 2 && setactiveTab(2)}
                      >
                        2
                      </div>
                      <span className="label">Choose categories</span>
                    </div>
                    <div
                      className={`mb-4 line me-3 ${
                        activeTab > 2 ? "completed" : ""
                      }`}
                    ></div>
                    <div
                      className={`step ${activeTab >= 3 ? "completed" : ""}`}
                    >
                      <div
                        className={`circle ${activeTab === 3 ? "active" : ""}`}
                        onClick={() => activeTab >= 3 && setactiveTab(3)}
                      >
                        3
                      </div>
                      <span className="label">
                        Description and contact info
                      </span>
                    </div>
                  </div>
                </Col> */}
                  <Col lg="6">
                <div className="progress-bar-container">
                  <div
                    className={`step me-3 ${
                      activeTab >= 1 ? "completed" : ""
                    }`}
                  >
                    <div
                      className={`bigcircle ms-3 ${
                        activeTab === 1 ? "active" : ""
                      } ${activeTab >= 1 ? "completed" : ""}`}
                      onClick={() => activeTab >= 1 && setactiveTab(1)}
                    >
                      <div  className={`circle  ${
                        activeTab === 1 ? "active" : ""
                      } ${activeTab >= 1 ? "completed" : ""}`}>
                        
                      </div>
                      
                    </div>
                    <span className="label">Work type</span>
                  </div>
                  <div
                    className={`line mb-4  ${
                      activeTab > 1 ? "completed" : ""
                    }`}
                  ></div>
                  <div
                    className={`step ${activeTab >= 2 ? "completed" : ""}`}
                  >
                    <div
                      className={`bigcircle ms-4 ${
                        activeTab === 2 ? "active" : ""
                      } ${activeTab >= 2 ? "completed" : ""}`}
                      onClick={() => activeTab >= 2 && setactiveTab(2)}
                    >
                      <div  className={`circle  ${
                        activeTab === 2 ? "active" : ""
                      } ${activeTab >= 2 ? "completed" : ""}`}>

                      </div>
                    </div>
                    <span className="label">Choose categories</span>
                  </div>
                  <div
                    className={`mb-4 line me-3 ${
                      activeTab > 2 ? "completed" : ""
                    }`}
                  ></div>
                  <div
                    className={`step ${activeTab >= 3 ? "completed" : ""}`}
                  >
                    <div
                      className={`bigcircle ${activeTab === 3 ? "active" : ""}`}
                      onClick={() => activeTab >= 3 && setactiveTab(3)}
                    >
                      <div className={`circle ${activeTab === 3 ? "active" : ""}`}
                      >

                      </div>
                    </div>
                    <span className="label">
                      Description and contact info
                    </span>
                  </div>
                </div>
              </Col>
              </Row>

              <div className="content clearfix">
                <TabContent activeTab={activeTab} className="body">
                  <TabPane tabId={1}>
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
                                  className={`card-radio-label text-start ${
                                    selectedWorkers.includes(worker.id)
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
                                    className={`card-radio py-4 border rounded d-flex text-start ${
                                      selectedWorkers.includes(worker.id)
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
                                  className={`card-radio-label text-center ${
                                    selectedProjectManagers.includes(worker.id)
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
                                    className={`card-radio py-4 px-5 border rounded d-flex ${
                                      selectedProjectManagers.includes(
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
                                  className={`card-radio-label text-center ${
                                    selectedNewBuildingManagers.includes(
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
                                    className={`card-radio py-4 px-5 border rounded d-flex ${
                                      selectedNewBuildingManagers.includes(
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
                    </Row>
                  </TabPane>
                  <TabPane tabId={2}>
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
                                  className={`card-radio-label text-center ${
                                    selectedBathroomWorkers.includes(worker.id)
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
                                    className={`card-radio py-1 border rounded-5 d-flex ${
                                      selectedBathroomWorkers.includes(
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
                                  className={`card-radio-label text-center ${
                                    selectedOutsideWorks.includes(worker.id)
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
                                    className={`card-radio py-1 border rounded-5 d-flex ${
                                      selectedOutsideWorks.includes(worker.id)
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
                                  className={`card-radio-label text-center ${
                                    selectedKitchenWorkers.includes(worker.id)
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
                                    className={`card-radio py-1 border rounded-5 d-flex ${
                                      selectedKitchenWorkers.includes(worker.id)
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
                                  className={`card-radio-label text-center ${
                                    selectedOutsideWorkers2.includes(worker.id)
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
                                    className={`card-radio py-1 border rounded-5 d-flex ${
                                      selectedOutsideWorkers2.includes(
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
                  </TabPane>
                  <TabPane tabId={3}>
                    <Row className="justify-content-center">
                      <Col xl="8" sm="8">
                        <Card>
                          <CardBody>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <h4 className="fw-normal">
                                    Genral Information
                                  </h4>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input1">
                                      Type of home
                                    </Label>
                                    <span className="input-group-text bg-white">
                                      <img
                                        src={Appertment}
                                        style={{
                                          height: '25px',
                                          width: '25px',
                                        }}
                                      />{' '}
                                      <Input
                                        type="text"
                                        className="form-control border-0"
                                        id="basicpill-firstname-input1"
                                        placeholder="Apartment"
                                      />
                                    </span>
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mt-2">
                                    <Label for="basicpill-firstname-input1"></Label>

                                    <span className="input-group-text bg-white">
                                      <img
                                        src={Newhome}
                                        style={{
                                          height: '25px',
                                          width: '25px',
                                        }}
                                      />{' '}
                                      <Input
                                        type="text"
                                        className="form-control border-0"
                                        id="basicpill-firstname-input1"
                                        placeholder="House"
                                      />
                                    </span>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-phoneno-input3">
                                      Project address
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input3"
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>City</Label>
                                    <select
                                      className="form-select"
                                      placeholder="Text here..."
                                    >
                                      <option defaultValue>indore</option>
                                      <option value="AE">pune</option>
                                      <option value="VI">Visa</option>
                                      <option value="MC">MasterCard</option>
                                      <option value="DI">Discover</option>
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      General comment
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows=""
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xl="8" sm="8">
                        <Card>
                          <CardBody>
                            <div class="mb-2">
                              <div className="d-flex">
                                <div>
                                  <img
                                    // src={Kitchen}
                                    className="ms-0 me-2 h-75 w-75"
                                  />
                                </div>
                                <div>
                                  <h5 className="d-flex gap-2 fw-normal">
                                    Kitchen
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      Description
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows="3"
                                      placeholder="Give us brief description of what you need..."
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <div class="mb-3">
                                <a
                                  href="#"
                                  id="attachment"
                                  class="btn btn-link"
                                >
                                  <i class="bx bx-paperclip"></i> Add Attachment
                                </a>
                              </div>
                              <div className="mb-3">
                                <Label>Room floor</Label>
                                <div className="d-flex border">
                                  <span
                                    className="d-flex"
                                    onClick={() => {
                                      setData_attr(data_attr - 1);
                                    }}
                                  >
                                    <Button type="button" color="white ">
                                      <i className="mdi mdi-minus" />
                                    </Button>
                                  </span>
                                  <input
                                    type="number"
                                    className="form-control border-0 text-center"
                                    value={data_attr}
                                    placeholder="number"
                                    readOnly
                                  />
                                  <span
                                    className=""
                                    onClick={() => {
                                      setData_attr(data_attr + 1);
                                    }}
                                  >
                                    <Button type="button" color="white">
                                      <i className="mdi mdi-plus" />
                                    </Button>
                                  </span>
                                </div>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xl="8" sm="8">
                        <Card>
                          <CardBody>
                            <Col lg="12">
                              <div class="mb-2">
                                <div className="d-flex">
                                  <div>
                                    {/* <img
                                      src={washingroom}
                                      className="h-75 w-100"
                                    /> */}
                                  </div>
                                  <div>
                                    <h5 className="d-flex gap-2 fw-normal ms-2">
                                      Washing room
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      Description
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows="3"
                                      placeholder="Give us brief description of what you need..."
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <div class="mb-3">
                                <a
                                  href="#"
                                  id="attachment"
                                  class="btn btn-link"
                                >
                                  <i class="bx bx-paperclip"></i> Add Attachment
                                </a>
                              </div>

                              <div className="mb-3">
                                <Label>Room floor</Label>
                                <div className="d-flex border">
                                  <span
                                    className="d-flex"
                                    onClick={() => {
                                      setData_attr(data_attr - 1);
                                    }}
                                  >
                                    <Button type="button" color="white ">
                                      <i className="mdi mdi-minus" />
                                    </Button>
                                  </span>
                                  <input
                                    type="number"
                                    className="form-control border-0 text-center"
                                    value={data_attr}
                                    placeholder="number"
                                    readOnly
                                  />
                                  <span
                                    className=""
                                    onClick={() => {
                                      setData_attr(data_attr + 1);
                                    }}
                                  >
                                    <Button type="button" color="white">
                                      <i className="mdi mdi-plus" />
                                    </Button>
                                  </span>
                                </div>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xl="8" sm="8">
                        <Card>
                          <CardBody>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <h4 className="fw-normal">
                                    Contact Information
                                  </h4>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input1">
                                      Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input1"
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-lastname-input2">
                                      Surname
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-lastname-input2"
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-phoneno-input3">
                                      Phone
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input3"
                                      placeholder="Text here..."
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-phoneno-input3">
                                      Phone
                                    </Label>
                                    <div className="d-flex">
                                      <select
                                        className="form-control me-2"
                                        style={{ maxWidth: '100px' }}
                                      >
                                        <option value="+1">+1 (US)</option>
                                        <option value="+91">+91 (India)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+61">
                                          +61 (Australia)
                                        </option>
                                      </select>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="basicpill-phoneno-input3"
                                        placeholder="xxxxxxxxxx"
                                      />
                                    </div>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </CardBody>
                        </Card>
                        <div className="actions clearfix text-end">
                          <button
                            style={{ width: '100px' }}
                            className={` btn btn-primary p-2 text-white (activeTab === 3 ? "next disabled" : "next" )`}
                          >
                            Send
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default BigJobForm;