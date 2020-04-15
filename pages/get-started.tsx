import Link from "next/link";
import { Container } from "components/class/container/container";
import { Pre } from "components/class/pre/pre";
import { Divider } from "components/class/line/line";
import { useEffect, useContext } from "react";
import context from "context/context";

export default () => {
  const { setTitle } = useContext(context);
  useEffect(() => setTitle(<h1>Get Started</h1>), []);
  return (
    <Container>
      <h2>1 Installation</h2>
      <h3>Golang</h3>
      <a href="https://golang.org/doc/install">Golang installation</a>
      <Divider />
      <h3>Protobuf</h3>
      <a href="https://developers.google.com/protocol-buffers/docs/downloads">
        Protoc installation
      </a>
      <Divider />
      <h3>gogoslick proto</h3>
      <Pre lang="terminal">$> go get github.com/gogo/protobuf/gogoslick</Pre>
      <Divider />
      <h3>Hive CLI</h3>
      <Pre lang="terminal">$> go get github.com/benka-me/hive</Pre>
      <Divider />

    </Container>
  );
};
