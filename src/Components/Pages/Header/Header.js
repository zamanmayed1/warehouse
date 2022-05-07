/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import CustomLink from '../../../Components/Shared/CustomLink'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../Firebase/Firebase.init'
import { signOut } from 'firebase/auth'





export default function Header() {
    const [user] = useAuthState(auth)
    return (
        <Disclosure as="nav" className="bg-white shadow-md md:flex items-center">
            {({ open }) => (
                <>
                    <div className=" mx-auto px-2 sm:px-6 ">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="https://i.ibb.co/tDDkMFP/icon-stockroom-io-d129f9.png"
                                        alt="Stock Room"
                                    />

                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="https://i.ibb.co/tDDkMFP/icon-stockroom-io-d129f9.png"
                                        alt="Stock Room"
                                    />
                                    <h2 className='text-gray-900 text-xl inline-block mx-1 font-bold'>Stock Room</h2>
                                </div>
                                {/* Laptop */}
                                <div className="hidden mx-96 sm:block sm:ml-6">

                                    <div className="flex justify-between">
                                        <CustomLink to={'/'}>Home</CustomLink>
                                        <CustomLink to={'/blog'}>Blog</CustomLink>
                                        <CustomLink to={'/stock'}>Stock</CustomLink>
                                        <CustomLink to={'/manageinventory'}>Manage Inventory</CustomLink>
                                        {
                                            user && <>
                                                <CustomLink to={'/myitem'}>My Item</CustomLink>

                                                <CustomLink to={'/additem'}>Add Item</CustomLink>

                                            </>
                                        }
                                    </div>
                                </div>

                            </div>
                            <div className="absolute inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {
                                    user ?
                                        <button className='px-2 p-1 bg-red-700 text-white rounded-md' onClick={() => signOut(auth)}>Sign Out</button>
                                        : <CustomLink to={'/login'}>Log In </CustomLink>
                                }


                            </div>
                        </div>
                    </div>
                    {/* Mobile*/}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3  ">
                            <CustomLink to={'/'}>Home</CustomLink>
                            <CustomLink to={'/blog'}>Blog</CustomLink>
                            <CustomLink to={'/stock'}>Stock</CustomLink>
                            <CustomLink to={'/manageinventory'}>Manage Inventory</CustomLink>
                            {
                                user && <>
                                    <CustomLink to={'/myitem'}>My Item</CustomLink>
                                    <CustomLink to={'/additem'}>Add Item</CustomLink>

                                </>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

