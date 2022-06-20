import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import { Dropdown } from 'flowbite-react';
import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useSession, getSession } from 'next-auth/react';

const Home = () => {
  const collection = [1, 2, 3, 4];
  const { data: session } = useSession();
  const token = session?.user?.token;
  //  const collection = [1, 2];

  const [postData, setPostData] = useState();

  const getPosts = async () => {
    const formData = new FormData();
    formData.append('token', token);
    // formData.append('post', 325);

    var response = await fetch('https://fwd.thenwg.xyz/api/get-posts.php', {
      method: 'post',
      body: formData,
    });
    var result = await response.json();

    if (result.status == 'success') {
      setPostData(result.posts);
    }
    console.log('checkpostallindex', postData);
  };

  useEffect(() => {
    getPosts();
  });

  return (
    <>
      <div className=" my-6  mx-4 md:mx-8 lg:mx-48">
        <div className="flex justify-between">
          <h3 className="font-bold">COLLECTIONS</h3>

          <div>
            <div className="flex">
              <p className="font-bold text-fuchsia-900">See All</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-fuchsia-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 my-4">
          {collection.map((img, index) => {
            return (
              <div
                key={index}
                className="max-w-sm bg-white rounded-xl hover:shadow-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <Link href="/">
                  <img
                    className="rounded-t-xl"
                    src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fpersuasive_storytelling.png&w=1920&q=75"
                    alt=""
                  />
                </Link>
                <div className="p-4">
                  <Link href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  leading-0">
                      Persuasive storytelling
                    </h5>
                  </Link>

                  <div className="flex justify-between">
                    <div>
                      <div className="flex">
                        <p className="font-bold text-fuchsia-900 text-sm">
                          See All
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-fuchsia-900 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-sm bg-slate-100 p-1 rounded-md shadow-md">
                      41
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DISCOVER NEW IDEAS */}
      <div className=" my-6  mx-4  md:mx-8 lg:mx-48">
        <h3 className="font-bold">DISCOVER NEW IDEAS</h3>
      </div>

      {postData &&
        postData.map((post, i) => {
          console.log('checkpostdata', post);
          const slug = `/posts/${post?.ID}`;
          return (
            <div className=" my-6  mx-4  md:mx-8 lg:mx-48">
              {/* grid */}

              <div
                key={i}
                className="grid md:grid-cols-2 sm:grid-cols-1   my-4"
              >
                <div className="  bg-white rounded-xl hover:shadow-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="rounded-t-xl h-44 w-full object-cover"
                    src={
                      post?.imageUrl !== ''
                        ? post?.imageUrl
                        : 'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg'
                    }
                    // src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd3t70bohx4vuj7.cloudfront.net%2F3tFFldErAyIHFYTzwQoeKfhTBxl9cf4aFGyPBVz_uMM%2Fresize%3Afill%3A900%3A0%2Fgravity%3Asm%2Fquality%3A90%2FaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mjg2MDUxMDUzNDUtNTM0NGVhMjBlMjY5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODA&w=1920&q=75"
                    alt=""
                  />

                  <div className="p-4">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  leading-0">
                      {post?.childPost?.post_title}
                    </h5>

                    {/* <div className="font-bold text-sm mb-2">
                      {post?.childPost?.post_content}
                    </div> */}

                    <div className="text-sm mb-2">
                      {post?.childPost?.post_content}
                    </div>

                    <div className="mt-4 flex justify-between   items-center">
                      <div className="flex items-center">
                        <svg
                          id="source-stash-button-1263-stash-dropdown-icon"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clipRule="evenodd"
                            d="M6.384 21.765s5.164-3.134 5.59-3.134c.426 0 5.612 3.127 5.612 3.127 1.214.618 2.414.007 2.414-1.463V6.249C20 3.432 18.048 2 14.986 2H9.014C5.91 2 4 3.496 4 6.426v13.869c0 1.47 1.2 2.081 2.384 1.47zm11.92-1.326c.078.036.136.05.174.055a.77.77 0 00.022-.2V6.25c0-1.033-.34-1.637-.807-2.018-.513-.42-1.385-.731-2.707-.731H9.014c-1.334 0-2.192.323-2.696.754-.467.4-.818 1.052-.818 2.172v13.869c0 .096.011.16.022.2a.583.583 0 00.14-.046l.004-.003.166-.1a215.86 215.86 0 012.432-1.444 73.483 73.483 0 011.944-1.102c.28-.151.545-.289.764-.392.108-.05.227-.103.342-.147l.008-.003a1.89 1.89 0 01.652-.127c.317 0 .59.103.65.127l.008.002c.115.043.234.096.342.147.22.102.485.24.766.39.568.305 1.273.706 1.952 1.1a186.394 186.394 0 012.442 1.44l.167.1.003.002z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <p>1k</p>
                      </div>
                      <div className="flex justify-between    items-center">
                        <div>8.83K(+1) reads</div>

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
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href={slug}>
                  <div className="my-10 bg-whitetype  md:rounded-r-xl  relative hover:shadow-2xl shadow-lg">
                    <div className="flex px-4 pb-4 absolute-div">
                      <svg class="sc-hBEYId hucIa w-5" viewBox="0 0 24 24">
                        <path
                          d="M18.25 4a.75.75 0 01.75.75v8.5a.75.75 0 01-1.5 0v-8.5a.75.75 0 01.75-.75zM4 18.25a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zM8.28 7.22a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 101.06-1.06l-6.5-6.5z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <p>{post?.yourSelfTag}</p>
                    </div>

                    <div className="px-6 py-4">
                      <div className="mt-3 flex  items-center ">
                        <img
                          className=" mr-2 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                          src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F1386670-1637023019.jpeg&w=1920&q=75"
                        />
                        <p>{`@${post?.post_author?.name} created 4 ideas`}</p>
                      </div>
                      <p className="mt-4">
                        {post?.post_content}
                        {/* The curious relationship between anxiety and control and
                      the different anxiety footing (and shoes) of those who
                      seek to always have control and those who never had it. */}
                      </p>

                      <div className="mt-4 flex  items-center  ">
                        <div className="p-1  mr-2 bg-white rounded-sm shadow-2xl">
                          <p className="text-xs font-bold">PSYCH...</p>
                          <img
                            className="inline-block h-12 w-12 ring-2 ring-white"
                            src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd3t70bohx4vuj7.cloudfront.net%2Fex0DgbgrXCsmwT_0dvNAMdzWMoPSdWH2Si9kg7mHA4A%2Fresize%3Afill%3A600%3A0%2Fgravity%3Asm%2Fquality%3A90%2FaHR0cHM6Ly9jZG4ucHN5Y2hvbG9neXRvZGF5LmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL3N0eWxlcy9hcnRpY2xlLWlubGluZS1oYWxmLWNhcHRpb24vcHVibGljL2ZpZWxkX2Jsb2dfZW50cnlfaW1hZ2VzLzIwMjItMDYvYW54aWV0eS5qcGc_aXRvaz1vMUNKSjVtLQ&w=1920&q=75"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold">{post?.post_title}</h3>
                          <div className="flex  items-center">
                            <p> psychologytoday.com </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between  items-center">
                        <div className="flex   items-center">
                          <svg
                            id="source-stash-button-1263-stash-dropdown-icon"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              clipRule="evenodd"
                              d="M6.384 21.765s5.164-3.134 5.59-3.134c.426 0 5.612 3.127 5.612 3.127 1.214.618 2.414.007 2.414-1.463V6.249C20 3.432 18.048 2 14.986 2H9.014C5.91 2 4 3.496 4 6.426v13.869c0 1.47 1.2 2.081 2.384 1.47zm11.92-1.326c.078.036.136.05.174.055a.77.77 0 00.022-.2V6.25c0-1.033-.34-1.637-.807-2.018-.513-.42-1.385-.731-2.707-.731H9.014c-1.334 0-2.192.323-2.696.754-.467.4-.818 1.052-.818 2.172v13.869c0 .096.011.16.022.2a.583.583 0 00.14-.046l.004-.003.166-.1a215.86 215.86 0 012.432-1.444 73.483 73.483 0 011.944-1.102c.28-.151.545-.289.764-.392.108-.05.227-.103.342-.147l.008-.003a1.89 1.89 0 01.652-.127c.317 0 .59.103.65.127l.008.002c.115.043.234.096.342.147.22.102.485.24.766.39.568.305 1.273.706 1.952 1.1a186.394 186.394 0 012.442 1.44l.167.1.003.002z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="text-sm font-bold ml-2">STASH ALL</p>
                        </div>
                        <div>
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
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex mt-4 items-center">
                        <div className="flex items-center">
                          <div class="flex -space-x-2 overflow-hidden mr-2">
                            <img
                              class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                              src="https://deepstash.com/assets/reactions/love.png"
                              alt=""
                            />
                            <img
                              class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                              src="https://deepstash.com/assets/reactions/deep.png"
                              alt=""
                            />
                          </div>
                          <p>2 Reactions</p>
                        </div>

                        <div className="flex items-center ml-4">
                          <svg
                            class="sc-hBEYId dKDQrr h-6 mr-2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 01-4.587-1.112l-3.826 1.067a1.25 1.25 0 01-1.54-1.54l1.068-3.823A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2zm0 1.5A8.5 8.5 0 003.5 12c0 1.47.373 2.883 1.073 4.137l.15.27-1.112 3.984 3.987-1.112.27.15A8.5 8.5 0 1012 3.5z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p>Comment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Home;
