// import React, { useEffect, useState } from "react";
// import {
//   Col,
//   Label,
//   Row,
//   Input,
//   InputGroup,
//   InputGroupText,
//   Button,
// } from "reactstrap";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// //  logo image
// import "../controlpaneladmin.scss";
// import InternationalHeader from "./InternationalHeader";
// import search from '../../../assets/images/searchIcon.png';

// import {
//   getCountryListData,
//   getCurrenciesListData,
//   getLanguageListData,
//   getContinentListData,
//   postGeneralInformation,
//   registerUser,
// } from "@/store/actions";
// import { useNavigate } from "react-router";

// const AddnewPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [continentListData, setContinentListData] = useState([]);
//   const [countryListData, setCountryListDataData] = useState([]);
//   const [languageListData, setLanguageListData] = useState([]);
//   const [currenciesListData, setCurrenciesListData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [continentSearchQuery, setContinentSearchQuery] = useState("");
//   const [countrySearchQuery, setCountrySearchQuery] = useState("");
//   const [currencySearchQuery, setCurrencySearchQuery] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
//   const [languageSearchQuery, setLanguageSearchQuery] = useState("");
//   const [filteredLanguages, setFilteredLanguages] = useState(languageListData);
//   const [isContinentDropdownOpen, setIsContinentDropdownOpen] = useState(false);
//   const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [continentId, setContinentId] = useState(null)
//   // States for Currency Dropdown Search
//   const filteredContinents = continentListData?.filter((continent) =>
//     continent.name.toLowerCase().includes(continentSearchQuery.toLowerCase())
//   );
//   // const filteredCurrencies = currenciesListData?.filter((currency) =>
//   //   currency.name.toLowerCase().includes(currencySearchQuery.toLowerCase())
//   // );
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // List of fields that need to be converted to integers
//     const integerFields = [
//       "continent_id",
//       "country_id",
//       "currency_id",
//       "language_id",
//     ];

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: integerFields.includes(name) ? parseInt(value, 10) : value,
//     }));
//   };
//   const [searchQuery, setSearchQuery] = useState("");

//   // Function to toggle dropdown visibility
//   const toggleLanguageDropdown = () => {
//     setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
//   };

//   const filteredCurrencies = searchQuery
//     ? currenciesListData.filter((currency) =>
//       currency.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     : currenciesListData;

//   const handleDropdownToggle = () => {
//     setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
//   };
//   // Function to handle language selection
//   const handleLanguageSelect = (id) => {
//     formik.setFieldValue("language_id", id); // Set selected language ID in Formik
//     setIsLanguageDropdownOpen(false); // Close the dropdown
//   };
//   // Effect to filter languages based on the search query
//   useEffect(() => {
//     setFilteredLanguages(
//       languageListData.filter((language) =>
//         language.name.toLowerCase().includes(languageSearchQuery.toLowerCase())
//       )
//     );
//   }, [languageSearchQuery, languageListData]); // Re-run filtering when query or data changes

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleCurrencySelect = (currencyId) => {
//     formik.setFieldValue("currency_id", currencyId);
//     setIsCurrencyDropdownOpen(false); // Close dropdown after selection
//     setSearchQuery(""); // Reset search input
//   };

//   const handleContinentChange = (event) => {
//     const continentId = event.target.value;
//     setSelectedContinent(continentId); // Update selected continent

//     if (continentId) {
//       getCountryListDataByContinent(continentId)
//         .then(response => {
//           setCountries(response); // Set the countries based on selected continent
//         })
//         .catch(error => {
//           console.error('Error fetching countries:', error);
//         });
//     } else {
//       setCountries([]); // If no continent is selected, clear the countries
//     }
//   };

//   useEffect(() => {
//     if (continentId || continentId === null) {
//       dispatch(
//         getCountryListData({ continentId }, (response, error) => {
//           if (
//             response?.status === 200
//           ) {
//             setCountryListDataData(response?.data?.countries);

//           } else {
//             setCountryListDataData([]);
//           }
//         })
//       );
//     }
//     if (continentId === null) {
//       dispatch(
//         getContinentListData({}, (response, error) => {
//           if (response?.status === 200) {
//             setContinentListData(response?.data?.data);
//           } else {
//             setContinentListData([]);
//           }
//         })
//       );
//       dispatch(
//         getLanguageListData({}, (response, error) => {
//           if (response?.status === 200 && response?.data?.message === "Languages fetched successfully") {
//             setLanguageListData(response?.data?.languages);
//           } else {
//             setLanguageListData([]);
//           }
//         })
//       );
//       dispatch(
//         getCurrenciesListData({}, (response, error) => {
//           if (response?.status === 200 && response?.data?.message === "Currencies fetched successfully") {
//             setCurrenciesListData(response?.data?.currencies);
//           } else {
//             setCurrenciesListData([]);
//           }
//         })
//       );
//     }

//   }, [continentId]);
//   // Formik setup
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       surname: "",
//       email: "",
//       roleId: 2,
//       mobile_no: "",
//       isActive: "",
//       continent_id: null,
//       country_id: null,
//       currency_id: null,
//       language_id: null,
//       address: "",
//       city: "",
//       postal_code: "",
//       organization_number: "",
//     },

//     // Validation schema
//     validationSchema: yup.object({
//       name: yup.string().required("Manager name is required"),
//       surname: yup.string().required("Manager surname is required"),
//       email: yup.string().email("Invalid email").required("Email is required"),
//       mobile_no: yup
//         .string()
//         .matches(/^[0-9]+$/, "Only numbers are allowed")
//         .required("Mobile phone is required"),
//       continent_id: yup
//         .number()
//         .required("Continent is required")
//         .typeError("Continent is required"),
//       country_id: yup
//         .number()
//         .required("Country is required")
//         .typeError("Country is required"),
//       language_id: yup
//         .number()
//         .required("Language is required")
//         .typeError("Language is required"),
//       currency_id: yup
//         .number()
//         .required("Currency is required")
//         .typeError("Currency is required"),
//       organization_number: yup
//         .string()
//         .required("Organization number is required"),
//       address: yup.string().required("Address is required"),
//       city: yup.string().required("City is required"),
//       postal_code: yup
//         .string()
//         .matches(/^[0-9]+$/, "Only numbers are allowed")
//         .required("Postal code is required"),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       console.log("values", values);
//       dispatch(
//         registerUser(values, (response, error) => {
//           if (response?.status === 201) {
//             alert("User registered successfully!");
//             resetForm();
//             navigate("/licenses");
//             setContinentId(null);

//           } else {
//             console.error("Registration failed:", error);
//             alert("Registration failed: ");
//           }
//         })
//       );
//     },
//   });

//   return (
//     <React.Fragment>
//       {/* Navigation bar */}
//       <InternationalHeader />
//       {/* Main content */}
//       <form onSubmit={formik.handleSubmit}>
//         <Row className="m-4">
//           {/* Left Column for General Information */}
//           <div className="mb-2">
//             <p className="mt-3">
//               <span className="text-muted mb-2">Licenses</span> &nbsp;&nbsp;<span className='mt-5'>^</span>{" "}
//               &nbsp;&nbsp;
//               <span className="mb-4">Add new</span>
//             </p>
//           </div>
//           <Col lg="12" className="d-flex justify-content gap-4">
//             {/* General Information Form */}

//             <Col lg="6">
//               <div className="border border-2 p-4 rounded-3">
//                 <p className="fw-bold fs-5">General information</p>
//                 {/* continent */}
//                 <div className=" ajax-select mt-3">
//                   <label className="mb-0 mt-3">Continent</label>
//                   <div className="dropdown">
//                     <button
//                       type="button"
//                       className={`dropbtn form-select rounded-3 bg-transparent ${formik.touched.continent_id &&
//                         formik.errors.continent_id
//                         ? "is-invalid"
//                         : ""
//                         }`}
//                       onClick={() => {
//                         setIsContinentDropdownOpen(!isContinentDropdownOpen);
//                         formik.setFieldValue(
//                           "country_id",
//                           null
//                         );
//                         setIsCurrencyDropdownOpen(false); // Close currency dropdown
//                       }}
//                     >
//                       {formik.values.continent_id
//                         ? continentListData.find(
//                           (continent) =>
//                             continent.id === formik.values.continent_id
//                         )?.name
//                         : "Select Continent"}
//                     </button>
//                     {isContinentDropdownOpen && (
//                       <div className="dropdown-content">
//                         <div className="input-with-icon ">

//                           <input
//                             type="search"
//                             id="searchContinentInput"
//                             placeholder="Search..."
//                             className="dropdown-search rounded-3 bg-transparent input mt-1 "
//                             value={continentSearchQuery}
//                             onChange={(e) =>
//                               setContinentSearchQuery(e.target.value)
//                             }
//                           />
//                           <img src={search} alt="" className="search-icon" />
//                         </div>
//                         {filteredContinents?.length > 0 ? (
//                           filteredContinents.map((continent) => (
//                             <div
//                               key={continent.id}
//                               className="dropdown-item"
//                               onClick={() => {
//                                 formik.setFieldValue(
//                                   "continent_id",
//                                   continent.id
//                                 );
//                                 setIsContinentDropdownOpen(false);
//                                 setContinentId(continent.id)
//                               }}
//                             >
//                               {continent.name}
//                             </div>
//                           ))
//                         ) : (
//                           <div className="dropdown-item">No results found</div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                   {formik.touched.continent_id &&
//                     formik.errors.continent_id && (
//                       <div className="text-danger">
//                         {formik.errors.continent_id}
//                       </div>
//                     )}
//                 </div>
//                 {/* Country Dropdown */}
//                 <div className=" ajax-select mt-lg-0">
//                   <label className="mb-0 mt-3">Country</label>
//                   <div className="dropdown">
//                     <button
//                       type="button"
//                       className={`dropbtn form-select rounded-3 bg-transparent ${formik.touched.country_id && formik.errors.country_id
//                         ? "is-invalid"
//                         : ""
//                         }`}
//                       onClick={() => {
//                         setIsCountryDropdownOpen(!isCountryDropdownOpen);
//                         setIsContinentDropdownOpen(false); // Ensure other dropdowns are closed
//                         setCountrySearchQuery(""); // Reset search query
//                         setFilteredCountries(countryListData); // Initially show all countries
//                       }}
//                     >
//                       {formik.values.country_id
//                         ? countryListData.find(
//                           (country) => country.id === formik.values.country_id
//                         )?.name
//                         : "Select Country"}
//                     </button>

//                     {isCountryDropdownOpen && (

//                       <div className="dropdown-content">
//                         <div className="input-with-icon">

//                           {/* Search Input inside Dropdown */}
//                           <img src={search} alt="" className="search-icon" />
//                           <input
//                             type="text"
//                             id="searchCountryInput"
//                             placeholder="Search..."
//                             className="dropdown-search rounded-3 bg-transparent input mt-1"
//                             value={countrySearchQuery}
//                             onChange={(e) => {
//                               const query = e.target.value.toLowerCase();
//                               setCountrySearchQuery(query);

//                               const filtered = countryListData.filter((country) =>
//                                 country.name.toLowerCase().includes(query)
//                               );
//                               setFilteredCountries(filtered);
//                             }}
//                           />
//                         </div>
//                         {/* Render Country List */}
//                         {filteredCountries?.length > 0 ? (
//                           filteredCountries.map((country) => (
//                             <div
//                               key={country.id}
//                               className="dropdown-item"
//                               onClick={() => {
//                                 formik.setFieldValue("country_id", country.id);
//                                 setIsCountryDropdownOpen(false); // Close dropdown after selection
//                               }}
//                             >
//                               {country.name}
//                             </div>
//                           ))
//                         ) : (
//                           <div className="dropdown-item">No results found</div>
//                         )}
//                       </div>
//                     )}
//                     {formik.touched.country_id && formik.errors.country_id && (
//                       <div className="text-danger">
//                         {formik.errors.country_id}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Language Dropdown */}
//                 <div className=" ajax-select  mt-lg-0 select2-container">
//                   <label className="mb-0 mt-3">Language</label>
//                   <div className="dropdown">
//                     <button
//                       type="button"
//                       className={`dropbtn form-select rounded-3 bg-transparent ${formik.touched.language_id && formik.errors.language_id
//                         ? "is-invalid"
//                         : ""
//                         }`}
//                       onClick={toggleLanguageDropdown}
//                     >
//                       {formik.values.language_id
//                         ? languageListData.find(
//                           (language) =>
//                             language.id === formik.values.language_id
//                         )?.name
//                         : "Select language"}
//                     </button>

//                     {isLanguageDropdownOpen && (
//                       <div className="dropdown-content">
//                         <div className="dropdown-search-container">
//                           <div className="input-with-icon">
//                             <img src={search} alt="" className="search-icon" />

//                             <input
//                               type="text"
//                               id="searchInput"
//                               placeholder="Search..."
//                               className="dropdown-search rounded-3 bg-transparent input mt-1"
//                               value={languageSearchQuery}
//                               onChange={(e) => {
//                                 const query = e.target.value.toLowerCase();
//                                 setLanguageSearchQuery(query);
//                                 const filtered = languageListData.filter(
//                                   (language) =>
//                                     language.name.toLowerCase().includes(query)
//                                 );
//                                 setFilteredLanguages(filtered);
//                               }}
//                             />

//                           </div>
//                         </div>
//                         {filteredLanguages?.length > 0 ? (
//                           filteredLanguages.map((language) => (
//                             <div
//                               key={language.id}
//                               className="dropdown-item"
//                               onClick={() => handleLanguageSelect(language.id)}
//                             >
//                               {language.name}
//                             </div>
//                           ))
//                         ) : (
//                           <div className="dropdown-item">No results found</div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                   {formik.touched.language_id && formik.errors.language_id && (
//                     <div className="text-danger">
//                       {formik.errors.language_id}
//                     </div>
//                   )}
//                 </div>

//                 {/* Currency Dropdown */}
//                 <div className=" ajax-select  mt-lg-0 select2-container">
//                   <label className="mb-0 mt-3">Currency</label>
//                   <div className="dropdown">
//                     {/* Dropdown Button */}
//                     <button
//                       type="button"
//                       className={`dropbtn form-select rounded-3 bg-transparent ${formik.touched.currency_id && formik.errors.currency_id
//                         ? "is-invalid"
//                         : ""
//                         }`}
//                       onClick={handleDropdownToggle}
//                     >
//                       {formik.values.currency_id
//                         ? currenciesListData.find(
//                           (currency) => currency.id === formik.values.currency_id
//                         )?.name
//                         : "Select currency"}
//                     </button>

//                     {/* Dropdown Content */}
//                     {isCurrencyDropdownOpen && (
//                       <div className="dropdown-content">
//                         <div className="input-with-icon">
//                           <img src={search} alt="" className="search-icon" />
//                           {/* Search Input */}
//                           <input
//                             type="text"
//                             id="currencySearchInput"
//                             placeholder="Search currencies..."
//                             className="dropdown-search rounded-3 bg-transparent input mt-1"
//                             value={searchQuery}
//                             onChange={handleSearchChange}
//                           />
//                         </div>
//                         {/* Render Filtered List */}
//                         {filteredCurrencies.length > 0 ? (
//                           filteredCurrencies.map((currency) => (
//                             <div
//                               key={currency.id}
//                               className="dropdown-item"
//                               onClick={() => handleCurrencySelect(currency.id)}
//                             >
//                               {currency.name}
//                             </div>
//                           ))
//                         ) : (
//                           <div className="dropdown-item">No results found</div>
//                         )}
//                       </div>
//                     )}
//                   </div>

//                   {/* Validation Message */}
//                   {formik.touched.currency_id && formik.errors.currency_id && (
//                     <div className="text-danger">{formik.errors.currency_id}</div>
//                   )}
//                 </div>

//                 {/* Organisation Number */}
//                 <div className=" templating-select select2-container ">
//                   <Label className="mb-0 mt-3">Organisation number</Label>
//                   <Input
//                     name="organization_number"
//                     value={formik.values.organization_number}
//                     type="text"
//                     className={`form-control rounded-3 bg-transparent ${formik.touched.organization_number &&
//                       formik.errors.organization_number
//                       ? "is-invalid"
//                       : ""
//                       }`}
//                     placeholder="Text here..."
//                     onChange={formik.handleChange}
//                   />
//                   {formik.touched.organization_number &&
//                     formik.errors.organization_number && (
//                       <div className="text-danger">
//                         {formik.errors.organization_number}
//                       </div>
//                     )}
//                 </div>
//               </div>
//             </Col>
//             {/* Right Column for Owner Information */}
//             <Col lg="6" className="">
//               <div className="border border-2 p-4 rounded-3">
//                 <p className="fw-bold fs-5">Owner information</p>
//                 <Row>
//                   <Col lg="12" className="mt-3">
//                     {/* Manager Name and Surname */}
//                     <div className="d-flex gap-2">
//                       <div className="w-50">
//                         <Label className="mb-0">Manager name</Label>
//                         <Input
//                           name="name"
//                           value={formik.values.name}
//                           type="text"
//                           className={`form-control  rounded-3 bg-transparent ${formik.touched.name && formik.errors.name
//                             ? "is-invalid"
//                             : ""
//                             }`}
//                           placeholder="Harry"
//                           onChange={formik.handleChange}
//                         />
//                         {formik.touched.name && formik.errors.name && (
//                           <div className="text-danger">
//                             {formik.errors.name}
//                           </div>
//                         )}
//                       </div>
//                       <div className="w-50">
//                         <Label className="control-label mb-0">
//                           Manager surname
//                         </Label>
//                         <Input
//                           name="surname"
//                           value={formik.values.surname}
//                           type="text"
//                           className={`form-control rounded-3 bg-transparent ${formik.touched.surname && formik.errors.surname
//                             ? "is-invalid"
//                             : ""
//                             }`}
//                           placeholder="Stone"
//                           onChange={formik.handleChange}
//                         />
//                         {formik.touched.surname && formik.errors.surname && (
//                           <div className="text-danger">
//                             {formik.errors.surname}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Email Input */}
//                     <div className="mb-3 templating-select select2-container">
//                       <Label className="control-label mb-0 mt-3">E-mail</Label>
//                       <Input
//                         name="email"
//                         value={formik.values.email}
//                         type="email"
//                         className={`form-control rounded-3 bg-transparent ${formik.touched.email && formik.errors.email
//                           ? "is-invalid"
//                           : ""
//                           }`}
//                         placeholder="post@artbuild.com"
//                         onChange={formik.handleChange}
//                       />
//                       {formik.touched.email && formik.errors.email && (
//                         <div className="text-danger">{formik.errors.email}</div>
//                       )}
//                     </div>

//                     {/* Mobile Phone Input */}
//                     <div>
//                       <Label className="mb-0 mt-1">Mobile Phone</Label>
//                       <InputGroup className="mb-3">
//                         <InputGroupText className="p-0">
//                           <select
//                             className="form-select border-0  bg-transparent"
//                             style={{ width: "80px" }}
//                             onChange={formik.handleChange}
//                           >
//                             <option value="+1">+1</option>
//                             <option value="+44">+44</option>
//                             <option value="+91">+91</option>
//                             <option value="+213">+213</option>
//                             <option value="+216">+216</option>
//                           </select>
//                         </InputGroupText>
//                         <Input
//                           type="number"
//                           name="mobile_no"
//                           value={formik.values.mobile_no}
//                           className="form-control  bg-transparent"
//                           placeholder="21607947"
//                           onChange={formik.handleChange}
//                         />
//                       </InputGroup>
//                       {formik.touched.mobile_no && formik.errors.mobile_no && (
//                         <div className="text-danger">{formik.errors.mobile_no}</div>
//                       )}
//                     </div>

//                     {/* Address Input */}
//                     <div className=" ajax-select mt-3 mt-lg-0 select2-container">
//                       <Label className="mb-0 mt-2">Address</Label>
//                       <Input
//                         name="address"
//                         value={formik.values.address}
//                         type="text"
//                         className={`form-control  rounded-3 bg-transparent ${formik.touched.address && formik.errors.address
//                           ? "is-invalid"
//                           : ""
//                           }`}
//                         placeholder="Vossegata 22"
//                         onChange={formik.handleChange}
//                       />
//                       {formik.touched.address && formik.errors.address && (
//                         <div className="text-danger">
//                           {formik.errors.address}
//                         </div>
//                       )}
//                     </div>

//                     {/* City and Postal Code */}
//                     <div className="d-flex gap-2 mt-">
//                       <div className="w-75">
//                         <Label className="mb-0 mt-3">City</Label>
//                         <Input
//                           name="city"
//                           value={formik.values.city}
//                           type="text"
//                           className={`form-control rounded-3 bg-transparent ${formik.touched.city && formik.errors.city
//                             ? "is-invalid"
//                             : ""
//                             }`}
//                           placeholder="Oslo"
//                           onChange={formik.handleChange}
//                         />
//                         {formik.touched.city && formik.errors.city && (
//                           <div className="text-danger">
//                             {formik.errors.city}
//                           </div>
//                         )}
//                       </div>
//                       <div className="w-25 ">
//                         <Label className="control-label mb-0 mt-3">
//                           Postal code
//                         </Label>
//                         <Input
//                           name="postal_code"
//                           value={formik.values.postal_code}
//                           type="number"
//                           className={`form-control  rounded-3 bg-transparent ${formik.touched.postal_code &&
//                             formik.errors.postal_code
//                             ? "is-invalid"
//                             : ""
//                             }`}
//                           placeholder="0475"
//                           onChange={formik.handleChange}
//                         />
//                         {formik.touched.postal_code &&
//                           formik.errors.postal_code && (
//                             <div className="text-danger">
//                               {formik.errors.postal_code}
//                             </div>
//                           )}
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             </Col>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12" className="text-center mt-4">
//             <Button type="submit" className="btn btn-primary px-5">
//               Submit
//             </Button>
//           </Col>
//         </Row>
//       </form>
//     </React.Fragment >
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
import search from '../../../assets/images/searchIcon.png';

import {
  getCountryListData,
  getCurrenciesListData,
  getLanguageListData,
  getContinentListData,
  postGeneralInformation,
  registerUser,
} from '@/store/actions';
import { useNavigate } from 'react-router';

const AddnewPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [continentListData, setContinentListData] = useState([]);
  const [countryListData, setCountryListDataData] = useState([]);
  const [languageListData, setLanguageListData] = useState([]);
  const [currenciesListData, setCurrenciesListData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [continentSearchQuery, setContinentSearchQuery] = useState('');
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [currencySearchQuery, setCurrencySearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [languageSearchQuery, setLanguageSearchQuery] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(languageListData);
  const [isContinentDropdownOpen, setIsContinentDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [continentId, setContinentId] = useState(null);
  // States for Currency Dropdown Search
  const filteredContinents = continentListData?.filter((continent) =>
    continent.name.toLowerCase().includes(continentSearchQuery.toLowerCase())
  );
  // const filteredCurrencies = currenciesListData?.filter((currency) =>
  //   currency.name.toLowerCase().includes(currencySearchQuery.toLowerCase())
  // );
  const handleChange = (e) => {
    const { name, value } = e.target;

    // List of fields that need to be converted to integers
    const integerFields = [
      'continent_id',
      'country_id',
      'currency_id',
      'language_id',
    ];

    setFormData((prevData) => ({
      ...prevData,
      [name]: integerFields.includes(name) ? parseInt(value, 10) : value,
    }));
  };
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle dropdown visibility
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const filteredCurrencies = searchQuery
    ? currenciesListData.filter((currency) =>
        currency.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currenciesListData;

  const handleDropdownToggle = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };
  // Function to handle language selection
  const handleLanguageSelect = (id) => {
    formik.setFieldValue('language_id', id); // Set selected language ID in Formik
    setIsLanguageDropdownOpen(false); // Close the dropdown
  };
  // Effect to filter languages based on the search query
  useEffect(() => {
    setFilteredLanguages(
      languageListData.filter((language) =>
        language.name.toLowerCase().includes(languageSearchQuery.toLowerCase())
      )
    );
  }, [languageSearchQuery, languageListData]); // Re-run filtering when query or data changes

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCurrencySelect = (currencyId) => {
    formik.setFieldValue('currency_id', currencyId);
    setIsCurrencyDropdownOpen(false); // Close dropdown after selection
    setSearchQuery(''); // Reset search input
  };

  const handleContinentChange = (event) => {
    const continentId = event.target.value;
    setSelectedContinent(continentId); // Update selected continent

    if (continentId) {
      getCountryListDataByContinent(continentId)
        .then((response) => {
          setCountries(response); // Set the countries based on selected continent
        })
        .catch((error) => {
          console.error('Error fetching countries:', error);
        });
    } else {
      setCountries([]); // If no continent is selected, clear the countries
    }
  };

  useEffect(() => {
    if (continentId || continentId === null) {
      dispatch(
        getCountryListData({ continentId }, (response, error) => {
          if (response?.status === 200) {
            setCountryListDataData(response?.data?.countries);
          } else {
            setCountryListDataData([]);
          }
        })
      );
    }
    if (continentId === null) {
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
    }
  }, [continentId]);
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      roleId: 2,
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
    },

    // Validation schema
    validationSchema: yup.object({
      name: yup.string().required('Manager name is required'),
      surname: yup.string().required('Manager surname is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      mobile_no: yup
        .string()
        .matches(/^[0-9]+$/, 'Only numbers are allowed')
        .required('Mobile phone is required'),
      continent_id: yup
        .number()
        .required('Continent is required')
        .typeError('Continent is required'),
      country_id: yup
        .number()
        .required('Country is required')
        .typeError('Country is required'),
      language_id: yup
        .number()
        .required('Language is required')
        .typeError('Language is required'),
      currency_id: yup
        .number()
        .required('Currency is required')
        .typeError('Currency is required'),
      organization_number: yup
        .string()
        .required('Organization number is required'),
      address: yup.string().required('Address is required'),
      city: yup.string().required('City is required'),
      postal_code: yup
        .string()
        .matches(/^[0-9]+$/, 'Only numbers are allowed')
        .required('Postal code is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('values', values);
      dispatch(
        registerUser(values, (response, error) => {
          if (response?.status === 201) {
            alert('User registered successfully!');
            resetForm();
            navigate('/licenses');
            setContinentId(null);
          } else {
            console.error('Registration failed:', error);
            alert('Registration failed: ');
          }
        })
      );
    },
  });

  return (
    <React.Fragment>
      {/* Navigation bar */}
      <InternationalHeader />
      {/* Main content */}
      <form onSubmit={formik.handleSubmit}>
        <Row className="m-4">
          {/* Left Column for General Information */}
          <div className="mb-2">
            <p className="mt-3">
              <span className="text-muted mb-2">Licenses</span> &nbsp;&nbsp;
              <span className="mt-5">^</span> &nbsp;&nbsp;
              <span className="mb-4">Add new</span>
            </p>
          </div>
          <Col lg="12" className="d-flex justify-content gap-4">
            {/* General Information Form */}

            <Col lg="6">
              <div className="border border-2 p-4 rounded-3">
                <p className="fw-bold fs-5">General information</p>
                {/* continent */}
                <div className=" ajax-select mt-3">
                  <label className="mb-0 mt-3">Continent</label>
                  <div className="dropdown">
                    <button
                      type="button"
                      className={`dropbtn form-select rounded-3 bg-transparent ${
                        formik.touched.continent_id &&
                        formik.errors.continent_id
                          ? 'is-invalid'
                          : ''
                      }`}
                      onClick={() => {
                        setIsContinentDropdownOpen(!isContinentDropdownOpen);
                        formik.setFieldValue('country_id', null);
                        setIsCurrencyDropdownOpen(false); // Close currency dropdown
                      }}
                    >
                      {formik.values.continent_id
                        ? continentListData.find(
                            (continent) =>
                              continent.id === formik.values.continent_id
                          )?.name
                        : 'Select Continent'}
                    </button>
                    {isContinentDropdownOpen && (
                      <div className="dropdown-content">
                        <div className="input-with-icon ">
                          <input
                            type="search"
                            id="searchContinentInput"
                            placeholder="Search..."
                            className="dropdown-search rounded-3 bg-transparent input mt-1 mr-5"
                            value={continentSearchQuery}
                            onChange={(e) =>
                              setContinentSearchQuery(e.target.value)
                            }
                            style={{
                              paddingLeft: '3rem', // Added padding to prevent overlap with the search icon
                              paddingRight: '2.5rem', // Added right padding for potential future use
                            }}
                          />
                          <img
                            src={search}
                            alt="Search Icon"
                            className="search-icon"
                            style={{
                              position: 'absolute',
                              right: '10px', // Positioned icon to the right
                              top: '5%', // Vertically centered
                              transform: 'translateY(-50%)',
                              width: '20px', // Set icon width
                              height: '20px', // Set icon height
                              pointerEvents: 'none', // Ensures the icon doesn't block input interactions
                            }}
                          />
                        </div>
                        {filteredContinents?.length > 0 ? (
                          filteredContinents.map((continent) => (
                            <div
                              key={continent.id}
                              className="dropdown-item"
                              onClick={() => {
                                formik.setFieldValue(
                                  'continent_id',
                                  continent.id
                                );
                                setIsContinentDropdownOpen(false);
                                setContinentId(continent.id);
                              }}
                            >
                              {continent.name}
                            </div>
                          ))
                        ) : (
                          <div className="dropdown-item">No results found</div>
                        )}
                      </div>
                    )}
                  </div>
                  {formik.touched.continent_id &&
                    formik.errors.continent_id && (
                      <div className="text-danger">
                        {formik.errors.continent_id}
                      </div>
                    )}
                </div>

                {/* Country Dropdown */}
                <div className=" ajax-select mt-lg-0">
                  <label className="mb-0 mt-3">Country</label>
                  <div className="dropdown">
                    <button
                      type="button"
                      className={`dropbtn form-select rounded-3 bg-transparent ${
                        formik.touched.country_id && formik.errors.country_id
                          ? 'is-invalid'
                          : ''
                      }`}
                      onClick={() => {
                        setIsCountryDropdownOpen(!isCountryDropdownOpen);
                        setIsContinentDropdownOpen(false); // Ensure other dropdowns are closed
                        setCountrySearchQuery(''); // Reset search query
                        setFilteredCountries(countryListData); // Initially show all countries
                      }}
                    >
                      {formik.values.country_id
                        ? countryListData.find(
                            (country) => country.id === formik.values.country_id
                          )?.name
                        : 'Select Country'}
                    </button>

                    {isCountryDropdownOpen && (
                      <div className="dropdown-content">
                        <div className="input-with-icon">
                          {/* Search Input inside Dropdown */}
                          <img src={search} alt="" className="search-icon" />
                          <input
                            type="text"
                            id="searchCountryInput"
                            placeholder="Search..."
                            className="dropdown-search rounded-3 bg-transparent input mt-1"
                            value={countrySearchQuery}
                            style={{
                              paddingLeft: '3rem', // Added padding to prevent overlap with the search icon
                              paddingRight: 'rem', // Added right padding for potential future use
                            }}
                            onChange={(e) => {
                              const query = e.target.value.toLowerCase();
                              setCountrySearchQuery(query);

                              const filtered = countryListData.filter(
                                (country) =>
                                  country.name.toLowerCase().includes(query)
                              );
                              setFilteredCountries(filtered);
                            }}
                          />
                        </div>
                        {/* Render Country List */}
                        {filteredCountries?.length > 0 ? (
                          filteredCountries.map((country) => (
                            <div
                              key={country.id}
                              className="dropdown-item"
                              onClick={() => {
                                formik.setFieldValue('country_id', country.id);
                                setIsCountryDropdownOpen(false); // Close dropdown after selection
                              }}
                            >
                              {country.name}
                            </div>
                          ))
                        ) : (
                          <div className="dropdown-item">No results found</div>
                        )}
                      </div>
                    )}
                    {formik.touched.country_id && formik.errors.country_id && (
                      <div className="text-danger">
                        {formik.errors.country_id}
                      </div>
                    )}
                  </div>
                </div>

                {/* Language Dropdown */}
                <div className=" ajax-select  mt-lg-0 select2-container">
                  <label className="mb-0 mt-3">Language</label>
                  <div className="dropdown">
                    <button
                      type="button"
                      className={`dropbtn form-select rounded-3 bg-transparent ${
                        formik.touched.language_id && formik.errors.language_id
                          ? 'is-invalid'
                          : ''
                      }`}
                      onClick={toggleLanguageDropdown}
                    >
                      {formik.values.language_id
                        ? languageListData.find(
                            (language) =>
                              language.id === formik.values.language_id
                          )?.name
                        : 'Select language'}
                    </button>

                    {isLanguageDropdownOpen && (
                      <div className="dropdown-content">
                        <div className="dropdown-search-container">
                          <div className="input-with-icon">
                            <img src={search} alt="" className="search-icon" />

                            <input
                              type="text"
                              id="searchInput"
                              placeholder="Search..."
                              className="dropdown-search rounded-3 bg-transparent input mt-1"
                              value={languageSearchQuery}
                              style={{
                                paddingLeft: '3rem', // Added padding to prevent overlap with the search icon
                                paddingRight: 'rem', // Added right padding for potential future use
                              }}
                              onChange={(e) => {
                                const query = e.target.value.toLowerCase();
                                setLanguageSearchQuery(query);
                                const filtered = languageListData.filter(
                                  (language) =>
                                    language.name.toLowerCase().includes(query)
                                );
                                setFilteredLanguages(filtered);
                              }}
                            />
                          </div>
                        </div>
                        {filteredLanguages?.length > 0 ? (
                          filteredLanguages.map((language) => (
                            <div
                              key={language.id}
                              className="dropdown-item"
                              onClick={() => handleLanguageSelect(language.id)}
                            >
                              {language.name}
                            </div>
                          ))
                        ) : (
                          <div className="dropdown-item">No results found</div>
                        )}
                      </div>
                    )}
                  </div>
                  {formik.touched.language_id && formik.errors.language_id && (
                    <div className="text-danger">
                      {formik.errors.language_id}
                    </div>
                  )}
                </div>

                {/* Currency Dropdown */}
                <div className=" ajax-select  mt-lg-0 select2-container">
                  <label className="mb-0 mt-3">Currency</label>
                  <div className="dropdown">
                    {/* Dropdown Button */}
                    <button
                      type="button"
                      className={`dropbtn form-select rounded-3 bg-transparent ${
                        formik.touched.currency_id && formik.errors.currency_id
                          ? 'is-invalid'
                          : ''
                      }`}
                      onClick={handleDropdownToggle}
                    >
                      {formik.values.currency_id
                        ? currenciesListData.find(
                            (currency) =>
                              currency.id === formik.values.currency_id
                          )?.name
                        : 'Select currency'}
                    </button>

                    {/* Dropdown Content */}
                    {isCurrencyDropdownOpen && (
                      <div className="dropdown-content">
                        <div className="input-with-icon">
                          <img src={search} alt="" className="search-icon" />
                          {/* Search Input */}
                          <input
                            type="text"
                            id="currencySearchInput"
                            placeholder="Search..."
                            className="dropdown-search rounded-3 bg-transparent input mt-1"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            style={{
                              paddingLeft: '3rem', // Added padding to prevent overlap with the search icon
                              paddingRight: 'rem', // Added right padding for potential future use
                            }}
                          />
                        </div>
                        {/* Render Filtered List */}
                        {filteredCurrencies.length > 0 ? (
                          filteredCurrencies.map((currency) => (
                            <div
                              key={currency.id}
                              className="dropdown-item"
                              onClick={() => handleCurrencySelect(currency.id)}
                            >
                              {currency.name}
                            </div>
                          ))
                        ) : (
                          <div className="dropdown-item">No results found</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Validation Message */}
                  {formik.touched.currency_id && formik.errors.currency_id && (
                    <div className="text-danger">
                      {formik.errors.currency_id}
                    </div>
                  )}
                </div>

                {/* Organisation Number */}
                <div className=" templating-select select2-container ">
                  <Label className="mb-0 mt-3">Organisation number</Label>
                  <Input
                    name="organization_number"
                    value={formik.values.organization_number}
                    type="text"
                    className={`form-control rounded-3 bg-transparent ${
                      formik.touched.organization_number &&
                      formik.errors.organization_number
                        ? 'is-invalid'
                        : ''
                    }`}
                    placeholder="Text here..."
                    onChange={formik.handleChange}
                  />
                  {formik.touched.organization_number &&
                    formik.errors.organization_number && (
                      <div className="text-danger">
                        {formik.errors.organization_number}
                      </div>
                    )}
                </div>
              </div>
            </Col>
            {/* Right Column for Owner Information */}
            <Col lg="6" className="">
              <div className="border border-2 p-4 rounded-3">
                <p className="fw-bold fs-5">Owner information</p>
                <Row>
                  <Col lg="12" className="mt-3">
                    {/* Manager Name and Surname */}
                    <div className="d-flex gap-2">
                      <div className="w-50">
                        <Label className="mb-0">Manager name</Label>
                        <Input
                          name="name"
                          value={formik.values.name}
                          type="text"
                          className={`form-control  rounded-3 bg-transparent ${
                            formik.touched.name && formik.errors.name
                              ? 'is-invalid'
                              : ''
                          }`}
                          placeholder="Harry"
                          onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name && (
                          <div className="text-danger">
                            {formik.errors.name}
                          </div>
                        )}
                      </div>
                      <div className="w-50">
                        <Label className="control-label mb-0">
                          Manager surname
                        </Label>
                        <Input
                          name="surname"
                          value={formik.values.surname}
                          type="text"
                          className={`form-control rounded-3 bg-transparent ${
                            formik.touched.surname && formik.errors.surname
                              ? 'is-invalid'
                              : ''
                          }`}
                          placeholder="Stone"
                          onChange={formik.handleChange}
                        />
                        {formik.touched.surname && formik.errors.surname && (
                          <div className="text-danger">
                            {formik.errors.surname}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="mb-3 templating-select select2-container">
                      <Label className="control-label mb-0 mt-3">E-mail</Label>
                      <Input
                        name="email"
                        value={formik.values.email}
                        type="email"
                        className={`form-control rounded-3 bg-transparent ${
                          formik.touched.email && formik.errors.email
                            ? 'is-invalid'
                            : ''
                        }`}
                        placeholder="post@artbuild.com"
                        onChange={formik.handleChange}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </div>

                    {/* Mobile Phone Input */}
                    <div>
                      <Label className="mb-0 mt-1">Mobile Phone</Label>
                      <InputGroup className="mb-3">
                        <InputGroupText className="p-0">
                          <select
                            className="form-select border-0  bg-transparent"
                            style={{ width: '80px' }}
                            onChange={formik.handleChange}
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
                          value={formik.values.mobile_no}
                          className="form-control  bg-transparent"
                          placeholder="21607947"
                          onChange={formik.handleChange}
                        />
                      </InputGroup>
                      {formik.touched.mobile_no && formik.errors.mobile_no && (
                        <div className="text-danger">
                          {formik.errors.mobile_no}
                        </div>
                      )}
                    </div>

                    {/* Address Input */}
                    <div className=" ajax-select mt-3 mt-lg-0 select2-container">
                      <Label className="mb-0 mt-2">Address</Label>
                      <Input
                        name="address"
                        value={formik.values.address}
                        type="text"
                        className={`form-control  rounded-3 bg-transparent ${
                          formik.touched.address && formik.errors.address
                            ? 'is-invalid'
                            : ''
                        }`}
                        placeholder="Vossegata 22"
                        onChange={formik.handleChange}
                      />
                      {formik.touched.address && formik.errors.address && (
                        <div className="text-danger">
                          {formik.errors.address}
                        </div>
                      )}
                    </div>

                    {/* City and Postal Code */}
                    <div className="d-flex gap-2 mt-">
                      <div className="w-75">
                        <Label className="mb-0 mt-3">City</Label>
                        <Input
                          name="city"
                          value={formik.values.city}
                          type="text"
                          className={`form-control rounded-3 bg-transparent ${
                            formik.touched.city && formik.errors.city
                              ? 'is-invalid'
                              : ''
                          }`}
                          placeholder="Oslo"
                          onChange={formik.handleChange}
                        />
                        {formik.touched.city && formik.errors.city && (
                          <div className="text-danger">
                            {formik.errors.city}
                          </div>
                        )}
                      </div>
                      <div className="w-25 ">
                        <Label className="control-label mb-0 mt-3">
                          Postal code
                        </Label>
                        <Input
                          name="postal_code"
                          value={formik.values.postal_code}
                          type="number"
                          className={`form-control  rounded-3 bg-transparent ${
                            formik.touched.postal_code &&
                            formik.errors.postal_code
                              ? 'is-invalid'
                              : ''
                          }`}
                          placeholder="0475"
                          onChange={formik.handleChange}
                        />
                        {formik.touched.postal_code &&
                          formik.errors.postal_code && (
                            <div className="text-danger">
                              {formik.errors.postal_code}
                            </div>
                          )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
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
