import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut, getSession, reg } from 'next-auth/react';
import { useSnackbar } from 'notistack';
import Link from 'next/link';

const Register = (props) => {
  const { setShowRegmodal } = props;

  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const schema = yup.object().shape({
    user_login: yup.string().required(),
    first_name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(2).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = async (data) => {
    registersubmit(data);
  };

  const registersubmit = async (data) => {
    const url = 'https://fwd.thenwg.xyz/api/create-user.php';

    const formData = new FormData();
    formData.append('user_login', data.user_login);
    formData.append('first_name', data.first_name);
    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
      var data = await fetch(url, {
        method: 'post',

        body: formData,
      });
      var res = await data.json();

      if (res.status == 'error') {
        enqueueSnackbar(res.message, {
          variant: 'error',
          autoHideDuration: 3000,
        });
      } else {
        signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        })
          .then((value) => {
            enqueueSnackbar('Successfully registered !', {
              variant: 'success',
              autoHideDuration: 3000,
            });
            setShowRegmodal(false);
          })
          .catch((error) => {
            enqueueSnackbar('something went wrong!', {
              variant: 'error',
              autoHideDuration: 3000,
            });
          });
      }
    } catch (e) {
      enqueueSnackbar('something went wrong!', {
        variant: 'error',
        autoHideDuration: 3000,
      });
    }

    // console.log('checkregister', res);
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full my-6 mx-4  md:mx-40 max-w-xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}

          <div className="flex  justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <span>
              {/* <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-fuchsia-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinecap="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                <p className="font-bold text-fuchsia-900">Back</p>
              </div> */}
              <h3 className="text-3xl font-bold">Create account</h3>
            </span>

            <span
              className="block text-3xl font-bold"
              onClick={() => setShowRegmodal(false)}
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
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <label className="block mb-4 ">
                <span className="block text-sm font-medium text-slate-700">
                  Username
                </span>
                {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                <input
                  type="text"
                  placeholder="Enter Username"
                  {...register('user_login')}
                  className=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                />
              </label>

              <label className="block mb-4 ">
                <span className="block text-sm font-medium text-slate-700">
                  Name
                </span>
                {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                <input
                  type="text"
                  placeholder="Enter Name"
                  {...register('first_name')}
                  className=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                />
              </label>

              <label className="block mb-4 ">
                <span className="block text-sm font-medium text-slate-700">
                  Email
                </span>
                {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                <input
                  type="email"
                  placeholder="Enter Email"
                  {...register('email')}
                  className=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                />
              </label>
              <label className="block mb-4">
                <div className="flex justify-between">
                  <span className="block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <span className="block text-sm font-medium text-slate-700">
                    Forget Password
                  </span>
                </div>
                {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                <input
                  type="password"
                  placeholder="Enter password"
                  {...register('password')}
                  className=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                />
              </label>

              <div className="mb-4  text-center">
                <p>By creating an account, you agree with our</p>
                <Link href="#">Terms of Service & Privacy Policy</Link>
              </div>

              <button
                className="w-full px-3 py-2 bg-gray-900 font-bold text-white rounded-3xl"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </div>
  );
};

export default Register;
