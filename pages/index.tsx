import { FC, useContext, useEffect } from "react";
import { gql } from "apollo-boost";
import Head from "next/head";
import BeeTicket from "components/home/bee-ticket/bee-ticket";
import HiveTicket from "components/home/hive-ticket/hive-ticket";
import Context from "context/context";
import { LoadingBox } from "components/class/loading/loading";
import { FaAlipay } from "react-icons/fa";
import { withApollo } from "@apollo/react-hoc";
import {
  Bee,
  GetHomeComponent,
  GetHomeQueryResult,
  GetHomeQueryVariables,
  Hive,
  GetHomeDocument,
  withGetHome
} from "graph/graphql";
import { Container } from "components/class/container/container";

export const HomeTitle = () => <h1>Hiverr</h1>;

interface HomeProps {}
const Home = ({}: HomeProps) => {
  const { title, setTitle } = useContext(Context);
  useEffect(() => {
    setTitle(HomeTitle);
    return () => {};
  }, []);

  const queryVars: GetHomeQueryVariables = { token: "fake token" };

  return (
    <Container>
      <GetHomeComponent variables={queryVars}>
        {(res: GetHomeQueryResult) => {
          if (res.error) return <div>Cannot Fetch {res.error}</div>;
          else if (res.loading) return <LoadingBox />;
          else
            return (
              <>
                {res.data?.GetHome.Bees.map((b: Bee, i: number) => (
                  <BeeTicket key={i} bee={b} />
                ))}
                {/* {res.data?.GetHome.Hives.map((h: Hive, i: number) => (
                  <HiveTicket key={i} hive={h} />
                ))} */}
              </>
            );
        }}
      </GetHomeComponent>
    </Container>
  );
};

export default Home;
