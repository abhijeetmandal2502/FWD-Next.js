import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
// import { useSession, signIn, signOut, getSession, reg } from 'next-auth/react';
import Login from '../pages/login';
import Register from '../pages/register';

export default function AuthButton() {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showRegmodal, setShowRegmodal] = React.useState(false);

  return (
    <div className="h-10 flex">
      <button
        className="bg-gray-900  text-white active:bg-pink-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowLoginModal(true)}
      >
        Login
      </button>

      <button
        className="bg-gray-900  text-white active:bg-pink-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
    </div>
  );
}
