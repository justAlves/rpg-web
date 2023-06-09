import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

type AuthContextData = {
  signUp: (data: AuthData) => void;
  signIn: (data: AuthData) => void;
  signed: boolean;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

interface AuthData {
  name?: string;
  email: string;
  password: string;
}

interface AuthResponse {
  id: string;
  name: string;
  token?: string;
  email: string;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider ({ children }: AuthProviderProps) {

  const [user, setUser] = useState({} as AuthResponse | null);

  useEffect(() => {
    async function loadToken() {
      const token = localStorage.getItem('@token');

      if(token) {
        const response = await api.get('/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).catch(() => setUser(null));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        if(response !== void 0){
          const { id, name, email }: AuthResponse = response.data.user;
          setUser({ id, name, email });
        }
      }
    }

    loadToken();
  }, []);

  async function signUp({name, email, password}: AuthData){
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

  async function signIn({email, password}: AuthData) {
    try {
      const response = await api.post('/auth', {
        email,
        password
      });

      const { id, name, token }: AuthResponse = response.data.user;

      console.log(response.data);
      localStorage.setItem('@token', token as string);
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({ id, name, email });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signUp, signIn, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;