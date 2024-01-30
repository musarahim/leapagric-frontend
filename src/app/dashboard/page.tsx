import { Breadcrump, Footer, Navbar } from '@/components';
import { Metadata } from 'next';
import Dashboard from './Dashboard';


export const metadata: Metadata = {
  title: "Farm Wise | Dashboard",
  description: "Get the best for your farming needs",
};

const pages = [
  { name: 'Home', href: '/dashboard', current: true },
]


export default function page() {
  return (
    <>
     <Navbar />
    <Breadcrump pages={pages} />
    <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
      <Dashboard />
    </div>
    <Footer />
</>
  )
}
