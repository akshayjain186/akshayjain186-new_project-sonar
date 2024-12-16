

import React, { useState } from 'react';
import YesIcon from '../../../../assets/images/leads/YesIcon.png';
import CameraIcon from '../../../../assets/images/leads/CameraIcon.png';

const UploadPhoto = () => {
  const [selectedSubscription, setSelectedSubscription] =
    useState('Admin BASIC');
  const [selectedDesignations, setSelectedDesignations] = useState(['Plumber']);
  const [selectedCounties, setSelectedCounties] = useState([]);

  const subscriptionPackages = [
    {
      name: 'Admin BASIC',
      price: '200',
      benefits: ['Up to 2 designations', 'Up to 5 users', 'Up to 10 services'],
      icon: YesIcon,
    },
    {
      name: 'Admin ADVANCED',
      price: '500',
      benefits: ['Up to 5 designations', 'Up to 20 users', 'Up to 30 services'],
      icon: YesIcon,
    },
    {
      name: 'Super admin BASIC',
      price: '800',
      benefits: [
        'Cover all areas',
        'Limited number of services',
        'Up to 50 users',
      ],
      icon: YesIcon,
    },
    {
      name: 'Super admin ADVANCED',
      price: '1500',
      benefits: [
        'Cover all areas',
        'Unlimited number of services',
        'Unlimited number of admins',
      ],
      icon: YesIcon,
    },
  ];

  const designations = [
    'Carpenter and building maintenance',
    'Cleaner',
    'Electrician',
    'Plumber',
    'Demolition, tiling, and concrete sawing',
    'Tile, bricklayer, and plastering',
    'Foundation and landscaping work',
    'Glass master and glazier',
    'Husker',
    'Roofer and tinsmith',
    'Project manager',
    'Interior designer',
    'Appointer',
  ];

  const counties = {
    Oslo: true,
    'Vestfold og Telemark': true,
    Viken: [
      'Asker',
      'Bærum',
      'Drammen',
      'Eidsvoll',
      'Fredrikstad',
      'Halden',
      'Lillestrøm',
      'Sandvika',
      'Sarpsborg',
      'Skedsmo',
      'Ski',
    ],
    Nordland: false,
    Agder: false,
    Innlandet: false,
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
    <div className="container mt-4 mb-5">
      <div className=" row  mb-4">
        <div
          className="position-relative d-inline-block"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: '#EAEEF4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={CameraIcon}
              alt="image"
              className="rounded-circle  "
              style={{
                objectFit: 'cover',
                width: '100%',
                maxWidth: '30%',
                height: '100%',
                maxHeight: '30%',
              }}
            />
          </div>
        </div>

        <div className=" text-start mb-2">
          <button className="btn btn-link text-primary fw-bold p-0 text-decoration-underline">
            Upload photo
          </button>
        </div>
      </div>

      <div className="row">
        <div className="mb-2" style={{ color: '#A8AFB9' }}>
          Choose subscription package:
        </div>
        {subscriptionPackages.map((pkg, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div
              className={`card p-3 text-start ${
                selectedSubscription === pkg.name ? 'border-primary' : ''
              }`}
              onClick={() => setSelectedSubscription(pkg.name)}
              style={{ cursor: 'pointer', }}
            >
              <h6 className="fw-bold" style={{color:'#41619A'}}>{pkg.name}</h6>
              <ul className="list-unstyled small">
                {pkg.benefits.map((benefit, idx) => (
                  <li key={idx} style={{color:'#A8AFB9'}}>
                    {' '}
                    <img
                      src={pkg.icon}
                      alt="icon"
                      style={{
                        width: '15px',
                        height: '15px',
                        marginRight: '10px',
                      }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="fw-bold mt-2 text-end">{pkg.price} kr/month</div>
            </div>
          </div>
        ))}
      </div>

      {/* General Information */}
      <div className=" row mt-4">
        <div
          className=" card card-header col-md-6"
          style={{ borderRadius: '5px', border: '5px' }}
        >
          <h6 className="fw-bold">General Information</h6>
          <form>
            <div className="mb-3">
              <label>Company name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Att Building"
              />
            </div>
            <div className="mb-3">
              <label>Organization number</label>
              <input
                type="text"
                className="form-control"
                placeholder="877657322"
              />
            </div>
            <div className="mb-3">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Vassvegen 23"
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Oslo"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Postal code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="0475"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Company Manager */}
        <div
          className=" card card-header col-md-6"
          style={{ borderRadius: '5px', border: '5px' }}
        >
          <h6 className="fw-bold">Company Manager</h6>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Manager name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Harry"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Manager surname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Stone"
                />
              </div>
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="post@attbuild.com"
              />
            </div>
            <div className="mb-3">
              <label>Mobile phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="+47 29676947"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Designations */}

      <div
        className="card shadow-sm col-md-6 mt-4"
        style={{ backgroundColor: 'white' }}
      >
        <div className="card card-header" style={{ marginBottom: '-10px' }}>
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

      {/* Counties */}
      <div className="card shadow-sm" style={{ backgroundColor: 'white' }}>
        <div className="card card-header" style={{ marginBottom: '-10px' }}>
          <h3>Counties</h3>
        </div>
        <div className="card-body">
          {Object.keys(counties).map((county, index) => (
            <div
              key={index}
              className={`card mb-3 border rounded ${
                selectedCounties.includes(county) ? 'border-primary' : ''
              }`}
            >
              <div className="card card-header">
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
                {Array.isArray(counties[county]) &&
                  selectedCounties.includes(county) && (
                    <div className="ms-2">
                      {counties[county].map((city, idx) => (
                        <button
                          key={idx}
                          className="btn btn-outline-primary mx-1 mb-2"
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

      {/* Additional Information */}
      <div className="mt-4">
        <h6 className="fw-bold">Additional</h6>
        <ul className="list-unstyled">
          <li>✅ Add account</li>
          <li>✅ Add qualification</li>
        </ul>
      </div>

      {/* Submit Button */}
      <div className="text-end mt-4">
        <button className="btn btn-primary" style={{backgroundColor:'#41619A', width:"100%", maxWidth:'15%', borderRadius:'7px'}}>Done</button>
      </div>
    </div>
  );
};

export default UploadPhoto;
