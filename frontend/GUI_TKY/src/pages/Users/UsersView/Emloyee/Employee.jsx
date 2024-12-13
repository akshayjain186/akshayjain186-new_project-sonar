import React, { useMemo } from 'react';
import { Box } from '@mui/material';

import TableContainer from '@/components/Common/TableContainer';

const Employee = () => {
  const rows = [
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Senior Plumber with a long title that might overflow',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
    },
    {
      name: 'Tyler Hopper',
      Designation: 'Plumber',
      Email: 'john__snow@gmil.com',
      Added: '22.01.2021',
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
        header: 'Designation',
        accessorKey: 'Designation',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell) => {
          const content = cell.getValue();
          const isLongText = content.length > 20;

          return (
            <div
              style={{
                width: isLongText ? 'auto' : '100px',
                maxWidth: '200px',
                minHeight: '28px',
                padding: '6px 10px',
                gap: '8px',
                borderRadius: '2px 0px 0px 0px',
                opacity: '1',
                backgroundColor: '#EAEEF4',
                transition: 'background-color 0.3s ease',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                overflow: 'hidden',
              }}
            >
              {content}
            </div>
          );
        },
      },
      {
        header: 'E-mail',
        accessorKey: 'Email',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Added',
        accessorKey: 'Added',
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
    <div>

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
    </div>
  );
};

export default Employee;
