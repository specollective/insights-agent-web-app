import * as React from "react";
import authenticationService from '../services/authentication';

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState();

  let signin = (formData, callback) => {
    return authenticationService.signin(() => {
      setUser(formData);
      callback();
    });
  };

  let signout = (callback) => {
    return authenticationService.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
