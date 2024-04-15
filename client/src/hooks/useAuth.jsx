// useAuth.jsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Correct import path

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
