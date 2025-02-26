import React from 'react';
import { useState } from 'react';
import { Col, Container, Row, TabContent, TabPane, Button } from 'reactstrap';
import './Register.scss';

import { Link } from 'react-router-dom';

//images
// import washingroom from "../../../assets/images/washingroom.png";
import electricianicon from '../../assets/images/icons/electrician-icon.svg';
import AppraiserIcon from '../../assets/images/icons/AppraiserIcon.png';
import CarpenterIcon from '../../assets/images/icons/CarpenterIcon .png';
import CleanerIcon from '../../assets/images/icons/CleanerIcon .png';
import DemolitionIcon from '../../assets/images/icons/DemolitionIcon .png';
import landscapingIcon from '../../assets/images/icons/landscapingIcon .png';
import GlassmasterIcon from '../../assets/images/icons/GlassmasterIcon .png';
import PlumberIcon from '../../assets/images/icons/PlumberIcon.png';
import RooferandtinsmithIcon from '../../assets/images/icons/Roofer and tinsmithIcon.png';
import TilerIcon from '../../assets/images/icons/TilerIcon .png';
import ArchitectIcon from '../../assets/images/icons/ArchitectIcon.png';
import Builder from '../../assets/images/icons/Builder.png';
import Interiordesigner from '../../assets/images/icons/Interiordesigner.png';
import ProjectmanagerIcon from '../../assets/images/icons/Project managerIcon.png';
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
import Newhome from '../../assets/images/icons/homeicon.png';
import Appertment from '../../assets/images/icons/Appertment.png';
import ChooseBigWorkType from './ChooseBigWorkType';
import ChooseBigCategories from './ChooseBigCategories';
import ChooseBigContanctInfo from './ChooseBigContanctInfo';

import logo from '../../assets/images/turnkeylogo222.png';
import Header from '../Header/Header';
function BigJobForm() {
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [selectedProjectManagers, setSelectedProjectManagers] = useState([]);
  const [selectedNewBuildingManagers, setSelectedNewBuildingManagers] =
    useState([]);
  const worker = [
    {
      id: 1,
      label: 'Carpenter and building tradesmen',
      iconClass: CarpenterIcon,
    },
    { id: 2, label: 'Cleaner', iconClass: CleanerIcon },
    {
      id: 3,
      label: 'Demolition, tiling and concrete sawing',
      iconClass: DemolitionIcon,
    },
    { id: 4, label: 'Electrician', iconClass: electricianicon },
    {
      id: 5,
      label: 'Foundation and landscaping worker',
      iconClass: landscapingIcon,
    },
    { id: 6, label: 'Glass master and glazier', iconClass: GlassmasterIcon },
    { id: 7, label: 'Plumber', iconClass: PlumberIcon },
    { id: 8, label: 'Roofer and tinsmith', iconClass: RooferandtinsmithIcon },
    { id: 9, label: 'Tiler, bricklayer and plastering', iconClass: TilerIcon },
  ];
  const projectmanager = [
    { id: 1, label: 'Appraiser', iconClass: landscapingIcon },
    { id: 2, label: 'Architect', iconClass: RooferandtinsmithIcon },
    { id: 3, label: 'Builder', iconClass: Builder },
    { id: 4, label: 'interiordesigner', iconClass: Interiordesigner },
    { id: 5, label: 'Projectmanager', iconClass: ProjectmanagerIcon },
    //   { id: 2, label: "Garage", iconClass: Garage },
    //   { id: 3, label: "New home", iconClass: Newhome },
  ];

  const Roomsrenovation = [
    {
      id: 1,
      label: 'Bathroom',
      iconClass: CarpenterIcon,
    },
    { id: 2, label: 'Washing room', iconClass: CleanerIcon },
    {
      id: 3,
      label: 'Living room',
      iconClass: DemolitionIcon,
    },
    { id: 4, label: 'kitchen', iconClass: electricianicon },
    {
      id: 5,
      label: 'Toilet',
      iconClass: landscapingIcon,
    },
    { id: 6, label: 'Bedroom', iconClass: GlassmasterIcon },
    { id: 7, label: 'Children room', iconClass: PlumberIcon },
    { id: 8, label: 'Technical room', iconClass: RooferandtinsmithIcon },
    { id: 11, label: 'Storage room', iconClass: TilerIcon },
    { id: 10, label: 'Hallway', iconClass: RooferandtinsmithIcon },
    { id: 9, label: 'Other', iconClass: TilerIcon },
  ];
  const Outsidework = [
    { id: 1, label: 'Facade', iconClass: AppraiserIcon },
    { id: 2, label: 'Roofing', iconClass: ArchitectIcon },
    { id: 3, label: 'Ground work', iconClass: Builder },
  ];
  const Newbuilding = [
    { id: 1, label: 'Superstructure an extension', iconClass: AppraiserIcon },
    { id: 2, label: 'Build a garage', iconClass: ArchitectIcon },
    { id: 3, label: 'New home', iconClass: Builder },
  ];
  //meta title
  document.title = 'Ragister | Trunkey';

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
    <>
      <Header />
      <React.Fragment>
        <Container fluid={true} style={{ fontFamily: 'Montserrat',marginTop:" 75px"}}>
          <div className="text-center mb-4 ">
            <Row className="justify-content-center">
              <Col lg="10">
                <button className="border-0 rounded-4 p-2 mt-3 text-muted">
                  Big job request
                </button>
              </Col>
            </Row>
          </div>
          <div className="text-center mb-4">
            <Row className="justify-content-center">
              <Col lg="10">
                <h4 className="fs-3 fw-bold ">Register your next project!</h4>
                <span className="text-muted fs-5">
                  Let us what you need and we'll be in touch as soon as possible{' '}
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
                          activeTab >= 1 ? 'completed' : ''
                        }`}
                      >
                        <div
                          className={`bigcircle ms-3 ${
                            activeTab === 1 ? 'active' : ''
                          } ${activeTab >= 1 ? 'completed' : ''}`}
                          onClick={() => activeTab >= 1 && setactiveTab(1)}
                        >
                          <div
                            className={`circle  ${
                              activeTab === 1 ? 'active' : ''
                            } ${activeTab >= 1 ? 'completed' : ''}`}
                          ></div>
                        </div>
                        <span className="label">Work type</span>
                      </div>
                      <div
                        className={`line mb-4  ${
                          activeTab > 1 ? 'completed' : ''
                        }`}
                      ></div>
                      <div
                        className={`step ${activeTab >= 2 ? 'completed' : ''}`}
                      >
                        <div
                          className={`bigcircle ms-4 ${
                            activeTab === 2 ? 'active' : ''
                          } ${activeTab >= 2 ? 'completed' : ''}`}
                          onClick={() => activeTab >= 2 && setactiveTab(2)}
                        >
                          <div
                            className={`circle  ${
                              activeTab === 2 ? 'active' : ''
                            } ${activeTab >= 2 ? 'completed' : ''}`}
                          ></div>
                        </div>
                        <span className="label">Choose categories</span>
                      </div>
                      <div
                        className={`mb-4 line me-3 ${
                          activeTab > 2 ? 'completed' : ''
                        }`}
                      ></div>
                      <div
                        className={`step ${activeTab >= 3 ? 'completed' : ''}`}
                      >
                        <div
                          className={`bigcircle ${
                            activeTab === 3 ? 'active' : ''
                          }`}
                          onClick={() => activeTab >= 3 && setactiveTab(3)}
                        >
                          <div
                            className={`circle ${
                              activeTab === 3 ? 'active' : ''
                            }`}
                          ></div>
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
                      <ChooseBigWorkType
                        Roomsrenovation={Roomsrenovation}
                        selectedWorkers={selectedWorkers}
                        Outsidework={Outsidework}
                        selectedProjectManagers={selectedProjectManagers}
                        Newbuilding={Newbuilding}
                        selectedNewBuildingManagers={
                          selectedNewBuildingManagers
                        }
                        toggleTab={toggleTab}
                        activeTab={activeTab}
                      />
                    </TabPane>
                    <TabPane tabId={2}>
                      <ChooseBigCategories
                        worker={worker}
                        projectmanager={projectmanager}
                        toggleTab={toggleTab}
                        activeTab={activeTab}
                      />
                    </TabPane>
                    <TabPane tabId={3}>
                      <ChooseBigContanctInfo  
                       toggleTab={toggleTab}
                        activeTab={activeTab} />
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </>
  );
}

export default BigJobForm;
