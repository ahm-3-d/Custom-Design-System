import React from "react";

import Cascader from './Cascader'

export default {
    component : Cascader,
    title : 'Cascader'
};

export const Default = () => <Cascader data={data}/>

const data = [
    {
        label: 'Space Proxies',
        value: 'space',
        children: [
            {
                label: 'Group 1',
                value: 'group 1',
                children: [
                    {
                        label: 'Group 2',
                        value: 'group 2'
                    }
                ]
            }
        ]
    },
    {
        label: 'Blank Proxies',
        value: 'blank',
        children: [
            {
                label: 'Group 1',
                value: 'group 1',
                children: [
                    {
                        label: 'Group 2',
                        value: 'group 2'
                    }
                ]
            }
        ]
    }
];

