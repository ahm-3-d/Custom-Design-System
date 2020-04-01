import React from "react";

import List, { ListItem } from './List';
import Card from '../Card/Card';

export default {
    component: List,
    title: 'List'
};

export const Default = () => (
    <Card width={400} height={400} floating>
        <List>
            <ListItem title='This is a List' description='This is a list description' footer='A Footer!' />
            <ListItem title='This is a List' description='This is a list description' footer='A Footer!' />
            <ListItem title='This is a List' description='This is a list description' footer='A Footer!' />
            <ListItem title='This is a List' description='This is a list description' footer='A Footer!' />
        </List>
    </Card>
)
