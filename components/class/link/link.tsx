import React, { FC, useContext, useEffect, useState } from "react";
import router from "next/router";
import css from "./link.scss";
import { OnClick, Namespace } from "types/types";
import { Bee } from "graph/graphql";
import context from "context/context";

interface NamespaceLinkProps {
  namespace: Namespace;
  bee?: Bee;
}
export const NamespaceLink = ({ namespace, bee }: NamespaceLinkProps) => {
  const { setCurrent } = useContext(context);
  const { author, name } = namespace;

  const routeToBee = () => {
    if (bee) setCurrent(bee);
    router.push("/[author]/[name]", "/" + author + "/" + name);
  };
  return (
    <div className={css.namespace}>
      <Link
        name={author}
        onClick={e => router.push("/[author]", "/" + author)}
      />
      <h2 style={{textDecoration: "none"}}>/</h2>
      <Link name={name} onClick={e => routeToBee()} />
    </div>
  );
};

interface LinkProps {
  name: string;
  onClick: OnClick;
}
export const Link = ({ name, onClick }: LinkProps) => (
  <button className={css.link} onClick={onClick}>
    <h2>{name}</h2>
  </button>
);
