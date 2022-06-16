import React from 'react'

const PostList = () => {

    const collection = [1, 2]

    return (
        <div className=" mb-6  mx-4 md:mx-8 lg:mx-48 bg-whitetype p-4 rounded-2xl shadow-2xl">
            <div className="mt-3 flex space-x-4 items-center ">
                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Fkhalid_faez.png&w=1920&q=75" />

                <p>@khalid_faez created 4 ideas</p>
            </div>


            <div className="mt-4 flex space-x-4 items-center  ">
                <div className='p-2 bg-white rounded-sm shadow-2xl'>
                    <p className='text-sm font-bold'>LINKEDIN</p>
                    <img className="inline-block h-16 w-16  ring-2 ring-white"
                        src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd3t70bohx4vuj7.cloudfront.net%2F_KBV7wiU4qfAoOBTNxI-xt1ng46Vmw3KKvuUo85hlTU%2Fresize%3Afill%3A500%3A0%2Fgravity%3Asm%2FaHR0cHM6Ly9zdGF0aWMubGljZG4uY29tL3NjZHMvY29tbW9uL3UvaW1nL3BpYy9waWNfcHVsc2Vfc3RvY2tfYXJ0aWNsZV8xLmpwZw&w=1920&q=75" />
                </div>
                <div>
                    <h2 className='font-bold'>This Will Be The #1 Business Skill Of The Next 5 Years</h2>
                    <div className='flex space-x-2 items-center'>
                        <p> linkedin.com </p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-between  items-center">
                <div className='flex space-x-2 items-center'>
                    <svg id="source-stash-button-1263-stash-dropdown-icon" className="h-5 w-5" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clipRule="evenodd" d="M6.384 21.765s5.164-3.134 5.59-3.134c.426 0 5.612 3.127 5.612 3.127 1.214.618 2.414.007 2.414-1.463V6.249C20 3.432 18.048 2 14.986 2H9.014C5.91 2 4 3.496 4 6.426v13.869c0 1.47 1.2 2.081 2.384 1.47zm11.92-1.326c.078.036.136.05.174.055a.77.77 0 00.022-.2V6.25c0-1.033-.34-1.637-.807-2.018-.513-.42-1.385-.731-2.707-.731H9.014c-1.334 0-2.192.323-2.696.754-.467.4-.818 1.052-.818 2.172v13.869c0 .096.011.16.022.2a.583.583 0 00.14-.046l.004-.003.166-.1a215.86 215.86 0 012.432-1.444 73.483 73.483 0 011.944-1.102c.28-.151.545-.289.764-.392.108-.05.227-.103.342-.147l.008-.003a1.89 1.89 0 01.652-.127c.317 0 .59.103.65.127l.008.002c.115.043.234.096.342.147.22.102.485.24.766.39.568.305 1.273.706 1.952 1.1a186.394 186.394 0 012.442 1.44l.167.1.003.002z" fill="currentColor"></path>
                    </svg>
                    <p className='text-sm font-bold'>STASH ALL</p>
                </div>
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
                <div>
                    <div className="grid grid-cols-1 gap-6">

                        {collection.map((img, index) => {
                            return (
                                <div key={index} className="  bg-white rounded-xl hover:shadow-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-xl h-44 w-full object-cover" src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd3t70bohx4vuj7.cloudfront.net%2F_lo8ffPe9ghzN6Pxt7Abf6U-8HH7kigV7h82HzkwJhk%2Fresize%3Afill%3A900%3A0%2Fgravity%3Asm%2Fquality%3A90%2FaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTI5ODUxOTAtNjI2YWYyMDczNjhkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDc0JnE9ODA&w=1920&q=75" alt="" />
                                    </a>
                                    <div className="p-4">
                                        <a href="#">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  leading-0">Businesses Need To Tell Good Stories</h5>
                                        </a>

                                        <div className='font-bold text-sm mb-2'>
                                            Most CMOs think content is the future of marketing and that branded content is superior to PR, direct mail, and print advertising.
                                        </div>

                                        <div className='text-sm mb-2'>
                                            As the people get used to interacting with companies and most corporations start thinking of themselves as publishers, the defining characteristic among the successful ones will be the ability to not just spew content, but to craft compelling stories.
                                        </div>

                                        <div className="mt-4 flex justify-between   items-center">
                                            <div className='flex  space-x-2 items-center'>
                                                <svg id="source-stash-button-1263-stash-dropdown-icon" className="h-5 w-5" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" clipRule="evenodd" d="M6.384 21.765s5.164-3.134 5.59-3.134c.426 0 5.612 3.127 5.612 3.127 1.214.618 2.414.007 2.414-1.463V6.249C20 3.432 18.048 2 14.986 2H9.014C5.91 2 4 3.496 4 6.426v13.869c0 1.47 1.2 2.081 2.384 1.47zm11.92-1.326c.078.036.136.05.174.055a.77.77 0 00.022-.2V6.25c0-1.033-.34-1.637-.807-2.018-.513-.42-1.385-.731-2.707-.731H9.014c-1.334 0-2.192.323-2.696.754-.467.4-.818 1.052-.818 2.172v13.869c0 .096.011.16.022.2a.583.583 0 00.14-.046l.004-.003.166-.1a215.86 215.86 0 012.432-1.444 73.483 73.483 0 011.944-1.102c.28-.151.545-.289.764-.392.108-.05.227-.103.342-.147l.008-.003a1.89 1.89 0 01.652-.127c.317 0 .59.103.65.127l.008.002c.115.043.234.096.342.147.22.102.485.24.766.39.568.305 1.273.706 1.952 1.1a186.394 186.394 0 012.442 1.44l.167.1.003.002z" fill="currentColor"></path>
                                                </svg>
                                                <p  >1k</p>
                                            </div>
                                            <div className='flex justify-between space-x-2  items-center' >
                                                <div>
                                                    8.83K(+1) reads
                                                </div>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='sm:pt-0 md:pt-10'>
                    <div className="grid grid-cols-1 gap-6">

                        {collection.map((img, index) => {
                            return (
                                <div key={index} className="  bg-white rounded-xl hover:shadow-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-xl h-44 w-full object-cover" src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd3t70bohx4vuj7.cloudfront.net%2F3tFFldErAyIHFYTzwQoeKfhTBxl9cf4aFGyPBVz_uMM%2Fresize%3Afill%3A900%3A0%2Fgravity%3Asm%2Fquality%3A90%2FaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mjg2MDUxMDUzNDUtNTM0NGVhMjBlMjY5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODA&w=1920&q=75" alt="" />
                                    </a>
                                    <div className="p-4">
                                        <a href="#">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  leading-0">The Power Of Storytelling</h5>
                                        </a>

                                        <div className='font-bold text-sm mb-2'>
                                            Stories makes us think and feel and are an essential drivers of change for humans.
                                        </div>

                                        <div className='text-sm mb-2'>
                                            Although it can be hard to tell a good story, in the modern world, storytelling is becoming essential. As we spend increasing amounts of time consuming content, businesses and individuals who master storytelling have more opportunities to stand out, spread messages, and make change through storytelling.
                                        </div>

                                        <div className="mt-4 flex justify-between   items-center">
                                            <div className='flex  space-x-2 items-center'>
                                                <svg id="source-stash-button-1263-stash-dropdown-icon" className="h-5 w-5" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.384 21.765s5.164-3.134 5.59-3.134c.426 0 5.612 3.127 5.612 3.127 1.214.618 2.414.007 2.414-1.463V6.249C20 3.432 18.048 2 14.986 2H9.014C5.91 2 4 3.496 4 6.426v13.869c0 1.47 1.2 2.081 2.384 1.47zm11.92-1.326c.078.036.136.05.174.055a.77.77 0 00.022-.2V6.25c0-1.033-.34-1.637-.807-2.018-.513-.42-1.385-.731-2.707-.731H9.014c-1.334 0-2.192.323-2.696.754-.467.4-.818 1.052-.818 2.172v13.869c0 .096.011.16.022.2a.583.583 0 00.14-.046l.004-.003.166-.1a215.86 215.86 0 012.432-1.444 73.483 73.483 0 011.944-1.102c.28-.151.545-.289.764-.392.108-.05.227-.103.342-.147l.008-.003a1.89 1.89 0 01.652-.127c.317 0 .59.103.65.127l.008.002c.115.043.234.096.342.147.22.102.485.24.766.39.568.305 1.273.706 1.952 1.1a186.394 186.394 0 012.442 1.44l.167.1.003.002z" fill="currentColor"></path>
                                                </svg>
                                                <p>1k</p>
                                            </div>
                                            <div className='flex justify-between space-x-2 items-center' >
                                                <div>
                                                    8.83K(+1) reads
                                                </div>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PostList