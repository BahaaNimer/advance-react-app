import React, { useState, useEffect } from 'react';

const initialContext = {
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { },
}

const AuthContext = React.createContext(initialContext);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo) {
      setIsLoggedIn(true);
    }
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", 'userLoggedIn');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
