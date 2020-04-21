import { useContext, useState } from "react";
import router from "next/router";
import { logout } from "utils/utils";
import Context, { Auth } from "context/context";
import { useTranslation } from "react-i18next";
import { slide as Slide, State } from "react-burger-menu";
import { Messages } from "i18n/i18n";
import cssDesktop from "./navigation-desktop.scss";
import cssMobile from "./navigation-mobile.scss";
import { OnClick } from "types/types";
import { TFunction } from "i18next";
import { Container } from "components/class/container/container";
import { GiBee } from "react-icons/gi";
import Button from "components/class/button/button"
import { Logout } from "../../lib/auth";

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
  const { auth, setAuth, title } = useContext(Context);
  const { t } = useTranslation();
  return (
    <>
      <Mobile auth={auth} setAuth={setAuth} title={title} t={t} />
      <Desktop auth={auth} setAuth={setAuth} title={title} t={t} />
    </>
  );
};

interface SubProps {
  setAuth : (b: Auth) => void;
  auth: Auth;
  title: JSX.Element;
  t: TFunction;
}
const Desktop = ({ setAuth, title, auth, t }: SubProps) => (
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
          {auth.authenticated ? (
            <DesktopItem
              link={{ name: Messages.logout, onClick: e => Logout(setAuth) }}
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
const Mobile = ({ setAuth, title, auth, t }: SubProps) => {
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
        {auth.authenticated ? (
          <BurgerItem
            link={{ name: Messages.logout, onClick: e => Logout(setAuth) }}
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