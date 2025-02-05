import React, { useMemo } from 'react';
import TableContainer from '../../../components/Common/TableContainer';
import plusIcon from '../../../assets/images/users/usersview/Plusicon.png';
import SearchIcon from '../../../assets/images/leads/SearchIcon.png';
import ActionIcon from '../../../assets/images/leads/ActionIcon.png';
import { Link } from 'react-router-dom';

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
        cell: () => (
          <div className="d-flex justify-content-end text-danger">
            {/* <i className="bx bx-show fs-4" style={{ color: '#41619A' }}></i> */}
            <Link to="/CustomerUserProfile">
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
    ],
    []
  );

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

export default CustomerUser;
