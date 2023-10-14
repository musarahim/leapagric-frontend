import React from 'react'
import {CardOne} from '@/app/components/dashboard'


const FarmerDashboardPage = async() => {
 
   
  return (
    <>
   <header className='bg-white shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						Farmer Dashboard
					</h1>
				</div>
			</header>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto mt-3'>
    <CardOne />
    
    </div>
      
    </>
  )
}

export default FarmerDashboardPage
