import React from "react";

import IconButton from './IconButton';

export default {
    component : IconButton,
    title : 'Icon Button'
};

export const Default = () => <IconButton type='primary' icon='wallet' />
export const Secondary = () => <IconButton type='secondary' icon='wallet'/>
export const CustomChildren = () => <IconButton>Hi!</IconButton>