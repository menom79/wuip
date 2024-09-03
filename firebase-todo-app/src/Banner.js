import React from 'react';
import { getAuth } from 'firebase/auth';

const Banner = ({ user }) => {
  const auth = getAuth();

  return (
    <div>
      <h1>Todo Example with React</h1>
      {user && <p>Welcome, {user.email}! <button onClick={() => auth.signOut()}>Sign Out</button></p>}
    </div>
  );
};

export default Banner;
