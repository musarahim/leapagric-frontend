"use client" 
import React from 'react'
import Link from 'next/link';
import { useField } from 'formik';

interface Props {
	name: string,
    label: string,
    type?: string,
    required?: boolean,
    link?: {
		linkText: string;
		linkUrl: string;
	};
    Id?: string,
    value?: string,
    children?: React.ReactNode,

}



function InputField({
    ...props
}: Props) {
    const [field, meta] = useField(props.name);
  return (
   <div>
			<div className='flex justify-between align-center'>
				<label
					htmlFor={props.name}
					className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
				>
					{props.label}
				</label>
				{props.link && (
					<div className='text-sm'>
						<Link
							className='font-semibold text-indigo-600 hover:text-indigo-500'
							href={props.link.linkUrl}
						>
							{props.link.linkText}
						</Link>
					</div>
				)}
			</div>
			<div className='mt-2'>
				<input
					id={props.Id}
					className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					{...field} {...props}
				/>
			</div>
			{meta.touched && meta.error ? (
               <small className='text-sm text-red-600'>{meta.error}</small>
			

				) : null}
		</div>
  )
}

export default InputField


