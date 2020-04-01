import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMessage = styled.div`
    background : ${props => props.theme.backgroundColour};
    width : 80%;
    border-radius : 8px;
    padding : 1em;

    /**
    background : #1C1E2F;
    border-radius : 8px;
    color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin: 3em;
    margin-top: 1em;
    margin-bottom: 0;
    **/
`;

const StyledTitle = styled.span`
    display: block;
    text-transform: uppercase;
    font-size: 12px;
    color : ${props => props.theme.textColour};
    margin-left : 1em;
    opacity : 0.8;
`;

const Body = styled.div`
    display : inline-flex;
    flex-direction: row;
    justify-content : space-between;
    margin-top: 0.2em;
    margin-left : 0.9em;
    color : ${props => props.theme.textColourDim};
    font-size : 16px;
    width : 100%;
`

export function MessageInfo(props) {
    return <div {...props}>{props.children}</div>
};

export function MessageActions(props) {
    return <div {...props}>{props.children}</div>
};

export function MessageText(props) {
    return <div {...props}>{props.children}</div>
};

function Message({ children, title, ...rest }) {
    return (
        <StyledMessage {...rest}>
            {title && <StyledTitle>{title}</StyledTitle>}
            <Body>
                {children}
            </Body>
        </StyledMessage>
    )
};

Message.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string.isRequired
}

export default Message;