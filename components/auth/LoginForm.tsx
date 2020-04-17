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
import css from "./login.scss";
import Toggle from "components/auth/Toggle";
import { useEffect, useContext } from "react";
import context from "context/context";
import router from "next/router"

type LazyLogin = Lazy<LoginQueryVariables, LoginQueryResult>;
const initVars: LoginQueryVariables = { username: "", password: "" };
type Props = {
  toggle : () => void,
}
export default ({toggle}: Props) => {
  const {login, setLogin}  = useContext(context)
  const [tryLogin, { error, loading, data }]: LazyLogin = useLazyQuery(
    LoginDocument
  );
  useEffect(() => {
    if (login) {
      router.push(router.pathname)
    }
  })

  useEffect(() => {
    if (data && data.Login.Status) {
      setLogin(true)
      localStorage.setItem("auth", data.Login.TokenErr)
      router.push(router.pathname)
    }
  }, [data])

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
