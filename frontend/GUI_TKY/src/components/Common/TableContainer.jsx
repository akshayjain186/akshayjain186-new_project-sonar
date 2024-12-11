import React, { Fragment, useEffect, useState } from "react";
import { Row, Table, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import JobListGlobalFilter from "./GlobalSearchFilter";

// Column Filter
const Filter = ({ column }) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '')}
        onChange={value => column.setFilterValue(value)}
        placeholder="Search..."
        className="w-36 border shadow rounded"
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  );
};

// Global Filter
const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <React.Fragment>
      <Col sm={4}>
        <input {...props} value={value} onChange={e => setValue(e.target.value)} />
      </Col>
    </React.Fragment>
  );
};

// Pagination with Ellipsis
const getPaginationLinks = (totalPages, currentPage) => {
  const paginationLinks = [];
  const maxLinks = 5;  // Maximum number of page links to display at a time
  const surroundingPages = 2; // Number of surrounding pages to show around the current page

  if (totalPages <= maxLinks) {
    for (let i = 0; i < totalPages; i++) {
      paginationLinks.push(i);
    }
  } else {
    let startPage = Math.max(0, currentPage - surroundingPages);
    let endPage = Math.min(totalPages - 1, currentPage + surroundingPages);

    if (startPage > 0) {
      paginationLinks.push(0);
      if (startPage > 1) paginationLinks.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationLinks.push(i);
    }

    if (endPage < totalPages - 1) {
      if (endPage < totalPages - 2) paginationLinks.push('...');
      paginationLinks.push(totalPages - 1);
    }
  }

  return paginationLinks;
};

const TableContainer = ({
  columns,
  data,
  tableClass,
  theadClass,
  divClassName,
  isBordered,
  isPagination,
  isGlobalFilter,
  paginationWrapper,
  SearchPlaceholder,
  pagination,
  buttonClass,
  buttonName,
  isAddButton,
  isCustomPageSize,
  handleUserClick,
  isJobListGlobalFilter,
}) => {

  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank
    });
    return itemRank.passed;
  };

  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const {
    getHeaderGroups,
    getRowModel,
    getCanPreviousPage,
    getCanNextPage,
    getPageOptions,
    setPageIndex,
    nextPage,
    previousPage,
    getState
  } = table;

  const paginationLinks = getPaginationLinks(getPageOptions().length, getState().pagination.pageIndex);

  return (
    <Fragment>
      <Row className="mb-2">
        {isCustomPageSize && (
          <Col sm={2}>
            <select
              className="form-select pageSize mb-2"
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        )}

        {isGlobalFilter && <DebouncedInput
          value={globalFilter ?? ''}
          onChange={value => setGlobalFilter(String(value))}
          className="form-control search-box me-2 mb-2 d-inline-block"
          placeholder={SearchPlaceholder}
        />}

        {isJobListGlobalFilter && <JobListGlobalFilter setGlobalFilter={setGlobalFilter} />}

        {isAddButton && <Col sm={6}>
          <div className="text-sm-end">
            <Button type="button" className={buttonClass} onClick={handleUserClick}>
              <i className="mdi mdi-plus me-1"></i> {buttonName}</Button>
          </div>
        </Col>}
      </Row>
      <div className={divClassName ? divClassName : "table-responsive"}>
        <Table hover className={tableClass} bordered={isBordered}>
          <thead className={theadClass}>
            {getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <th key={header.id} colSpan={header.colSpan} className={`${header.column.columnDef.enableSorting ? "sorting sorting_desc" : ""}`} style={{ backgroundColor: "#F4F8FC", border: "none", fontWeight: "400"}}>
                      {header.isPlaceholder ? null : (
                        <React.Fragment>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : '',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {
                              {
                                asc: '',
                                desc: '',
                              }
                              [header.column.getIsSorted()] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </React.Fragment>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody >
            {getRowModel().rows.map(row => {
              return (
                <tr key={row.id} >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id} style={{ backgroundColor: "transparent", width: "20%", }}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      {isPagination && (
        <Row>      
          <Col sm={12} md={12}>
            <div className="">
              <ul className={`${pagination} d-flex align-items-center`} style={{ gap: "10px" }}>
                <li className={`paginate_button page-item previous ${!getCanPreviousPage() ? "disabled" : ""}`}>
                  <Link to="#" className="page-link" onClick={previousPage}>
                    <i className="mdi mdi-chevron-left"></i>
                  </Link>
                </li>
                {paginationLinks.map((item, key) => (
                  item === '...' ? (
                    <li key={key} className="paginate_button page-item disabled">
                      <span className="page-link">...</span>
                    </li>
                  ) : (
                    <li
                      key={key} 
                      className={`paginate_button page-item ${getState().pagination.pageIndex === item ? "" : ""}`}
                      style={{
                        border: getState().pagination.pageIndex === item ? "border-black" : "none",
                        borderRadius: "4px",
                        
                      }}
                    >
                      <Link to="#" className="page-link" onClick={() => setPageIndex(item)}>
                        {item + 1}
                      </Link>
                    </li>
                  )
                ))}
                <li className={`paginate_button page-item next ${!getCanNextPage() ? "disabled" : ""}`}>
                  <Link to="#" className="page-link" onClick={nextPage}>
                    <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default TableContainer;
