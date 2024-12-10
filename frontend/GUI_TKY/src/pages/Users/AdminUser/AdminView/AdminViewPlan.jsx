import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminViewPlan() {
  const [selectedPlan, setSelectedPlan] = useState('Admin BASIC');
  const [selectedDesignations, setSelectedDesignations] = useState(['Plumber']);
  const [selectedCounties, setSelectedCounties] = useState([]);

  const plans = [
    { name: 'Admin BASIC', price: '200 kr/month', features: ['Up to 2 designations', 'Covers 1 area', 'Up to 10 employees'] },
    { name: 'Admin ADVANCED', price: '500 kr/month', features: ['Up to 4 designations', 'Covers 5 areas', 'Up to 30 employees'] },
    { name: 'Super admin BASIC', price: '800 kr/month', features: ['Covers 10 areas', 'Up to 50 employees', 'Up to 10 admins'] },
    { name: 'Super admin ADVANCED', price: '1500 kr/month', features: ['Covers all areas', 'Unlimited employees', 'Unlimited admins'] },
  ];

  const designations = [
    'Carpenter', 'Cleaner', 'Electrician', 'Plumber',
    'Demolition', 'Tiler', 'Builder', 'Project manager',
    'Interior designer', 'Appraiser',
  ];

  const counties = {
    Oslo: [],
    "Vestfold og Telemark": [],
    Viken: [
      'Asker', 'Drammen', 'Fredrikstad', 'Bærum', 'Ås',
      'Lørenskog', 'Nittedal', 'Holmestrand', 'Hurdal', 'Halden',
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
      {/* Top Logo and Name */}
      <div className="d-flex align-items-center mb-4">
        <img
          src="/logo.png" // Replace with your actual logo path
          alt="Logo"
          style={{ width: '50px', height: '50px', marginRight: '15px' }}
        />
        <h1 className="mb-0">Elektro Solutions</h1>
      </div>

      {/* Subscription Plans */}
      <h2 className="mb-4">Change Subscription Plan</h2>
      <div className="row mb-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div
              className={`card ${selectedPlan === plan.name ? 'border-primary' : ''}`}
              onClick={() => setSelectedPlan(plan.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body">
                <h5 className="card-title">{plan.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{plan.price}</h6>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Designations in a Card */}
      <div className="card mb-4">
        <div className="card-header">
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
            >
              {designation}
            </button>
          ))}
        </div>
      </div>

      {/* Counties in a Parent Card */}
      <div className="card">
        <div className="card-header">
          <h3>Counties</h3>
        </div>
        <div className="card-body">
          {Object.keys(counties).map((county, index) => (
            <div key={index} className="card mb-3">
              <div className="card-header">
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
              <div className="card-body">
                {/* Show Cities if available */}
                {counties[county].length > 0 && selectedCounties.includes(county) && (
                  <div className="ms-4">
                    {counties[county].map((city, idx) => (
                      <div key={idx} className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={city}
                        />
                        <label className="form-check-label" htmlFor={city}>
                          {city}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="mt-4">
        <button className="btn btn-primary me-2">Save</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
}
