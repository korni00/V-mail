import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  user: null,
  isLogged: false,
  image: null,
  login: () => {},
  logout: () => {},
  setImage: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );

  const [isLogged, setIsLogged] = useState(
    Boolean(localStorage.getItem('userData'))
  );

  const [image, setImage] = useState(localStorage.getItem('userImage'));

  const login = (email, password) => {
    const userData = {
      email: email,
      password: password,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    setUser(userData);
    setIsLogged(true);
  };

  const logout = () => {
    localStorage.removeItem('userData');
    setUser(null);
    setIsLogged(false);
  };

  const setImageState = (imageUrl) => {
    localStorage.setItem('userImage', imageUrl);
    setImage(imageUrl);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLogged, image, login, logout, setImage: setImageState }}
    >
      {children}
    </AuthContext.Provider>
  );
};
