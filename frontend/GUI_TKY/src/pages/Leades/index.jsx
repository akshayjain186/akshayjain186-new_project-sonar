import { useState } from 'react';

import { Tab, Tabs } from 'react-bootstrap';
import Companies from './Companies/Companies';
import Customers from './Customers/Customers';

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
        <Tab eventKey="customers" title="Customers">
          <Customers />
        </Tab>
        <Tab eventKey="companies" title="Companies">
          <Companies />
        </Tab>
      </Tabs>

      <style jsx>{`
        .custom-tabs .nav-item {
          margin-right: 10px; /* Adjust as needed */
        }

        .custom-tabs .nav-link {
          color: gray !important;
          padding-bottom: 5px; /* Add space for the underline */
          border-bottom: 2px solid transparent; /* Default transparent underline */
          transition: all 0.3s ease;
        }

        /* Active tab styling */
        .custom-tabs .nav-link.active {
          color: #41619a !important; /* Text color of active tab */
          font-weight: bold;
          border-bottom: 2px solid blue; /* Underline color for active tab */
          background-color: transparent !important;
          border-bottom: 2px solid #41619a;
        }

        /* Hover styling (optional) */
        .custom-tabs .nav-link:hover {
          color: #41619a !important;
          border-bottom: 2px solid #41619a; /* Underline color on hover */
        }
      `}</style>
    </div>
  );
}
