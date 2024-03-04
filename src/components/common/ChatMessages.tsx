import { cn } from '@/lib/utils'
interface props{
    messages:Array<Message>
}

function ChatMessages({messages}:props) {
    const inverseMessages = [...messages].reverse()
  return (
     <div className='px-2 py-3 flex-1'>
    <div className={cn('flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-green scrollbar-thumb-rounded scrollbar-track-green-lighter scrollbar-w-2 scrolling-touch')}>
        <div className='flex-1 flex-grow' />
        {inverseMessages.map((message, index) => (
            <div key={index} className="chat-message">
                <div className="flex items-end justify-end flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden bg-green-600 text-white">
                    {message.message}
                    </div>
                    <div className="flex items-end flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden bg-gray-200 text-gray-900">
                    {message.text}
                    </div>

                </div>
        )
        )

        }
    </div>
    </div>
  )
}

export default ChatMessages