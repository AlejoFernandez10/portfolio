'use client'

import '../app/globals.css'

import { Disclosure,} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../app/globals.css'

import Context from '@/app/context/Context'
import { useContext, useState } from 'react'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Projects', href: '#projects', current: true },
  { name: 'About me', href: '#aboutme', current: true },
  { name: 'Contact', href: '#contact', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function Example() {


  const [theme, setTheme] = useContext(Context)


  return (
    <Disclosure as="nav" className={` ${theme === 'dark' ? 'bg-[#1F1D2B]' : 'bg-gray-50'} fixed w-full z-[500]`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1100px] px-2 sm:px-6 lg:px-8">
            <div className="relative flex w-full h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between sm:px-16">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${theme === 'dark' ?  'text-gray-100' : 'text-gray-800  '} rounded-md px-3 py-2 text-[15px]   hover:text-[#9333EA] transition-all duration-200 font-medium `}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <button onClick={(e)=> e.preventDefault() & setTheme('light')}  className='text-white'>Mode</button>
                  <a href="" className='text-white'>Color</a>
                </div>
              </div>                
              
            </div>
          </div>

               {/* MOBILE MENU */}           

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`${theme === 'dark' ? ' text-white' : 'text-gray-800'} hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
