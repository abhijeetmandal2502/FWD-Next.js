import React from 'react'

const AddSource = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className=" mb-6  mx-4 md:mx-8 lg:mx-48">
            <div className="p-4 bg-red-50 shadow-2xl rounded-b-2xl flex items-center justify-between space-x-6">
                <a href='/'>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fuchsia-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        <p className='font-bold text-fuchsia-900'>
                            Back
                        </p>
                    </div>
                </a>

                <div className='flex bg-graytype text-white rounded-3xl px-4 py-1 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className='ml-2'>
                        Publish
                    </p>
                </div>



            </div>

            <div className="mt-6 grid md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                <div>
                    {/* card */}
                    <div className='bg-white shadow-xl rounded-2xl  '>
                        <div className='p-4 border-b-2 border-slate-300' >
                            <input type="file" className="block m-auto text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                         "/>
                        </div>
                        <div className='p-4' >
                            <div className='flex justify-between'>
                                <input type='text' className='font-bold w-full text-2xl border-0 focus:border-0 focus:ring-0 ' placeholder='Title of the idea' />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <textarea id="message" rows="6" className="mt-2  px-4 w-full text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Your message..."></textarea>
                            <div className='flex justify-between'>
                                <p></p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className=''>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-bold'>Source</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div className="mt-6 grid md:grid-cols-3   gap-4">
                            <div className='bg-white rounded-lg text-center shadow-sm p-2 hover:shadow-lg '>
                                <svg className="sc-hBEYId gsxGRD h-16 w-16 m-auto" viewBox="0 0 61 49"  >
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M22.117 9.414c5.387-.329 10.436-6.197 15.322-3.879C42.211 7.8 42.1 14.7 43.86 19.728c1.817 5.196 5.852 10.427 4.008 15.615-1.84 5.178-8.086 6.875-12.908 9.419-4.086 2.154-8.268 4.72-12.842 4.16-4.35-.533-7.201-4.472-10.764-7.053-3.597-2.606-8.396-4.008-10.168-8.11-1.827-4.232-.322-9.023.843-13.488C3.262 15.539 3.815 9.63 8.081 7.325c4.276-2.31 9.197 2.384 14.036 2.089z" fill="#0A8976"></path>
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M52.901 36.163c3.618-4.737 7.622-10.294 7.426-15.836-.196-5.513-4.392-9.026-8.396-11.533-3.298-2.064-7.715-.723-11.728-1.063-3.776-.32-7.153-2.012-11.066-.87-4.765 1.392-9.67 3.644-13.207 7.956-3.982 4.853-7.585 11.143-7.233 16.956.348 5.748 4.977 9 8.983 11.94 3.287 2.414 7.407 2.904 11.62 3.188 3.963.266 7.946.225 11.957-1.6 4.372-1.989 8.467-4.977 11.645-9.138z" fill="#E7E3DF"></path><path d="M28.73 30.984l4.722-8.086c1.266-2.16 2.56-4.43 2.683-6.933.122-2.502-1.37-5.268-3.836-5.693-3.018-.527-5.395 2.42-7.028 5.013l-9.478 15.034c-.957 1.519-1.968 3.148-1.861 4.958.114 2.424 2.337 4.403 4.721 4.76 2.385.359 4.844-.648 6.732-2.171 1.889-1.523 3.321-3.541 4.722-5.509 4.328-6.083 8.715-12.3 10.95-19.421.74-2.361 1.232-4.883.61-7.264-.622-2.38-2.624-4.544-5.08-4.666-2.636-.13-4.804 1.967-6.531 3.934a102.967 102.967 0 00-14.732 22.27" stroke="#2C2B2A" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p>
                                    Link
                                </p>
                            </div>
                            <div className='bg-white rounded-lg text-center shadow-sm p-2 hover:shadow-lg '>
                                <svg className="sc-hBEYId gsxGRD h-16 w-16 m-auto" viewBox="0 0 50 48">
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M17.28 5.004c4.244.36 5.667 5.983 8.918 8.747 2.886 2.455 7.26 3.106 8.99 6.484 1.84 3.591 1.744 8.014.381 11.813-1.338 3.733-4.736 6.043-7.719 8.644-3.31 2.886-6.192 7.521-10.57 7.3-4.387-.22-6.638-5.292-9.825-8.329C4.778 37.112.886 35.303.152 31.67c-.72-3.564 2.438-6.564 3.672-9.983 1.174-3.254 1.206-6.856 3.375-9.546 2.653-3.289 5.882-7.493 10.082-7.137z" fill="#0983C8"></path><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M16.552 8.24c2.938-2.67 7.777-.534 11.621.48 2.918.77 5.186 2.71 7.554 4.582 2.152 1.7 3.886 3.615 5.562 5.786 2.498 3.237 7.17 5.932 6.606 9.977-.55 3.94-5.899 4.88-9.02 7.34-3.108 2.45-5.255 6.779-9.208 7.03-3.961.25-7.373-2.894-10.077-5.807-2.287-2.465-3.03-5.812-3.752-9.094-.624-2.834-.22-5.59-.117-8.49.142-4.04-2.157-9.087.831-11.803z" fill="#E7E3DF"></path>
                                    <path d="M34.194 33.764c4.12-5.522 8.6-11.43 13.01-16.713-.021-1.128-.224-2.605-.33-3.728a135.921 135.921 0 00-11.037-1.506c-4.003-.38-7.45-.09-10.623 2.56a100.738 100.738 0 00-12.078 11.978c-.438.466-.8.996-1.076 1.573-.412.985-.306 2.102-.191 3.164.098.925 1.319 1.624 2.207 1.9a115.392 115.392 0 0017.098 3.915c.164.039.335.039.498 0 .218-.103.394-.276.502-.49.584-.908 1.378-1.791 2.02-2.653z" stroke="#323130" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.632 13.768A272.056 272.056 0 0031.46 32.156a1.469 1.469 0 01-1.464.57L14.468 28.99c-.504-.12-1.023-.242-1.534-.158-.51.084-1.014.427-1.121.932M31.03 36.606c-.105-1.037-.178-3.78-.178-3.78M30.16 16.423c1.434-.095 4.526.562 5.931.86M30.523 18.156c.834-.049 3.656.405 3.656.405M31.027 35.169c2.923-4.376 6.213-8.375 9.497-12.488M43.586 19.622a85.274 85.274 0 012.656-3.26" stroke="#323130" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.988 30.604c1.719-.572 3.584-.041 5.32.489.782.238 6.52 1.666 6.52 1.666M16.125 32.06c4.399 1.017 10.457 2.391 14.916 3.108" stroke="#323130" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p>
                                    Book
                                </p>
                            </div>
                            <div onClick={() => setShowModal(true)} className='bg-white rounded-lg text-center shadow-sm p-2 hover:shadow-lg '>
                                <svg className="sc-hBEYId gsxGRD h-16 w-16 m-auto" viewBox="0 0 50 48">
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M17.28 5.004c4.244.36 5.667 5.983 8.918 8.747 2.886 2.455 7.26 3.106 8.99 6.484 1.84 3.591 1.744 8.014.381 11.813-1.338 3.733-4.736 6.043-7.719 8.644-3.31 2.886-6.192 7.521-10.57 7.3-4.387-.22-6.638-5.292-9.825-8.329C4.778 37.112.886 35.303.152 31.67c-.72-3.564 2.438-6.564 3.672-9.983 1.174-3.254 1.206-6.856 3.375-9.546 2.653-3.289 5.882-7.493 10.082-7.137z" fill="#0983C8"></path><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M16.552 8.24c2.938-2.67 7.777-.534 11.621.48 2.918.77 5.186 2.71 7.554 4.582 2.152 1.7 3.886 3.615 5.562 5.786 2.498 3.237 7.17 5.932 6.606 9.977-.55 3.94-5.899 4.88-9.02 7.34-3.108 2.45-5.255 6.779-9.208 7.03-3.961.25-7.373-2.894-10.077-5.807-2.287-2.465-3.03-5.812-3.752-9.094-.624-2.834-.22-5.59-.117-8.49.142-4.04-2.157-9.087.831-11.803z" fill="#E7E3DF"></path>
                                    <path d="M34.194 33.764c4.12-5.522 8.6-11.43 13.01-16.713-.021-1.128-.224-2.605-.33-3.728a135.921 135.921 0 00-11.037-1.506c-4.003-.38-7.45-.09-10.623 2.56a100.738 100.738 0 00-12.078 11.978c-.438.466-.8.996-1.076 1.573-.412.985-.306 2.102-.191 3.164.098.925 1.319 1.624 2.207 1.9a115.392 115.392 0 0017.098 3.915c.164.039.335.039.498 0 .218-.103.394-.276.502-.49.584-.908 1.378-1.791 2.02-2.653z" stroke="#323130" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.632 13.768A272.056 272.056 0 0031.46 32.156a1.469 1.469 0 01-1.464.57L14.468 28.99c-.504-.12-1.023-.242-1.534-.158-.51.084-1.014.427-1.121.932M31.03 36.606c-.105-1.037-.178-3.78-.178-3.78M30.16 16.423c1.434-.095 4.526.562 5.931.86M30.523 18.156c.834-.049 3.656.405 3.656.405M31.027 35.169c2.923-4.376 6.213-8.375 9.497-12.488M43.586 19.622a85.274 85.274 0 012.656-3.26" stroke="#323130" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.988 30.604c1.719-.572 3.584-.041 5.32.489.782.238 6.52 1.666 6.52 1.666M16.125 32.06c4.399 1.017 10.457 2.391 14.916 3.108" stroke="#323130" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p>
                                    Yourself
                                </p>
                            </div>
                        </div>

                        {/* modal */}
                        {showModal ? (
                            <>
                                <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-full my-6 mx-4  md:mx-40 max-w-xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-whitetype outline-none focus:outline-none">
                                            {/*header*/}

                                            <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-bold">
                                                    Yourself
                                                </h3>

                                                <span className="block text-3xl font-bold" onClick={() => setShowModal(false)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </div>

                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <form  >
                                                    <label className="block mb-4 ">
                                                        <span className="mb-4 block text-sm font-medium text-slate-700">Thinking about</span>
                                                        {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                                                        <input type="text" placeholder='What do unicorns smell like?' className=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-xl font-bold 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900" />
                                                    </label>
                                                    <label className="block mb-4">
                                                        <span className="block text-sm font-medium text-slate-700 mb-4">While</span>

                                                        <div className='flex space-x-4 '>
                                                            <button className=" w-full py-3 bg-white   text-black rounded-3xl">
                                                                🚶 On a walk
                                                            </button>

                                                            <button className="w-full py-3  bg-white   text-black rounded-3xl">
                                                                🚿 In the shower
                                                            </button>
                                                            <svg className="  w-14" viewBox="0 0 24 24">
                                                                <path d="M20.955 3.044a3.564 3.564 0 010 5.04L9.034 20.007a2.24 2.24 0 01-.995.577l-5.096 1.39a.747.747 0 01-.917-.917l1.39-5.096c.102-.376.302-.72.577-.995L15.914 3.044a3.564 3.564 0 015.041 0zM14.95 6.123l-9.9 9.898a.747.747 0 00-.192.332l-1.045 3.834 3.834-1.045c.125-.034.24-.1.332-.193l9.898-9.899-2.927-2.927zM16.97 4.1l-.966.966 2.927 2.928.967-.966A2.07 2.07 0 1016.97 4.1z" fill="currentColor"></path>
                                                            </svg>
                                                        </div>

                                                    </label>
                                                    <button className="mt-2 px-6 py-2 bg-graytype font-bold text-white rounded-3xl">
                                                        Continue
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


                        {/* card */}


                        <div className='bg-white shadow-xl rounded-2xl mt-4 '>
                            <div className='p-4 border-b-2 border-slate-300' >
                                <input type="file" className="block m-auto text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                         "/>
                            </div>
                            <div className='p-4' >
                                <div className='flex justify-between'>
                                    <input type='text' className='font-bold w-full text-2xl border-0 focus:border-0 focus:ring-0 ' placeholder='Title of the idea' />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <textarea id="message" rows="6" className="mt-2  px-4 w-full text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Your message..."></textarea>
                                <div className='flex justify-between'>
                                    <p></p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </div>
                            </div>

                        </div>


                        <div className='flex bg-white mt-4 rounded-xl justify-center shadow-md hover:shadow-xl  px-4 py-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <p className='ml-2'>
                                Add Idea
                            </p>
                        </div>


                    </div>


                </div>
            </div>

        </div>
    )
}

export default AddSource