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
  const [fetch, { error, loading, data, refetch }]: LazyLogin = useLazyQuery(
    LoginDocument
  );

  let tryLogin = (v) => fetch({ variables: v });

  useEffect(() => {
    if (data && data.Login.Status) Login(data.Login.TokenErr, setAuth);
  }, [data]);

  if (data && !data.Login.Status) tryLogin = refetch;
  if (data && data.Login.Status) {
    setTimeout(toggle, 2000)
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
        onSubmit={(values: LoginQueryVariables, helper) => {
          helper.setSubmitting(false)
          tryLogin(values);
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required("Required"),
          username: Yup.string().required("Required"),
        })}
      >
        {(props) => {
          props.enableReinitialize = true;
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
              {data && !data.Login.Status ? (
                <Button fluid color="error" design="rounded">
                  {data.Login.TokenErr}
                </Button>
              ) : null}

            </form>
          );
        }}
      </Formik>
    </div>
  );
};