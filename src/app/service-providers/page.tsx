import { Metadata } from 'next'
import ServiceProvider from '@/app/service-providers/ServiceProvider'

export const metadata: Metadata = {
  title: "Farm Wise | Service Providers",
  description: "Get access to service providers from our market place",
};

function page() {
  return (
    <div>
      <ServiceProvider />
    </div>
  )
}

export default page
