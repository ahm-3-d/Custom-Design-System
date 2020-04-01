import React from 'react';

import Card from './Card';

export default {
    component : Card,
    title : 'Card'
};

export const Default = () => <Card width={200} height={200} floating title={'This is a Card!'}>Content goes here...</Card>;
export const NoFloating = () => <Card width={200} height={200}>This is a Non-Floating Card!</Card>;
export const Alignment = () => (
    <div style={{ display : 'flex', justifyContent : 'center'}}>
        <Card width={200} height={200}>Content Aligned Left!</Card>
        <p>&nbsp;</p>
        <Card width={200} height={200} align='center'>Content Aligned Center!</Card>
        <p>&nbsp;</p>
        <Card width={200} height={200} align='right'>Content Aligned Right!</Card>
    </div>
);