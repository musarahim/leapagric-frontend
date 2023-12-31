"use client"
import { Breadcrump, Spinner } from '@/components'
import { useRetrieveProductQuery } from '@/redux/features/productApiSlice'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

interface props {
    id:number,
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProductDetails({id}:props) {
    const { data: product, isLoading, isFetching } = useRetrieveProductQuery(id)
    const reviews = { href: '#', average: 4, totalCount: 117 }

	if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}
  const pages = [
    { name: 'Home', href: '/dashboard', current: false },
    { name: 'Market Access', href: '/market', current: false },
    { name: 'Product', href: `/market/${product?.id}`, current: true },
  ]

  return (
    <div>
      <Breadcrump pages={pages} />
    <div className="pt-6">
    
     
      {/* Image gallery */}
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <Image
            src={product.image_2}
            alt={product?.name}
            width={362.667}
            height={787.55}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product?.image_4}
              alt={product?.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product?.image_3}
              alt={product?.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-300">{product?.name}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900 dark:text-gray-300">UGX {product?.price}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-gray-900 dark:text-gray-100' : 'text-gray-200 dark:text-gray-900',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>
          <ul role="list" className="divide-y divide-gray-100">
           <li key={1} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
          <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Acategory</h3>
            <div className="min-w-0 flex-auto">
             
              
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-300">{product?.category}</p>
              
            </div>
          </div>
         
        </li>
        <li key={2} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
          <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Available Quantity</h3>
            <div className="min-w-0 flex-auto">
             
              
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-300">{product?.unit} {product?.unit_measurement}</p>
              
            </div>
          </div>
         
        </li>
        <li key={3} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
          <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Available</h3>
            <div className="min-w-0 flex-auto">
             
              
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-300">{product?.available}</p>
              
            </div>
          </div>
         
        </li>
       
           </ul>
          
         

          <form className="mt-10">
            
            {/* Sizes */}
           

            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </form>

          <div className="divider">Seller Information</div> 
           {/* product owner  */}
           <ul role="list" className="divide-y divide-gray-100">
           <li key={1} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none  bg-gray-50" src={product?.seller_image} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">{product?.seller_name}</p>
              <p className="text-sm font-semibold leading-6 text-indigo-600">{product?.contact_email}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">{product?.contact_phone}</p>
              <p className="text-sm leading-6 text-gray-900 dark:text-gray-400">{product?.seller_location}</p>
            </div>
          </div>
         
        </li>
           </ul>

           {/* end product owner */}



        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900 dark:text-gray-400">{product?.description}</p>
            </div>
          </div>

         

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900 dark:text-gray-200">Specifications</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">{product?.specification}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails
