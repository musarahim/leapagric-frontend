"use client"

import {  useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'


interface props{
    handlePost: (arg0: string) => void
}

function  ChatInput({handlePost}: props) {
    const [input, setInput] = useState<string>('')
    
   
    

  return <div className='border-t border-zinc-300 px-4'>
    <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
        <TextareaAutosize 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handlePost(input)
                setInput('')
            }
        }}
        rows={3}
        maxRows={6}
        autoFocus
        placeholder='Type a message...'
        className='peer disabled:opacity-400 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6'
        />
    </div>
  </div>
  
}

export default ChatInput