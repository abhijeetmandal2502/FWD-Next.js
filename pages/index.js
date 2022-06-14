import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Dropdown } from 'flowbite-react';
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'

const Home = () => {

  const collection = [1, 2, 3, 4]

  return (
    <>
      <div className=" my-6  mx-4 md:mx-8 lg:mx-48">

        <div className='flex justify-between'>
          <h3 className='text-xl font-bold'>COLLECTIONS</h3>

          <div>
            <div className="flex">
              <p className='font-bold text-fuchsia-900'>
                See All
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fuchsia-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>


        <div class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 my-4">

          {collection.map((img, index) => {
            return (
              <div class="max-w-sm bg-white rounded-xl hover:shadow-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-xl" src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fpersuasive_storytelling.png&w=1920&q=75" alt="" />
                </a>
                <div class="p-4">
                  <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900  leading-0">Persuasive storytelling</h5>
                  </a>

                  <div className='flex justify-between'>
                    <div>
                      <div className="flex">
                        <p className='font-bold text-fuchsia-900 text-sm'>
                          See All
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-fuchsia-900 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    <h3 className='text-sm bg-slate-100 p-1 rounded-md shadow-md'>41</h3>

                  </div>

                </div>
              </div>
            );
          })}
        </div>





      </div>
    </>
  );
};

export default Home;
