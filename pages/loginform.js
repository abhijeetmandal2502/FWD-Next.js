import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut, getSession, reg } from 'next-auth/react';
import Login from './login';
import Register from './register';

export default function LoginForm() {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showRegmodal, setShowRegmodal] = React.useState(false);

  // login submission

  // const loginSchema = yup.object().shape({
  //   email: yup.string().required(),
  //   password: yup.string().min(2).max(32).required(),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm({
  //   resolver: yupResolver(loginSchema),
  // });
  // const onSubmitHandler = async (data) => {
  //   var result = await signIn('credentials', {
  //     redirect: false,
  //     email: data.email,
  //     password: data.password,
  //   });

  //   if (result.error) {
  //     console.log('loginApierror', result);
  //   } else {
  //     router.push('/');

  //     console.log('loginApisuccess', result);
  //   }
  // };

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
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowLoginModal(true)}
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

      {showLoginModal ? <Login setShowLoginModal={setShowLoginModal} /> : null}

      {showRegmodal ? (
        <>
          <Register setShowRegmodal={setShowRegmodal} />
        </>
      ) : null}
    </>
  );
}
