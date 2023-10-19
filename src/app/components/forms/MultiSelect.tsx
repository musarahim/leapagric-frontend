"use client"
import React from 'react'
import Select from 'react-select'
import { useField } from 'formik'
import Link from 'next/link';
import { ErrorMessage, useFormikContext } from "formik";


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
  options: any;
  isMulti?:boolean
}


function MultiSelect({
    ...props
}: Props) {
    const [field, meta, helpers] = useField(props);
    const { setFieldValue } = useFormikContext();
    const handleOnchange = (selectedOption:any) => {
      console.log(props.isMulti,'logging is multiple value')
      if (props.isMulti===true){
        let values:Array<any> = []
        selectedOption.forEach(function (value:any) {
          values.push(value.value)
        }); 
  
        setFieldValue(props.name, values);
      }else{
        setFieldValue(props.name, selectedOption ? selectedOption.value : null);
       
      }
    }
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
  <Select
    isMulti={props.isMulti}
    onChange={handleOnchange}
    name={props.name}
    options={props.options}
    className="basic-multi-select w-full block"
    classNamePrefix="select"

    />
    </div>
     {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default MultiSelect
