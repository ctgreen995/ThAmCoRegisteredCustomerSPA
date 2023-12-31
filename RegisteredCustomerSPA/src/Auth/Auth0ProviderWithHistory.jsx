import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "../Utils/History";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_API_IDENTIFIER;
  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: window.location.origin,
        ...(audience ? { audience: audience } : null),
      }}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithHistory;
