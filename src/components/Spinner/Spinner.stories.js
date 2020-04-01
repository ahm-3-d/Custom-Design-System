import React from "react";

import Spinner from './Spinner';

export default {
    componnent : Spinner,
    title : 'Spinner'
};

export const Default = () => <Spinner />
export const Ellipsis = () => <Spinner type='ellipsis' />