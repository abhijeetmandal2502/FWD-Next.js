import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signOut } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('authlogin 1', process.env.authKey);

        const url = `https://fwd.thenwg.xyz/?rest_route=/auth/v1/auth&AUTH_KEY=${process.env.authKey}`;

        console.log('authlogin 2', credentials);

        const response = await fetch(url, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        console.log('authlogin 3', response);

        //  var res = await fetchWrapper.postJWT(
        //    url,
        //    JSON.stringify({
        //      username: 'admin',
        //      password: 'P0werscript',
        //    })
        //  );
        //  console.log('submitlogin', res);
        // const responsea = await fetch(
        //   'https://transport-backend.thenwg.xyz/api/login',
        //   {
        //     method: 'post',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       email: credentials.email,
        //       password: credentials.password,
        //       role: credentials.role,
        //     }),
        //   }
        // );
        const result = await response.json();

        console.log('authlogin 4', result);

        if (result.success) {
          // const session = await getSession({ data });
          // console.log('logindata= session', session);
          // router.push('/');
          console.log('authlogin 5', result);

          return result;
        } else {
          console.log('authlogin 6', result);

          if (result.errors) {
            throw new Error(result.data.message);
          } else {
            throw new Error(result.data.message);
          }
          // console.log('logindata=  I will handle this later!');
        }
      },
    }),
  ],

  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  secret: 'honey_nwg_projects',
  jwt: {
    secret: 'honey_nwg_projects',
    encryption: true,
  },
});
