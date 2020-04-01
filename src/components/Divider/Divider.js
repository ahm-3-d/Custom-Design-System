import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.div`
    width : 100%;

    div {
        width : 100%;
        border-bottom : 3px ${props => props.dashed ? 'dashed' : 'solid'} ${props => props.theme.backgroundColour};
        text-align : ${props => props.align && props.align};
    }

    span {
        position : absolute;
        top: -1px;
        color : ${props => props.theme.textColourDim}
    }
`

function Divider({ dashed, children, align, ...rest}) {
    return (
        <Styles dashed={dashed} align={align} {...rest}>
            <div>
                <span>
                    {children && children}
                </span>
            </div>
        </Styles>
    )
};

Divider.propTypes = {
    dashed : PropTypes.bool,
    align : PropTypes.string
};

Divider.defaultProps = {
    dashed : false,
    align : 'left'
};

export default Divider;