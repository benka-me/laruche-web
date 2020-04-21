import { useContext, useEffect } from "react";
import BeeTicket from "components/home/bee-ticket/bee-ticket";
import Context from "context/context";
import { LoadingBox } from "components/class/loading/loading";
import {
  Bee,
  GetHomeComponent,
  GetHomeQueryResult,
  GetHomeQueryVariables,
} from "graph/graphql";
import { Container } from "components/class/container/container";

export const HomeTitle = () => <h1>Laruche</h1>;

interface HomeProps {}
export default ({}: HomeProps) => {
  const { title, setTitle, auth } = useContext(Context);
  useEffect(() => {
    setTitle(HomeTitle);
    return () => {};
  }, []);

  const queryVars: GetHomeQueryVariables = { token: auth.token };

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
              </>
            );
        }}
      </GetHomeComponent>
    </Container>
  );
};