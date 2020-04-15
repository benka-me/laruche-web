import { useContext, useEffect } from "react";
import context from "context/context";
import { Container } from "components/class/container/container";
import { Button } from "components/class/button/button";

const Wrap = ({ title, children }) => (
  <div>
    <h4 style={{ marginBottom: "3px", paddingTop: "3px" }}>{title}</h4>
    <div
      style={{
        margin: "4px",
        border: "1px solid greenyellow"
      }}
    >
      {children}
    </div>
  </div>
);
export default () => {
  const { setTitle } = useContext(context);
  useEffect(() => {
    setTitle(<h1>Lab</h1>);
    return () => {};
  }, []);
  return (
    <Container>
      <Wrap title="button">
        <Button onClick={null} design={"background"} color={"info"} circular >HAHA</Button>
      </Wrap>
    </Container>
  );
};
