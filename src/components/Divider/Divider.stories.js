import React from "react";

import Divider from './Divider';

export default {
    component : Divider,
    title : 'Divider'
};

export const Default = () => <Divider />
export const Dashed = () => <Divider dashed />
export const Text = () => <Divider>Hello!</Divider>
export const TextAlignedCenter = () => <Divider align='center'>Hello</Divider>