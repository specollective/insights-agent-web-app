import * as React from "react";
import authenticationService from '../services/authentication';

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState();

  const register = async formData => {
    try {
      const response = await authenticationService.register(formData);
      return { ...response.data, valid: true }
    } catch (e) {
      return { value: false, errors: 'errors' }
    }
  }

  const authenticate = (otp, token) => {
    return authenticationService.authenticate(otp, token, userData => {
      setUser({ ...user, ...userData });
    });
  }

  const resendAccessCode = formData => {
    return authenticationService.resendAccessCode(formData, userData => {
      setUser({ ...user, ...userData });
    });
  }

  const fetchCurrentUser = () => {
    return authenticationService.currentUser(userData => {
      setUser({ ...user, ...userData });
      return { ...user, ...userData };
    });
  }

  const logout = () => {
    return authenticationService.logout(() => {
      setUser(null);
    });
  }

  const value = {
    user,
    register,
    authenticate,
    resendAccessCode,
    fetchCurrentUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
