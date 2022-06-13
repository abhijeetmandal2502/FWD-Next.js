import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut, getSession, reg } from 'next-auth/react';

const Home = () => {
  const { data: session, status } = useSession();
  const token = session && session?.user?.data?.jwt;

  console.log('checkauth', token);
  return (
    <>
      <h1 className="text-5xl font-bold underline red">Hello world!</h1>
      <div className=" my-8 mx-48 p-4 bg-white rounded-xl flex space-x-6">
        <div>isdhgsdif</div>
        <div>isdhgsdif</div>
        <div>hjh</div>
      </div>
    </>
  );
};

export default Home;
