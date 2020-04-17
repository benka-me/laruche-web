import { Formik } from "formik";
import * as Yup from "yup";
import {
  LoginQueryVariables,
  LoginDocument,
  LoginQueryResult,
} from "graph/graphql";
import { useLazyQuery } from "@apollo/react-hooks";
import { Lazy } from "types/types";
import Input from "components/class/form/Input";
import Button from "components/class/button/Button";
import { Container } from "components/class/container/container";
import FormContainer from "components/class/form/FormContainer";

type LazyLogin = Lazy<LoginQueryVariables, LoginQueryResult>;
const initVars: LoginQueryVariables = { username: "", password: "" };
export default () => {
  const [tryLogin, { error, loading, data }]: LazyLogin = useLazyQuery(
    LoginDocument
  );

  if (error) return <p>Error...</p>;
  if (loading) return <p>Loading ...</p>;
  if (data) {
    return (
      <div>
        <p>{data.Login.TokenErr}</p>
      </div>
    );
  }
  return (
    <FormContainer>
      <Formik
        initialValues={initVars}
        onSubmit={(values: LoginQueryVariables) => {
          tryLogin({ variables: values });
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required("Required"),
          username: Yup.string().required("Required"),
        })}
      >
        {(props) => {
          const { isSubmitting, handleSubmit } = props;
          return (
            <form onSubmit={handleSubmit}>
              <Input name="username" placeholder="Username" type="text" {...props} />
              <Input name="password" type="password" {...props} />

              <Button
                color="info"
                design="rounded"
                type="submit"
                disabled={isSubmitting}
                fluid
              >
                Submit
              </Button>

              <DisplayFormikState {...props} />
            </form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export const DisplayFormikState = (props) => (
  <div style={{ margin: "1rem 0" }}>
    <h3 style={{ fontFamily: "monospace" }} />
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem",
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);
