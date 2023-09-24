import React from 'react'

const FarmersPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 60}})
    const data:post[] = await res.json()
   
  return (
    <>
    <h1>Farmer's Page</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    {data.map((data) => (
        <div className='bg-gray-100 rounded-lg p-6 m-2'>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
        </div>
    ))}
    </div>
      
    </>
  )
}

export default FarmersPage
