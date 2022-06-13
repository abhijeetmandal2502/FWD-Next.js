import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut, getSession, reg } from 'next-auth/react';
import { useSnackbar } from 'notistack';

const Login = (props) => {
  const { setShowLoginModal } = props;

  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const schema = yup.object().shape({
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
    var result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    console.log('loginApisuccess', data);

    if (result.error) {
      enqueueSnackbar(result.error, {
        variant: 'error',
        autoHideDuration: 3000,
      });
      // console.log('loginApierror', credentials);
    } else {
      enqueueSnackbar('Successfully logged in !', {
        variant: 'success',
        autoHideDuration: 3000,
      });
      router.push('/');

      console.log('loginApisuccess', result);
    }
  };

  // const registersubmit = async () => {
  //   const url = `${process.env.apiUrl}/auth/register`;
  //   const response = await fetch(url, {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },

  //     body: JSON.stringify({
  //       nickName: data.nickName,
  //       email: data.email,
  //       password: data.password,
  //     }),
  //     // mode: 'no-cors',
  //   });
  //   const result = await response.json();
  //   console.log('checkregister', result);

  //   if (result.error) {
  //     if (!toast.isActive(id)) {
  //       toast({
  //         position: 'top-start',
  //         description: result.message,
  //         // description: "We've created your account for you.",
  //         status: 'error',
  //         duration: 9000,
  //         isClosable: true,
  //       });
  //     }
  //   } else {
  //     var loginResult = await signIn('credentials', {
  //       redirect: false,
  //       email: data.email,
  //       password: data.password,
  //     });
  //     console.log('loginApi', loginResult);
  //     if (loginResult.error) {
  //       if (!toast.isActive(id)) {
  //         toast({
  //           position: 'top-start',
  //           description: 'result.error',
  //           // description: "We've created your account for you.",
  //           status: 'error',
  //           duration: 9000,
  //           isClosable: true,
  //         });
  //       }
  //     } else {
  //       if (!toast.isActive(id)) {
  //         toast({
  //           description: 'Successfully registered !',
  //           // description: "We've created your account for you.",
  //           status: 'success',
  //           duration: 9000,
  //           isClosable: true,
  //         });
  //       }
  //     }
  //   }
  // };

  return (
    <div className=" my-8 sm:mx-1 md:mx-10 lg:mx-20 xl:mx-48   p-4 ">
      {/* // onSubmit={handleSubmit(onSubmitHandler)} */}
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-4  md:mx-40 max-w-xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}

            <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-bold">Sign In</h3>

              <span
                class="block text-3xl font-bold"
                onClick={() => setShowLoginModal(false)}
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
                    Email or username
                  </span>
                  {/* <!-- Using form state modifers, the classes can be identical for every input --> */}
                  <input
                    type="text"
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
                <button
                  class="w-full px-3 py-2 bg-fuchsia-900 font-bold text-white rounded-3xl"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Login;
