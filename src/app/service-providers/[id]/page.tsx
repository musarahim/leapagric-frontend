
import React from 'react'
import { Breadcrump, Footer, Navbar } from '@/components'
import { Metadata } from 'next'
import ServiceProviderDetails from './ServiceProviderDetails'

export const metadata: Metadata = {
  title: "Farm Wise | Service Providers Details",
  description: "Get access to service providers from our market place",
};

interface Props {
  params: {
    id: number;
  };
}


function page({ params }: Props) {
  const pages = [
    { name: 'Home', href: '/dashboard', current: false },
    { name: 'Service Providers', href: '/service-providers', current: false },
    { name: 'Details', href: `/service-providers/${params.id}`, current: true },
  ]
  
  return (
    <>
    <Navbar />
 <Breadcrump pages={pages} /> 
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ServiceProviderDetails />
      </div>
    <Footer />
  </>
  )
}

export default page