

import {
  Box,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import tylorCustomer from '../../../assets/images/users/usersview/tylor customer.png';
import addedCutomerIcon from '../../../assets/images/users/usersview/added cutomericon.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function UserProfile() {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={8}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              variant="square"
              src={tylorCustomer}
              sx={{ width: 120, height: 120 }}
            />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Elektro Solutions
              </Typography>
              <Typography variant="body2">Member since 22.12.2021</Typography>{' '}
              <br />
              <Box display="flex" alignItems="center" gap={1}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  display="flex"
                  alignItems="center"
                >
                  Added by:
                  <Avatar
                    variant="square"
                    src={addedCutomerIcon}
                    sx={{ width: 24, height: 24, marginLeft: 1 }}
                  />
                  Baderom Pluss AS
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1">Address:</Typography>
          <Typography variant="body2" color="textSecondary">
            Venasvegen 42, 0672 Oslo
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1">Mobile:</Typography>
          <Typography variant="body2" color="textSecondary">
            +47 21607947
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1">Email:</Typography>
          <Typography variant="body2" color="textSecondary">
            tyler_hoppp@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1">Account Number:</Typography>
          <Typography variant="body2" color="textSecondary">
            NO93 8601 1117 947
          </Typography>
        </Grid>
      </Grid>

      {/* Project History */}
      <Typography variant="h5" sx={{ marginTop: 5, marginBottom: 2 }}>
        Projects History
      </Typography>

      {/* Project Cards */}

      {/* <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Old apartment renovation</Typography>
              <Typography variant="body2" color="textSecondary">
                Venasvegen 42, 0672 Oslo
              </Typography>
            
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
        
                <Box display="flex" alignItems="center">
                  <Avatar
                    sx={{
                      width: 16,
                      height: 16,
                      backgroundColor: 'orange',
                      marginRight: 1,
                    }}
                  />
                  <Chip
                    label="Ongoing"
                    color="warning"
                    sx={{ paddingLeft: 1 }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">5 - Toilet renovation</Typography>
              <Typography variant="body2" color="textSecondary">
                Venasvegen 42, 0672 Oslo
              </Typography>
              
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
           
                <Box display="flex" alignItems="center">
                  <CheckCircleOutlineIcon
                    sx={{ color: 'green', marginRight: 1 }}
                  />
                  <Chip
                    label="Finished"
                    color="success"
                    sx={{ paddingLeft: 1 }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">Old apartment renovation</Typography>
            <Typography variant="body2" color="textSecondary">
              Venasvegen 42, 0672 Oslo
            </Typography>

            {/* Positioning the Ongoing status at the bottom */}
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              mt={2}
            >
              {/* Ongoing with a rounded circle */}
              <Box display="flex" alignItems="center">
                <Avatar
                  sx={{
                    width: 16,
                    height: 16,
                    color: 'orange',
                    marginRight: 1,
                  }}
                />
                <Chip
                  label="Ongoing"
                  color="orange"
                  sx={{ paddingLeft: 1, background:"none", color:"orange" }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">5 - Toilet renovation</Typography>
            <Typography variant="body2" color="textSecondary">
              Venasvegen 42, 0672 Oslo
            </Typography>

            {/* Positioning the Finished status at the bottom */}
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              mt={4}
            >
              {/* Finished with a check icon */}
              <Box display="flex" alignItems="center">
                <CheckCircleOutlineIcon
                  sx={{ color: 'green', marginRight: 1 }}
                />
                <Chip
                  label="Finished"
                  color="success"
                  sx={{ paddingLeft: 1, background:"none", color:"green" }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Box>
  );
}
