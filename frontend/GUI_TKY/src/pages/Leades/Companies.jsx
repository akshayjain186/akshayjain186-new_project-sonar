import React, { useMemo } from 'react';
import TableContainer from '../../components/Common/TableContainer';

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
        header: 'date',
        accessorKey: 'date',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Actions',
        accessorKey: 'actions',
        enableColumnFilter: false,
        cell: () => (
          <div className="d-flex justify-content-end text-danger">
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
    <div>
      {/* Top Bar */}
      <div className="row mb-2 align-items-center">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex" style={{ maxWidth: '100%', width: '500px' }}>
            <input
              type="text"
              className="form-control me-3 mb-2"
              placeholder="Search..."
            />
            <input type="date" className="form-control me-3 mb-2" />
          </div>
          <p className="mb-0">Total Requests: 234</p>
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
