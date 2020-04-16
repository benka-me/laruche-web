import { useContext, useEffect } from "react";
import context from "context/context";
import { Container } from "components/class/container/container";
import { Button } from "components/class/button/button";
import Form from "components/login/form";

export default () => {
  const { setTitle } = useContext(context);
  useEffect(() => {
    setTitle(<h1>Login</h1>);
    return () => {};
  }, []);
  return (
    <Container>
      <Form></Form>
    </Container>
  );
};
