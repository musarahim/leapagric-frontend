"use client";
import React from 'react'
import Link from 'next/link';
import { List, Spinner, Breadcrump } from '../components';
import { useRetrieveFarmerQuery } from '@/redux/features/farmerApiSlice'
import {useRetrieveUserQuery} from '@/redux/features/authApiSlice'



function FarmersPage() {
  const { data: user } = useRetrieveUserQuery();
  const id = user.id
	const {data:farmer, isLoading, isFetching} =  useRetrieveFarmerQuery(id,{
    refetchOnMountOrArgChange: false,
  });
	const config = [
		{
			label: 'First Name',
			value: farmer?.farmer_names,
		},
	
		{
			label: 'Date of Birth',
			value: farmer?.date_of_birth,
		},
    {
      label:'Education Level',
      value: farmer?.level_of_education
    },
    {
      label:'Occupation',
      value: farmer?.occupation
    },
    {
      label:'Farming Sectors',
      value: farmer?.sectors?.map(item => item.name).join()
    },
    {
      label:'Production Scale',
      value: farmer?.production_scale
    },
    {
      label:'Farmer Group',
      value: farmer?.farmer_group?.map(item => item.name).join()
    },
    {
      label:'Location',
      value: farmer?.district
    },
    {
      label:'General Remarks',
      value: farmer?.general_remarks
    },
    {
      label:'Account Status',
      value: farmer?.status
    },
	];
	
	if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}	
  return (
	<main>
		{/* <Header title="My Farmer Profile" /> */}
    <Breadcrump title1='Home' link1='/dashboard' title2='Farmer Dashboard' link2='/farmer/dashboard' title3='Farmer Profile' />
		{farmer ?(
		<div>
		
      <div className="mt-6 border-t border-gray-100">
      <List config={config} />
    
      </div>
		</div>
		):
		(
			<div className='text-center'>
				
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
					No Farmer Account found
				</h1>
				<p className='mt-6 text-base leading-7 text-gray-600'>
					Sorry, we couldn&apos;t find t you&apos;r account.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
						href='/farmer/register'
						className='rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
					>
						Register
					</Link>
					
				</div>
			</div>
		)}
		
	  
	</main>
  )
}

export default FarmersPage
