import { Formik } from "formik";
import * as Yup from "yup";
import {
  LoginQueryVariables,
  LoginDocument,
  LoginQueryResult,
  RegisterMutationVariables,
} from "graph/graphql";
import { useLazyQuery } from "@apollo/react-hooks";
import { Lazy } from "types/types";
import Input from "components/class/form/Input";
import Button from "components/class/button/Button";
import css from "./login.scss";
import Toggle from "components/login/Toggle";

type LazyLogin = Lazy<LoginQueryVariables, LoginQueryResult>;
const initVars: RegisterMutationVariables = { username: "", password: "", email: "", password2};
type Props = {
  toggle : () => void,
}
export default ({toggle}: Props) => {
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
        <div className={css.form}>
          <h2>Register in</h2>
        <Formik
          initialValues={initVars}
          onSubmit={(values: LoginQueryVariables) => {
            tryLogin({ variables: values });
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Required").matches(/[a-z]/, "lowcase and midde `-` dash only"),
            password: Yup.string().required("Required"),
            password2: Yup.string().required("Required"),
            email: Yup.string().email().required(),
          })}
        >
          {(props) => {
            const { isSubmitting, handleSubmit } = props;
            return (
              <form onSubmit={handleSubmit}>
                <Input
                  name="username"
                  placeholder="Username"
                  type="text"
                  {...props}
                />
                <Input name="email" placeholder="Your email address" type="text" {...props} />
                <Input name="password" placeholder="Password" type="password" {...props} />
                <Input name="password2" placeholder="Confirm your password" type="password" {...props} />

                <Button
                  color="info"
                  design="rounded"
                  type="submit"
                  disabled={isSubmitting}
                  fluid
                >
                  Register
                </Button>
                <Toggle toggle={toggle} name="login">
                  <p>Already registred? </p>
                </Toggle>

                <DisplayFormikState {...props} />
              </form>
            );
          }}
        </Formik>
        </div>
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
