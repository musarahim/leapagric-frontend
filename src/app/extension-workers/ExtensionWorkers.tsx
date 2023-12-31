"use client"
import React from 'react'
import { EnvelopeIcon, IdentificationIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useGetExtensionWorkersQuery } from "@/redux/features/extensionWorkersApiSlice"
import {  Spinner } from '../../components'

function ExtensionWorkers() {
    const { data, error, isLoading, isFetching } = useGetExtensionWorkersQuery()
    

    if (isLoading || isFetching) {
        return (
            <div className='flex justify-center my-8'>
                <Spinner lg />
            </div>
        );
    }

  return (
    <div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {data?.results?.map((worker) => (
         <li key={worker.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
           <div className="flex w-full items-center justify-between space-x-6 p-6">
             <div className="flex-1 truncate">
               <div className="flex items-center space-x-3">
                 <h3 className="truncate text-sm font-medium text-gray-900">{worker.names}</h3>
                 <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                   {worker.county}
                 </span>
               </div>
               <p className="mt-1 truncate text-sm text-gray-500">
               {worker.expertise_areas.map((expertise) => (
                     <>
                     - {expertise.name} <br />
                        </>
                     ))}
               </p>
             </div>
             <img className="h-10 w-15 flex-shrink-0  bg-gray-300" src={worker.avatar} alt="" />
           </div>
           <div>
             <div className="-mt-px flex divide-x divide-gray-200">
               <div className="flex w-0 flex-1">
                 <a
                   href={`mailto:${worker.email}`}
                   className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                 >
                   <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                   Email
                 </a>
               </div>
               <div className="-ml-px flex w-0 flex-1">
                 <Link
                   href={`/service-providers/${worker.user}`}
                   className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                 >
                   <IdentificationIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                   View Details
                 </Link>
               </div>
             </div>
           </div>
         </li>
       ))}
     </ul>
       
     </div>
  )
}

export default ExtensionWorkers