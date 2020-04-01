import React from "react";

import Skeleton from './Skeleton';

import Card from '../Card/Card';

export default {
    component : Skeleton,
    title : 'Skeleton'
};

export const Default = () => (
    <Card width={300} height={300}>
        <div style={{ marginBottom: 5, width : 50, height : 50, borderRadius : 50}}>
            <Skeleton/>
        </div> 

        <div style={{ width : 100, height : 20}}>
            <Skeleton/>
        </div>

        <div style={{ marginTop: 5, width : 150, height : 20}}>
            <Skeleton/>
        </div>

        <div style={{ marginTop: 5, width : 200, height : 20}}>
        <Skeleton/>
        </div>
        <div style={{ marginTop: 5, width : 100, height : 20}}>
        <Skeleton/>
        </div>
    </Card>
);