import React, { useMemo } from 'react';

// import TableContainer from '../../../components/Common/TableContainer';
import TableContainer from '@/components/Common/TableContainer';
import ActionIcon from '../../../../assets/images/leads/ActionIcon.png';
import { Link } from 'react-router-dom';
const Manager = () => {
  const rows = [
    {
      name: 'Steve Green',
      Type: 'Main',
      Email: 'stevegreen@gmail.com',
      Areas: 'Oslo',
    
    },
    {
        name: 'Edward Friz',
        Type: 'Secondary',
        Email: 'edddward@gmil.com',
        Areas: 'Viken',
    },
    {
        name: 'Marie Donald',
        Type: 'Secondary',
        Email: 'john__snow@gmil.com',
        Areas: 'Vestfold og Telemark',
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
        header: ' Type',
        accessorKey: 'Type',
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
        header: 'Areas',
        accessorKey: 'Areas',
        enableColumnFilter: false,
        enableSorting: true,
      },
    
      {
        header: 'Actions',
        accessorKey: 'actions',
        enableColumnFilter: false,
        cell: (cell) => (
          <div className="text-danger d-flex text-end">
            {/* <i className="bx bx-show fs-4" style={{ color: '#41619A' }}></i> */}
             <Link to="/AdminViewPlan">  
                      <img
                        src={ActionIcon}
                        alt="Show Icon"
                        className="fs-4"
                        style={{ color: '#41619A', width: '24px', height: '24px' }}
                      />
                      </Link>
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
    </div>
  );
};

export default Manager;
