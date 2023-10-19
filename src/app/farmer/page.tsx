"use client"
import React from 'react'
import Link from 'next/link';
import { useRetrieveFarmerQuery } from '@/redux/features/farmerApiSlice'
import { Farmer } from '../../../type';


const FarmersPage = async() => {
	const {data:farmer, isLoading, isFetching} = useRetrieveFarmerQuery();
	console.log(farmer, 'This is the damn farmer')
 
   
  return (
    <>
<header className='bg-white shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						My Farmer Profile
					</h1>
				</div>
			</header>

      <div className='text-center'>
				
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
					No Farmer Account found
				</h1>
				<p className='mt-6 text-base leading-7 text-gray-600'>
					Sorry, we couldn&apos;t find t you&apos;r account.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
						href='/farmer/register'
						className='rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
					>
						Register
					</Link>
					
				</div>
			</div>
      
    </>
  )
}

export default FarmersPage
