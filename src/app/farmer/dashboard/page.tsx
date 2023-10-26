import React from 'react'
import {CardOne} from '@/app/components/dashboard'
import {Breadcrump} from '@/app/components'



const FarmerDashboardPage = async() => {
 
   
  return (
    <>
  
      <Breadcrump title1='Home' link1='/dashboard'  title3='Farmer Dashboard' />
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto mt-3'>
    <CardOne />
    
    </div>
      
    </>
  )
}

export default FarmerDashboardPage
