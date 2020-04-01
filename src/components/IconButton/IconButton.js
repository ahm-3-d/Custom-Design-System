import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIconButton = styled.button`
    border-radius: 50%;
    padding : 1em;
    border : none;
    background : ${props => 
    props.type === 'primary' ? props.theme.primaryColour : props.theme.secondaryColour};
    color : white;
    text-align : center;
    font-weight : bold;
    font-size : 20px;
    outline : none;

    :hover {
        opacity : 0.8;
        cursor : pointer;
    }
`

function IconButton({ type, icon, children, ...rest}) {
    return (
        <StyledIconButton type={type} {...rest}>
            {
                icon && <FontAwesomeIcon icon={icon} />
            }
            {children && children}
        </StyledIconButton>
    )
};

IconButton.propTypes = {
    type : PropTypes.string,
    icon : PropTypes.string
};

IconButton.defaultProps = {
    type : 'primary'
};

export default IconButton;
