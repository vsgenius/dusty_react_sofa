import React from 'react';
import { cnFormEmojies } from './FormEmojies.classname';
import type { FC, SetStateAction, Dispatch } from 'react';

import './FormEmojies.css'

type FormEmojiesProp = {
    setEmojies:Dispatch<SetStateAction<string[]>>
}

const FormEmojies:FC<FormEmojiesProp> = ({ setEmojies }) => {
    const listEmojies = ['😀','😃','😆','😅','🤣','😂','😇','😊','😜','🤪'];

    const handleClick = (event:any)=>{
     setEmojies(prev=>[...prev,event.target.textContent]);
    }

  return (
    <div className={cnFormEmojies()}>
        {listEmojies && listEmojies.map((emoji,index)=>
                <span 
                    key={index} 
                    className={cnFormEmojies('Item')} 
                    onClick={handleClick}>
                        {emoji}
                </span>)}
        
    </div>
  )
}

export { FormEmojies }