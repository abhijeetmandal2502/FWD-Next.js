import React from "react";

export default function LoginForm() {
    const [showModal, setShowModal] = React.useState(false);

    const [showRegmodal, setShowRegmodal] = React.useState(false);

    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Sign In
            </button>

            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowRegmodal(true)}
            >
                Registration
            </button>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-4  md:mx-40 max-w-xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}

                                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-bold">
                                        Sign In
                                    </h3>

                                    <span class="block text-3xl font-bold" onClick={() => setShowModal(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form  >
                                        <label class="block mb-4 ">
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
                                {/*footer*/}
                                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }


            {showRegmodal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-4  md:mx-40 max-w-xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}

                                <div className="flex  justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <span>
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fuchsia-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                            </svg>
                                            <p className='font-bold text-fuchsia-900'>
                                                Back
                                            </p>
                                        </div>
                                        <h3 className="text-3xl font-bold">
                                            Create account
                                        </h3>
                                    </span>

                                    <span class="block text-3xl font-bold" onClick={() => setShowRegmodal(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form  >
                                        <label class="block mb-4 ">
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

                                        <div className="mb-4  text-center">
                                            <p>By creating an account, you agree with our</p>
                                            <a href="#">Terms of Service & Privacy Policy</a>
                                        </div>

                                        <button class="w-full px-3 py-2 bg-fuchsia-900 font-bold text-white rounded-3xl">
                                            Sign In
                                        </button>
                                    </form>
                                </div>
                                {/*footer*/}
                                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </>
            ) : null
            }


        </>
    );
}