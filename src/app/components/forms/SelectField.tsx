"use client"
import React from "react";
import Link from 'next/link';
import { useField } from "formik";
//select input field using tailwindcss and formik
interface Option {
    id: number;
    name: string;
  }
interface Props {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  Id?: string;
  value?: string;
  children?: React.ReactNode;
  options?: Option[];
}


function SelectField({
    ...props
}: Props) {
    const [field, meta, helpers] = useField(props);
  return (
    <div>
      <div className="flex justify-between align-center">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
        >
          {props.label}
        </label>
        {props.link && (
          <div className="text-sm">
            <Link
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              href={props.link.linkUrl}
            >
              {props.link.linkText}
            </Link>
          </div>
        )}
      </div>
      <div className="mt-2">
        <select
          id={props.Id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...field}
          {...props}
        >
            {props.options?.map((option) => (
              
                 <option key={option.id} value={option.id}>
                {option.name}
                </option>
              
               
            ))}
        </select>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
export default SelectField