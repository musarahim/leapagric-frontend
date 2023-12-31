"use client"
import { Spinner } from '@/components'
import { useRetrieveServiceProviderQuery } from '@/redux/features/serviceProviderAPISlice'
import { Listbox, Transition } from '@headlessui/react'
import {
  EnvelopeIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  GlobeAltIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  PhoneIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini
} from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'



  interface props {
    id:number,
}

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIconMini, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ServiceProviderDetails({id}:props) {
    const { data: serviceProvider, isLoading, isFetching } = useRetrieveServiceProviderQuery(id)
    const [selected, setSelected] = useState(moods[5])

    if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Invoice summary */}
          <div className="lg:col-start-3 lg:row-end-1">
            <h2 className="sr-only">Summary</h2>
            <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
              <dl className="flex flex-wrap pb-6">
                <div className="flex-auto pl-6 pt-6">
                  <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                    {serviceProvider?.enterprise_name}
                  </dd>
                </div>
              
                <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                  <dt className="flex-none">
                    <span className="sr-only">Service Provider</span>
                    <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-gray-900">{serviceProvider?.user}</dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">
                    <a href={`mailto:${serviceProvider?.email}`} className="ml-3 font-medium text-indigo-600 hover:text-indigo-500">
                        {serviceProvider?.email}
                        </a>
                  </dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <PhoneIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">{serviceProvider?.business_number}</dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">web</span>
                    <GlobeAltIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">
                    <a href={serviceProvider?.website} target='_blank' className="ml-3 font-medium text-indigo-600 hover:text-indigo-500">
                        {serviceProvider?.website}
                        </a>
                  </dd>
                </div>
              </dl>
             
            </div>
          </div>

          {/* Invoice */}
          <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
            <h2 className="text-base font-semibold leading-9 text-gray-900">Service Provider</h2>
            <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Names</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.user}</dt>
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Location</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.location}</dt>
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Address</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.address}</dt>
               
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Target  Audience</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.target_audience}</dt>
               
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Business Model</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.business_model}</dt>
               
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Year of Establishment</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.year_established}</dt>
               
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Number of Employees</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.number_of_employees}</dt>
               
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Certifications</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.certifications}</dt>
               
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">Service Categories</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">
                  {serviceProvider?.services_offered.join(', ')}
                  </dt>
               
              </div>
              <div className="sm:pr-4">
                <dt className="inline font-semibold leading-9 text-gray-900">General Remarks</dt>{' '}

              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">{serviceProvider?.general_remarks}</dt>
               
              </div>
         
            </dl>
            <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
              <colgroup>
                <col className="w-full" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="border-b border-gray-200 text-gray-900">
                <tr>
                  <th scope="col" className="px-0 py-3 font-semibold">
                    Services
                  </th>
                  <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                    Price
                  </th>
                  <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                    Type
                  </th>
                  <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceProvider?.services?.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="max-w-0 px-0 py-5 align-top">
                      <div className="truncate font-medium text-gray-900">{item.name}</div>
                      <div className="truncate text-gray-500">{item.description}</div>
                    </td>
                    <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                      {item.price}
                    </td>
                    <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                      {item.hire_sell}
                    </td>
                    <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            
            </table>
          </div>

          <div className="lg:col-start-3">
            {/* in app conversation */}
            <h2 className="text-sm font-semibold leading-6 text-gray-900">Send a Message</h2>
            {/* New comment form */}
            <div className="mt-6 flex gap-x-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
              />
              <form action="#" className="relative flex-auto">
                <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label htmlFor="comment" className="sr-only">
                    add your Message
                  </label>
                  <textarea
                    rows={2}
                    name="comment"
                    id="comment"
                    className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Add your comment..."
                    defaultValue={''}
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                  <div className="flex items-center space-x-5">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                      >
                        <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Attach a file</span>
                      </button>
                    </div>
                    <div className="flex items-center">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="sr-only">Your mood</Listbox.Label>
                            <div className="relative">
                              <Listbox.Button className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                <span className="flex items-center justify-center">
                                  {selected.value === null ? (
                                    <span>
                                      <FaceSmileIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                      <span className="sr-only">Add your mood</span>
                                    </span>
                                  ) : (
                                    <span>
                                      <span
                                        className={classNames(
                                          selected.bgColor,
                                          'flex h-8 w-8 items-center justify-center rounded-full'
                                        )}
                                      >
                                        <selected.icon
                                          className="h-5 w-5 flex-shrink-0 text-white"
                                          aria-hidden="true"
                                        />
                                      </span>
                                      <span className="sr-only">{selected.name}</span>
                                    </span>
                                  )}
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                  {moods.map((mood) => (
                                    <Listbox.Option
                                      key={mood.value}
                                      className={({ active }) =>
                                        classNames(
                                          active ? 'bg-gray-100' : 'bg-white',
                                          'relative cursor-default select-none px-3 py-2'
                                        )
                                      }
                                      value={mood}
                                    >
                                      <div className="flex items-center">
                                        <div
                                          className={classNames(
                                            mood.bgColor,
                                            'flex h-8 w-8 items-center justify-center rounded-full'
                                          )}
                                        >
                                          <mood.icon
                                            className={classNames(mood.iconColor, 'h-5 w-5 flex-shrink-0')}
                                            aria-hidden="true"
                                          />
                                        </div>
                                        <span className="ml-3 block truncate font-medium">{mood.name}</span>
                                      </div>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

export default ServiceProviderDetails