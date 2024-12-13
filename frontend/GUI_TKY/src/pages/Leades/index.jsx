// import { useState } from 'react';
// import { Tab, Tabs } from 'react-bootstrap';
// import Customers from './Customers';
// import Companies from './Companies';

// export default function Leads() {
//   const [key, setKey] = useState('customers');

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Leads</h2>
//       <Tabs
//         id="leads-tabs"
//         activeKey={key}
//         onSelect={(k) => setKey(k)}
//         className="mb-3"
//       >
//         <Tab eventKey="customers" title="Customers">
//           {/* <div className="d-flex justify-content-between align-items-center mb-3">
//             <div
//               className="d-flex"
//               style={{ maxWidth: '100%', width: '500px' }}
//             >
//               <input
//                 type="text"
//                 className="form-control me-3 mb-2"
//                 placeholder="Search..."
//                 // style={{ maxWidth: '300px' }}
//               />
//               <input
//                 type="date"
//                 className="form-control me-3 mb-2"
//                 // style={{ maxWidth: '300px' }}
//               />
//             </div>
//             <p className="mb-0">Total Requests: 234</p>
//           </div> */}
//           <Customers/>
//         </Tab>
//         <Tab eventKey="companies" title="Companies">
//           {/* <div className="d-flex justify-content-between align-items-center mb-3">
//             <div className="d-flex">
//               <input
//                 type="text"
//                 className="form-control me-3 mb-2"
//                 placeholder="Search..."
//                 style={{ maxWidth: '300px' }}
//               />
//               <input
//                 type="date"
//                 className="form-control me-3 mb-2"
//                 style={{ maxWidth: '300px' }}
//               />
//             </div>
//             <p className="mb-0">Total Requests: 234</p>
//           </div> */}
//           <Companies/>
//         </Tab>
//       </Tabs>
//     </div>
//   );
// }

import { useState } from 'react';
import { Tab, Tabs } from 'reactstrap';
import Customers from './Customers';
import Companies from './Companies';

export default function Leads() {
  const [key, setKey] = useState('customers');

  return (
    <div className="card card-header mt-4">
      <h2 className="mb-4">Leads</h2>
      <Tabs
        id="leads-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 custom-tabs"
      >
        <div eventKey="customers" title="Customers">
          <Customers />
        </div>
        <div eventKey="companies" title="Companies">
          <Companies />
        </div>
      </Tabs>

      <style jsx>{`
        .custom-tabs .nav-item {
          margin-right: 10px; /* Adjust as needed */
        }

        .custom-tabs .nav-link.active {
          color: blue !important;
          font-weight: bold;
          background-color: transparent !important;
        }

        .custom-tabs .nav-link {
          color: gray !important;
        }
      `}</style>
    </div>
  );
}
