import { Metadata } from 'next';
import { Breadcrump, Footer, Navbar } from '@/components';
import MarketProducts from './MarketProducts';


export const metadata: Metadata = {
  title: "Farm Wise | Products",
  description: "Get Farm products from our market place",
};

const pages = [
  { name: 'Home', href: '/dashboard', current: false },
  { name: 'Market Access', href: '/market', current: true },
]

function page() {

  return (
    <>
 <Navbar />
  <Breadcrump pages={pages} />
    <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>

    <MarketProducts />
      
    </div>
    <Footer />
    </>
  )
}

export default page
