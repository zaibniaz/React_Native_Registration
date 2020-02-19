import React, {createContext, useState} from 'react';

import AccessAsyncStore from '../utils/AccessAsyncStore';

export const UserContext = createContext();

const UserProvider = props => {
  const [userState, setUserState] = useState({});

  const getUserObject = () => {
    AccessAsyncStore.getItem('user')
      .then((res, err) => {
        if (res != null) {
          let user = JSON.parse(res);
          console.log('context' + user);
          setUserState(user);
        }
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <UserContext.Provider value={{userState, getUserObject}}>
      {props.children}
    </UserContext.Provider>
  );
};

export {UserProvider};
