import { useState } from 'react';
import NotFrameIcon from '../../../assets/images/leads/NotFrame icon.png';

export default function SmallJobForm() {
  const [activeSection, setActiveSection] = useState(null);

  const [superAdminOptions, setSuperAdminOptions] = useState([
    { id: 1, label: 'Bathroom', checked: false },
    { id: 2, label: 'Kitchen', checked: false },
    { id: 3, label: 'Toilet', checked: false },
    { id: 4, label: 'Washing room', checked: false },
    { id: 5, label: 'Living room', checked: false },
    { id: 6, label: 'Bedroom', checked: false },
    { id: 7, label: 'Children room', checked: false },
    { id: 8, label: 'Technical room', checked: false },
    { id: 9, label: 'Storage room', checked: false },
    { id: 10, label: 'Hallway', checked: false },
    { id: 11, label: 'Facade', checked: false },
    { id: 12, label: 'Roofing', checked: false },
    { id: 13, label: 'Ground work', checked: false },
    { id: 14, label: 'Superstructure and extension', checked: false },
    { id: 15, label: 'Garage', checked: false },
    { id: 16, label: 'New home', checked: false },
  ]);

  const [adminOptions, setAdminOptions] = useState([
    { id: 1, label: 'Option A', checked: false },
    { id: 2, label: 'Option B', checked: false },
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
    <div className="container-fluid position-relative vh-100 d-flex justify-content-center align-items-start">
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
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>{option.label}</span>
                      <input
                        type="checkbox"
                        checked={option.checked}
                        onChange={() =>
                          handleOptionChange('superAdmin', option.id)
                        }
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
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>{option.label}</span>
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
