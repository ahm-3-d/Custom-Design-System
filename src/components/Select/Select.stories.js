import React from "react"

import Select from "./Select";

export default {
    component: Select,
    title: 'Select'
};

const options = [
    { value : 'red', label : 'Red'},
    { value : 'blue', label : 'Blue'}
];

export const Default = () => <Select options={options} />
export const Icon = () => <Select options={options} icon="wallet" />
export const NoOptions = () => <Select options={[]} />