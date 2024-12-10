// import React, { useState } from 'react';
// import {
//   Box,
//   Grid,
//   IconButton,
//   InputAdornment,
//   OutlinedInput,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   Paper,
//   TablePagination,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

// const AdminUser = () => {
//   const rows = [
//     {
//       name: 'Baderom Plus AS',
//       manager: 'Camilla Larson',
//       employees: 25,
//       admins: 6,
//       customers: 20,
//       Superadmin: 'Baderom Pluss AS',
//     },
//     {
//       name: 'Build Forum',
//       manager: 'Christopher Main',
//       employees: 13,
//       admins: 3,
//       customers: 6,
//       Superadmin: '-',
//     },
//     {
//       name: 'Baderom Pluss AS',
//       manager: 'Camilla Larson',
//       employees: 25,
//       admins: 6,
//       customers: 20,
//       Superadmin: 'Baderom Pluss AS',
//     },
//     {
//       name: 'Baderom Pluss AS',
//       manager: 'Camilla Larson',
//       employees: 25,
//       admins: 6,
//       customers: 20,
//       Superadmin: '-',
//     },
//     {
//       name: 'Build Forum',
//       manager: 'Christopher Main',
//       employees: 13,
//       admins: 3,
//       customers: 6,
//       Superadmin: '-',
//     },
//     {
//       name: 'Baderom Pluss AS',
//       manager: 'Camilla Larson',
//       employees: 25,
//       admins: 6,
//       customers: 20,
//       Superadmin: 'Baderom Pluss AS',
//     },
//     {
//       name: 'Build Forum',
//       manager: 'Christopher Main',
//       employees: 13,
//       admins: 3,
//       customers: 6,
//       Superadmin: 'Baderom Pluss AS',
//     },
//     {
//       name: 'Baderom Pluss AS',
//       manager: 'Camilla Larson',
//       employees: 25,
//       admins: 6,
//       customers: 20,
//       Superadmin: 'Baderom Pluss AS',
//     },
//     {
//       name: 'Build Forum',
//       manager: 'Christopher Main',
//       employees: 13,
//       admins: 3,
//       customers: 6,
//       Superadmin: 'Baderom Pluss AS',
//     },
//     {
//       name: 'Build Forum',
//       manager: 'Christopher Main',
//       employees: 13,
//       admins: 3,
//       customers: 6,
//       Superadmin: 'Baderom Pluss AS',
//     },
//     {
//       name: 'Build Forum',
//       manager: 'Christopher Main',
//       employees: 13,
//       admins: 3,
//       customers: 6,
//       Superadmin: 'Baderom Pluss AS',
//     },
//   ];

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0); // Reset page when rows per page changes
//   };

//   return (
//     <Box>
//       {/* Top Bar */}
//       <Grid
//         container
//         alignItems="center"
//         justifyContent="space-between"
//         sx={{ mb: 2 }}
//       >
//         <Grid item xs={12} sm={2.5}>
//           <OutlinedInput
//             fullWidth
//             placeholder="Search..."
//             sx={{ borderRadius: '7px', height: '40px' }}
//             startAdornment={
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             }
//           />
//         </Grid>
//         <Grid item sx={{ top: '20px' }}>
//           <IconButton
//             color="primary"
//             aria-label="Add"
//             sx={{
//               background: '#41619A',
//               color: 'white',
//               borderRadius: '10px',
//               width: '110px',
//               height: '40px',
//               fontSize: '20px',
//             }}
//           >
//             <AddIcon />
//             Icon
//           </IconButton>
//         </Grid>
//       </Grid>

//       {/* Table */}
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ background: '#F4F8FC' }}>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Main Manager</TableCell>
//               <TableCell>Designations</TableCell>
//               <TableCell>Employees</TableCell>
//               <TableCell>Customers</TableCell>
//               <TableCell>Super admin</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{row.name}</TableCell>
//                   <TableCell>{row.manager}</TableCell>
//                   <TableCell>{row.employees}</TableCell>
//                   <TableCell>{row.admins}</TableCell>
//                   <TableCell>{row.customers}</TableCell>
//                   <TableCell>{row.Superadmin}</TableCell>
//                   <TableCell>
//                     <Typography color="error" sx={{ cursor: 'pointer' }}>
//                       <RemoveRedEyeOutlinedIcon sx={{ color: '#41619A' }} />{' '}
//                       Deactivate
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Pagination */}
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         sx={{
//           display: 'flex',
//           justifyContent: 'flex-end',
//           borderTop: '1px solid #e0e0e0',
//           mt: 2,
//         }}
//       />
//     </Box>
//   );
// };

// export default AdminUser;


import React, { useState } from 'react';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TableContainer from '../../../components/Common/TableContainer';

const AdminUser = () => {
  const rows = [
    {
      name: 'Baderom Plus AS',
      manager: 'Camilla Larson',
      designation: ['Electrician'],
      employees: 6,
      customers: 1,
      superadmin: 'Baderom Pluss AS',
    },
    {
      name: 'Art Building',
      manager: 'Christopher Main',
      designation: ["Plumber", "Carpenter"],
      employees: 3,
      customers: 4,
      superadmin: '-',
    },
    {
        name: 'Baderom Plus AS',
        manager: 'Camilla Larson',
        designation: 'Electrician',
        employees: 6,
        customers: 1,
        superadmin: 'Baderom Pluss AS',
      },
      {
        name: 'Art Building',
        manager: 'Christopher Main',
        designation: 'Plumber',
        employees: 3,
        customers: 4,
        superadmin: '-',
      },
      {
        name: 'Art Building',
        manager: 'Christopher Main',
        designation: 'Plumber',
        employees: 3,
        customers: 4,
        superadmin: '-',
      },
      {
        name: 'Baderom Plus AS',
        manager: 'Camilla Larson',
        designation: 'Electrician',
        employees: 6,
        customers: 1,
        superadmin: 'Baderom Pluss AS',
      },
      {
        name: 'Baderom Plus AS',
        manager: 'Camilla Larson',
        designation: 'Electrician',
        employees: 6,
        customers: 1,
        superadmin: 'Baderom Pluss AS',
      },
      {
        name: 'Baderom Plus AS',
        manager: 'Camilla Larson',
        designation: 'Electrician',
        employees: 6,
        customers: 1,
        superadmin: 'Baderom Pluss AS',
      },
      {
        name: 'Baderom Plus AS',
        manager: 'Camilla Larson',
        designation: 'Electrician',
        employees: 6,
        customers: 1,
        superadmin: 'Baderom Pluss AS',
      },
      {
        name: 'Baderom Plus AS',
        manager: 'Camilla Larson',
        designation: 'Electrician',
        employees: 6,
        customers: 1,
        superadmin: 'Baderom Pluss AS',
      },
      {
        name: 'Baderom Plus AS',
        manager: 'Camilla Larson',
        designation: 'Electrician',
        employees: 6,
        customers: 1,
        superadmin: 'Baderom Pluss AS',
      },
 
  ];

  const columns = [
    {
      header: 'Name',
      accessorKey: 'name',
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      header: 'Main Manager',
      accessorKey: 'manager',
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      header: 'Designation',
      accessorKey: 'designation',
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      header: 'Employees',
      accessorKey: 'employees',
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      header: 'customers',
      accessorKey: 'customers',
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      header: 'Super Admin',
      accessorKey: 'superadmin',
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      header: 'Actions',
      accessorKey: 'actions',
      enableColumnFilter: false,
      cell: (cell) => (
        <Typography color="error" sx={{ cursor: 'pointer' }}>
          <RemoveRedEyeOutlinedIcon sx={{ color: '#41619A' }} /> Deactivate
        </Typography>
      ),
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page when rows per page changes
  };

  return (
    <Box>
      {/* Top Bar */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Grid item xs={12} sm={2.5}>
          <OutlinedInput
            fullWidth
            placeholder="Search..."
            sx={{ borderRadius: '7px', height: '40px' }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item sx={{ top: '20px' }}>
          <IconButton
            color="primary"
            aria-label="Add"
            sx={{
              background: '#41619A',
              color: 'white',
              borderRadius: '10px',
              width: '110px',
              height: '40px',
              fontSize: '20px',
            }}
          >
            <AddIcon />
            Icon
          </IconButton>
        </Grid>
      </Grid>

      {/* Table */}
      <TableContainer
        columns={columns}
        data={rows}
        
        isGlobalFilter={false}
        isPagination={true}
        SearchPlaceholder="Search..."
        isCustomPageSize={false}
        isAddButton={false}
        buttonClass="btn btn-success waves-effect waves-light addContact-modal mb-2"
        buttonName="New Contact"
        tableClass=" table-nowrap  dt-responsive nowrap w-100  no-footer dtr-inline"
        theadClass="table-light"
        paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
        pagination="pagination"
      />
    </Box>
  );
};

export default AdminUser;
