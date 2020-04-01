import React from 'react';

import Table from './Table';

export default {
    component : Table,
    title : 'Table'
};

const defaultColumns = [
    {
        Header : 'Site',
        Cell : () => <span>I</span>
    },
    {
        Header : 'Task Name',
        accessor : 'name'
    },
    {
        Header : 'Details',
        accessor : 'query'
    },
    {
        Header : 'Store',
        accessor : 'store'
    },
    {
        Header : 'Size',
        accessor : 'size'
    },
    {
        Header : 'Profile',
        accessor : 'profile'
    },
    {
        Header : 'Proxies',
        accessor : 'proxies'
    },
    {
        Header : 'Status',
        accessor : 'status',
        Cell : () => <span style={{ color : '#6060B1'}}>Waiting for Release...</span>
    },
    {
        Header : 'Actions',
        Cell : () => <span>Buttons</span>
    }
];

const data = [
    {
        site : 'shopify',
        name : 'Kith - Yeezy',
        query : '12384001873',
        store : 'Kith',
        size : 8,
        profile : 'Ahmed CC 2',
        proxies : 'Space 1',
        status : 'Waiting for release...',
        actions : ''
    },
    {
        site : 'shopify',
        name : 'Kith - Yeezy',
        query : '12384001873',
        store : 'Kith',
        size : 8,
        profile : 'Ahmed CC 2',
        proxies : 'Space 1',
        status : 'Waiting for release...',
        actions : ''
    }
]

export const Default = () => <Table columns={defaultColumns} data={data} />
export const Selectable = () => <Table columns={defaultColumns} data={data} selectable={true} onSelect={(id) => console.log(id)}/>
export const NoData = () => <Table columns={defaultColumns} data={[]} />
export const Loading = () => <Table columns={defaultColumns} data={[]} loading />