import React from "react";
import Head from "next/head";
import App from "components/app/app";
import { AppContextType, AppPropsType } from "next/dist/next-server/lib/utils";
import LandingForm from "components/auth/LandingForm";
import cookies from "next-cookies";
import { Auth } from "context/context";
import { ApolloProvider } from "@apollo/react-hoc";
import createApolloClient from "graph/apollo-client";
import decode from "jwt-decode";

const Wrapper = (props: AppPropsType & Auth) => {
  if (!props.authenticated)
    return (
      <ApolloProvider client={createApolloClient(null, true)}>
        <LandingForm />
      </ApolloProvider>
    );
  return (
    <div>
      <div>
        <Head>
          <title>Laruche of services</title>
        </Head>
      </div>
      <App token={props.token}>
        <props.Component {...props.pageProps} />
      </App>
    </div>
  );
};

Wrapper.getInitialProps = async (act: AppContextType) => {
  const cookie = cookies(act.ctx).auth;
  const auth: Auth = {
    token: cookie,
    authenticated: isAuthenticated(cookie),
  };

  return auth;
};

export default Wrapper;

const isAuthenticated = (token: string) => {
  try {
    const { exp } = decode(token);
    if (Date.now() >= exp * 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
};
