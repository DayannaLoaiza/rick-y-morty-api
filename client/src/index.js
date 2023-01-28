import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import App from './components/App';

/*ReactDOM.render(
    <App />,
    document.getElementById('app')
);*/
ReactDOM.render(
    <React.StrictMode>
      <Auth0Provider
        domain="dev-m2df3eycdje37xp6.us.auth0.com"
        clientId="mhxdMwjmyjeIwDF2inAQAxMJXdLA6ImT"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>,
    document.getElementById("app")
);