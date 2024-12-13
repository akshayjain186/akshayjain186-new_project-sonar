import React, { useState } from 'react';
import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SuperAdmins from './SuperAdminUser/SuperAdminUser';
import AdminUser from './AdminUser/AdminUser';
import CustomerUser from './CustomerUser/CustomerUser';

const Users = () => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      {/* Page Title */}
      <Typography variant="h4" component="h1" gutterBottom>
        Users
      </Typography>

      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        variant={isMobile ? 'fullWidth' : 'scrollable'} // Use fullWidth on mobile and scrollable on larger screens
        scrollButtons={isMobile ? false : 'auto'} // Disable scroll buttons on mobile
        aria-label="User Tabs"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Tab label="Super admins" />
        <Tab label="Admins" />
        <Tab label="Customers" />
      </Tabs>

      {/* Tab Content Section */}
      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && (
          <Box>
            <SuperAdmins />
          </Box>
        )}
        {activeTab === 1 && (
          <Box>
            <AdminUser />
          </Box>
        )}
        {activeTab === 2 && (
          <Box>
            <CustomerUser />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Users;
