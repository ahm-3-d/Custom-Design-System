import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Message, { MessageActions, MessageInfo, MessageText } from './Message';

export default {
    component: Message,
    title: 'Message'
};

export const Default = () => (
    <Message title={'10/04/2019'}>
        <MessageInfo>Kith - Yeezy 350 V2 RF</MessageInfo>
        <MessageText>£220</MessageText>
        <div>#K4594594</div>
        <MessageActions style={{}}>
            <FontAwesomeIcon icon="ellipsis-v" />
        </MessageActions>
    </Message>
);