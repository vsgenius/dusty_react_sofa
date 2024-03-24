import React, { useState } from 'react'
import { cnForm } from './Form.classname'
import type { FC, FormEvent,ChangeEvent, SetStateAction, Dispatch } from 'react';
import type { MessageType } from '../CommentFeed'

import './Form.css'

type FormProp = {
    setMessages: Dispatch<SetStateAction<MessageType[]>>
}

const Form:FC<FormProp> = ({ setMessages }) => {
    const [textValue, setTextValue] = useState<string>('')

    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if (!textValue) return;
        setMessages(prev=>[...prev,{text:textValue}])
        setTextValue('');
    }

    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setTextValue(event.target.value)
    }

  return (
    <form className={cnForm()} onSubmit={handleSubmit}>
      <input 
            className={cnForm('Input')} 
            type='text' 
            name="text" 
            value={textValue} 
            onChange={handleChange}/>
      <button className={cnForm('Button')} type="submit">Отправить</button>
    </form>
  )
}

export {Form}
