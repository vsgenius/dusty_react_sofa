import React, { useState } from 'react';
import { cnCommentFeed } from './CommentFeed.classname';
import { Form } from './Form/Form';
import { MessagesField } from './MessagesField/MessagesField';

import './CommentFeed.css';

export type MessageType = {
  text: string;
};

const CommentFeed = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const newMessage = (value: MessageType) => {
    setMessages((prev) => [...prev, value]);
  };

  return (
    <div className={cnCommentFeed()}>
      <MessagesField messages={messages} />
      <Form newMessage={newMessage} />
    </div>
  );
};

export { CommentFeed };
