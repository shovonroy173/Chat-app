import React from 'react';
import { MessageSimple, useMessageContext } from 'stream-chat-react';

const TeamMessage = () => {
    const {  message } = useMessageContext();

    return (
        <MessageSimple
            message={{ ...message, user: {}}}
            // handleOpenThread={}
        />
    )
}

export default TeamMessage