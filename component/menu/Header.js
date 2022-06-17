import React from 'react';
import AuthButton from '../../components/AuthButton';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className=" my-6  mx-4 md:mx-8 lg:mx-48">
        <div className="p-4 bg-white rounded-full flex items-center justify-between space-x-6">
          <div>
            <h2 className="text-xl font-bold ">FWD</h2>
          </div>
          <div className="w-full">
            <form className="flex items-center  ">
              <div className="relative w-full ">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3  ">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  placeholder="Search for Idea"
                  className="bg-gray-50 w-full text-sm rounded-3xl block w-full px-10    
                                    focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                    focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                  required
                />
                <div className="flex absolute inset-y-0 right-0 items-center mr-3  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>
          <AuthButton />

          <Link href="/add-source">
            <div className="flex bg-gray-400 text-white rounded-3xl px-4 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <p className="ml-2">Create</p>
            </div>
          </Link>
        </div>

        {/* menu */}

        {/* <Menu as="div" classNameName="relative inline-block text-left">
          <div>
            <Menu.Button classNameName="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Options
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
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
            <Menu.Items classNameName="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div classNameName="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                    // classNameName={classNameNames(
                    //   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    //   'block px-4 py-2 text-sm'
                    // )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                    // classNameName={classNameNames(
                    //   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    //   'block px-4 py-2 text-sm'
                    // )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                    // classNameName={classNameNames(
                    //   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    //   'block px-4 py-2 text-sm'
                    // )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                      // classNameName={classNameNames(
                      //   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      //   'block w-full text-left px-4 py-2 text-sm'
                      // )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu> */}

        <nav className=" py-3 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link href="/">
                    <div
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="post-list"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Post List
                  </Link>
                </li>
                <Link
                  href="/add-single-source"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Single Add Source
                </Link>

                {/* <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    Dropdown
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                   <!-- Dropdown menu --> 

                  <div id="dropdownNavbar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                    </div>
                  </div>

                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
