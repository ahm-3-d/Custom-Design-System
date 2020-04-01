import React from 'react';

import Button from "./Button";

export default {
    component: Button,
    title: 'Button'
};

export const Default = () => <Button> Click Me! </Button>
export const Disabled = () => <Button disabled> Click Me! </Button>
export const Danger = () => <Button type='danger'> Click Me! </Button>
export const Outlined = () => <Button type='primary' variant="outlined"> Click Me! </Button>
export const Small = () => <Button size="small">I am Small Button</Button>
export const Medium = () => <Button>I am Medium Button</Button>
export const Large = () => <Button size="large">I am Large Button</Button>