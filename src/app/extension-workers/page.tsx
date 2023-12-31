import ExtensionWorkers from '@/app/extension-workers/ExtensionWorkers';
import { Breadcrump, Footer, Navbar } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Farm Wise | Extension Workers",
    description: "Get access to extension workers near you",
    };

    const pages = [
    { name: 'Home', href: '/dashboard', current: false },
    { name: 'Extension Workers', href: '/extension-workers', current: true },
    ]
function page() {
  return (
    <>
    <Navbar />
    <Breadcrump pages={pages} />
    <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <ExtensionWorkers />
    </div>
    <Footer/>
    </>
  )
}

export default page