import React from 'react'

const AddSource = () => {
    return (
        <div className=" mb-6  mx-4 md:mx-8 lg:mx-48">
            <div className="p-4 bg-white rounded-b-2xl flex items-center justify-between space-x-6">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-fuchsia-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    <p className='font-bold text-fuchsia-900'>
                        Back
                    </p>
                </div>
                <div className='flex bg-stone-500 text-white rounded-3xl px-4 py-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <p className='ml-2'>
                        Create
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AddSource