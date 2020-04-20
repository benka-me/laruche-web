import React, { FC, useContext, useEffect, useState } from "react";
import Context from "context/context";
import {
  Bee,
  FullBee,
  GetBeeDetailsComponent,
  GetBeeDetailsQueryResult,
  GetBeeDetailsQueryVariables,
  GetFullBeeComponent,
  GetFullBeeQueryResult,
  GetFullBeeQueryVariables
} from "graph/graphql";
import Install from "./install/install";
import { Namespace } from "types/types";
import { LoadingBox } from "components/class/loading/loading";
import { NamespaceLink } from "components/class/link/link";
import { Container } from "components/class/container/container";

const BeePage: FC<{ namespace: Namespace }> = ({ namespace }) => {
  const { current, setCurrent, setTitle } = useContext(Context);
  const [bee, setBee] = useState(current);
  const { author, name } = namespace;

  useEffect(() => {
    setTitle(<NamespaceLink namespace={namespace} bee={current as Bee} />);
  }, [current]);


  const qVars = {
    token: "fake token",
    author,
    name
  };

  return (
    <Container>
      {!current ? (
        <GetFullBeeComponent variables={qVars as GetFullBeeQueryVariables}>
          {(res: GetFullBeeQueryResult) => {
            if (res.error) return <div>error</div>;
            if (res.loading) return <LoadingBox />;
            const full: FullBee = res.data?.GetFullBee;

            return <Content Bee={full.Bee} Details={full.Details} />;
          }}
        </GetFullBeeComponent>
      ) : (
        <GetBeeDetailsComponent
          variables={qVars as GetBeeDetailsQueryVariables}
        >
          {(res: GetBeeDetailsQueryResult) => {
            if (res.error) return <div>error</div>;
            if (res.loading) return <LoadingBox />;
            if (!res.data) return <div>data undefined</div>;
            const full: FullBee = {
              Bee: current as Bee,
              Details: res.data?.GetBeeDetails
            };

            return <Content Bee={full.Bee} Details={full.Details} />;
          }}
        </GetBeeDetailsComponent>
      )}
    </Container>
  );
};

const Content: FC<FullBee> = ({ Bee, Details }) => {
  return (
    <div className="bee">
      <p>{Bee.Description}</p>
      <Install namespace={new Namespace(Bee.Author, Bee.Name)} />
      <p>{Bee.License}</p>
    </div>
  );
};

export default BeePage;
