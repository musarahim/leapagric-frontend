
import ProductDetails from './ProductDetails'
import {  Footer, Navbar } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Farm Wise | Product",
  description: "Get Farm products from our market place",
};

interface Props {
	params: {
		id: number;
	};
}


function page({ params }: Props) {
   
   
   
  return (
    <>
  <Navbar />
    <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
    
     <ProductDetails id={params.id} />
  </div>
  <Footer />
  </>
  )
}

export default page
