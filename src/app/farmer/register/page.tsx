import { Header } from '@/components'
import RegisterFarmerForm from './RegisterFarmerForm'

const RegisterFarmer = () => {
  return (
   <>
   <Header title="Register Farmer Profile" />
   <div className="card mt-12 bg-base-100 shadow-xl">
   <div className="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">

   <RegisterFarmerForm/>
    </div>
    </div>
   </>
  )
}

export default RegisterFarmer
