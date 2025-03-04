import React, { useState } from 'react';
import TableContainer from '../../../components/Common/TableContainer';
import plusIcon from '../../../assets/images/users/usersview/Plusicon.png';
import SearchIcon from '../../../assets/images/leads/SearchIcon.png';
import ActionIcon from '../../../assets/images/leads/ActionIcon.png';
import { Link } from 'react-router-dom';

const AdminUser = () => {
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
      cell: () => (
        <div className="d-flex justify-content-end text-danger">
          {/* <i className="bx bx-show fs-4" style={{ color: '#41619A' }}></i> */}
          <Link to="/AdminUserView">  
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
            Deactivate
          </button>
        </div>
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
    setPage(0);
  };

  return (
    <div>
      {/* Top Bar */}

      <div className="row mb-3 align-items-center">
        <div className="col-12 col-sm-8 col-md-9">
          <div className="position-relative mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search..."
              style={{
                borderRadius: '7px',
                height: '40px',
                backgroundColor: '#EAEEF4',
                paddingLeft: '2.5rem',
                width: 'auto',
              }}
            />
            <img
              className="bi bi-search position-absolute"
              src={SearchIcon}
              alt="Search"
              style={{
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                color: '#6c757d',
              }}
            />
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-3 d-flex justify-content-end mt-2 mt-sm-0">
          <button
            className="btn btn-primary d-flex justify-content-center align-items-center"
            style={{
              borderRadius: '10px',
              width: '100px',
              height: '40px',
              fontSize: '16px',
              background: '#41619A',
            }}
          >
            <img src={plusIcon} alt="Plus" />
            <i className="bi bi-plus-lg me-2"></i> Icon
          </button>
        </div>
      </div>

      {/* Table */}
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

export default AdminUser;
