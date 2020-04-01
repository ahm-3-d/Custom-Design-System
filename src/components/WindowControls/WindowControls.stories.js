import React from "react";

import WindowControls from './WindowControls';

export default {
    component : WindowControls,
    title : 'Window Controls'
};

export const MacOSX = () => (
    <WindowControls 
    type='osx' 
    onClose={() => console.log('Close')} 
    onMinimise={() => console.log('minimise')} 
    onSizeChange={() => console.log('On Size Change')} 
    />
);

export const Windows = () => (
    <WindowControls 
    type='windows' 
    onClose={() => console.log('Close')} 
    onMinimise={() => console.log('minimise')} 
    onSizeChange={() => console.log('On Size Change')} 
    />
)