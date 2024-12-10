import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Tab,
  Tabs,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Rating,
  IconButton,
  Button,
} from '@mui/material';
import AdminELogo from '../../../assets/images/users/usersview/AdminE logo.png';
import electriciationicon from '../../../assets/images/users/usersview/electriciation icon.png';
import sewingIcon from '../../../assets/images/users/usersview/sawing icon.png';

import dsbqualification from '../../../assets/images/users/usersview/dsb quali.png';
import mvaqualification from '../../../assets/images/users/usersview/mva quali.png';
import EditIcon from '@mui/icons-material/Edit';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CheckIcon from '@mui/icons-material/Check';
// import Employee from '../UsersView/Emloyee/Employee';
import Manager from '../AdminUserView/Manager/Manager';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
};

export default function AdminUserView() {
  const [tabIndex, setTabIndex] = useState(0);
  const [rating, setRating] = useState(5);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box p={2} sx={{ maxWidth: 1200, margin: 'auto' }}>
      {/* Header Section */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={8}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              variant="square"
              src={AdminELogo}
              sx={{ width: 120, height: 120 }}
            />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Elektro Solutions
              </Typography>
              <Typography variant="body2">Member since 22.12.2021</Typography>{' '}
              <br />
              <Box display="flex" alignItems="center" gap={1}>
                <Rating value={rating} precision={0.5} readOnly size="small" />
                <Typography variant="body2">5 reviews</Typography>
              </Box>
            </Box>
          </Box>

          <Typography sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
            <Chip
              label="Electrician"
              variant="contained"
              size="small"
              sx={{ background: '#EAEEF4' }}
              icon={<img src={electriciationicon} alt="bathroom" />}
            />
            <Chip
              label="Demolition, tiling and concrete sawing"
              variant="contained"
              size="small"
              sx={{ background: '#EAEEF4' }}
              icon={<img src={sewingIcon} alt="kitchen" />}
            />
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          textAlign={{ xs: 'left', sm: 'right' }}
        >
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'left' }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Admin ADVANCED
                </Typography>
                <IconButton size="small">
                  <EditIcon />
                </IconButton>
              </Box>
              <Typography variant="body2" display="flex" alignItems="center">
                <CheckIcon fontSize="small" sx={{ marginRight: 1 }} />
                2/4 designations
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center">
                <CheckIcon fontSize="small" sx={{ marginRight: 1 }} />
                3/5 areas
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center">
                <CheckIcon fontSize="small" sx={{ marginRight: 1 }} />
                6/30 employees
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">500 kr/month</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Address Section */}
      <Grid container spacing={2} mt={3} justifyContent="space-between">
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle2" fontWeight="bold">
            Address:
          </Typography>
          <Typography variant="body2">Vossgata 22, 0475 Oslo</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle2" fontWeight="bold">
            Organization number:
          </Typography>
          <Typography variant="body2">817158722</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle2" fontWeight="bold">
            Email:
          </Typography>
          <Typography variant="body2">post@elektrosolutions.com</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle2" fontWeight="bold">
            Account number:
          </Typography>
          <Typography variant="body2">NO93 8601 1117 947</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={8}>
          <Typography variant="subtitle2" fontWeight="bold">
            Description:
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Typography>
        </Grid>
      </Grid>

      {/* Areas Section */}
      <Box mt={3}>
        <Typography variant="subtitle2" fontWeight="bold">
          Areas:
        </Typography>
        <Typography
          variant="body2"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FmdGoodIcon fontSize="small" sx={{ marginRight: 1 }} />
            Oslo,
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FmdGoodIcon fontSize="small" sx={{ marginRight: 1 }} />
            Viken (all cities),
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FmdGoodIcon fontSize="small" sx={{ marginRight: 1 }} />
            Vestfold og Telemark (all cities)
          </div>
        </Typography>
      </Box>

      {/* Qualifications Section */}
      <Box mt={3}>
        <Typography variant="subtitle2" fontWeight="bold">
          Qualifications:
        </Typography>
        <Box display="flex" gap={2} mt={1}>
          <Avatar
            variant="square"
            src={dsbqualification}
            alt="Qualification 1"
            sx={{ width: 70, height: 70 }}
          />
          <Avatar
            variant="square"
            src={mvaqualification}
            alt="Qualification 2"
            sx={{ width: 70, height: 70 }}
          />
        </Box>
      </Box>

      {/* Tabs Section */}
      <Box mt={4}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Managers" />
          <Tab label="Employees" />
          {/* <Tab label="Admins" /> */}
          <Tab label="Customers" />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <Manager />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          {/* <Employee /> */}
        </TabPanel>
        <TabPanel value={tabIndex} index={3}>
          <Typography>Customer details go here...</Typography>
        </TabPanel>
      </Box>
    </Box>
  );
}
