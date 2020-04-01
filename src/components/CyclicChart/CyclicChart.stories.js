import React from "react";

import CyclicChart from "./CyclicChart";

export default {
    component : CyclicChart,
    title : 'Cyclic Chart'
};

export const Default = () => <CyclicChart label='Label' fill="#95672C" data={55} />