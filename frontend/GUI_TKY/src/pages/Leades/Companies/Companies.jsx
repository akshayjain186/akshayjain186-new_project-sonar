import React, { useMemo } from 'react';
import TableContainer from '../../../components/Common/TableContainer';
import ActionIcon from '../../../assets/images/leads/ActionIcon.png';
import SearchIcon from '../../../assets/images/leads/SearchIcon.png';
import { Link } from 'react-router-dom';

const Companies = () => {
  const rows = [
    {
      id: 1990,
      Companyname: 'Tyler Hopper',

      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
    {
      id: 1989,
      Companyname: 'Oliver Grehem',
      Email: 'oliver1977@gmail.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '25.12.2022 11:15',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '25.12.2022 11:15',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
    {
      id: 1990,
      Companyname: 'Tyler Hopper',
      Email: 'john__snow@gmil.com',
      manager: 'Harry Stone',
      MobilePhone: '+4721607947',
      city: 'oslo',
      date: '22.01.2021',
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Company Name',
        accessorKey: 'Companyname',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'E-mail',
        accessorKey: 'Email',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Manager',
        accessorKey: 'manager',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Mobile Phone',
        accessorKey: 'MobilePhone',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'city',
        accessorKey: 'city',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Date',
        accessorKey: 'date',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Actions',
        accessorKey: 'actions',
        enableColumnFilter: false,
        cell: () => (
         
          <div className="d-flex justify-content-end align-items-center text-danger">
            <Link to="/ArtBuilding"> 
            <img
              src={ActionIcon}
              alt="Show Icon"
              className="fs-4"
              style={{ color: '#41619A', width: '24px', height: '24px' }}
            />
</Link>
            <div
              style={{
                // borderLeft: '1px solid #EAEEF4',
                height: '20px',
                margin: '0 8px',
              }}
            ></div>

            <button
              
              className="text-danger mb-0 fs-5"
              style={{
                textDecoration: 'underline ',
                textDecorationColor: '#dc3545',
                textUnderlineOffset: '3px',
                border: 'none',
                background: '#FBFCFE',
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div>
      {/* Top Bar */}
  
      <div className="row mb-2 align-items-center">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex" style={{ maxWidth: '100%', width: '500px' }}>
            <div
              className="position-relative me-3 mb-2"
              style={{ width: '100%' }}
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                style={{ paddingLeft: '2.5rem' }}
              />
              <img
                className="bi bi-search position-absolute"
                src={SearchIcon}
                style={{
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                  color: '#6c757d',
                }}
              />
            </div>
            <input
              type="date"
              className="form-control me-3 mb-2 text-start "
              placeholder="Period"
            />
          </div>
          <p className="mb-0">234 Requests</p>
        </div>
      </div>

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
        tableClass="table table-striped table-bordered dt-responsive nowrap w-100 no-footer dtr-inline"
        theadClass="table-light"
        paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
        pagination="pagination"
      />
    </div>
  );
};

export default Companies;
