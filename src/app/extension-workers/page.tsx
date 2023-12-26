import React from 'react'
import { Metadata } from 'next'
import  ExtensionWorkers  from '@/app/extension-workers/ExtensionWorkers'

export const metadata: Metadata = {
    title: "Farm Wise | Extension Workers",
    description: "Get access to extension workers near you",
    };

function page() {
  return (
    <div>
        <ExtensionWorkers />
    </div>
  )
}

export default page