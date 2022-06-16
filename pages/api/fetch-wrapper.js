import getConfig from 'next/config';
import React from 'react';
import ErrorAlert from '../../components/alert/ErrorAlert';
import SuccessAlert from '../test/SuccessAlert';
// import { useSession, signIn, signOut, getSession } from 'next-auth/react';
// import { getToken } from 'next-auth/jwt';

// import { userService } from 'services';

// const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
  get,
  postJWT,
  put,
  delete: _delete,
};

async function get(context, url) {
  //   const session = await getSession(context);
  //   const token = session && session?.accessToken;
  //   console.log('clickapi1', token);
  const requestOptions = {
    method: 'GET',
    // headers: authHeader(context),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(url, requestOptions);
  //   console.log('apicall11', response);
  return handleResponse(response);
}

async function postJWT(url, body) {
  const requestOptions = {
    method: 'POST',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      //   Authorization: `Bearer ${token}`,
    },

    body: body,
  };

  const response = await fetch(url, requestOptions);
  console.log('clickapi4', response);

  return handleResponse(response);
}

async function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    body: body,
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(url),
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

// helper functions

async function authHeader(context) {
  // return auth header with jwt if user is logged in and request is to the api url
  const session = await getSession(context);
  const token = session && session?.user?.accessToken;
  // const token = await getToken({ req });
  // console.log('JSON Web Token', token);

  // console.log('apicall 9', token);
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  //

  //   const user = userService.userValue;
  //   const isLoggedIn = user && user.token;
  //   const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  //   if (isLoggedIn && isApiUrl) {
  // return { Authorization: `Bearer ${user.token}` };
  //   } else {
  //     return {};
  //   }
}

async function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    // console.log('apicall11', data);

    if (!response.ok) {
      if ([401, 403].includes(response.status)) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        // userService.logout();
        // console.log('checkfirstloginerror', data);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
