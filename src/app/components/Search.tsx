'use client'
import {useState, FormEvent} from 'react'
import { useRouter } from 'next/navigation'
import {BsSearch} from 'react-icons/bs'

export default function Search() {
    const [search, setSearch]= useState('')
    const router = useRouter()
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`#`)
    }
  return (
   <form className='w-50 flex justify-center md:justify-between' onSubmit={handleSubmit}>
         <input 
         type="text" 
         placeholder="Search" 
         value={search} 
         onChange={(e) => setSearch(e.target.value)} 
         className='bg-white p-2 w-80 text-xl rounded-xl text-black' />
            <button className='p-3 text-xl rounded-xl bg-green-600 hover:bg-green-700 text-white ml-2 font-bold'>
                <BsSearch /> 
            </button>
    </form>
  )
}
