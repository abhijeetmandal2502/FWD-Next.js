import React from 'react'

const LoginForm = () => {
    return (
        <div className=" my-8 sm:mx-1 md:mx-10 lg:mx-20 xl:mx-48   p-4 ">

            <form className="sm:mx-1 md:mx-20 lg:mx-20 xl:mx-48 p-10 rounded-xl bg-white">
                <div className='flex justify-between items-center mb-6'>
                    <span class="block text-3xl font-bold">Sign In</span>
                    <span class="block text-3xl font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>

                <label class="block mb-4">
                    <span class="block text-sm font-medium text-slate-700">Email or username</span>
                    {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                    <input type="email" placeholder='Enter Email' class=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                    focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-fuchsia-900 invalid:text-fuchsia-900
      focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900" />
                </label>
                <label class="block mb-4">
                    <div className='flex justify-between'>
                        <span class="block text-sm font-medium text-slate-700">Password</span>
                        <span class="block text-sm font-medium text-slate-700">Forget Password</span>
                    </div>
                    {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                    <input type="password" placeholder='Enter password' class=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                    focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-fuchsia-900 invalid:text-fuchsia-900
      focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900" />
                </label>
                <button class="w-full px-3 py-2 bg-fuchsia-900 font-bold text-white rounded-3xl">
                    Sign In
                </button>
            </form>

        </div>
    )
}

export default LoginForm