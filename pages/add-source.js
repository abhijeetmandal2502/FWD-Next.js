import React, { useEffect, useState } from 'react';
import { useSession, getSession } from 'next-auth/react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

const AddSource = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const token = session?.user?.token;

  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [postCount, setPostCount] = useState([0]);
  const [removeIndex, setRemoveIndex] = useState([]);
  const [removeImageIndex, setRemoveImageIndex] = useState([]);
  const [parentPostShow, setparentPostShow] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showPreviewModal, setShowPreviewModal] = React.useState(false);

  const addPost = (index) => {
    if (index > 0) {
      setPostCount([...postCount, index]);
    }
  };

  const removePost = (index) => {
    // console.log('checkpostcount', index);

    setRemoveIndex([...removeIndex, index]);
    setRemoveImageIndex([...removeImageIndex, index]);
  };

  const [postImage, setPostImage] = useState([]);

  // for parent post

  const [parentTitle, setparentTitle] = useState('');
  const [parentContent, setParentContent] = useState('');
  const [parentImage, setParentImage] = useState('');
  const [parentCategory, setParentCategory] = useState({
    name: '',
    content: '',
  });

  // end

  const onInputChanged = (e) => {
    const files = e.currentTarget.files[0];
    setPostImage([...postImage, files]);
    // console.log('setimage', postImage);
  };

  const onSubmitHandler = async (data) => {
    if (parentTitle == '' && parentCategory.name == '' && parentContent == '') {
      enqueueSnackbar(
        'Almost ready to publish Before you publish, let others know where these ideas came from: a link, a book or yourself.',
        {
          variant: 'warning',
          autoHideDuration: 3000,
        },
      );
    } else if (parentContent == '') {
      setShowPreviewModal(true);
    } else {
      const url = 'https://fwd.thenwg.xyz/api/create-post.php';
      console.log('onsubmit call');

      const tempTitle = data.title;
      const tempContent = data.content;
      const tempCategories = parentCategory.content;
      const title = [];
      const content = [];
      const image = [];
      const categories = [];
      const isParent = [];

      if (
        parentTitle !== '' &&
        parentCategory !== '' &&
        parentContent !== '' &&
        parentCategory !== ''
      ) {
        title.unshift(parentTitle);
        content.unshift(parentContent);
        isParent.unshift(true);
        image.unshift('https://bit.ly/dan-abramov');
      }

      for (var i = 0; i < tempTitle.length; i++) {
        if (!removeIndex.includes(i)) {
          title.push(tempTitle[i]);
          content.push(tempContent[i]);
          categories.push('');
        }
        if (!removeImageIndex.includes(i)) {
          image.push(postImage[i]);
        } else {
        }
      }
      console.log('honey 1', title);
      const formData = new FormData();

      formData.append('token', token);
      formData.append(`yourSelfTag`, parentCategory.content);

      // end
      console.log('checkpostcreate', categories);

      for (var i = 0; i < title.length; i++) {
        formData.append(`title[${i}]`, title[i]);
        formData.append(`content[${i}]`, content[i]);
        formData.append(`isParent[${i}]`, i == 0 ? 'yes' : 'no');
        formData.append(`featureImage[${i}]`, image[i]);
      }

      await fetch(url, {
        method: 'post',

        body: formData,
      })
        .then((response) => {
          var result = response.json();
          enqueueSnackbar('successfully created! ', {
            variant: 'success',
            autoHideDuration: 3000,
          });

          router.reload('/add-source');
          console.log('checkpost 2', result);
        })
        .catch((error) => {
          enqueueSnackbar('something went wrong!', {
            variant: 'error',
            autoHideDuration: 3000,
          });
          console.log('checkpost 3', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className=" mb-6  mx-4 md:mx-8 lg:mx-48">
        <div className="p-4 bg-red-50 shadow-2xl rounded-b-2xl flex items-center justify-between space-x-6">
          <Link href="/">
            <div className="flex">
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
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              <p className="font-bold text-fuchsia-900">Back</p>
            </div>
          </Link>

          <button
            className={`flex ${
              parentContent == '' ? 'bg-graytype' : 'bg-gray-900'
            } text-white rounded-3xl px-4 py-1 items-center`}
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="ml-2">
              {parentContent == '' ? `Publish` : 'Ready to Publish'}
            </p>
          </button>
        </div>

        <div className="mt-6 grid md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          <div>
            {/* card */}
            {postCount.map((item, index) => {
              return (
                !removeIndex.includes(index) && (
                  <div
                    className="bg-white shadow-xl rounded-2xl  my-3"
                    key={index}
                  >
                    {postImage[index] == undefined &&
                    !removeImageIndex.includes(postImage[index]) ? (
                      <div className="p-4 border-b-2 border-slate-300">
                        <input
                          type="file"
                          onChange={onInputChanged}
                          className="block m-auto text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                         "
                        />
                      </div>
                    ) : (
                      <div className="flex flex-wrap justify-center">
                        <img
                          // rows="6"
                          // src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                          src={URL.createObjectURL(postImage[index])}
                          className=" mb-3 mt-1 rounded-md px-10 max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
                          alt=""
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex justify-between">
                        <input
                          type="text"
                          className="font-bold w-full text-2xl border-0 focus:border-0 focus:ring-0 "
                          placeholder="Title of the idea"
                          {...register(`title[${index}]`, {
                            required: true,
                          })}
                        />
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
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        rows="6"
                        className="mt-2  px-4 w-full text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Your message..."
                        {...register(`content[${index}]`, {
                          required: true,
                        })}
                      ></textarea>
                      <div
                        className="flex justify-between"
                        onClick={() => {
                          console.log(
                            'removeindexcheck',
                            postCount.length - removeIndex.length,
                          );
                          if (postCount.length - removeIndex.length > 1) {
                            removePost(index);
                          }
                        }}
                      >
                        <p></p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 "
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
                )
              );
            })}
          </div>

          <div>
            <div className="">
              {/* source or parent post */}
              {!parentPostShow ? (
                <>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold">Source</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 "
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
                  <div className="mt-6 grid md:grid-cols-3   gap-4">
                    <div className="bg-white rounded-lg text-center shadow-sm p-2 hover:shadow-lg ">
                      <svg
                        className="sc-hBEYId gsxGRD h-16 w-16 m-auto"
                        viewBox="0 0 61 49"
                      >
                        <path
                          opacity="0.3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.117 9.414c5.387-.329 10.436-6.197 15.322-3.879C42.211 7.8 42.1 14.7 43.86 19.728c1.817 5.196 5.852 10.427 4.008 15.615-1.84 5.178-8.086 6.875-12.908 9.419-4.086 2.154-8.268 4.72-12.842 4.16-4.35-.533-7.201-4.472-10.764-7.053-3.597-2.606-8.396-4.008-10.168-8.11-1.827-4.232-.322-9.023.843-13.488C3.262 15.539 3.815 9.63 8.081 7.325c4.276-2.31 9.197 2.384 14.036 2.089z"
                          fill="#0A8976"
                        ></path>
                        <path
                          opacity="0.3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.901 36.163c3.618-4.737 7.622-10.294 7.426-15.836-.196-5.513-4.392-9.026-8.396-11.533-3.298-2.064-7.715-.723-11.728-1.063-3.776-.32-7.153-2.012-11.066-.87-4.765 1.392-9.67 3.644-13.207 7.956-3.982 4.853-7.585 11.143-7.233 16.956.348 5.748 4.977 9 8.983 11.94 3.287 2.414 7.407 2.904 11.62 3.188 3.963.266 7.946.225 11.957-1.6 4.372-1.989 8.467-4.977 11.645-9.138z"
                          fill="#E7E3DF"
                        ></path>
                        <path
                          d="M28.73 30.984l4.722-8.086c1.266-2.16 2.56-4.43 2.683-6.933.122-2.502-1.37-5.268-3.836-5.693-3.018-.527-5.395 2.42-7.028 5.013l-9.478 15.034c-.957 1.519-1.968 3.148-1.861 4.958.114 2.424 2.337 4.403 4.721 4.76 2.385.359 4.844-.648 6.732-2.171 1.889-1.523 3.321-3.541 4.722-5.509 4.328-6.083 8.715-12.3 10.95-19.421.74-2.361 1.232-4.883.61-7.264-.622-2.38-2.624-4.544-5.08-4.666-2.636-.13-4.804 1.967-6.531 3.934a102.967 102.967 0 00-14.732 22.27"
                          stroke="#2C2B2A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p>Link</p>
                    </div>
                    <div className="bg-white rounded-lg text-center shadow-sm p-2 hover:shadow-lg ">
                      <svg
                        className="sc-hBEYId gsxGRD h-16 w-16 m-auto"
                        viewBox="0 0 50 48"
                      >
                        <path
                          opacity="0.3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.28 5.004c4.244.36 5.667 5.983 8.918 8.747 2.886 2.455 7.26 3.106 8.99 6.484 1.84 3.591 1.744 8.014.381 11.813-1.338 3.733-4.736 6.043-7.719 8.644-3.31 2.886-6.192 7.521-10.57 7.3-4.387-.22-6.638-5.292-9.825-8.329C4.778 37.112.886 35.303.152 31.67c-.72-3.564 2.438-6.564 3.672-9.983 1.174-3.254 1.206-6.856 3.375-9.546 2.653-3.289 5.882-7.493 10.082-7.137z"
                          fill="#0983C8"
                        ></path>
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.552 8.24c2.938-2.67 7.777-.534 11.621.48 2.918.77 5.186 2.71 7.554 4.582 2.152 1.7 3.886 3.615 5.562 5.786 2.498 3.237 7.17 5.932 6.606 9.977-.55 3.94-5.899 4.88-9.02 7.34-3.108 2.45-5.255 6.779-9.208 7.03-3.961.25-7.373-2.894-10.077-5.807-2.287-2.465-3.03-5.812-3.752-9.094-.624-2.834-.22-5.59-.117-8.49.142-4.04-2.157-9.087.831-11.803z"
                          fill="#E7E3DF"
                        ></path>
                        <path
                          d="M34.194 33.764c4.12-5.522 8.6-11.43 13.01-16.713-.021-1.128-.224-2.605-.33-3.728a135.921 135.921 0 00-11.037-1.506c-4.003-.38-7.45-.09-10.623 2.56a100.738 100.738 0 00-12.078 11.978c-.438.466-.8.996-1.076 1.573-.412.985-.306 2.102-.191 3.164.098.925 1.319 1.624 2.207 1.9a115.392 115.392 0 0017.098 3.915c.164.039.335.039.498 0 .218-.103.394-.276.502-.49.584-.908 1.378-1.791 2.02-2.653z"
                          stroke="#323130"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M46.632 13.768A272.056 272.056 0 0031.46 32.156a1.469 1.469 0 01-1.464.57L14.468 28.99c-.504-.12-1.023-.242-1.534-.158-.51.084-1.014.427-1.121.932M31.03 36.606c-.105-1.037-.178-3.78-.178-3.78M30.16 16.423c1.434-.095 4.526.562 5.931.86M30.523 18.156c.834-.049 3.656.405 3.656.405M31.027 35.169c2.923-4.376 6.213-8.375 9.497-12.488M43.586 19.622a85.274 85.274 0 012.656-3.26"
                          stroke="#323130"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12.988 30.604c1.719-.572 3.584-.041 5.32.489.782.238 6.52 1.666 6.52 1.666M16.125 32.06c4.399 1.017 10.457 2.391 14.916 3.108"
                          stroke="#323130"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p>Book</p>
                    </div>
                    <div
                      onClick={() => setShowModal(true)}
                      className="bg-white rounded-lg text-center shadow-sm p-2 hover:shadow-lg "
                    >
                      <svg
                        className="sc-hBEYId gsxGRD h-16 w-16 m-auto"
                        viewBox="0 0 50 48"
                      >
                        <path
                          opacity="0.3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.28 5.004c4.244.36 5.667 5.983 8.918 8.747 2.886 2.455 7.26 3.106 8.99 6.484 1.84 3.591 1.744 8.014.381 11.813-1.338 3.733-4.736 6.043-7.719 8.644-3.31 2.886-6.192 7.521-10.57 7.3-4.387-.22-6.638-5.292-9.825-8.329C4.778 37.112.886 35.303.152 31.67c-.72-3.564 2.438-6.564 3.672-9.983 1.174-3.254 1.206-6.856 3.375-9.546 2.653-3.289 5.882-7.493 10.082-7.137z"
                          fill="#0983C8"
                        ></path>
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.552 8.24c2.938-2.67 7.777-.534 11.621.48 2.918.77 5.186 2.71 7.554 4.582 2.152 1.7 3.886 3.615 5.562 5.786 2.498 3.237 7.17 5.932 6.606 9.977-.55 3.94-5.899 4.88-9.02 7.34-3.108 2.45-5.255 6.779-9.208 7.03-3.961.25-7.373-2.894-10.077-5.807-2.287-2.465-3.03-5.812-3.752-9.094-.624-2.834-.22-5.59-.117-8.49.142-4.04-2.157-9.087.831-11.803z"
                          fill="#E7E3DF"
                        ></path>
                        <path
                          d="M34.194 33.764c4.12-5.522 8.6-11.43 13.01-16.713-.021-1.128-.224-2.605-.33-3.728a135.921 135.921 0 00-11.037-1.506c-4.003-.38-7.45-.09-10.623 2.56a100.738 100.738 0 00-12.078 11.978c-.438.466-.8.996-1.076 1.573-.412.985-.306 2.102-.191 3.164.098.925 1.319 1.624 2.207 1.9a115.392 115.392 0 0017.098 3.915c.164.039.335.039.498 0 .218-.103.394-.276.502-.49.584-.908 1.378-1.791 2.02-2.653z"
                          stroke="#323130"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M46.632 13.768A272.056 272.056 0 0031.46 32.156a1.469 1.469 0 01-1.464.57L14.468 28.99c-.504-.12-1.023-.242-1.534-.158-.51.084-1.014.427-1.121.932M31.03 36.606c-.105-1.037-.178-3.78-.178-3.78M30.16 16.423c1.434-.095 4.526.562 5.931.86M30.523 18.156c.834-.049 3.656.405 3.656.405M31.027 35.169c2.923-4.376 6.213-8.375 9.497-12.488M43.586 19.622a85.274 85.274 0 012.656-3.26"
                          stroke="#323130"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12.988 30.604c1.719-.572 3.584-.041 5.32.489.782.238 6.52 1.666 6.52 1.666M16.125 32.06c4.399 1.017 10.457 2.391 14.916 3.108"
                          stroke="#323130"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p>Yourself</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex my-6 py-5 px-5 bg-gray-200">
                  <svg className="sc-hBEYId gsxGRD w-16 " viewBox="0 0 61 49">
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.117 9.414c5.387-.329 10.436-6.197 15.322-3.879C42.211 7.8 42.1 14.7 43.86 19.728c1.817 5.196 5.852 10.427 4.008 15.615-1.84 5.178-8.086 6.875-12.908 9.419-4.086 2.154-8.268 4.72-12.842 4.16-4.35-.533-7.201-4.472-10.764-7.053-3.597-2.606-8.396-4.008-10.168-8.11-1.827-4.232-.322-9.023.843-13.488C3.262 15.539 3.815 9.63 8.081 7.325c4.276-2.31 9.197 2.384 14.036 2.089z"
                      fill="#0A8976"
                    ></path>
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M52.901 36.163c3.618-4.737 7.622-10.294 7.426-15.836-.196-5.513-4.392-9.026-8.396-11.533-3.298-2.064-7.715-.723-11.728-1.063-3.776-.32-7.153-2.012-11.066-.87-4.765 1.392-9.67 3.644-13.207 7.956-3.982 4.853-7.585 11.143-7.233 16.956.348 5.748 4.977 9 8.983 11.94 3.287 2.414 7.407 2.904 11.62 3.188 3.963.266 7.946.225 11.957-1.6 4.372-1.989 8.467-4.977 11.645-9.138z"
                      fill="#E7E3DF"
                    ></path>
                    <path
                      d="M28.73 30.984l4.722-8.086c1.266-2.16 2.56-4.43 2.683-6.933.122-2.502-1.37-5.268-3.836-5.693-3.018-.527-5.395 2.42-7.028 5.013l-9.478 15.034c-.957 1.519-1.968 3.148-1.861 4.958.114 2.424 2.337 4.403 4.721 4.76 2.385.359 4.844-.648 6.732-2.171 1.889-1.523 3.321-3.541 4.722-5.509 4.328-6.083 8.715-12.3 10.95-19.421.74-2.361 1.232-4.883.61-7.264-.622-2.38-2.624-4.544-5.08-4.666-2.636-.13-4.804 1.967-6.531 3.934a102.967 102.967 0 00-14.732 22.27"
                      stroke="#2C2B2A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <div>
                    <div
                      type="text"
                      className=" font-bold p-1 bg-transparent
                      text-lg border-0 rounded-md focus:border-0
                      focus:ring-0 "
                    >
                      {parentTitle}
                    </div>
                    <p className="mt-2">{parentCategory.content}</p>
                  </div>
                </div>
              )}
              {/* modal */}
              {showModal ? (
                <>
                  <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-4  md:mx-40 max-w-xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-whitetype outline-none focus:outline-none">
                        {/*header*/}

                        <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-bold">Yourself</h3>

                          <span
                            className="block text-3xl font-bold"
                            onClick={() => setShowModal(false)}
                          >
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
                          </span>
                        </div>

                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <form>
                            <label className="block mb-4 ">
                              <span className="mb-4 block text-sm font-medium text-slate-700">
                                Thinking about
                              </span>
                              {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                              <input
                                type="text"
                                placeholder="What do unicorns smell like?"
                                onChange={(e) => {
                                  setparentTitle(e.currentTarget.value);
                                }}
                                className=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-xl font-bold 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                              />
                            </label>
                            <label className="block mb-4">
                              <span className="block text-sm font-medium text-slate-700 mb-4">
                                While
                              </span>

                              <div className="flex space-x-4 ">
                                <div
                                  className={`w-full py-3 items-center self-center px-10 text-center ${
                                    parentCategory.name !== 'walk'
                                      ? 'bg-white'
                                      : 'bg-gray-200'
                                  } text-black rounded-3xl`}
                                  onClick={() => {
                                    setParentCategory({
                                      name: 'walk',
                                      content: '🚶 On a walk',
                                    });
                                    console.log('checkcolor', parentCategory);
                                  }}
                                >
                                  🚶 On a walk
                                </div>

                                <div
                                  className={`w-full py-3 ${
                                    parentCategory.name !== 'shower'
                                      ? 'bg-white'
                                      : 'bg-gray-200'
                                  }  text-black rounded-3xl px-10 text-center`}
                                  onClick={() => {
                                    setParentCategory({
                                      name: 'shower',
                                      content: '🚿 In the shower',
                                    });
                                    console.log('checkcolor', parentCategory);
                                  }}
                                >
                                  🚿 In the shower
                                </div>
                                <svg className="  w-14" viewBox="0 0 24 24">
                                  <path
                                    d="M20.955 3.044a3.564 3.564 0 010 5.04L9.034 20.007a2.24 2.24 0 01-.995.577l-5.096 1.39a.747.747 0 01-.917-.917l1.39-5.096c.102-.376.302-.72.577-.995L15.914 3.044a3.564 3.564 0 015.041 0zM14.95 6.123l-9.9 9.898a.747.747 0 00-.192.332l-1.045 3.834 3.834-1.045c.125-.034.24-.1.332-.193l9.898-9.899-2.927-2.927zM16.97 4.1l-.966.966 2.927 2.928.967-.966A2.07 2.07 0 1016.97 4.1z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </label>
                            <div
                              className={`mt-5 px-6 py-2 w-1/3 self-center mx-auto text-center ${
                                parentTitle !== '' && parentCategory.name != ''
                                  ? 'bg-gray-900'
                                  : 'bg-graytype'
                              } font-bold text-white rounded-3xl `}
                              onClick={() => {
                                if (
                                  parentTitle !== '' &&
                                  parentCategory.name != ''
                                ) {
                                  setparentPostShow(true);
                                  setShowModal(false);
                                }
                              }}
                            >
                              Continue
                            </div>
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
              ) : null}

              {showPreviewModal ? (
                <>
                  <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-4  md:mx-40 max-w-2xl">
                      {/*content*/}
                      <div>
                        <div className="border-0 rounded-t-lg shadow-lg relative flex flex-col w-full bg-whitetype outline-none focus:outline-none">
                          {/*header*/}

                          <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-bold">Preview</h3>

                            <span
                              className="block text-3xl font-bold"
                              onClick={() => setShowPreviewModal(false)}
                            >
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
                            </span>
                          </div>

                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div className="flex space-x-2">
                              <img
                                className="w-8 rounded-full"
                                src="https://deepstash.com/_next/image?url=https%3A%2F%2Fstatic.deepstash.com%2Fprofile%2F1.png&w=1920&q=75"
                              />
                              <p>@trishamistri</p>
                            </div>

                            <form>
                              <textarea
                                id="message"
                                rows="4"
                                className="mt-4  px-4 w-full rounded-md text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="Your message..."
                                onChange={(e) => {
                                  setParentContent(e.currentTarget.value);
                                }}
                              ></textarea>

                              <div className="flex my-6">
                                <svg
                                  className="sc-hBEYId fIZqVx w-24"
                                  viewBox="0 0 168 96"
                                >
                                  <path
                                    d="M46.33 22.214c2.21.23 4.378.763 6.442 1.585 2.037.815 3.85 1.988 5.693 3.158 3.724 2.363 7.468 4.707 11.388 6.741 3.972 2.055 8.147 3.837 12.543 4.75 4.236.88 8.66.867 12.78-.55a22.536 22.536 0 0 0 6.162-3.302c1.544-1.156 3-2.44 4.09-4.039 1.935-2.842 3.113-6.212 3.951-9.52.436-1.711.769-3.447.997-5.197a21.827 21.827 0 0 0-.944-.015c-5.285.018-10.446 1.43-15.635 2.224-2.501.383-5.058.587-7.592.405-2.432-.18-4.793-.858-7.062-1.74-4.64-1.808-8.887-4.484-13.58-6.185-4.803-1.74-9.96-2.09-14.873-.555a22.272 22.272 0 0 0-11.95 8.963 22.598 22.598 0 0 0-2.218 4.308 23.52 23.52 0 0 1 9.809-1.03Z"
                                    fill="#FEBE10"
                                    stroke="#FDBE14"
                                    strokeWidth="0.735"
                                    strokeMiterlimit="10"
                                  ></path>
                                  <path
                                    d="M64.233 61.746c.456-2.39 2.62-4.086 4.586-5.284 2.842-1.723 6.032-2.862 9.205-3.816 3.299-1 6.662-1.782 10.043-2.454 2.614-.521 5.243-.963 7.874-1.39 6.956-1.133 13.875-2.711 20.941-2.964 4.314-.154 9.129.251 12.947-2.175a10.237 10.237 0 0 0 2.671-2.495c.02-3.146-.614-6.328-1.647-9.207-1.564-4.355-4.147-8.467-7.755-11.421-3.607-2.955-7.944-4.496-12.579-4.688a43.178 43.178 0 0 1-1.503 7.058c-.917 3.041-2.144 6.18-4.162 8.675-1.325 1.63-3.09 2.987-4.839 4.118a21.911 21.911 0 0 1-6.032 2.726c-4.05 1.117-8.32.942-12.387 0-4.302-1-8.386-2.789-12.282-4.844-3.895-2.055-7.65-4.42-11.375-6.787-1.827-1.16-3.636-2.266-5.67-3.034a24.126 24.126 0 0 0-6.843-1.478 23.23 23.23 0 0 0-8.965 1.14 22.352 22.352 0 0 0-1.395 9.659c.416 5.078 2.448 9.923 5.484 13.995 5.885 7.903 14.644 12.306 23.61 15.824a4.64 4.64 0 0 1 .073-1.158Z"
                                    fill="#F9A822"
                                    stroke="#F9A821"
                                    strokeWidth="0.735"
                                    strokeMiterlimit="10"
                                  ></path>
                                  <path
                                    d="M128.756 44.413c-1.743.82-3.678 1.175-5.579 1.358-2.884.274-5.786.126-8.68.342-3.464.258-6.896.797-10.314 1.393-3.176.553-6.35 1.118-9.53 1.647-2.59.428-5.173.88-7.743 1.416a95.835 95.835 0 0 0-10.206 2.642c-3.072 1.001-6.203 2.192-8.86 4.062-1.867 1.32-3.718 3.229-3.54 5.683.894.35 1.788.692 2.682 1.027 4.883 1.826 9.9 3.734 13.967 7.087 4.135 3.41 7.335 7.808 11.555 11.125 4.003 3.147 9.13 5.651 14.355 4.533 4.462-.956 8.596-4.782 8.812-9.5.224-4.925-3.99-8.135-6.956-11.436-1.561-1.735-2.913-3.89-3.016-6.282-.062-1.4.34-2.888 1.239-3.964a4.96 4.96 0 0 1 .58-.413c.223-.067.503-.147.716-.199a6.941 6.941 0 0 1 1.148-.027h.378c.099.03.2.054.303.071.482.097.961.22 1.431.363.256.076.509.158.761.244 2.548 1.693 5.813 2.295 8.861 1.679 4.76-.962 8.398-4.887 10.122-9.247a18.845 18.845 0 0 0 1.249-6.648 10.156 10.156 0 0 1-3.735 3.044Z"
                                    fill="#F47C21"
                                    stroke="#F47C20"
                                    strokeWidth="0.735"
                                    strokeMiterlimit="10"
                                  ></path>
                                  <path
                                    d="M98.808 68.78h-.82M105.479 79.025l.548-.818M58.087 50.666l-.274-.27M65.143 22.692l.546-.546M83.883 27.438l-.82.273M95.164 43.26l-.82-.55M94.753 54.559l.274-.545M81.792 67.825l-.273-.274M121.307 50.804v-.273M115.635 20.512l.821-.819M114.401 37.34l-.307-.16M98.322 25.096a.962.962 0 0 0-.802.138M60.228 38.326l-.798-.16M41.158 31.75l-.307-.16M76.312 44.766l-.308.306"
                                    stroke="#000"
                                    strokeWidth="1.47"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <div>
                                  <h4 className="font-bold">{parentTitle}</h4>
                                  <p className="">{parentCategory.content}</p>
                                </div>
                              </div>

                              <div
                                className={`mt-2 px-6 py-2 ${
                                  parentContent == ''
                                    ? 'bg-graytype'
                                    : 'bg-gray-900'
                                } font-bold text-white rounded-3xl w-1/3 text-center mx-auto`}
                                onClick={() => {
                                  if (parentContent !== '') {
                                    setShowPreviewModal(false);
                                  }
                                }}
                              >
                                Continue
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="border-0 p-5 rounded-b-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          <div className="flex justify-between">
                            <p className="font-bold">0/5 Topics</p>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}

              {/* card */}

              {/* <div className="bg-white shadow-xl rounded-2xl mt-4 ">
                <div className="p-4 border-b-2 border-slate-300">
                  <input
                    type="file"
                    className="block m-auto text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                         "
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <input
                      type="text"
                      className="font-bold w-full text-2xl border-0 focus:border-0 focus:ring-0 "
                      placeholder="Title of the idea"
                    />
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    rows="6"
                    className="mt-2  px-4 w-full text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Your message..."
                  ></textarea>
                  <div className="flex justify-between">
                    <p></p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 "
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
              </div> */}

              <div
                className="flex bg-white mt-20 rounded-xl justify-center shadow-md hover:shadow-xl  px-4 py-2"
                onClick={() => {
                  addPost(postCount.length);
                }}
              >
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
                <p className="ml-2">Add Idea</p>
              </div>
            </div>
          </div>

          {/* link, add book  */}
        </div>
      </div>
    </form>
  );
};

export default AddSource;
