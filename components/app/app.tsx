import React from "react";
import Context, { useConstructorContext } from "context/context";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "graph/apollo-client";
import Navigation from "components/navigation/navigation";
import { main } from "./app.scss";

export default ({ children }) => (
  <Context.Provider value={useConstructorContext()}>
    <ApolloProvider client={createApolloClient(null, true)}>
      <Navigation />
      <div className={main}>{children}</div>
    </ApolloProvider>
  </Context.Provider>
);

