import { useState } from 'react';
import NotFrameIcon from '../../../../assets/images/leads/NotFrameicon.png';
import BathroomIcon from '../../../../assets/images/users/usersview/bathroomicon.png';
import KitchenIcon from '../../../../assets/images/users/usersview/kitchenicon.png';
import ToiletIcon from '../../../../assets/images/users/usersview/toileticon.png';
import WashingIcon from '../../../../assets/images/leads/washingRoomIcon.png';
import LivingRoomIconRoom from '../../../../assets/images/leads/LivingRoomIcon.png';
import BedroomIcon from '../../../../assets/images/leads/BedroomIcon.png';
import ChildrenIcon from '../../../../assets/images/leads/ChildrenRoomIcon.png';
import TechnicalRoomIcon from '../../../../assets/images/leads/TechnicalRoomIcon.png';
import StorageRoomIcon from '../../../../assets/images/leads/storageRoomIcon.png';
import HallwayIcon from '../../../../assets/images/leads/HallwayIcon.png';
import FacadeIcon from '../../../../assets/images/leads/FacadeIcon.png';
import RoofingIcon from '../../../../assets/images/leads/roofingIcon.png';
import GroundWorkIcon from '../../../../assets/images/leads/GroundWorkIcon.png';
import ExtensionIcon from '../../../../assets/images/leads/extensionIcon.png';
import GarageIcon from '../../../../assets/images/leads/GarageIcon.png';
import NewHomeIcon from '../../../../assets/images/leads/NewHomeIcon.png';

//AdminImage
import CarpenterAndBuildingIcon from '../../../../assets/images/leads/CarpenterandbuildingtradesmenIcon.png';
import CleanerIcon from '../../../../assets/images/leads/CleanerIcon.png';
import DemolitionIcon from '../../../../assets/images/leads/DemolitiontilingandconcretesawingIcon.png';
import ElectricianIcon from '../../../../assets/images/leads/ElectricianIcon.png';
import FoundationAndLandscapingRoom from '../../../../assets/images/leads/FoundationandlandscapingworkerIcon.png';
import GlassIcon from '../../../../assets/images/leads/GlassmasterandglazierIcon.png';
import PlumberIcon from '../../../../assets/images/leads/PlumberIcon.png';
import RooferIcon from '../../../../assets/images/leads/roofingIcon.png';
import TilerBricklayerIcon from '../../../../assets/images/leads/TilerbricklayerandplasteringIcon.png';
import ProjectManagerIcon from '../../../../assets/images/leads/ProjectmanagerIcon.png';
import AppraiserIcon from '../../../../assets/images/leads/AppraiserIcon.png';
import BuilderIcon from '../../../../assets/images/leads/BuilderIcon.png';
import InteriorIcon from '../../../../assets/images/leads/InteriordesignerIcon.png';
import ArchitectIcon from '../../../../assets/images/leads/ArchitectIcon.png';
import { Link } from 'react-router-dom';

export default function SmallJobFormRequest() {
  const [activeSection, setActiveSection] = useState(null);

  const [superAdminOptions, setSuperAdminOptions] = useState([
    { id: 1, icon: BathroomIcon, label: 'Bathroom', checked: false },
    { id: 2, icon: KitchenIcon, label: 'Kitchen', checked: false },
    { id: 3, icon: ToiletIcon, label: 'Toilet', checked: false },
    { id: 4, icon: WashingIcon, label: 'Washing room', checked: false },
    { id: 5, icon: LivingRoomIconRoom, label: 'Living room', checked: false },
    { id: 6, icon: BedroomIcon, label: 'Bedroom', checked: false },
    { id: 7, icon: ChildrenIcon, label: 'Children room', checked: false },
    { id: 8, icon: TechnicalRoomIcon, label: 'Technical room', checked: false },
    { id: 9, icon: StorageRoomIcon, label: 'Storage room', checked: false },
    { id: 10, icon: HallwayIcon, label: 'Hallway', checked: false },
    { id: 11, icon: FacadeIcon, label: 'Facade', checked: false },
    { id: 12, icon: RoofingIcon, label: 'Roofing', checked: false },
    { id: 13, icon: GroundWorkIcon, label: 'Ground work', checked: false },
    {
      id: 14,
      icon: ExtensionIcon,
      label: 'Superstructure and extension',
      checked: false,
    },
    { id: 15, icon: GarageIcon, label: 'Garage', checked: false },
    { id: 16, icon: NewHomeIcon, label: 'New home', checked: false },
  ]);

  const [adminOptions, setAdminOptions] = useState([
    {
      id: 1,
      icon: CarpenterAndBuildingIcon,
      label: 'Carpenter and building tradesmen',
      checked: false,
    },
    { id: 2, icon: CleanerIcon, label: 'Cleaner', checked: false },
    {
      id: 3,
      icon: DemolitionIcon,
      label: 'Demolition, tiling and concrete sawing',
      checked: false,
    },
    { id: 4, icon: ElectricianIcon, label: ' Electrician', checked: false },
    {
      id: 5,
      icon: FoundationAndLandscapingRoom,
      label: 'Foundation and landscaping worker',
      checked: false,
    },
    {
      id: 6,
      icon: GlassIcon,
      label: 'Glass master and glazier',
      checked: false,
    },
    { id: 7, icon: PlumberIcon, label: 'Plumber', checked: false },
    {
      id: 8,
      icon: RooferIcon,
      label: 'Roofer and tinsmith',
      checked: false,
    },
    {
      id: 9,
      icon: TilerBricklayerIcon,
      label: 'Tiler, bricklayer and plastering',
      checked: false,
    },
    {
      id: 10,
      icon: ProjectManagerIcon,
      label: 'Project manager',
      checked: false,
    },
    { id: 11, icon: AppraiserIcon, label: 'Appraiser', checked: false },
    { id: 12, icon: BuilderIcon, label: 'Builder', checked: false },
    {
      id: 13,
      icon: InteriorIcon,
      label: 'Interior designer',
      checked: false,
    },
    {
      id: 14,
      icon: ArchitectIcon,
      label: 'Architect',
      checked: false,
    },
  ]);

  const handleOptionChange = (type, id) => {
    const updateOptions = (options) =>
      options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      );

    if (type === 'superAdmin') {
      setSuperAdminOptions(updateOptions(superAdminOptions));
    } else if (type === 'admin') {
      setAdminOptions(updateOptions(adminOptions));
    }
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="container-fluid position-relative vh-100 d-flex justify-content-center align-items-start" style={{marginTop:"100px"}}>
      {/* Blurred Background */}
      {/* <div className="blur-background"></div> */}

      {/* Form Card */}
      <div
        className="card p-4 shadow-lg position-absolute mt-4"
        style={{ maxWidth: '500px', width: '100%' }}
      >
        <div className="card-body">
          <h5 className="card-title mb-4 text-center">Send a Project</h5>
          <h5 className="mt-4 mb-4 text-center">
            Choose who will get the project request
          </h5>
          <form>
            {/* Super Admins Section */}
            <div>
              <div
                className="d-flex align-items-center justify-content-between mb-3"
                style={{
                  backgroundColor: '#F4F8FC',
                  height: '50px',
                  borderRadius: '5px',
                }}
              >
                <span className="p-3">Super admins</span>
                <div className="d-flex align-items-center p-2">
                  <span className="me-2 text-muted">
                    {superAdminOptions.filter((opt) => opt.checked).length}/16
                  </span>
                  <div className="form-check form-switch m-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="superAdminsSwitch"
                      checked={activeSection === 'superAdmin'}
                      onChange={() => toggleSection('superAdmin')}
                    />
                  </div>
                </div>
              </div>
              {activeSection === 'superAdmin' && (
                <div
                  className="mb-3 p-3"
                  style={{
                    backgroundColor: '#F9FAFB',
                    borderBottomLeftRadius: '5px',
                    borderBottomRightRadius: '5px',
                  }}
                >
                  {superAdminOptions.map((option) => (
                    <div
                      key={option.id}
                      className="d-flex align-items-center mb-2"
                      style={{ justifyContent: 'space-between', gap: '0px' }}
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={option.icon}
                          alt="icon"
                          className="mb-0"
                          style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '5px',
                          }}
                        />
                        <span>{option.label}</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={option.checked}
                        onChange={() => handleOptionChange('admin', option.id)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Admins Section */}
            <div>
              <div
                className="d-flex align-items-center justify-content-between mb-0"
                style={{
                  backgroundColor: '#F4F8FC',
                  height: '50px',
                  borderRadius: '5px',
                }}
              >
                <span className="p-3">Admins</span>
                <div className="d-flex align-items-center p-2">
                  <span className="me-2 text-muted">
                    {adminOptions.filter((opt) => opt.checked).length}/2
                  </span>
                  <div className="form-check form-switch m-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="adminsSwitch"
                      checked={activeSection === 'admin'}
                      onChange={() => toggleSection('admin')}
                    />
                  </div>
                </div>
              </div>
              {activeSection === 'admin' && (
                <div
                  className="mb-3 p-3"
                  style={{
                    backgroundColor: '#F9FAFB',
                    borderBottomLeftRadius: '5px',
                    borderBottomRightRadius: '5px',
                  }}
                >
                  {adminOptions.map((option) => (
                    <div
                      key={option.id}
                      className="d-flex align-items-center mb-2"
                      style={{ justifyContent: 'space-between', gap: '0px' }}
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={option.icon}
                          alt="icon"
                          className="mb-0"
                          style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '5px',
                          }}
                        />
                        <span>{option.label}</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={option.checked}
                        onChange={() => handleOptionChange('admin', option.id)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Information Text */}
            <div
              className="text-muted small mb-4 mt-4"
              style={{ fontSize: '13px' }}
            >
              <img src={NotFrameIcon} alt="" className="p-1" />
              After it is sent the customer will get access to the portal via
              e-mail.
            </div>

            {/* Action Buttons */}
            <div className="d-flex align-items-center justify-content-center gap-4">
              <button
                type="button"
                className="btn btn-secondary"
                style={{
                  backgroundColor: '#F4F8FC',
                  width: '100%',
                  maxWidth: '120px',
                  borderRadius: '5px',
                  border: 'none',
                  color: '#41619A',
                }}
              >
                Cancel
              </button>
              <Link to="/SendInvitationForm"> 
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: '#41619A',
                  width: '100%',
                  maxWidth: '120px',
                  borderRadius: '5px',
                }}
              >
                Send
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .blur-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          z-index: 1;
        }

        .card {
          z-index: 2; /* Place the card above the blurred background */
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
