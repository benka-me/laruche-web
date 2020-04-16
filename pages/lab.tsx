import { useContext, useEffect } from "react";
import context from "context/context";
import { Container } from "components/class/container/container";
import { SignUp } from "components/class/form/SignUp";

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
      <SignUp/>
    </Container>
  );
};
