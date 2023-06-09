import React, { createContext, useState } from 'react';
import api from '../api';

type AuthContextData = {
  signUp: (data: SignUpData) => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider ({ children }: AuthProviderProps) {

  async function signUp({name, email, password}: SignUpData){
    try {
      const response = api.post('/register', {
        name,
        email,
        password
      });
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;