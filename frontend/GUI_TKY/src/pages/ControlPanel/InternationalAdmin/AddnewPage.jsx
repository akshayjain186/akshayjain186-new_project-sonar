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
  registerUser,
} from '@/store/actions';
import { useNavigate } from 'react-router';

const AddnewPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
    } catch (error) { }
  };




  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      roleId: 3,
      mobile_no: '',
      isActive:"",
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
    onSubmit: (values ,{resetForm}) => {
      console.log("values",values)
      dispatch(registerUser(values, (response, error) => {
        if (response?.status === 201) {
          alert('User registered successfully!');
          resetForm()
          navigate("/licenses")
        } 
        else {
          console.error('Registration failed:', error);
          alert('Registration failed: ');
        }
    
      }));
    },
  });

  return (
    <React.Fragment>
      {/* Navigation bar */}
      <InternationalHeader />
      {/* Main content */}


      <form onSubmit={formik.handleSubmit}>
        <Row className='m-4'>
          {/* Left Column for General Information */}
          <div className="mb-2">
            <p className='mt-3'>
              <span className="text-muted">Licenses</span> &nbsp;&nbsp;^{' '}&nbsp;&nbsp;
              <span>Add new</span>
            </p>
          </div>
          <Col lg="12" className="d-flex justify-content gap-4">
            {/* General Information Form */}

            <Col lg="6">
              <div className='border border-2 p-4 rounded-3'>
                <p className="fw-bold fs-5">General information</p>
                {/* Continent Dropdown */}
                <div>
                  <Label className="mb-0">Continent</Label>
                  <select
                    name="continent_id"
                    value={formik.values.continent_id || ""}

                    className={`form-select rounded-3 bg-transparent ${formik.touched.continent_id && formik.errors.continent_id
                      ? 'is-invalid'
                      : ''
                      }`} placeholder="Choose continent"
                    onChange={formik.handleChange}
                  >
                    <option value="">Select continent</option>
                    {continentListData?.map((continent, index) => (
                      <option key={continent?.id} value={continent?.id}>
                        {continent?.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.continent_id && formik.errors.continent_id && (
                    <div className="text-danger">{formik.errors.continent_id}</div>
                  )}
                </div>

                {/* Country Dropdown */}
                <div>
                  <Label className="mb-0 mt-3">Country</Label>
                  <select
                    name="country_id"
                    value={formik.values.country_id || ""}
                    className={`form-select  rounded-3 bg-transparent ${formik.touched.country_id && formik.errors.country_id
                      ? 'is-invalid'
                      : ''
                      }`}
                    placeholder="Choose country"
                    onChange={formik.handleChange}
                  >
                    <option value="">Select country</option>
                    {countryListData?.map((country, index) => (
                      <option key={country?.id} value={country?.id}>
                        {country?.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.country_id && formik.errors.country_id && (
                    <div className="text-danger">{formik.errors.country_id}</div>
                  )}
                </div>

                {/* Language Dropdown */}
                <div>
                  <Label className="mb-0 mt-3">Language</Label>
                  <select
                    name="language_id"
                    value={formik.values.language_id || ""}
                    className={`form-select rounded-3 bg-transparent ${formik.touched.language_id && formik.errors.language_id
                      ? 'is-invalid'
                      : ''
                      }`} placeholder="Choose language"
                    onChange={formik.handleChange}
                  >
                    <option value="">Select language</option>
                    {languageListData?.map((language, index) => (
                      <option key={language?.id} value={language?.id}>
                        {language?.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.language_id && formik.errors.language_id && (
                    <div className="text-danger">{formik.errors.language_id}</div>
                  )}
                </div>

                {/* Currency Dropdown */}
                <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
                  <Label className="mb-0 mt-3">Currency</Label>
                  <select
                    name="currency_id"
                    value={formik.values.currency_id || ""}
                    className={`form-select rounded-3 bg-transparent ${formik.touched.currency_id && formik.errors.currency_id
                      ? 'is-invalid'
                      : ''
                      }`}
                    placeholder="Choose currency"
                    onChange={formik.handleChange}
                  >
                    <option value="">Select currency</option>
                    {currenciesListData?.map((currency, index) => (
                      <option key={currency?.id} value={currency?.id}>
                        {currency?.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.currency_id && formik.errors.currency_id && (
                    <div className="text-danger">{formik.errors.currency_id}</div>
                  )}
                </div>

                {/* Organisation Number */}
                <div className="mb-3 templating-select select2-container ">
                  <Label className="mb-0 mt-3">Organisation number</Label>
                  <Input
                    name="organization_number"
                    value={formik.values.organization_number}
                    type="text"
                    className={`form-control rounded-3 bg-transparent ${formik.touched.organization_number && formik.errors.organization_number
                        ? 'is-invalid'
                        : ''
                      }`}
                    placeholder="Text here..."
                    onChange={formik.handleChange}
                  />
                  {formik.touched.organization_number && formik.errors.organization_number && (
                    <div className="text-danger">{formik.errors.organization_number}</div>
                  )}
                </div>
              </div>
            </Col>
            {/* Right Column for Owner Information */}
            <Col lg="6" className="">
              <div className="border border-2 p-4 rounded-3">
                <p className="fw-bold fs-5">Owner information</p>
                <Row>
                  <Col lg="12">
                    {/* Manager Name and Surname */}
                    <div className="d-flex gap-2">
                      <div className="w-50">
                        <Label className="mb-0">Manager name</Label>
                        <Input
                          name="name"
                          value={formik.values.name}
                          type="text"
                          className={`form-control  rounded-3 bg-transparent ${formik.touched.name && formik.errors.name
                              ? 'is-invalid'
                              : ''
                            }`} placeholder="Harry"
                          onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name && (
                          <div className="text-danger">{formik.errors.name}</div>
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
                          className={`form-control rounded-3 bg-transparent ${formik.touched.surname && formik.errors.surname
                              ? 'is-invalid'
                              : ''
                            }`} placeholder="Stone"
                          onChange={formik.handleChange}
                        />
                        {formik.touched.surname && formik.errors.surname && (
                          <div className="text-danger">{formik.errors.surname}</div>
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
                        className={`form-control rounded-3 bg-transparent ${formik.touched.email && formik.errors.email
                            ? 'is-invalid'
                            : ''
                          }`} placeholder="post@artbuild.com"
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
                            //   name="mobile_no"
                            //   value={formData.mobile_no}
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
                    </div>

                    {/* Address Input */}
                    <div className="mb-3 ajax-select mt-2 mt-lg-0 select2-container">
                      <Label className="mb-0 mt-1">Address</Label>
                      <Input
                        name="address"
                        value={formik.values.address}
                        type="text"
                        className={`form-control  rounded-3 bg-transparent ${formik.touched.address && formik.errors.address
                            ? 'is-invalid'
                            : ''
                          }`} placeholder="Vossegata 22"
                        onChange={formik.handleChange}

                      />
                      {formik.touched.address && formik.errors.address && (
                        <div className="text-danger">{formik.errors.address}</div>
                      )}
                    </div>

                    {/* City and Postal Code */}
                    <div className="d-flex gap-2 mb-3">
                      <div className="w-75">
                        <Label className="mb-0 mt-3">City</Label>
                        <Input
                          name="city"
                          value={formik.values.city}
                          type="text"
                          className={`form-control rounded-3 bg-transparent ${formik.touched.city && formik.errors.city
                              ? 'is-invalid'
                              : ''
                            }`} placeholder="Oslo"
                          onChange={formik.handleChange}
                        />
                        {formik.touched.city && formik.errors.city && (
                          <div className="text-danger">{formik.errors.city}</div>
                        )}
                      </div>
                      <div className="w-25 mb-3">
                        <Label className="control-label mb-0 mt-3">Postal code</Label>
                        <Input
                          name="postal_code"
                          value={formik.values.postal_code}
                          type="number"
                          className={`form-control  rounded-3 bg-transparent ${formik.touched.postal_code && formik.errors.postal_code
                              ? 'is-invalid'
                              : ''
                            }`} placeholder="0475"
                          onChange={formik.handleChange}
                        />
                        {formik.touched.postal_code && formik.errors.postal_code && (
                          <div className="text-danger">{formik.errors.postal_code}</div>
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













