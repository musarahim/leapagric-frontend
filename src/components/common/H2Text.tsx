import React from 'react'
interface Props {
    text: string,
   
}

function H2Text({text}: Props) {
  return (
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            {text}
    </h2>
  )
}

export default H2Text
