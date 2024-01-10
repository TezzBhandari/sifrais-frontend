'use client';
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { useTable, usePagination, useFilters, useSortBy } from 'react-table';

interface Column {
    Header: string;
    accessor: string;
}

interface TableProps {
    columns: Column[];
    data: Array<object>;
}

const DataTable: React.FC<TableProps> = ({ columns, data }) => {
    const [globalFilter, setGlobalFilter] = useState('');

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        setFilter,
        rows,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useFilters,
        useSortBy,
        usePagination
    );

    const filteredData = React.useMemo(() => {
        if (globalFilter) {
            return rows.filter(row =>
                Object.values(row.values).some(
                    value => String(value).toLowerCase().includes(globalFilter.toLowerCase())
                )
            );
        }
        return rows;
    }, [globalFilter, rows]);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                {/* Global Filter input */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-lg p-2 w-full bg-white"
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
            </div>

            {/* Table */}
            <table {...getTableProps()} className="w-full border border-collapse " style={{borderRadius: "10px"}}>
                {/* Table header */}
                <thead className=" text-gray-700">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className='rounded-md' >
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="px-4 py-3 text-left font-semibold" style={{color: "#9291A5"}}
                                >
                                    <div className="flex items-center">
                                        {column.render('Header')}
                                        {/* Display sort direction indicators */}
                                        <span className="ml-1">
                                            {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                {/* Table body */}
                <tbody {...getTableBodyProps()}>
                    {filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="border-t border-gray-300">
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} className="px-4 py-3">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50"
                >
                    {"<<"}
                </button>
                <span className="self-center">
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {Math.ceil(filteredData.length / pageSize)}
                    </strong>
                </span>
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50"
                >
                    {">>"}
                </button>
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        gotoPage(0);
                    }}
                    className="border border-gray-300 rounded p-2"
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DataTable;

