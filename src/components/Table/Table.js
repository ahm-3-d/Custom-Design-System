import React, { useState, useEffect } from "react";
import { useTable, useRowSelect, useRowState } from 'react-table';

import {
    Container,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableHeadData,
    TableData,
    LoadingContainer
} from "./Table.Styles";

import Spinner from '../Spinner/Spinner';

const Loading = () => (
    <LoadingContainer>
        <div style={{ width : 20, height : 20}}>
            <Spinner />
        </div>
    </LoadingContainer>
);

const NoData = () => (
    <div style={{ display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
        No Data
    </div>
);

function Table({ columns, data, selectable, loading, onSelect }) {
    const [selectedRow, setSelectedRow] = useState(null);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data
        },
        useRowSelect
    );

    useEffect(() => {
        onSelect && onSelect(selectedRow && selectedRow.id);
    }, [selectedRowIds])

    const onRowSelect = (row) => {
        selectedRow && selectedRow.toggleRowSelected(false);

        row.toggleRowSelected(true);
        row.getRowProps({ selected: true });
        setSelectedRow(row);
    };

    return (
        <Container>
            <TableContainer {...getTableProps()} border="0">
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableHeadData {...column.getHeaderProps()}>{column.render('Header')}</TableHeadData>
                            ))}
                        </tr>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {loading ? <Loading /> : rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow selected={selectedRow && row.id === selectedRow.id} {
                                ...row.getRowProps({
                                    onClick: selectable && onSelect ? () => onRowSelect(row) : null,
                                    selectable: selectable || false
                                })
                            }
                            >
                                {row.cells.map(cell => {
                                    return <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </TableContainer>
        </Container>
    )
};

export default Table;