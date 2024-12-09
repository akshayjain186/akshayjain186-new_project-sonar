import React, { useMemo } from 'react';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import TableContainer from '../../../components/Common/TableContainer';

const CustomerUser = () => {
  const rows = [
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 6,
    },
    {
      name: 'Karin Furuli',
      Addedby: 'Baderom Pluss AS',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
    {
      name: 'Karin Furuli',
      Addedby: 'Baderom Pluss AS',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 6,
    },
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
    {
      name: 'Tyler Hopper',
      Addedby: 'Turnkey',
      City: 'Oslo',
      Joined: '22.01.2021',
      Projects: 2,
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Added by',
        accessorKey: 'Addedby',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'City',
        accessorKey: 'City',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Joined',
        accessorKey: 'Joined',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Projects',
        accessorKey: 'Projects',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Actions',
        accessorKey: 'actions',
        enableColumnFilter: false,
        cell: (cell) => (
          <div className="text-danger d-flex text-end">
            <i className="bx bx-show fs-4" style={{ color: '#41619A' }}></i>
            <div
              style={{
                borderLeft: '1px solid #EAEEF4',
                height: '20px',
                margin: '0 8px',
              }}
            ></div>
            <a href="#" className="text-danger mb-0 fs-5">
              Deactivate
            </a>
          </div>
        ),
      },
    ],
    []
  );

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

      {/* Table with Pagination */}
      <TableContainer
        columns={columns}
        data={rows || []}
        isGlobalFilter={false}
        isPagination={true}
        SearchPlaceholder="Search..."
        isCustomPageSize={false}
        isAddButton={false}
        buttonClass="btn btn-success waves-effect waves-light addContact-modal mb-2"
        buttonName="New Contact"
        tableClass="table-nowrap dt-responsive nowrap w-100 no-footer dtr-inline"
        theadClass="table-light"
        paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
        pagination="pagination"
      />
    </Box>
  );
};

export default CustomerUser;
