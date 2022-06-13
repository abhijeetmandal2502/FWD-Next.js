import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut, getSession, reg } from 'next-auth/react';

const Home = () => {
  const { data: session, status } = useSession();
  const token = session && session?.user?.data?.jwt;

  console.log('checkauth', token);
  return (
    <>
      <div className=" my-6 mx-48 p-4 bg-white rounded-full flex items-center justify-between space-x-6">
        <div>
          <h2 className="text-2xl font-bold ">Deepstash</h2>
        </div>
        <div className='w-full'>
          <form class="flex items-center  ">
            <div class="relative w-full ">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3  ">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" class="bg-gray-50 w-full   text-sm rounded-3xl block w-full px-10 p-2.5   
              focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-fuchsia-900 invalid:text-fuchsia-900
              focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900" placeholder="Search" required />
              <div class="flex absolute inset-y-0 right-0 items-center mr-3  ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </form>
        </div>

        <div className='flex bg-orange-400 text-white rounded-3xl px-4 py-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p className='ml-2'>
            Create
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
