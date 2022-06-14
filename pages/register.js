import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut, getSession, reg } from 'next-auth/react';
import { useSnackbar } from 'notistack';

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
    const url = 'https://fwd.thenwg.xyz/?rest_route=/auth/v1/users';
    // `${process.env.apiUrl}/auth/register`;
    console.log('checkregister', '1');
    await fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        user_login: data.user_login,
        first_name: data.first_name,
        email: data.email,
        password: data.password,
        AUTH_KEY: process.env.authKey,
      }),
    })
      .then((response) => {
        var result = response.json();
        console.log('checkregister  2', result);

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
            console.log('checkregister  5', value);

            router.push('/');
          })
          .catch((error) => {
            enqueueSnackbar('failed to registered', {
              variant: 'error',
              autoHideDuration: 3000,
            });
            console.log('checkregister  6', error);
          });
      })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
          autoHideDuration: 3000,
        });
        console.log('checkregister  9', 'something went wrong!');
      });
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full my-6 mx-4  md:mx-40 max-w-xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}

          <div className="flex  justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <span>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-fuchsia-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                <p className="font-bold text-fuchsia-900">Back</p>
              </div>
              <h3 className="text-3xl font-bold">Create account</h3>
            </span>

            <span
              class="block text-3xl font-bold"
              onClick={() => setShowRegmodal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>

          {/*body*/}
          <div className="relative p-6 flex-auto">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <label class="block mb-4 ">
                <span class="block text-sm font-medium text-slate-700">
                  Username
                </span>
                {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                <input
                  type="text"
                  placeholder="Enter Username"
                  {...register('user_login')}
                  class=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                />
              </label>

              <label class="block mb-4 ">
                <span class="block text-sm font-medium text-slate-700">
                  Name
                </span>
                {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                <input
                  type="text"
                  placeholder="Enter Name"
                  {...register('first_name')}
                  class=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                />
              </label>

              <label class="block mb-4 ">
                <span class="block text-sm font-medium text-slate-700">
                  Email
                </span>
                {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                <input
                  type="email"
                  placeholder="Enter Email"
                  {...register('email')}
                  class=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                />
              </label>
              <label class="block mb-4">
                <div className="flex justify-between">
                  <span class="block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <span class="block text-sm font-medium text-slate-700">
                    Forget Password
                  </span>
                </div>
                {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                <input
                  type="password"
                  placeholder="Enter password"
                  {...register('password')}
                  class=" block mt-1 w-full px-3 py-2 bg-fuchsia-50   rounded-3xl text-sm 
                                                focus:outline-none focus:border-fuchsia-900 focus:ring-1 focus:ring-fuchsia-900
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-fuchsia-900 invalid:text-fuchsia-900
                                                focus:invalid:border-fuchsia-900 focus:invalid:ring-fuchsia-900"
                />
              </label>

              <div className="mb-4  text-center">
                <p>By creating an account, you agree with our</p>
                <a href="#">Terms of Service & Privacy Policy</a>
              </div>

              <button class="w-full px-3 py-2 bg-fuchsia-900 font-bold text-white rounded-3xl">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
