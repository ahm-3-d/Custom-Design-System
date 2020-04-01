import React from "react";

import Input from './Input';

export default {
    component : Input,
    title : 'Input'
};

export const Default = () => <Input value="Hello" />
export const Icon = () => <Input icon="wallet" value="I have an icon inside me!" />
export const Small = () => <Input value="I am a small input" size="small" />
export const Large = () => <Input value="I am a large input" size="large"/>

