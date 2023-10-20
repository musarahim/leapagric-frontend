"use client";
import React from 'react'
import Link from 'next/link';
import { Header, Spinner } from '../components';
import { useRetrieveFarmerQuery } from '@/redux/features/farmerApiSlice'
import { Farmer } from '../../../type';

function FarmersPage() {
	const {data:farmer, isLoading, isFetching} =  useRetrieveFarmerQuery();
	
	if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}	
  return (
	<main>
		<Header title="My Farmer Profile" />
		
	  
	</main>
  )
}

export default FarmersPage
