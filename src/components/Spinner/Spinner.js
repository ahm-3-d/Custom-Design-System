import React from "react";
import PropTypes from "prop-types";

import { EllipsisSpinner, CircleSpinner } from './Spinner.styles';

function Spinner({ type, ...rest}) {
    if (type === 'ellipsis') {
        return <EllipsisSpinner {...rest} />
    };

    return <CircleSpinner {...rest} />
};

Spinner.propTypes = {
    type : PropTypes.string
}

export default Spinner;