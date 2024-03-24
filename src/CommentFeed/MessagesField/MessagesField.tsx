import React from 'react';
import { cnMessagesField } from './MessagesField.classname';
import { Message } from './Message/Message'
import { FC } from 'react';
import type { MessageType } from '../CommentFeed';

import './MessagesField.css'

type MessagesFieldProp = {
    messages:MessageType[]
}

const MessagesField:FC<MessagesFieldProp> = ({ messages }) => {
  return (
    <div className={cnMessagesField()}>
        {messages && messages.map(( elem,index )=>
            <Message key={ index } item={ elem }/>)}
    </div>
  )
}

export { MessagesField }