"use client"
import React from 'react'
import { useGetProductsQuery } from '@/redux/features/productApiSlice'
import { Product, Spinner } from '../components'

function MarketProducts() {
    const { data:productList, error, isLoading, isFetching } = useGetProductsQuery()
    const products = productList?.results

	if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {products?.map((product) => (
      <>
    
      <Product 
      id={product.id} 
      imageSrc={product.image} 
      imageAlt={product.name} 
      href={`/market/${product.id}`}
      name={product.name}
      category={product.category}
      price={product.price}
         />
     
    
      </>
    ))}
  </div>
  )
}

export default MarketProducts
