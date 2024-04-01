import React, { useState } from 'react';
import type { FC } from 'react';
import type { MessageType } from '../../CommentFeed';
import { cnMessage } from './Message.classname';
import { FormEmojies } from '../FormEmojies/FormEmojies';

import './Message.css';

type MessageProp = {
    item: MessageType;
}

const Message:FC<MessageProp> = ({ item }) => {
    const [hover, setHover] = useState(false);
    const [emojies, setEmojies] = useState<string[]>([]);
    const [showForm, setShowForm] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
        setShowForm(false);
    }
    
    const handleClickEmoji = () => {
        setShowForm(true);
    }

    const addEmoji = (emoji: string) => {
        setEmojies(prev=>[...prev,emoji]);
    }

  return (
    <div 
        className={cnMessage({"hovered":hover})} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
        {item.text}
        {hover && 
            <span 
                className={cnMessage('Emoji')} 
                onClick={handleClickEmoji}>
                <i className="fa-regular fa-face-smile"></i>
            </span>}
        {emojies &&
            <div className={cnMessage('Emojies')}>
                { emojies.map((emoji,index)=>
                <span key={index}>{emoji}</span>)}
            </div>}
        {showForm && <FormEmojies addEmoji={addEmoji}/>}
    </div>
  )
}

export { Message }