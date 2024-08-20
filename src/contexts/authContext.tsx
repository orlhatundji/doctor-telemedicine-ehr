import React, { createContext, useState, useEffect, useContext } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, email: string, id: number, role: string, iName: string) => void;
  logout: () => void;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = (token: string, email: string, id: number, role: string, iName: string) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id.toString());
    localStorage.setItem('role', role);
    localStorage.setItem('name', iName);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    setIsAuthenticated(false);
  };

  const checkAuth = async () => {
    const token = localStorage.getItem('accessToken');
    if(!token) {
      setIsAuthenticated(false);
      return;
    }
    
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};