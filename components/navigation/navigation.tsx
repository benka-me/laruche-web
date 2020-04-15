import { useContext, useState } from "react";
import router from "next/router";
import { logout } from "utils/utils";
import Context from "context/context";
import { useTranslation } from "react-i18next";
import { slide as Slide, State } from "react-burger-menu";
import { Messages } from "i18n/i18n";
import cssDesktop from "./navigation-desktop.scss";
import cssMobile from "./navigation-mobile.scss";
import { OnClick } from "types/types";
import { TFunction } from "i18next";
import { Container } from "components/class/container/container";
import { GiBee } from "react-icons/gi";
import { Button } from "components/class/button/button";

type Link = {
  name: string;
  onClick: OnClick;
};
const links: Link[] = [
  { name: Messages.contact, onClick: e => router.push("/contact", "/contact") },
  {
    name: "Get Started",
    onClick: e => router.push("/get-started", "/get-started")
  }
];

export default () => {
  const { login, setLogin, title } = useContext(Context);
  const { t } = useTranslation();
  return (
    <>
      <Mobile login={login} setLogin={setLogin} title={title} t={t} />
      <Desktop login={login} setLogin={setLogin} title={title} t={t} />
    </>
  );
};

interface SubProps {
  setLogin: (b: boolean) => void;
  title: JSX.Element;
  login: boolean;
  t: TFunction;
}
const Desktop = ({ setLogin, title, login, t }: SubProps) => (
  <div className={cssDesktop.navbar}>
    <Container>
      <div className={cssDesktop.menu}>
        <div className={cssDesktop.menuLeft}>
          <button onClick={e => router.push("/")}>
            <GiBee />
          </button>
          {title}
        </div>
        <div className={cssDesktop.menuRight}>
          {login ? (
            <DesktopItem
              link={{ name: Messages.logout, onClick: e => logout(e, setLogin) }}
            />
          ) : null}
          {links.map((link: Link, i: any) => (
            <DesktopItem key={i} link={link} />
          ))}
        </div>
      </div>
    </Container>
  </div>
);
const Mobile = ({ setLogin, title, login, t }: SubProps) => {
  const [open, setOpen] = useState(false);
  const closeBurger = () => setOpen(false);
  return (
    <div className={cssMobile.mobile}>
      <div className={cssMobile.back}>
        <div className={cssMobile.title}>{title}</div>
      </div>
      <Menu setOpen={setOpen} open={open}>
        <BurgerItem
          link={{ name: Messages.home, onClick: e => router.push("/") }}
          closeBurger={closeBurger}
        />
        <>
          {links.map((link: Link, i: number) => (
            <BurgerItem link={link} key={i} closeBurger={closeBurger} />
          ))}
        </>
        {login ? (
          <BurgerItem
            link={{ name: Messages.logout, onClick: e => logout(e, setLogin) }}
            closeBurger={closeBurger}
          />
        ) : null}
      </Menu>
    </div>
  );
};

interface MenuProps {
  setOpen: (b: boolean) => void;
  open: boolean;
  children: JSX.Element[] | JSX.Element;
}
const Menu = ({ setOpen, open, children }: MenuProps) => (
  <Slide
    right
    width={"100%"}
    isOpen={open}
    onStateChange={(s: State) => {
      setOpen(s.isOpen);
      document.body.style.setProperty(
        "overflow",
        s.isOpen ? "hidden" : "scroll"
      );
    }}
  >
    {children}
  </Slide>
);

interface ItemProps {
  link: Link;
  closeBurger?: () => void;
}
export const BurgerItem = ({ link, closeBurger }: ItemProps) => {
  const { t } = useTranslation();
  return (
    <Button
      style={{ marginBottom: "10px" }}
      color="info"
      fluid
      circular
      design="background"
      onClick={e => {
        link.onClick(e);
        closeBurger();
      }}
    >
      {t(link.name).toUpperCase()}
    </Button>
  );
};
const DesktopItem = ({ link }: ItemProps) => (
  <button onClick={link.onClick}>{link.name}</button>
);
