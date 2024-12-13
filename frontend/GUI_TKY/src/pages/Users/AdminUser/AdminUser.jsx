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
      designation: ['Plumber', 'Carpenter'],
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
