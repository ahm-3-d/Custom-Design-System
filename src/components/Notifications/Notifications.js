import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ToastContainer, toast } from 'react-toastify';

export const NotificationContainer = styled(ToastContainer).attrs({
    className: 'toast-container',
    toastClassName: 'toast',
    bodyClassName: 'body',
    progressClassName: 'progress',
})`
    .toast {
        background : ${props => props.theme.contentBackground};
        color : ${props => props.theme.textColourDim};
        font-size: 15px;
    }

    .progress {
        background : ${props => props.theme.primaryColour};
    }

    button[aria-label="close"] {
        color : ${props => props.theme.textColour};
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color : ${props => props.color && props.color};
    font-size : 20px;
`
const Title = styled.div`
    color : ${props => props.theme.textColour};
    margin-bottom: 0.5em;
`

function getIcon(type) {
    let Icon;

    switch (type.toLowerCase()) {
        case 'success':
            Icon = <StyledIcon icon="check-circle" color='green' />;
            break;
        case 'info':
            Icon = <StyledIcon icon="info" color='blue' />;
            break;
        case 'warning':
            Icon = <StyledIcon icon="info" color="yellow" />;
            break;
        case 'error':
            Icon = <StyledIcon icon="info" color='red' />;
            break;
        default:
            Icon = null
    };

    return Icon;
};

export const Notify = (type, title, children, options) => toast(
    <div style={{ display: 'flex', padding: '1em' }}>
        {type && getIcon(type)}
        <div style={{ marginLeft: '1em' }}>
            <Title>{title}</Title>
            {children}
        </div>
    </div>,
    options
);



