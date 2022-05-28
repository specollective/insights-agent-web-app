import { useContext, createContext, useState } from "react";
import {
  fetchMagicLink,
  fetchConfirmMagicLink,
  fetchAccessCode,
  fetchLogout,
  fetchCurrentUser,
} from 'services/authentication';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  async function register(formData) {
    const result = await fetchMagicLink(formData)

    setUser({ ...user, ...result })
  }

  async function authenticate(otp, token) {
    const result = await fetchConfirmMagicLink(otp, token)

    setUser({ ...user, ...result })
  }

  async function currentUser () {
    const result = await fetchCurrentUser()

    setUser({ ...user, ...result })
  }

  async function logout () {
    const result = await fetchLogout()

    setUser(null)
  }

  const value = {
    user,
    register,
    authenticate,
    currentUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
