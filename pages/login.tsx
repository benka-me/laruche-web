import { useContext, useEffect } from "react";
import context from "context/context";
import { Container } from "components/class/container/container";
import Form from "components/login/LoginForm";

export default () => {
  const { setTitle } = useContext(context);
  useEffect(() => {
    setTitle(<h1>Laruche</h1>);
    return () => {};
  }, []);
  return (
    <Container>
      <Form></Form>
    </Container>
  );
};
