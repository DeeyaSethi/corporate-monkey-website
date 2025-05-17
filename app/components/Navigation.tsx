'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'Products', href: '/products', current: pathname.startsWith('/products') },
    { name: 'About', href: '/about', current: pathname === '/about' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
  ]

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" className="flex items-center">
                    <div className="w-8 h-8 mr-2">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-primary-600">
                        {/* Stylized monkey head */}
                        <path d="M50 15c-19.33 0-35 15.67-35 35 0 19.33 15.67 35 35 35s35-15.67 35-35c0-19.33-15.67-35-35-35zm0 60c-13.81 0-25-11.19-25-25s11.19-25 25-25 25 11.19 25 25-11.19 25-25 25z" />
                        
                        {/* Hair spike */}
                        <path d="M50 5c-3 0-9 5-9 10h18c0-5-6-10-9-10z" />
                        
                        {/* Sunglasses */}
                        <path d="M25 40c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h15c2.76 0 5-2.24 5-5v-5c0-2.76-2.24-5-5-5H25zm35 0c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h15c2.76 0 5-2.24 5-5v-5c0-2.76-2.24-5-5-5H60z" />
                        
                        {/* Connection between glasses */}
                        <path d="M45 45h10v5H45z" />
                        
                        {/* Ears */}
                        <path d="M20 35c-3 0-5 2-5 5s2 5 5 5c1 0 2-1 2-2v-6c0-1-1-2-2-2zm60 0c3 0 5 2 5 5s-2 5-5 5c-1 0-2-1-2-2v-6c0-1 1-2 2-2z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-primary-600">Corporate Monkey</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'border-primary-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-primary-50 border-primary-500 text-primary-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                  )}
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