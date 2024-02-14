"use client"
import { useEffect } from 'react';
import io from 'socket.io-client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

// Define the server address and port
const SERVER_ADDRESS = 'http://localhost'; // Replace with the actual address of your Rasa server
const SERVER_PORT = 5005; // Replace with the actual port used by your Rasa server


function Chat() {
  // Connect to the Rasa server
 const socket = io(`${SERVER_ADDRESS}:${SERVER_PORT}`);
 // Listen for connection success
socket.on('connect', () => {
  console.log('Connected to Rasa server');
  socket.emit('session_request', { session_id: "1334567788888877665" })
  socket.emit(
    'user_uttered', {
      "message": "Hello",
      "session_id": "1334567788888877665"
  });
//listen from the server
  socket.on('bot_uttered', (data: any) => {
    console.log('Bot message received')
    console.log(`Bot: ${data}`);
  });
});
socket.on('connect_error', (error) => {
  // Write any connection errors to the console 
  console.error(error);
});



const handlePost = (input: string) => {
  console.log(`User: ${input}`);
  // Send the user message to the Rasa server
  socket.emit(
    'user_uttered', {
      "message": input,
      "session_id": "1334567788888877665"
  }
  );
  socket.on('bot_uttered', (data: any) => {
    console.log('Bot message received')
    console.log(`Bot: ${data}`);
  });
//   socket.on('disconnect', () => {
//     console.log('Disconnected from Rasa server');
// });
}
useEffect(() => {
  console.log('useEffect')
  
  socket.on('bot_uttered', (data: any) => {
    console.log('Bot message received')
    console.log(`Bot: ${data}`);
  });
  return () => {
    socket.off('bot_uttered')
  }
}
, [])


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
            messages
            <ChatInput handlePost={handlePost} />
          </div>
          </AccordionContent>
      </div>
      </div>
  </AccordionItem>
  </Accordion>
}

export default Chat
