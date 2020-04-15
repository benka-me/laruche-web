import { useContext, useEffect } from "react";
import { Container } from "components/class/container/container";
import context from "context/context";

export default () => {
  const { title, setTitle } = useContext(context);
  useEffect(() => setTitle(<h1>Contact</h1>), []);
  return (
    <Container>
      <h3>
        Github: <a href="http://github.com/benka-me">benka-me</a>
      </h3>
    </Container>
  );
};
