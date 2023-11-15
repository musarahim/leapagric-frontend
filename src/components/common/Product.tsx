import React from 'react'
import Link from 'next/link';
interface Props {
    id?: number;
    name?: string;
    href: string;
    imageSrc?: string;
    imageAlt?: string;
    price?: string;
    category?: string;
    [rest: string]: any;
  }

function Product(
    {id,name,href,imageSrc,imageAlt,price,category,...product}: Props
) {
  return (
    <div key={id} className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700 dark:text-gray-50">
          <Link href={href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-50">{category}</p>
      </div>
      <p className="text-sm font-medium text-black dark:text-gray-100">UGX {price}</p>
    </div>
  </div>
  )
}

export default Product
