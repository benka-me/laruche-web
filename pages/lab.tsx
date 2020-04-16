import { Formik } from "formik";
import * as Yup from "yup";
import Button from "components/class/button/Button";
import {
  LoginQueryVariables,
  LoginDocument,
  LoginQueryResult,
  QueryLoginArgs,
  RegisterDocument,
  RegisterMutationVariables,
  GetHomeDocument,
} from "graph/graphql";
import { useLazyQuery, QueryLazyOptions } from "@apollo/react-hooks";
import { useState, useEffect } from "react";
import { Container } from "components/class/container/container";
import { Lazy } from "types/types";


export default () => {
  const [
    tryLogin,
    { error, loading, data },
  ]: Lazy<LoginQueryVariables, LoginQueryResult> = useLazyQuery(LoginDocument);

  return (
    <Container>
    </Container>
  );
};
