"use client"
import { Fragment } from 'react'
import Link from "next/link"
import cn from 'classnames';


import {  Transition,Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


interface Props {
  isMobile?: boolean;
  hasAction?: boolean;
  isSelected?: boolean;
  isBanner?: boolean;
  href?: string;
  title:string;
  children?: React.ReactNode;
  options :{ name: string; description: string; href:string;icon:React.ElementType }[];
  callToActions?: { name: string; href: string; icon:React.ElementType }[];
  [rest: string]: any;
  
}

function DropdownMenu(
  {
    isMobile,
    isBanner,
    isSelected,
    href,
    children,
    hasAction,
    title,
    options,
    callToActions,
    ...rest
  }: Props,
  ref: any
) {
  const className = cn(
		rest.className,
		'inline-flex w-full justify-center rounded-md bg-black bg-opacity-0 px-4 py-2 text-sm font-medium text-black hover:bg-green-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
	
    );
    

  return (
     
    <Menu as="div" className="relative  text-left">
    <div>
      <Menu.Button className={className}>
        {title}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-black hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
    </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Menu.Items className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {options.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <Link href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {hasAction && (
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callToActions?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
            )}
          </div>
        </Menu.Items>
      </Transition>
      </Menu>
  
  )
}




export default DropdownMenu
