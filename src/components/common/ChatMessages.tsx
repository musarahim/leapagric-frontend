import { cn } from '@/lib/utils'
import Image from 'next/image'
interface props{
    messages:Array<Message>
}

function ChatMessages({messages}:props) {
    const inverseMessages = [...messages].reverse()
  return (
     <div className='px-2 py-3 flex-1 overflow-y-auto'>
    <div className={cn('flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-green scrollbar-thumb-rounded scrollbar-track-green-lighter scrollbar-w-2 scrolling-touch')}>
        <div className='flex-1 flex-grow' />
        {inverseMessages.map((message, index) => (
            <div key={index} className="grid justify-items-stretch">
                <div className="items-end justify-end justify-self-end  text-sm max-w-xs mx-2 overflow-x-hidden rounded-l-lg text-white">
                    <p className='px-4 rounded-l-lg   bg-green-600 text-white overflow-x-hidden'>{message.message}</p>
                    </div>
                 
                    {message.text &&(
                    <div className="flex  flex-col  text-sm max-w-xs mx-2 overflow-x-hidden rounded-r-lg justify-self-start bg-gray-200 text-gray-900">
                     
                    <p className={cn('px-4 py-2 rounded-r-lg')}>{message.text}</p>
                    </div>
                    )
                   }
                   {message.image &&(
                    <div className="flex  flex-col space-y-2 text-sm max-w-xs justify-self-start mx-2 overflow-x-hidden rounded-lg bg-gray-200 ">
                        <Image height={40} width={40} src={message.image} alt="image" className="w-40 h-40 object-fill" />

                </div>

                    )
                   }
            </div>
        )
        )

        }
    </div>
    </div>
  )
}

export default ChatMessages