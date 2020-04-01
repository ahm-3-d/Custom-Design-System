import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledCard = styled.div`
    background : ${props => props.theme.contentBackground};
    color : ${props => props.theme.textColour};
    border-radius: 5px;
    padding: 25px;
    box-shadow: ${props => props.floating && `0px 0px 5px 0px rgba(0,0,0,0.2)`};
    height : ${props => props.height && props.height}${props => !isNaN(props.height) && `px`};
    width : ${props => props.width && props.width}${props => !isNaN(props.width) && `px`};
    overflow-y : ${props => props.scrollable && 'auto'};
    font-size : 14px;
    text-align : ${props => props.align || 'left'};
`;

const StyledTitle = styled.div`
    margin-bottom : 1em;
    font-size : 16px;
`


function Card({ width, height, floating, children, scrollable, title, align, ...rest }) {
    return (
        <StyledCard width={width} height={height} floating={floating} scrollable={scrollable} align={align} {...rest}>
            {title && <StyledTitle>{title}</StyledTitle>}
            {children}
        </StyledCard>
    )
};

Card.propTypes = {
    width : PropTypes.any.isRequired,
    height : PropTypes.any.isRequired,
    floating : PropTypes.bool,
    scrollable : PropTypes.bool,
    title : PropTypes.string,
    children : PropTypes.string,
    align : PropTypes.string
};

Card.defaultProps = {
    width : 500,
    height : 500,
    floating : false,
    scrollable : true,
    align : 'left'
};

export default Card;