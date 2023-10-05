"use client"
import React from 'react'
import { useField } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Link from 'next/link';

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

function PhoneInputField({...props}: Props) {
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
							className='font-semibold text-green-600 hover:text-green-500'
							href={props.link.linkUrl}
						>
							{props.link.linkText}
						</Link>
					</div>
				)}
			</div>
            <div className='mt-2'>
  <PhoneInput
        defaultCountry="ug"
        forceDialCode={true}
        inputClassName='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        inputProps={{...props, ...field}}
      />
      </div>
      {meta.touched && meta.error ? (

<small className='text-sm text-red-600'>{meta.error}</small>

) : null}
    </div>
 
  )
}

export default PhoneInputField
