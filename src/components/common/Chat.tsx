"use client"
import { useChatPostMutation } from '@/redux/features/chatSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"

function Chat() {
  const [post, {isLoading, isSuccess, isError}] = useChatPostMutation()
  const [messages, setMessages] = useState<Message[]>([])
 
  const handlePost  = (input: string) => {
    const message = {message:input, sender:nanoid(), isUserInput:true}
    messages.push({ ...message, timestamp: new Date(), is_user_msg: true });
    post(message).unwrap().then((res) => {
        console.log(res, 'response after post')
        setMessages([...messages, res])
    }
    ).catch((err) => {
        console.log(err)
    })
   
}
console.log(messages)
  return <Accordion 
  type="single" 
  collapsible
  className="relative bg-white z-40 shadow"
  > 
  <AccordionItem value="item-1">
    <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow:hidden">
      <div className="w-full h-full flex-col">
       <AccordionTrigger className="px-6 border-b border-zinc-300 hover:no-underline">
        <ChatHeader />
       </AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-col h-80'>
            <ChatMessages messages={messages}/>
            <div className='flex-1 overflow-y-auto px-4 py-2'>
              {messages.map((message, index) => {
                return <div key={index} className='flex flex-col items-start'>
                  <div className='flex items-center'>
                  
                    <div className='ml-2 text-xs text-gray-500'>{message?.message}</div>
                  </div>
                  <div className='mt-1 text-sm text-gray-900'>{message.text}</div>
                </div>
              })}
            </div>

            <ChatInput handlePost={handlePost} />
          </div>
          </AccordionContent>
      </div>
      </div>
  </AccordionItem>
  </Accordion>
}

export default Chat