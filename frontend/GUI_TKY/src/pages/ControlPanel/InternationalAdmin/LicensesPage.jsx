import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import currency from '../../../assets/images/currency.png';
import userprofile from '../../../assets/images/userprofile.png';
// Reactstrap Components
import { Input, Row, Col, Button } from 'reactstrap';
import '../controlpaneladmin.scss';
import InternationalHeader from './InternationalHeader';
import plus from '../../../assets/images/plus.png';
import search from '../../../assets/images/searchIcon.png';
import { useDispatch } from 'react-redux';
import { getUsersListData } from '@/store/actions';
import Flag from 'react-world-flags'; //add for country flags

function LicensesPage() {
  // useNavigate is a React Router hook used to programmatically navigate to different routes
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usersListData, setUsersListData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  // Handler for adding a new license
  const handleAddLicense = () => {
    navigate('/addnew');
  };
  const userOwnerPage = (userId) => {
    navigate(`/owner/${userId}`);
  };

  // Expanded countryCodeMap for mapping country names to ISO codes
  const countryCodeMap = {
    Afghanistan: 'AF',
    Albania: 'AL',
    Algeria: 'DZ',
    Andorra: 'AD',
    Angola: 'AO',
    'Antigua and Barbuda': 'AG',
    Argentina: 'AR',
    Armenia: 'AM',
    Australia: 'AU',
    Austria: 'AT',
    Azerbaijan: 'AZ',
    Bahamas: 'BS',
    Bahrain: 'BH',
    Bangladesh: 'BD',
    Barbados: 'BB',
    Belarus: 'BY',
    Belgium: 'BE',
    Belize: 'BZ',
    Benin: 'BJ',
    Bhutan: 'BT',
    Bolivia: 'BO',
    'Bosnia and Herzegovina': 'BA',
    Botswana: 'BW',
    Brazil: 'BR',
    'Bouvet Island': 'BV',
    Brunei: 'BN',
    Bulgaria: 'BG',
    'Burkina Faso': 'BF',
    Burundi: 'BI',
    'Cabo Verde': 'CV',
    Cambodia: 'KH',
    Cameroon: 'CM',
    Canada: 'CA',
    'Central African Republic': 'CF',
    Chad: 'TD',
    Chile: 'CL',
    China: 'CN',
    Colombia: 'CO',
    Comoros: 'KM',
    'Congo (Congo-Brazzaville)': 'CG',
    'Congo (Democratic Republic of the Congo)': 'CD',
    'Costa Rica': 'CR',
    Croatia: 'HR',
    Cuba: 'CU',
    Cyprus: 'CY',
    'Czech Republic': 'CZ',
    Denmark: 'DK',
    Djibouti: 'DJ',
    Dominica: 'DM',
    'Dominican Republic': 'DO',
    Ecuador: 'EC',
    Egypt: 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    Eritrea: 'ER',
    Estonia: 'EE',
    // "Eswatini (fmr. "Swaziland")": "SZ",
    Ethiopia: 'ET',
    Fiji: 'FJ',
    Finland: 'FI',
    France: 'FR',
    Gabon: 'GA',
    Gambia: 'GM',
    Georgia: 'GE',
    Germany: 'DE',
    Ghana: 'GH',
    Greece: 'GR',
    Grenada: 'GD',
    Guatemala: 'GT',
    Guinea: 'GN',
    'Guinea-Bissau': 'GW',
    Guyana: 'GY',
    Haiti: 'HT',
    Honduras: 'HN',
    Hungary: 'HU',
    Iceland: 'IS',
    India: 'IN',
    Indonesia: 'ID',
    Iran: 'IR',
    Iraq: 'IQ',
    Ireland: 'IE',
    Israel: 'IL',
    Italy: 'IT',
    Jamaica: 'JM',
    Japan: 'JP',
    Jordan: 'JO',
    Kazakhstan: 'KZ',
    Kenya: 'KE',
    Kiribati: 'KI',
    'Korea, North': 'KP',
    'Korea, South': 'KR',
    Kuwait: 'KW',
    Kyrgyzstan: 'KG',
    Laos: 'LA',
    Latvia: 'LV',
    Lebanon: 'LB',
    Lesotho: 'LS',
    Liberia: 'LR',
    Libya: 'LY',
    Liechtenstein: 'LI',
    Lithuania: 'LT',
    Luxembourg: 'LU',
    Madagascar: 'MG',
    Malawi: 'MW',
    Malaysia: 'MY',
    Maldives: 'MV',
    Mali: 'ML',
    Malta: 'MT',
    'Marshall Islands': 'MH',
    Mauritania: 'MR',
    Mauritius: 'MU',
    Mexico: 'MX',
    Micronesia: 'FM',
    Moldova: 'MD',
    Monaco: 'MC',
    Mongolia: 'MN',
    Montenegro: 'ME',
    Morocco: 'MA',
    Mozambique: 'MZ',
    'Myanmar (formerly Burma)': 'MM',
    Namibia: 'NA',
    Nauru: 'NR',
    Nepal: 'NP',
    Netherlands: 'NL',
    'New Zealand': 'NZ',
    Nicaragua: 'NI',
    Niger: 'NE',
    Nigeria: 'NG',
    'North Macedonia (fmr. Macedonia)': 'MK',
    Norway: 'NO',
    Oman: 'OM',
    Pakistan: 'PK',
    Palau: 'PW',
    Panama: 'PA',
    'Papua New Guinea': 'PG',
    Paraguay: 'PY',
    Peru: 'PE',
    Philippines: 'PH',
    Poland: 'PL',
    Portugal: 'PT',
    Qatar: 'QA',
    Romania: 'RO',
    Russia: 'RU',
    Rwanda: 'RW',
    'Saint Kitts and Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Vincent and the Grenadines': 'VC',
    Samoa: 'WS',
    'San Marino': 'SM',
    'Sao Tome and Principe': 'ST',
    'Saudi Arabia': 'SA',
    Senegal: 'SN',
    Serbia: 'RS',
    Seychelles: 'SC',
    'Sierra Leone': 'SL',
    Singapore: 'SG',
    Slovakia: 'SK',
    Slovenia: 'SI',
    'Solomon Islands': 'SB',
    Somalia: 'SO',
    'South Africa': 'ZA',
    'South Sudan': 'SS',
    Spain: 'ES',
    'Sri Lanka': 'LK',
    Sudan: 'SD',
    Suriname: 'SR',
    Sweden: 'SE',
    Switzerland: 'CH',
    Syria: 'SY',
    Taiwan: 'TW',
    Tajikistan: 'TJ',
    Tanzania: 'TZ',
    Thailand: 'TH',
    'Timor-Leste': 'TL',
    Togo: 'TG',
    Tonga: 'TO',
    'Trinidad and Tobago': 'TT',
    Tunisia: 'TN',
    Turkey: 'TR',
    Turkmenistan: 'TM',
    Tuvalu: 'TV',
    Uganda: 'UG',
    Ukraine: 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'United States': 'US',
    Uruguay: 'UY',
    Uzbekistan: 'UZ',
    Vanuatu: 'VU',
    'Vatican City': 'VA',
    Venezuela: 'VE',
    Vietnam: 'VN',
    Yemen: 'YE',
    Zambia: 'ZM',
    Zimbabwe: 'ZW',
  };

  useEffect(() => {
    dispatch(
      getUsersListData(
        { roleId: 2, search: searchQuery },
        (response, error) => {
          if (response?.status === 200) {
            setUsersListData(response?.data.data);
          } else {
            setUsersListData([]);
          }
        }
      )
    );
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {/* <Input
                        name="search"
                        style={{
                            outline: "none",
                            boxShadow: "none",
                            borderRadius: "6px"
                        }}
                        className="form-control"
                        placeholder="Search"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    /> */}
              <img src={search} alt="" className="search-icon" />
            </div>
          </Col>
          <Col xs="12" md="auto" className="text-md-end mt-2 mt-md-0">
            {/* Add License Button */}
            <Button
              className=" px-4 rounded-3 me-3"
              onClick={handleAddLicense}
              style={{ background: '#41619A' }}
            >
              <img src={plus} alt="" className="me-1" /> Icon
            </Button>
          </Col>
        </Row>

        {/* License List Section */}
        <Row className="mt-0 m-4">
          <Col>
            {Object.keys(usersListData).map((region) => (
              <div key={region} className="mb-4">
                <h5 className="mt-4">{region}</h5>
                {usersListData[region].map((license, index) => (
                  <div
                    key={index}
                    className="d-flex flex-column flex-md-row justify-content-between h-75 align-items-start align-items-md-center border rounded p-4 mb-2 bg-white"
                    onClick={() => userOwnerPage(license.id)}
                  >
                    <div className="d-flex gap-3 align-items-center mb-2 mb-md-0">
                      <div className="ms-2">
                    
                        {countryCodeMap[license.country] ? (
                          <Flag
                            className="rounded-4"
                            code={countryCodeMap[license.country]}
                            style={{
                              width: '30px', 
                              height: '30px', 
                              borderRadius: '60%', 
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          <span>Flag not available</span>
                        )}
                      </div>
                      <div className="rounded-4 h-25 ms-3">
                        <strong>{license.country}</strong>
                      </div>
                      {/* <p className="mb-0 text-muted">{license.email}</p> */}
                    </div>
                    {/* License Info */}
                    <div
                      className="d-flex flex-column flex-md-row align-items-start align-items-center justify-content-between gap-4"
                      style={{ width: '50%', maxWidth: '500px' }}
                    >
                      <div className="d-flex">
                        <img
                          src={userprofile}
                          alt="Profile Icon"
                          className="me-2 h-25"
                        />
                        {/* organization_number */}
                        <span>{license.name}</span>
                      </div>
                      <div className="d-flex " style={{ width: '30%' }}>
                        <img
                          src={currency}
                          alt="Currency Icon"
                          className="me-2 text-start"
                        />
                        <span className="">{license.currency}</span>
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
  );
}

export default LicensesPage;
