"use client"
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

interface Props extends HTMLAttributes<HTMLDialogElement>{}

const  ChatInput:FC<Props> = ({className, ...props}) => {
    const [input, setInput] = useState<string>('')

  return <div {...props} className={cn('border-t border-zinc-300', className)}>
    <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
        <TextareaAutosize 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        maxRows={6}
        autoFocus
        placeholder='Type a message...'
        className='peer disabled:opacity-400 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-tight'
        />
    </div>
  </div>
  
}

export default ChatInput
