import { Formik } from "formik";
import * as Yup from "yup";
import {
  RegisterQueryVariables,
  RegisterQueryResult,
  RegisterDocument,
} from "graph/graphql";
import { useLazyQuery } from "@apollo/react-hooks";
import { Lazy } from "types/types";
import Input from "components/class/form/Input";
import Button from "components/class/button/button";
import css from "./login.scss";
import Toggle from "components/auth/Toggle";
import { useEffect } from "react";

type LazyRegister = Lazy<RegisterQueryVariables, RegisterQueryResult>;
const initVars: RegisterQueryVariables = {
  username: "",
  password: "",
  email: "",
  password2: "",
};
type Props = {
  toggle: () => void;
};

export default ({ toggle }: Props) => {
  const [fetch, { error, loading, data, refetch }]: LazyRegister = useLazyQuery(
    RegisterDocument
  );

  let tryRegister = (v) => fetch({ variables: v });

  // if (loading) return <p>Loading ...</p>;
  if (data && !data.Register.Status) tryRegister = refetch;
  if (data && data.Register.Status) {
    setTimeout(toggle, 2000)
    return (
      <div className={css.form}>
        <p>{data.Register.StatusMessage}</p>
      </div>
    );
  }

  return (
    <div className={css.form}>
      <h2>Register</h2>
      <Formik
        initialValues={initVars}
        onSubmit={(values: RegisterQueryVariables, helper) => {
          helper.setSubmitting(false)
          tryRegister(values);
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .matches(/^([a-z]|-)+$/, "lowcase and midde `-` dash only")
            .required(),
          password: Yup.string().required("Required"),
          password2: Yup.string()
            .required("Required")
            .test("passwords-match", "Passwords must match", function(value) {
              return this.parent.password === value;
            }),
          email: Yup.string()
            .email()
            .required(),
        })}
      >
        {(props) => {
          const { isSubmitting, handleSubmit } = props;
          props.enableReinitialize = true;
          return (
            <form onSubmit={handleSubmit}>
              <Input
                name="username"
                placeholder="Username"
                type="text"
                {...props}
              />
              <Input
                name="email"
                placeholder="Your email address"
                type="text"
                {...props}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                {...props}
              />
              <Input
                label="confirm password"
                name="password2"
                placeholder="Confirm your password"
                type="password"
                {...props}
              />

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
                <p>Already registered?</p>
              </Toggle>
              {data && !data.Register.Status ? (
                <Button fluid color="error" design="rounded">
                  {data.Register.StatusMessage}
                </Button>
              ) : null}
            </form>
          );
        }}
      </Formik>
    </div>
  );
};