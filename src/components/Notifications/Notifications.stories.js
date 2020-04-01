import React from "react";

import { NotificationContainer, Notify } from './Notifications';
import Button from '../Button/Button';

export default {
    component: NotificationContainer,
    title: 'Notification'
};

const Wrapper = ({ children }) => (
    <div>
        <NotificationContainer />
        {children}
    </div>
);

const placeholderText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

export const Default = () => (
    <Wrapper> 
        <Button type='primary' onClick={() => Notify(null, 'Notification Title', placeholderText)}>
            I am the default Notification
        </Button>
        <br />
        <br />
        <Button type='primary' onClick={() => Notify('success', 'Success Notification', placeholderText)}>
            Success
        </Button>
        <br />
        <br />
        <Button type='primary' onClick={() => Notify('info', 'Info Notification', placeholderText)}>
            Info
        </Button>
        <br />
        <br />
        <Button type='primary' onClick={() => Notify('warning', 'Warning Notification', placeholderText)}>
            Warning
        </Button>
        <br />
        <br />
        <Button type='primary' onClick={() => Notify('error', 'Error Notification', placeholderText)}>
            Error
        </Button>
    </Wrapper>
)