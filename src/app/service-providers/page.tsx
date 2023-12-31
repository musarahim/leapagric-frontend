import { Metadata } from 'next'
import ServiceProvider from '@/app/service-providers/ServiceProvider'
import { Footer, Navbar, Breadcrump } from '@/components'

export const metadata: Metadata = {
  title: "Farm Wise | Service Providers",
  description: "Get access to service providers from our market place",
};

const pages = [
  { name: 'Home', href: '/dashboard', current: false },
  { name: 'Service Providers', href: '/service-providers', current: true },
]

function page() {
  return (
    <>
  <Navbar />
  <Breadcrump pages={pages} />
    <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
   
      <ServiceProvider />
    </div>
    <Footer />
    </>
  )
}

export default page
