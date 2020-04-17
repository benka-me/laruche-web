import React, { useContext, useEffect } from "react";
import Context, { useConstructorContext } from "context/context";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "graph/apollo-client";
import Navigation from "components/navigation/navigation";
import { main } from "./app.scss";
import context from "context/context";
import { Container } from "components/class/container/container";
import LandingForm from "components/auth/LandingForm";
import JwtDecode from "jwt-decode";

const Auth = () => {
  return (
    <Container>
      <LandingForm />
    </Container>
  );
};

type Props = {
  children: any;
  token: string;
};
export default ({ children, token }: Props) => {
  const ctx = useConstructorContext();
  useEffect(() => {
    if (token) {
      Valid(token, ctx.setLogin);
    }
  }, []);

  if (token === null || token === "") {
    return (
      <Context.Provider value={ctx}>
        <ApolloProvider client={createApolloClient(null, true)}>
          <Auth />;
        </ApolloProvider>
      </Context.Provider>
    );
  }
  if (ctx.login) {
    return (
      <Context.Provider value={ctx}>
        <ApolloProvider client={createApolloClient(null, true)}>
          <Navigation />
          <div className={main}>{children}</div>
        </ApolloProvider>
      </Context.Provider>
    );
  }
  return (
    <Context.Provider value={ctx}>
      <ApolloProvider client={createApolloClient(null, true)}>
        <Auth />;
      </ApolloProvider>
    </Context.Provider>
  );
};

const Valid = (token, setLogin) => {
  const jwt: any = JwtDecode(token);
  if (!jwt || !jwt.exp || Date.now() >= jwt.exp * 1000) {
    console.log("false: ");
    return false;
  }
  console.log("true: ");
  setLogin(true);
  return true;
};
