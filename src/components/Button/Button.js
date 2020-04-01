import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const getBackground = (theme, type) => {
    return {
        default: '',
        primary: theme.primaryColour,
        secondary: theme.secondaryColour,
        danger: '#d9534f',
        disabled: theme.primaryColour
    }[type]
};

const sizeCss = {
    small: {
        fontSize: 12,
        padding: 7
    },
    medium: {
        fontSize: 14,
        padding: 10
    },
    large: {
        fontSize: 16,
        padding: 13
    }
};

const StyledButton = styled.button`
    background : ${props =>
        props.variant === 'outlined' ? `none`
            : `${getBackground(props.theme, props.type)}`
    };
    border : ${props =>
        props.variant === 'outlined' ?
            `2px solid ${getBackground(props.theme, props.type)}`
            : `none`
    };
    font-size : ${props => `${sizeCss[props.size].fontSize}px `};
    padding : ${props => `${sizeCss[props.size].padding}px `};
    color : ${props => props.theme.name === 'LIGHT' && props.variant !== 'outlined' ? props.theme.textColourInverse : props.theme.textColour};

    border-radius : 2px;

    :hover {
        cursor : ${props => props.disabled ? 'not-allowed' : 'pointer'};
        opacity : 0.8;
    }
`

function Button(props) {
    const { type, variant, size, disabled, children, ...rest } = props;

    return (
        <StyledButton
            type={type}
            variant={variant}
            size={size}
            disabled={disabled}
            {...rest}
        >
            {children}
        </StyledButton>
    )
};

Button.propTypes = {
    type: PropTypes.string,
    variant : PropTypes.string,
    size : PropTypes.string,
    disabled : PropTypes.bool,
    children : PropTypes.string
};

Button.defaultProps = {
    type : 'primary',
    variant : null,
    size : 'medium',
    disabled : false
}

export default Button;