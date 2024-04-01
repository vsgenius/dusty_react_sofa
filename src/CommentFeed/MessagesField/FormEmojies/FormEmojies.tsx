import React from 'react';
import { cnFormEmojies } from './FormEmojies.classname';
import type { FC } from 'react';

import './FormEmojies.css'

type FormEmojiesProp = {
  addEmoji: (emoji: string) => void;
}

const LIST_EMOJIES = ['😀','😃','😆','😅','🤣','😂','😇','😊','😜','🤪'];

const FormEmojies:FC<FormEmojiesProp> = ({ addEmoji }) => {
    const handleClick = (event:any)=>{
        addEmoji(event.target.textContent);
    }
  return (
    <div className={cnFormEmojies()}>
        {LIST_EMOJIES && LIST_EMOJIES.map((emoji,index) =>
                <span 
                    key={index} 
                    className={cnFormEmojies('Item')} 
                    onClick={handleClick}
                >
                  {emoji}
                </span>)}
    </div>
  )
}

export { FormEmojies }