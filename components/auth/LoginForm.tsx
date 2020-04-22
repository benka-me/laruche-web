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
import Button from "components/class/button/button";
import css from "./login.scss";
import Toggle from "components/auth/Toggle";
import { useEffect, useContext } from "react";
import context from "context/context";
import { Login } from "../../lib/auth";

type LazyLogin = Lazy<LoginQueryVariables, LoginQueryResult>;
const initVars: LoginQueryVariables = { username: "", password: "" };
type Props = {
  toggle: () => void;
};
export default ({ toggle }: Props) => {
  const { auth, setAuth } = useContext(context);
  const [tryLogin, { error, loading, data }]: LazyLogin = useLazyQuery(
    LoginDocument
  );
  useEffect(() => {
    if (data && data.Login.Status) Login(data.Login.TokenErr, setAuth);
  }, [data]);

  if (error) return <p>Error...</p>;
  if (loading) <div className={css.form}><p>Loading...</p></div>
  if (data) {
    return (
      <div className={css.form}>
        <p>{data.Login.TokenErr}</p>
      </div>
    );
  }
  return (
    <div className={css.form}>
      <h2>Login</h2>
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
              <Input
                name="username"
                placeholder="Username"
                type="text"
                {...props}
              />
              <Input name="password" type="password" {...props} />

              <Button
                color="info"
                design="rounded"
                type="submit"
                disabled={isSubmitting}
                fluid
              >
                Login
              </Button>
              <Toggle toggle={toggle} name="register">
                <p>Not Registered?</p>
              </Toggle>

            </form>
          );
        }}
      </Formik>
    </div>
  );
};