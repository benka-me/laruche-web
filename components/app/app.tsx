import Context, { useConstructorContext } from "context/context";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "graph/apollo-client";
import Navigation from "components/navigation/navigation";
import { main } from "./app.scss";
import { useAuthed } from "../../lib/auth";

type Props = {
  children: any;
  token: string;
};
export default ({ children, token }: Props) => {
  const ctx = useAuthed(token)
  if (!ctx.auth.authenticated) return null
  return (
    <Context.Provider value={ctx}>
      <ApolloProvider client={createApolloClient(null, true)}>
        <Navigation />
        <div className={main}>{children}</div>
      </ApolloProvider>
    </Context.Provider>
  );
};
