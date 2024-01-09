import { Breadcrump, Footer, Navbar } from '@/components';
import { Metadata } from "next";
import CropDetail from './CropDetail';

export const config: Metadata = {
    title: "Farm Wise | Production Protocal",
    description: "Farm Wise | Production Protocal",

}

interface Props {
  params: {
    id: number;
  };
}

function page({ params }: Props) {
  const pages = [
    { name: 'Home', href: '/dashboard', current: false },
    { name: 'Crops', href: '/crops', current: false },
    { name: 'Crop', href: `/crops/${params.id}`, current: true },
]
  return (
    <> <Navbar />
    <Breadcrump pages={pages} />
    <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
     <CropDetail id={params.id} />
    </div>
    <Footer/>
    </>
   
  )
}

export default page
