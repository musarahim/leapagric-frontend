'use client';

import { List, Spinner } from '@/components';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export const revalidate = 86400; // 24 hours

export default function Page() {
	const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
	

	const config = [
		{
			label: 'First Name',
			value: user?.first_name,
		},
		{
			label: 'Last Name',
			value: user?.last_name,
		},
		{
			label: 'Email',
			value: user?.email,
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
		<>
			<header className='bg-white shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						My Profile
					</h1>
				</div>
			</header>
			<div className='mt-6 border-t border-gray-100'>
			
				<List config={config} />
			</div>
		</>
	);
}