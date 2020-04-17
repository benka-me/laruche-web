import css from "./login.scss";

type Props = {
  toggle : () => void,
  name: string,
  children: JSX.Element,
}
export default ({toggle, name, children}:Props) => {
    return (
        <div className={css.toggle}>
          {children}
          <button onClick={toggle}>{name}</button>
        </div>
    )
}