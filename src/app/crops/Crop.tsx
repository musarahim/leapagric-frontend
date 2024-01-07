"use client"
import { Spinner } from '@/components'
import { useGetCropsQuery } from "@/redux/features/commonApiSlice"
import Link from 'next/link'

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

function Crop() {
    const { data, error, isLoading, isFetching } = useGetCropsQuery()
    

    if (isLoading || isFetching) {
        return (
            <div className='flex justify-center my-8'>
                <Spinner lg />
            </div>
        );
    }

    if(data?.length === 0) {
        return (
            <div className='flex justify-center my-8'>
                <p className='text-gray-400'>No crops found</p>
            </div>
        );
    }
  return (
<div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Crops</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of crops and their production data
          </p>
        </div>
     
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Maturity Period
                  </th>
               
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.map((crop) => (
                  <tr key={crop.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {crop.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{crop.crop_type}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{crop?.growth_period} {crop.period_type}</td>
               
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Link href={`/crops/${crop.id}`} className="text-indigo-600 hover:text-indigo-900">
                        More
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crop
