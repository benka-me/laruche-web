import { Container } from "components/class/container/container";
import router from "next/router";
import context from "context/context";
import { useContext } from "react";

export default () => {
  const ctx = useContext(context);
  return (
    <Container>
      <p>login : {ctx.auth.authenticated ? "true" : "false"}</p>
      <p>token: {ctx.auth.token}</p>
    </Container>
  );
};