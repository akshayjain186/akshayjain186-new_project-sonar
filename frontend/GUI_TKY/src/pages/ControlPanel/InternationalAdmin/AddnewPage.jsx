// import React, { useEffect, useState } from 'react';
// import { Col, Label, Row, Input, InputGroup, InputGroupText } from 'reactstrap';
// import * as yup from 'yup';
// import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
// //  logo image
// import '../controlpaneladmin.scss';
// import InternationalHeader from './InternationalHeader';
// import {
//   getCountryListData,
//   getCurrenciesListData,
//   getLanguageListData,
//   getContinentListData
// } from '@/store/actions';

// const AddnewPage = () => {
//   const dispatch = useDispatch();
//   const [continentListData, setContinentListData] = useState([]);
//   const [countryListData, setCountryListDataData] = useState([]);
//   const [languageListData, setLanguageListData] = useState([]);
//   const [currenciesListData, setCurrenciesListData] = useState([]);

//   useEffect(() => {
//     dispatch(
//       getCountryListData({}, (response, error) => {
//         if (
//           response?.status === 200 &&
//           response?.data?.message === 'Countries fetched successfully'
//         ) {
//           setCountryListDataData(response?.data?.countries);
//         } else {
//           setCountryListDataData([]);
//         }
//       })
//     );
//     dispatch(
//       getContinentListData({}, (response, error) => {
//         if (
//           response?.status === 200
//         ) {
//           setContinentListData(response?.data?.data);
//         } else {
//           setContinentListData([]);
//         }
//       })
//     );
//     dispatch(
//       getLanguageListData({}, (response, error) => {
//         if (
//           response?.status === 200 &&
//           response?.data?.message === 'Languages fetched successfully'
//         ) {
//           setLanguageListData(response?.data?.languages);
//         } else {
//           setLanguageListData([]);
//         }
//       })
//     );
//     dispatch(
//       getCurrenciesListData({}, (response, error) => {
//         if (
//           response?.status === 200 &&
//           response?.data?.message === 'Currencies fetched successfully'
//         ) {
//           setCurrenciesListData(response?.data?.currencies);
//         } else {
//           setCurrenciesListData([]);
//         }
//       })
//     );
//   }, []);
//   console.log('languageListData', languageListData);

//   return (
//     <React.Fragment>
//       {/* Navigation bar */}
//       <InternationalHeader />
//       {/* Main content */}
//       <Row>
//         {/* Left Column for General Information */}
//         <Col lg="6" className="p-5">
//           <div className="mb-4">
//             <p>
//               <span className="text-muted">Norway</span> ^ <span>Add new</span>
//             </p>
//           </div>

//           {/* General Information Form */}
//           <div className="border border-1 p-4">
//             <p className="fw-bold fs-5">General information</p>
//             <form>
//               <Row>
//                 <Col lg="12">
//                   {/* Continent Dropdown */}
//                   <div>
//                     <Label className="mb-0">Continent</Label>
//                     <select
//                       className="form-select mb-3 rounded-3 bg-transparent"
//                       placeholder="Choose continent"
//                     >
//                       <option value="">Select continent</option>
//                       {continentListData?.map((continent, index) => (
//                         <option key={continent?.id} value={continent?.id}>
//                           {continent?.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   {/* Country Dropdown */}
//                   <div>
//                     <Label className="mb-0">Country</Label>
//                     <select
//                       className="form-select rounded-3 bg-transparent"
//                       placeholder="Choose country"
//                     >
//                       <option value="">Select country</option>
//                       {countryListData?.map((country, index) => (
//                         <option key={country?.id} value={country?.id}>
//                           {country?.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   {/* Language Dropdown */}
//                   <div>
//                     <Label className="mb-0 mt-3">Language</Label>
//                     <select
//                       className="form-select rounded-3  bg-transparent"
//                       placeholder="Choose language"
//                     >
//                       <option value="">Select language</option>
//                       {languageListData?.map((language, index) => (
//                         <option key={language?.id} value={language?.id}>
//                           {language?.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   {/* Currency Dropdown */}
//                   <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
//                     <Label className="mb-0 mt-3">Currency</Label>
//                     <select
//                       className="form-select rounded-3  bg-transparent"
//                       placeholder="Choose currency"
//                     >
//                       <option value="">Select currency</option>
//                       {currenciesListData?.map((currency, index) => (
//                         <option key={currency?.id} value={currency?.id}>
//                           {currency?.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   {/* Organisation Number */}
//                   <div className="mb-3 templating-select select2-container ">
//                     <Label className="mb-0">Organisation number</Label>
//                     <Input
//                       type="text"
//                       className="form-control rounded-3 bg-transparent"
//                       placeholder="Text here..."
//                     />
//                   </div>
//                 </Col>
//               </Row>
//             </form>
//           </div>
//         </Col>

//         {/* Right Column for Owner Information */}
//         <Col lg="6" className="p-5 mt-5">
//           <div className="border border-1 p-4">
//             <p className="fw-bold fs-5">Owner information</p>
//             <form>
//               <Row>
//                 <Col lg="12">
//                   {/* Manager Name and Surname */}
//                   <div className="d-flex gap-2">
//                     <div className="w-50">
//                       <Label className="mb-0">Manager name</Label>
//                       <Input
//                         type="text"
//                         className="form-control mb-3 rounded-3  bg-transparent"
//                         placeholder="Harry"
//                       />
//                     </div>
//                     <div className="w-50">
//                       <Label className="control-label mb-0">
//                         Manager surname
//                       </Label>
//                       <Input
//                         type="text"
//                         className="form-control mb-3 rounded-3  bg-transparent"
//                         placeholder="Stone"
//                       />
//                     </div>
//                   </div>

//                   {/* Email Input */}
//                   <div className="mb-3 templating-select select2-container">
//                     <Label className="control-label mb-0">E-mail</Label>
//                     <Input
//                       type="email"
//                       className="form-control mb-3 rounded-3  bg-transparent"
//                       placeholder="post@artbuild.com"
//                     />
//                   </div>

//                   {/* Mobile Phone Input */}
//                   <div>
//                     <Label className="mb-0">Mobile Phone</Label>
//                     <InputGroup className="mb-3">
//                       <InputGroupText className="p-0">
//                         <select
//                           className="form-select border-0  bg-transparent"
//                           style={{ width: '80px' }}
//                         >
//                           <option value="+1">+1</option>
//                           <option value="+44">+44</option>
//                           <option value="+91">+91</option>
//                           <option value="+213">+213</option>
//                           <option value="+216">+216</option>
//                         </select>
//                       </InputGroupText>
//                       <Input
//                         type="number"
//                         className="form-control  bg-transparent"
//                         placeholder="21607947"
//                       />
//                     </InputGroup>
//                   </div>

//                   {/* Address Input */}
//                   <div className="mb-3 ajax-select mt-2 mt-lg-0 select2-container">
//                     <Label className="mb-0">Address</Label>
//                     <Input
//                       type="text"
//                       className="form-control mb-3 rounded-3  bg-transparent"
//                       placeholder="Vossegata 22"
//                     />
//                   </div>

//                   {/* City and Postal Code */}
//                   <div className="d-flex gap-2">
//                     <div className="w-75">
//                       <Label className="mb-0">City</Label>
//                       <Input
//                         type="text"
//                         className="form-control mb-3 rounded-3  bg-transparent"
//                         placeholder="Oslo"
//                       />
//                     </div>
//                     <div className="w-25">
//                       <Label className="control-label mb-0 ">Postal code</Label>
//                       <Input
//                         type="number"
//                         className="form-control mb-3 rounded-3 bg-transparent"
//                         placeholder="0475"
//                       />
//                     </div>
//                   </div>
//                 </Col>
//               </Row>
//             </form>
//           </div>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default AddnewPage;

import React, { useEffect, useState } from 'react';
import {
  Col,
  Label,
  Row,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from 'reactstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
//  logo image
import '../controlpaneladmin.scss';
import InternationalHeader from './InternationalHeader';
import {
  getCountryListData,
  getCurrenciesListData,
  getLanguageListData,
  getContinentListData,
  postGeneralInformation,
} from '@/store/actions';

const AddnewPage = () => {
  const dispatch = useDispatch();
  const [continentListData, setContinentListData] = useState([]);
  const [countryListData, setCountryListDataData] = useState([]);
  const [languageListData, setLanguageListData] = useState([]);
  const [currenciesListData, setCurrenciesListData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    roleId: 3,
    mobile_no: '',
    isActive: '',
    continent_id: null,
    country_id: null,
    currency_id: null,
    language_id: null,
    address: '',
    city: '',
    postal_code: '',
    organization_number: '',
  });

  useEffect(() => {
    dispatch(
      getCountryListData({}, (response, error) => {
        if (
          response?.status === 200 &&
          response?.data?.message === 'Countries fetched successfully'
        ) {
          setCountryListDataData(response?.data?.countries);
        } else {
          setCountryListDataData([]);
        }
      })
    );
    dispatch(
      getContinentListData({}, (response, error) => {
        if (response?.status === 200) {
          setContinentListData(response?.data?.data);
        } else {
          setContinentListData([]);
        }
      })
    );
    dispatch(
      getLanguageListData({}, (response, error) => {
        if (
          response?.status === 200 &&
          response?.data?.message === 'Languages fetched successfully'
        ) {
          setLanguageListData(response?.data?.languages);
        } else {
          setLanguageListData([]);
        }
      })
    );
    dispatch(
      getCurrenciesListData({}, (response, error) => {
        if (
          response?.status === 200 &&
          response?.data?.message === 'Currencies fetched successfully'
        ) {
          setCurrenciesListData(response?.data?.currencies);
        } else {
          setCurrenciesListData([]);
        }
      })
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // List of fields that need to be converted to integers
    const integerFields = ["continent_id", "country_id", "currency_id", "language_id"];
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: integerFields.includes(name) ? parseInt(value, 10) : value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    try {
      dispatch(
        postGeneralInformation(formData, (response, error) => {
          console.log(response, 'response');
        })
      );
    } catch (error) {}
  };

  return (
    <React.Fragment>
      {/* Navigation bar */}
      <InternationalHeader />
      {/* Main content */}
      <form onSubmit={handleSubmit}>
        <Row>
          {/* Left Column for General Information */}
          <Col lg="6" className="p-5">
            <div className="mb-4">
              <p>
                <span className="text-muted">Norway</span> ^{' '}
                <span>Add new</span>
              </p>
            </div>

            {/* General Information Form */}
            <div className="border border-1 p-4">
              <p className="fw-bold fs-5">General information</p>

              <Row>
                <Col lg="12">
                  {/* Continent Dropdown */}
                  <div>
                    <Label className="mb-0">Continent</Label>
                    <select
                      name="continent_id"
                      value={formData.continent_id}
                      className="form-select mb-3 rounded-3 bg-transparent"
                      placeholder="Choose continent"
                      onChange={handleChange}
                    >
                      <option value="">Select continent</option>
                      {continentListData?.map((continent, index) => (
                        <option key={continent?.id} value={continent?.id}>
                          {continent?.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Country Dropdown */}
                  <div>
                    <Label className="mb-0">Country</Label>
                    <select
                      name="country_id"
                      value={formData.country_id}
                      className="form-select rounded-3 bg-transparent"
                      placeholder="Choose country"
                      onChange={handleChange}
                    >
                      <option value="">Select country</option>
                      {countryListData?.map((country, index) => (
                        <option key={country?.id} value={country?.id}>
                          {country?.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Language Dropdown */}
                  <div>
                    <Label className="mb-0 mt-3">Language</Label>
                    <select
                      name="language_id"
                      value={formData.language_id}
                      className="form-select rounded-3  bg-transparent"
                      placeholder="Choose language"
                      onChange={handleChange}
                    >
                      <option value="">Select language</option>
                      {languageListData?.map((language, index) => (
                        <option key={language?.id} value={language?.id}>
                          {language?.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Currency Dropdown */}
                  <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
                    <Label className="mb-0 mt-3">Currency</Label>
                    <select
                      name="currency_id"
                      value={formData.currency_id}
                      className="form-select rounded-3  bg-transparent"
                      placeholder="Choose currency"
                      onChange={handleChange}
                    >
                      <option value="">Select currency</option>
                      {currenciesListData?.map((currency, index) => (
                        <option key={currency?.id} value={currency?.id}>
                          {currency?.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Organisation Number */}
                  <div className="mb-3 templating-select select2-container ">
                    <Label className="mb-0">Organisation number</Label>
                    <Input
                      name="organization_number"
                      value={formData.organization_number}
                      type="text"
                      className="form-control rounded-3 bg-transparent"
                      placeholder="Text here..."
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Right Column for Owner Information */}
          <Col lg="6" className="p-5 mt-5">
            <div className="border border-1 p-4">
              <p className="fw-bold fs-5">Owner information</p>
              <Row>
                <Col lg="12">
                  {/* Manager Name and Surname */}
                  <div className="d-flex gap-2">
                    <div className="w-50">
                      <Label className="mb-0">Manager name</Label>
                      <Input
                        name="name"
                        value={formData.name}
                        type="text"
                        className="form-control mb-3 rounded-3  bg-transparent"
                        placeholder="Harry"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-50">
                      <Label className="control-label mb-0">
                        Manager surname
                      </Label>
                      <Input
                        name="surname"
                        value={formData.surname}
                        type="text"
                        className="form-control mb-3 rounded-3  bg-transparent"
                        placeholder="Stone"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="mb-3 templating-select select2-container">
                    <Label className="control-label mb-0">E-mail</Label>
                    <Input
                      name="email"
                      value={formData.email}
                      type="email"
                      className="form-control mb-3 rounded-3  bg-transparent"
                      placeholder="post@artbuild.com"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Mobile Phone Input */}
                  <div>
                    <Label className="mb-0">Mobile Phone</Label>
                    <InputGroup className="mb-3">
                      <InputGroupText className="p-0">
                        <select
                        //   name="mobile_no"
                        //   value={formData.mobile_no}
                          className="form-select border-0  bg-transparent"
                          style={{ width: '80px' }}
                          onChange={handleChange}
                        >
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+91">+91</option>
                          <option value="+213">+213</option>
                          <option value="+216">+216</option>
                        </select>
                      </InputGroupText>
                      <Input
                        type="number"
                        name="mobile_no"
                        value={formData.mobile_no}
                        className="form-control  bg-transparent"
                        placeholder="21607947"
                        onChange={handleChange}

                      />
                    </InputGroup>
                  </div>

                  {/* Address Input */}
                  <div className="mb-3 ajax-select mt-2 mt-lg-0 select2-container">
                    <Label className="mb-0">Address</Label>
                    <Input
                      name="address"
                      value={formData.address}
                      type="text"
                      className="form-control mb-3 rounded-3  bg-transparent"
                      placeholder="Vossegata 22"
                      onChange={handleChange}

                    />
                  </div>

                  {/* City and Postal Code */}
                  <div className="d-flex gap-2">
                    <div className="w-75">
                      <Label className="mb-0">City</Label>
                      <Input
                        name="city"
                        value={formData.city}
                        type="text"
                        className="form-control mb-3 rounded-3  bg-transparent"
                        placeholder="Oslo"
                        onChange={handleChange}

                      />
                    </div>
                    <div className="w-25">
                      <Label className="control-label mb-0 ">Postal code</Label>
                      <Input
                        name="postal_code"
                        value={formData.postal_code}
                        type="number"
                        className="form-control mb-3 rounded-3 bg-transparent"
                        placeholder="0475"
                        onChange={handleChange}

                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="text-center mt-4">
            <Button type="submit" className="btn btn-primary px-5">
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </React.Fragment>
  );
};

export default AddnewPage;
