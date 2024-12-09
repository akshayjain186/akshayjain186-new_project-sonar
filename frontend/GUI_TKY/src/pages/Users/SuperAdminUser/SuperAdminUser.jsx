import React, { useState } from 'react';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TableContainer from '../../../components/Common/TableContainer';

const SuperAdmins = () => {
  const rows = [
    {
      name: 'Baderom Plus AS',
      manager: 'Camilla Larson',
      employees: 25,
      admins: 6,
      customers: 20,
    },
    {
      name: 'Build Forum',
      manager: 'Christopher Main',
      employees: 13,
      admins: 3,
      customers: 6,
    },
    {
      name: 'Baderom Pluss AS',
      manager: 'Camilla Larson',
      employees: 25,
      admins: 6,
      customers: 20,
    },
    {
      name: 'Baderom Pluss AS',
      manager: 'Camilla Larson',
      employees: 25,
      admins: 6,
      customers: 20,
    },
    {
      name: 'Build Forum',
      manager: 'Christopher Main',
      employees: 13,
      admins: 3,
      customers: 6,
    },
    {
      name: 'Baderom Pluss AS',
      manager: 'Camilla Larson',
      employees: 25,
      admins: 6,
      customers: 20,
    },
    {
      name: 'Build Forum',
      manager: 'Christopher Main',
      employees: 13,
      admins: 3,
      customers: 6,
    },
    {
      name: 'Baderom Pluss AS',
      manager: 'Camilla Larson',
      employees: 25,
      admins: 6,
      customers: 20,
    },
    {
      name: 'Build Forum',
      manager: 'Christopher Main',
      employees: 13,
      admins: 3,
      customers: 6,
    },
    {
      name: 'Build Forum',
      manager: 'Christopher Main',
      employees: 13,
      admins: 3,
      customers: 6,
    },
    {
      name: 'Build Forum',
      manager: 'Christopher Main',
      employees: 13,
      admins: 3,
      customers: 6,
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
      header: 'Employees',
      accessorKey: 'employees',
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      header: 'Admins',
      accessorKey: 'admins',
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      header: 'Customers',
      accessorKey: 'customers',
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

export default SuperAdmins;
