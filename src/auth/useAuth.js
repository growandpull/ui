import React from "react";
import AuthManager from "./TokenService";
import { jwtDecode } from "jwt-decode";
import authService from "../services/AuthService";

const authContext = React.createContext({
  userId: null,
  userRole: null,
  userEmail: null,
  authorized: () => {},
  signIn: async (command) => {},
  updateAccessToken: (userToken) => {},
  signUp: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const getJwtPayload = (token) => {
    if (!token || typeof token !== "string") {
      return {
        userRole: null,
        userEmail: null,
      };
    }

    const decodedJwt = jwtDecode(token);
    return {
      userRole: decodedJwt?.roles,
      userEmail: decodedJwt?.sub,
      userExp: decodedJwt?.exp,
    };
  };

  const localAccessToken = AuthManager.getLocalAccessToken();
  const payload = getJwtPayload(localAccessToken);
  const [userRole, setUserRole] = React.useState(payload.userRole);
  const [userEmail, setUserEmail] = React.useState(payload.userEmail);

  const setState = (accessToken) => {
    const tokenPayload = getJwtPayload(accessToken);
    setUserRole(tokenPayload.userRole);
    setUserEmail(tokenPayload.userEmail);

    return tokenPayload;
  };

  const auth = {
    userEmail,
    userRole,

    authorized() {
      return userRole !== null;
    },

    async signUp(registerCommand) {
      let response = await authService.signUp(registerCommand);
      setState(response.accessToken);
      AuthManager.updateLocalAccessToken(response.accessToken);
      const { userRole } = setState(response.accessToken);

      return userRole;
    },

    async signIn(loginCommand) {
      let response = await authService.signIn(loginCommand);
      AuthManager.updateLocalAccessToken(response.accessToken);
      const { userRole } = setState(response.accessToken);

      return userRole;
    },

    updateAccessToken(userToken) {
      AuthManager.updateLocalAccessToken(userToken);
      setState(userToken);
    },

    async signOut() {
      AuthManager.removeLocalAccessToken();
      setState(null);
    },
  };

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function useAuth() {
  return React.useContext(authContext);
}
