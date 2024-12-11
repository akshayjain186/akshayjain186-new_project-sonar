import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import adminELogo from '../../../../assets/images/users/usersview/AdminE logo.png';

export default function AdminViewPlan() {
  const [selectedPlan, setSelectedPlan] = useState('Admin BASIC');
  const [selectedDesignations, setSelectedDesignations] = useState(['Plumber']);
  const [selectedCounties, setSelectedCounties] = useState([]);

  const plans = [
    {
      name: 'Admin BASIC',
      price: '200 kr/month',
      features: ['Up to 2 designations', 'Covers 1 area', 'Up to 10 employees'],
    },
    {
      name: 'Admin ADVANCED',
      price: '500 kr/month',
      features: [
        'Up to 4 designations',
        'Covers 5 areas',
        'Up to 30 employees',
      ],
    },
    {
      name: 'Super admin BASIC',
      price: '800 kr/month',
      features: ['Covers 10 areas', 'Up to 50 employees', 'Up to 10 admins'],
    },
    {
      name: 'Super admin ADVANCED',
      price: '1500 kr/month',
      features: ['Covers all areas', 'Unlimited employees', 'Unlimited admins'],
    },
  ];

  const designations = [
    'Carpenter and building tradesmen',
    'Cleaner',
    'Electrician',
    'Plumber',
    'Demolition, tiling and concrete sawing',
    'Tiler, bricklayer and plastering',
    'Foundation and landscaping worker',
    'Glass master and glazier',
    'Builder',
    'Roofer and tinsmith',
    'Interior designer',
    'Appraiser',
  ];

  const counties = {
    Oslo: [],
    'Vestfold og Telemark': [],
    Viken: [
      'Asker',
      'Drammen',
      'Fredrikstad',
      'Bærum',
      'Ås',
      'Lørenskog',
      'Nittedal',
      'Holmestrand',
      'Hurdal',
      'Halden',
    ],
    Agder: [],
    Nordland: [],
    Innlandet: [],
  };

  const toggleDesignation = (designation) => {
    setSelectedDesignations((prev) =>
      prev.includes(designation)
        ? prev.filter((d) => d !== designation)
        : [...prev, designation]
    );
  };

  const toggleCounty = (county) => {
    setSelectedCounties((prev) =>
      prev.includes(county)
        ? prev.filter((c) => c !== county)
        : [...prev, county]
    );
  };

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-4">
        <img
          src={adminELogo}
          alt="Logo"
          style={{ width: '100px', height: '100px', marginRight: '15px' }}
        />
        <h1 className="mb-0">Elektro Solutions</h1>
      </div>

      <h2 className="mb-4">Change Subscription Plan</h2>
      <div className="row mb-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div
              className={`card ${
                selectedPlan === plan.name ? 'border-primary' : ''
              }`}
              onClick={() => setSelectedPlan(plan.name)}
              style={{
                cursor: 'pointer',
                borderRadius: 10,
                border:
                  selectedPlan === plan.name ? '2px solid #41619A' : 'none',
              }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  {plan.name}
                  {selectedPlan === plan.name && (
                    <img
                      //   src={checkmarkImage}
                      //   alt="Selected"
                      style={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '10px',
                      }}
                    />
                  )}
                </h5>

                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-end ">
                  <h6 className="card-subtitle  text-muted">{plan.price}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" card   shadow-sm" style={{ backgroundColor: 'white' }}>
        <div className=" card  card-header" style={{ marginBottom: '-10px' }}>
          <h3>Designations</h3>
        </div>
        <div className="card-body">
          {designations.map((designation, index) => (
            <button
              key={index}
              className={`btn btn-outline-primary mx-1 mb-2 ${
                selectedDesignations.includes(designation) ? 'active' : ''
              }`}
              onClick={() => toggleDesignation(designation)}
              style={{
                backgroundColor: '#EAEEF4',
                border: 'none',
                borderRadius: 20,
              }}
            >
              {designation}
            </button>
          ))}
        </div>
      </div>

      <div className="card shadow-sm " style={{ backgroundColor: 'white' }}>
        <div className=" card card-header " style={{ marginBottom: '-10px' }}>
          <h3>Countries</h3>
        </div>
        <div className="card-body ">
          {Object.keys(counties).map((county, index) => (
            <div
              key={index}
              className={`card mb-3 border rounded ${
                selectedCounties.includes(county) ? 'border-primary' : ''
              }`}
            >
              <div className=" card card-header">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={county}
                    checked={selectedCounties.includes(county)}
                    onChange={() => toggleCounty(county)}
                  />
                  <label className="form-check-label" htmlFor={county}>
                    {county}
                  </label>
                </div>
              </div>
              <div>
                {/* Show Cities if available */}
                {counties[county].length > 0 &&
                  selectedCounties.includes(county) && (
                    <div className="ms-2 ">
                      {counties[county].map((city, idx) => (
                        // <div key={idx} className="form-check">
                        //   <input
                        //     type="checkbox"
                        //     className="form-check-input"
                        //     id={city}
                        //   />
                        //   <label className="form-check-label" htmlFor={city}>
                        //     {city}
                        //   </label>
                        // </div>
                        <button
                          key={index}
                          className={`btn btn-outline-primary mx-1 mb-2 ${
                            selectedDesignations.includes(city) ? 'active' : ''
                          }`}
                          onClick={() => toggleDesignation(city)}
                          //   style={{borderRadius:20}}
                          style={{
                            backgroundColor: '#EAEEF4',
                            border: 'none',
                            borderRadius: 20,
                          }}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-end mb-4 ">
        <button
          className="btn btn-seconday me-2 shadow-sm "
          style={{ backgroundColor: '#F4F8FC', width: '120px' }}
        >
          cancel
        </button>
        <button
          className="btn btn-primary"
          style={{ width: '120px', backgroundColor: '#41619A' }}
        >
          save
        </button>
      </div>
    </div>
  );
}
