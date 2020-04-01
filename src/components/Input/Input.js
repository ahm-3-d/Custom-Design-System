import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sizeValues = {
    small : {
        padding : '5px',
        fontSize : '12px'
    },
    medium : {
        padding : '10px',
        fontSize : '13px'
    },
    large : {
        padding : '15px',
        fontSize : '16px'
    }
};

const StyledInput = styled.input`
    background : ${props => props.theme.backgroundColour};
    color : ${props => props.theme.textColour};
    text-indent : ${props => props.icon && `25px`};
    padding : ${props => props.size && sizeValues[props.size].padding};
    border : 1px solid ${props => props.theme.borderColour};
    border-radius : 3px;
    font-size: ${props => props.size && sizeValues[props.size].fontSize};

    :focus { 
        outline : none;
        border : 1px solid ${props => props.theme.primaryColour};
    }

`

const Icon = styled(FontAwesomeIcon)`
    position: absolute;
    left : 15px;
    color : ${props => props.theme.textColourDim};
`

function Input({ icon, value, size, placeholder, onChange, ...rest}) {
    if (!icon) {
        return <StyledInput icon={false} value={value} size={size} placeholder={placeholder} onChange={onChange} {...rest}/>
    };

    return (
        <div style={{ display : 'flex', alignItems : 'center'}}>
            <Icon icon={icon} />
            <StyledInput icon={true} value={value} size={size} placeholder={placeholder} onChange={onChange} {...rest}/>
        </div>
    )
    
};

Input.propTypes = {
    icon : PropTypes.string,
    value : PropTypes.string.isRequired,
    disabled : PropTypes.bool,
    onChange : PropTypes.func,
    size : PropTypes.string,
    placeholder : PropTypes.string,
    onChange : PropTypes.func
};

Input.defaultProps = {
    icon : null,
    size : 'medium'
}

export default Input;