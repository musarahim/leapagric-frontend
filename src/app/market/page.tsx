import { Metadata } from 'next';
import { Breadcrump } from '../../components';
import MarketProducts from './MarketProducts';

export const metadata: Metadata = {
  title: "Farm Wise | Products",
  description: "Get Farm products from our market place",
};


function page() {

  return (
    <>
 
  <Breadcrump title1='Home' title3='Market Access'  link1='/dashboard' />
    <div>

    <MarketProducts />
      
    </div>
    </>
  )
}

export default page
