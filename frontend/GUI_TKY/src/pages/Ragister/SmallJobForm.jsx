import React, { useState } from "react";
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
import "./Register.scss";
//images
// import washingroom from "../../assets/images/washingroom.png";
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
import Interiordesigner from "../../assets/images/icons/Builder.png";
import ProjectmanagerIcon from "../../assets/images/icons/Project managerIcon.png";
import Bathroom from "../../assets/images/icons/Bathroomicon.png";
// import Kitchen from "../../assets/images/kItchenicon.png";
import Toilet from "../../assets/images/icons/Toileticon.png";
import Livingroom from "../../assets/images/icons/Livingicon.png";
import Bedroom from "../../assets/images/icons/Bedroomicon.png";
import Childrenroom from "../../assets/images/icons/Childrenicon.png";
import Technicalroom from "../../assets/images/icons/Technicalicon.png";
import Storageroom from "../../assets/images/icons/Storageicon.png";
import Hallway from "../../assets/images/icons/Hallwayicon.png";
import Groundwork from "../../assets/images/icons/Groundicon.png";
import Superstructure from "../../assets/images/icons/Superstructureicon.png";
import Garage from "../../assets/images/icons/Garageicon.png";
import Newhome from "../../assets/images/icons/homeicon.png";
import ChooseWorkType from "./ChooseWorkType";
import ChooseCategories from "./ChooseCategories";
import DescriptionContactInfo from "./DescriptionContactInfo";


const SmallJobForm = () => {
    const [data_attr, setData_attr] = useState(0);
    const Rooms = [
      { id: 1, label: "Bathroom", iconClass: Bathroom },
    //   { id: 2, label: "Kitchen", iconClass: Kitchen },
      { id: 3, label: "Toilet", iconClass: Toilet },
    //   { id: 4, label: "Washing room", iconClass: washingroom },
      { id: 5, label: "Living room", iconClass: Livingroom },
      { id: 6, label: "Bedroom", iconClass: Bedroom },
      { id: 7, label: "Children room", iconClass: Childrenroom },
      { id: 8, label: "Technical room", iconClass: Technicalroom },
      { id: 9, label: "Storage room", iconClass: Storageroom },
      { id: 10, label: "Hallway", iconClass: Hallway },
    ];
    const outsidework = [
      { id: 1, label: "Facade", iconClass: landscapingIcon },
      { id: 2, label: "Roofing", iconClass: RooferandtinsmithIcon },
      { id: 3, label: "Ground work", iconClass: Groundwork },
    ];
    const newbuilding = [
      { id: 1, label: "Superstructure and extension", iconClass: Superstructure },
      { id: 2, label: "Garage", iconClass: Garage },
      { id: 3, label: "New home", iconClass: Newhome },
    ];
    const workerTypes = [
      {
        id: 1,
        label: "Carpenter and building tradesmen",
        iconClass: CarpenterIcon,
      },
      { id: 2, label: "Cleaner", iconClass: CleanerIcon },
      {
        id: 3,
        label: "Demolition, tiling and concrete sawing",
        iconClass: DemolitionIcon,
      },
      { id: 4, label: "Electrician", iconClass: electricianicon },
      {
        id: 5,
        label: "Foundation and landscaping worker",
        iconClass: landscapingIcon,
      },
      { id: 6, label: "Glass master and glazier", iconClass: GlassmasterIcon },
      { id: 7, label: "Plumber", iconClass: PlumberIcon },
      { id: 8, label: "Roofer and tinsmith", iconClass: RooferandtinsmithIcon },
      { id: 9, label: "Tiler, bricklayer and plastering", iconClass: TilerIcon },
    ];
    const Projectm = [
      { id: 1, label: "Appraiser", iconClass: AppraiserIcon },
      { id: 2, label: "Architect", iconClass: ArchitectIcon },
      { id: 3, label: "Builder", iconClass: Builder },
      { id: 4, label: "Interior designer", iconClass: Interiordesigner },
      { id: 5, label: "Project manage", iconClass: ProjectmanagerIcon },
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
    }  const handleProjectManagerSelect = (id) => {
      setSelectedProjectManagers(
        (prevSelected) =>
          prevSelected.includes(id)
            ? prevSelected.filter((managerId) => managerId !== id) // Deselect if already selected
            : [...prevSelected, id] // Add to selection if not selected
      );
    };

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
                <ChooseWorkType workerTypes={workerTypes } selectedWorker={ selectedWorker} Projectm={Projectm}  toggleTab={toggleTab} activeTab={activeTab}/>
                </TabPane>
                <TabPane tabId={2}>
                  <ChooseCategories Rooms={Rooms}  outsidework={outsidework} newbuilding={newbuilding} selectedWorker={selectedWorker} toggleTab={toggleTab} activeTab={activeTab}/>
                </TabPane>
                <TabPane tabId={3}>
                  <DescriptionContactInfo/>
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

  export default  SmallJobForm ;
  