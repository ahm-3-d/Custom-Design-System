import React from "react";

import IconSelector, { Option } from "./IconSelector";

export default {
    component : IconSelector,
    title : 'Icon Selector'
};

export const Default = () => (
    <IconSelector onChange={(options) => console.log(options)}>
        <Option name='yes'>
            Yes
        </Option>
        <Option name='no'>
            No
        </Option>
        <Option name='maybe'>
            Maybe
        </Option>
    </IconSelector>
);