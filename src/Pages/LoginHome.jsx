import React from 'react';
import { useSelector } from 'react-redux';

export default function HomeLogin() {
  const { userDetails } = useSelector((state) => state.auth);
  const { firstname, lastName } = userDetails || {};

  return (
    <div className='text-center'>
      {userDetails && (
        <>
          <h1>{`Welcome to pets adoption ${firstname} ${lastName}`}</h1>
          <h3>Start adopting now!</h3>
        </>
      )}
    </div>
  );
}
