import { useContext, useEffect } from "react";
import context from "context/context";
import { Container } from "components/class/container/container";
import { Button } from "components/class/button/Button";

export default () => {
  const { setTitle } = useContext(context);
  useEffect(() => {
    setTitle(<h1>Register</h1>);
    return () => {};
  }, []);
  return (
    <Container>
    </Container>
  );
};