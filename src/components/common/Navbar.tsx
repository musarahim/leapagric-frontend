"use client";
import { DropdownMenu, NavLink } from '@/components';
import { useLogoutMutation, useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { logout as setLogOut } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  Bars3Icon, BellIcon, BookOpenIcon, BuildingOfficeIcon, ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon, UserIcon, XMarkIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";



const farmer_links = [
    { name: 'My Dashboard', description: 'View A Summery of your farm from here', href: '/farmer/dashboard', icon: ChartPieIcon },
    { name: 'Farmer Profile', description: 'Manage your farmer profile', href: '/farmer', icon: UserIcon },
    { name: 'Production Protocals', description: "Interested in farming, see available production protocals", href: '/farmer/production-protocals', icon: 		BookOpenIcon },
    { name: 'My Farms', description: 'Manage your farm/s and enterprises from here', href: '#', icon: 	BuildingOfficeIcon },
    
  ]
  const seller_links = [
    { name: 'My Dashboard', description: 'View A Summery of your farm from here', href: '/farmer/dashboard', icon: ChartPieIcon },
    { name: 'Farmer Profile', description: 'Manage your farmer profile', href: '/farmer', icon: CursorArrowRaysIcon },
    { name: 'Production Protocals', description: "Interested in farming, see available production protocals", href: '#', icon: FingerPrintIcon },
    { name: 'My Farms', description: 'Manage your farm/s and enterprises from here', href: '#', icon: SquaresPlusIcon },
    
  ]
  const callsToAction = [

    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
    
  ]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  const router = useRouter();
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const handleLogout = () => {
    logout(undefined).unwrap().then((res) => {
      dispatch(setLogOut());

    });
  }
  const isSelected = (path: string) => (pathname === path ? true : false);
  const isDropdownSelected = (path: string) => (pathname.indexOf(path) ? false : true);

	const authLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/dashboard')}
				isMobile={isMobile}
				href='/dashboard'
			>
				Dashboard
			</NavLink>
			<NavLink isMobile={isMobile}
       href="/market"
       isSelected={isSelected('/market')}
       >
				Market
			</NavLink>
      <NavLink isMobile={isMobile}
       href="/service-providers"
       isSelected={isSelected('/service-providers')}
       >
				Service Providers
			</NavLink>
      <NavLink isMobile={isMobile}
       href="/extension-workers"
       isSelected={isSelected('/extension-workers')}
       >
				Extension Workers
			</NavLink>
    
      <DropdownMenu 
      title="Farm Area"
      hasAction={true}
      options={farmer_links}
      isSelected={isDropdownSelected('/farmer')}
      />
      <DropdownMenu 
      title="Service Provider Accounts"
      hasAction={true}
      options={farmer_links}
      isSelected={isDropdownSelected('/service-providers')}
      />
      
		</>
	);

	const guestLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/dashboard')}
				isMobile={isMobile}
				href='/dashboard'
			>
				Dashboard
			</NavLink>
			<NavLink isMobile={isMobile}
       href="/market"
       isSelected={isSelected('/market')}
       >
				Market
			</NavLink>
      <NavLink isMobile={isMobile}
       href="/service-providers"
       isSelected={isSelected('/service-providers')}
       >
				Service Providers
			</NavLink>
      <NavLink isMobile={isMobile}
       href="/extension-workers"
       isSelected={isSelected('/extension-workers')}
       >
				Extension Workers
			</NavLink>
      <NavLink isMobile={isMobile}
       href="/crops"
       isSelected={isSelected('/crops')}
       >
				Production Protocals
			</NavLink>
		</>
	);
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    src="/logo_2.png"
                    width={80}
                    height={80}
                    alt="Farmers Application - Products"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* nav links */}
                    {isAuthenticated
								? authLinks(true)
								: guestLinks(true)}

					{/* end of nav links */}
                  </div>
                </div>
              </div>
              {isAuthenticated ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-green-800 p-1 text-gray-100  hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-green-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {
                        user && user.avatar ? (
                          <Image
                          className="h-8 w-8 rounded-full"
                          src={user.avatar}
                          alt=""
                          width={32}
                          height={32}
                        />
                        ):(
                          <UserIcon className="h-8 w-8 rounded-full" aria-hidden="true" />
                        )
                      }
                    
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                          href="/dashboard"
                            type="button"
                            onClick={handleLogout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                
              </div>
              ):(
                
                <Link href="/auth/login" className="bg-green-600 hover:bg-green-700 text-white rounded-md px-3 py-2 text-sm font-medium">
                Login
              </Link>
              
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
           

{isAuthenticated
								? authLinks(true)
								: guestLinks(true)}
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
