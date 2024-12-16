// import React, { useState } from 'react';
// import {
//   Box,
//   Tab,
//   Tabs,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import SuperAdmins from './SuperAdminUser/SuperAdminUser';
// import AdminUser from './AdminUser/AdminUser';
// import CustomerUser from './CustomerUser/CustomerUser';

// const Users = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', p: 2 }}>
//       {/* Page Title */}
//       <Typography variant="h4" component="h1" gutterBottom>
//         Users
//       </Typography>

//       {/* Tabs Section */}
//       <Tabs
//         value={activeTab}
//         onChange={handleTabChange}
//         textColor="primary"
//         indicatorColor="primary"
//         variant={isMobile ? 'fullWidth' : 'scrollable'} // Use fullWidth on mobile and scrollable on larger screens
//         scrollButtons={isMobile ? false : 'auto'} // Disable scroll buttons on mobile
//         aria-label="User Tabs"
//         sx={{
//           borderBottom: 1,
//           borderColor: 'divider',
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         <Tab label="Super admins" />
//         <Tab label="Admins" />
//         <Tab label="Customers" />
//       </Tabs>

//       {/* Tab Content Section */}
//       <Box sx={{ mt: 2 }}>
//         {activeTab === 0 && (
//           <Box>
//             <SuperAdmins />
//           </Box>
//         )}
//         {activeTab === 1 && (
//           <Box>
//             <AdminUser />
//           </Box>
//         )}
//         {activeTab === 2 && (
//           <Box>
//             <CustomerUser />
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Users;

import React, { useState } from 'react';
import SuperAdmins from './SuperAdminUser/SuperAdminUser';
import AdminUser from './AdminUser/AdminUser';
import CustomerUser from './CustomerUser/CustomerUser';


const Users = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h1 className="mb-4">Users</h1>

      {/* Tabs Section */}
      <ul className="nav nav-pills justify-content-start mb-4" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabChange(0)}
            type="button"
            role="tab"
          >
            Super admins
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabChange(1)}
            type="button"
            role="tab"
          >
            Admins
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabChange(2)}
            type="button"
            role="tab"
          >
            Customers
          </button>
        </li>
      </ul>

      {/* Tab Content Section */}
      <div className="tab-content">
        {activeTab === 0 && (
          <div className="tab-pane fade show active">
            <SuperAdmins />
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-pane fade show active">
            <AdminUser />
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-pane fade show active">
            <CustomerUser />
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          color: gray !important;
          padding-bottom: 5px;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
        }

        /* Active tab styling */
        .nav-link.active {
          color: #41619a !important;
          font-weight: bold;
          border-bottom: 2px solid #41619a;
          background-color: transparent !important;
        }

        .nav-link:hover {
          color: #41619a !important;
          // border-bottom: 2px solid #41619a;
        }
      `}</style>
    </div>
  );
};

export default Users;
