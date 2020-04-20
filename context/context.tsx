import { createContext, useState } from "react";
import { Bee, Hive } from "graph/graphql";

export type Auth = {
  token: string;
  authenticated: boolean;
};
export interface ContextType {
  title: JSX.Element;
  setTitle: (s: any) => void;
  current: Bee | Hive;
  setCurrent: (a: any) => void;
  auth: Auth;
  setAuth: (a: Auth) => void;
}

let initialContext: ContextType = {
  title: null,
  setTitle: (s: string) => {},
  current: null,
  setCurrent: () => {},
  auth: { token: "", authenticated: false },
  setAuth: () => {},
};

export const useConstructorContext = () => {
  const [auth, setAuth]: [Auth, (s: Auth) => void] = useState(initialContext.auth);
  const [title, setTitle] = useState(null);
  const [current, setCurrent] = useState(null);

  return {
    title,
    setTitle,
    current,
    setCurrent,
    auth,
    setAuth,
  };
};

export default createContext(initialContext);
