import React from "react";

import LineChart from './LineChart';

export default {
    component : LineChart,
    title : 'Line Chart'
}

export const Default = () => <LineChart width={700} height={300} data={data} dataKey='name'/>
export const GhostLine = () => <LineChart width={700} height={300} data={data} dataKey='name' showGhostLine/>
export const Zoom = () => <LineChart width={700} height={300} data={data} dataKey='name' zoom/>

const data = [
    {
        name: 'Week 1', uv: 500
    },
    {
        name: 'Week 2', uv: 600
    },
    {
        name: 'Week 3', uv: 700
    },
    {
        name: 'Week 4', uv: 100
    },
    {
        name: 'Week 5', uv: 200
    },
    {
        name: 'Week 6', uv: 300
    },
    {
        name: 'Week 7', uv: 450
    },
    {
        name: 'Week 8', uv: 0
    },
];