import { Auth, useConstructorContext } from "context/context";
import router from "next/router"
import { useEffect } from "react";

export const useAuthed = (token: string) => {
  const ctx = useConstructorContext();
  useEffect(() => {
    ctx.setAuth({ authenticated: true, token });
    return () => {};
  }, []);
  return ctx;
};

export const Login = (token: string, setAuth: (b: Auth) => void) => {
  setAuth({authenticated: true, token});
  document.cookie = `auth=${token}; path=/`;
  router.push(router.router.asPath)
};

export const Logout = (setAuth : (b: Auth) => void) => {
  setAuth({authenticated: false, token: ""});
  document.cookie = `auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  router.push(router.router.asPath)
};