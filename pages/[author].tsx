import { useRouter } from "next/router";
import context from "context/context";
import { useContext, useEffect } from "react";
import { Container } from "components/class/container/container";

export default () => {
  const { author } = useRouter().query;
  const { setTitle } = useContext(context);
  useEffect(() => setTitle(<h1>{author}</h1>), [author]);
  return (
    <Container>
      <h2>{author}</h2>
    </Container>
  );
};
