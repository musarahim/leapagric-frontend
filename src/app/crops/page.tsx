import { Breadcrump, Footer, Navbar } from '@/components';
import { Metadata } from "next";
import Crop from "./Crop";

export const metadata: Metadata = {
  title: "Farm Wise | Crops",
  description: "Get information about crops from here",
};

const pages = [
    { name: 'Home', href: '/dashboard', current: false },
    { name: 'Crops', href: '/crops', current: true },
    ]

function page() {
  return (
    <>
       <Navbar />
         <Breadcrump pages={pages} />
       <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <Crop />
    </div>
       <Footer/>
    </>
  )
}

export default page
