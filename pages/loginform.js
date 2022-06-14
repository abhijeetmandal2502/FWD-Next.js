import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
// import { useSession, signIn, signOut, getSession, reg } from 'next-auth/react';
import Login from './login';
import Register from './register';

export default function LoginForm() {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showRegmodal, setShowRegmodal] = React.useState(false);

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
