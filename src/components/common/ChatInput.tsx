"use client"

import { CornerDownLeft, Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'


interface props{
    handlePost: (arg0: string) => void,
    isLoading?: boolean
}

function  ChatInput({handlePost, isLoading}: props) {
    const [input, setInput] = useState<string>('')
    
   const textAreaRef = useRef<null | HTMLTextAreaElement>(null)
    

  return <div className='border-t border-zinc-300 px-4'>
    <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
        <TextareaAutosize 
        ref={textAreaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handlePost(input)
                setInput('')
                setTimeout(() => {
                    textAreaRef.current?.focus()
                }, 10)   
            }
        }}
        rows={3}
        maxRows={6}
        disabled={isLoading}
        autoFocus
        placeholder='Type a message...'
        className='peer disabled:opacity-400 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6'
        />
        <div className='absolute inset-y-0 right-0 flex  pr-1.5 py-1.5'>
            <kbd className='flex items-center  w-8 h-8 text-gray-400 bg-zinc-100 rounded-full border-green-200 px-1 font-sans'>
                {isLoading ? <Loader2 className='w-3 h-3 animate-spin' /> : <CornerDownLeft className='w-3 h-3'/>}
                </kbd>
            </div>
            <div aria-hidden='true' className='absolute inset-x-0 bottom-0 border-t border-green-200 peer-focus:border-t-2 peer-focus:border-green-600' />
    </div>
  </div>
  
}

export default ChatInput