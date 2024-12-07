import React from "react";
import { useNavigate } from "react-router-dom";
// Images
import currency from "../../../assets/images/currency.png";
import userprofile from "../../../assets/images/userprofile.png"
// Reactstrap Components
import { Input, Row, Col, Button } from "reactstrap";
import '../controlpaneladmin.scss';
import InternationalHeader from "./InternationalHeader";
import plus from '../../../assets/images/plus.png'
import search from '../../../assets/images/searchIcon.png'
function LicensesPage() {
  // useNavigate is a React Router hook used to programmatically navigate to different routes
  const navigate = useNavigate();

  // Handler for adding a new license
  const handleAddLicense = () => {
    navigate("/addnew");
  };
  
  // License data 
  const licenses = {
    Europe: [
      { country: "Norway", flag: "🇳🇴", name: "Jakob Issa", currency: "NOK" },
      { country: "Sweden", flag: "🇸🇪", name: "Edgar Wahlström", currency: "SEK" },
      { country: "United Kingdom", flag: "🇬🇧", name: "Alison Scott", currency: "GBP" },
      { country: "Denmark", flag: "🇩🇰", name: "Johannes Dam", currency: "DKK" },
      { country: "Finland", flag: "🇫🇮", name: "Mikael Varis", currency: "EUR" },
    ],
    "North America": [
      { country: "USA", flag: "🇺🇸", name: "Mathew Long", currency: "USD" },
      { country: "Canada", flag: "🇨🇦", name: "Abel Prinston", currency: "USD" },
    ],
  };
  return (
    <>
      <InternationalHeader />
      {/* Main Content */}
      <div className="container-fluid mt-5">
        <Row className="m-4">
          <Col xs="12" md="6">
            <h4 className="fw-bold">Licenses</h4>
          </Col>

        </Row>

        {/* Search Box */}
        <Row className="m-2 d-flex align-items-center justify-content-between">
          <Col xs="12" md="auto" className="d-flex">
            <div className="search-box w-100 ms-3">
              <Input
                type="search"
                placeholder="Search..."
                className="rounded-3 bg-transparent input mt-1 "
              />
              <img src={search} alt="" className="search-icon" />
            </div>
          </Col>
          <Col xs="12" md="auto" className="text-md-end mt-2 mt-md-0">
            {/* Add License Button */}
            <Button
              className=" px-4 rounded-3 me-3"
              onClick={handleAddLicense}
              style={{ background: "#41619A",}}
            >
             <img src={plus} alt="" className="me-1" /> Icon
            </Button>
          </Col>
        </Row>

        {/* License List Section */}
        <Row className="mt-0 m-4">
          <Col>
            {Object.keys(licenses).map((region) => (
              <div key={region} className="mb-4">
                <h5 className="mt-4">{region}</h5>
                {licenses[region].map((license, index) => (
                  <div
                    key={index}
                    className="d-flex flex-column flex-md-row justify-content-between h-75 align-items-start align-items-md-center border rounded p-4 mb-2 bg-white"
                  >
                    {/* Country and Flag */}
                    <div className="d-flex gap-3 align-items-center mb-2 mb-md-0">
                      <div className="rounded-4 h-25 ms-3 ">{license.flag}</div>
                      <p className="mb-0">{license.country}</p>
                    </div>
                    {/* License Info */}
                    <div
                      className="d-flex flex-column flex-md-row align-items-start align-items-center justify-content-between"
                      style={{ width: "30%", maxWidth: "300px" }}
                    >
                      <div className="d-flex">
                        <img src={userprofile} alt="Profile Icon" className="me-2 h-25"/>
                        <span>{license.name}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <img src={currency} alt="Currency Icon" className="me-2" />
                        <span className="me-4">{license.currency}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LicensesPage