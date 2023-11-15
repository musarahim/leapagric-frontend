import { Breadcrump } from '@/components'
import { CardOne } from '@/components/dashboard'



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
