import React from "react";
import ReactSelect, { components } from "react-select";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Styles from "./Select.styles";

const Icon = styled(FontAwesomeIcon)`
    position : relative;
    top : 29px;
    left : 5px;
    z-index : 50;
    color : ${props => props.theme.textColourDim};
    font-size : 16px;
`

const { Control } = components;

const IconControl = (props) => (
    <div>
        <Icon icon={props.selectProps.icon} />
        <Control {...props} />
    </div>
);

function Select({ options, isMulti, styles, icon,  ...rest }) {
    const themeContext = useContext(ThemeContext); 
    return (
        <ReactSelect
            options={options}
            isMulti={isMulti || false}
            styles={styles || Styles}
            theme={themeContext}
            icon={icon}
            {...rest}
            components={ icon && { Control : IconControl }}
        />
    )
};

Select.propTypes = {
    options : PropTypes.array.isRequired,
    isMulti : PropTypes.bool,
    styles : PropTypes.object,
    icon : PropTypes.string
};

export default Select;
