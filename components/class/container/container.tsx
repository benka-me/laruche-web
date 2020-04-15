import semantic from "./container.scss";

export const Container = ({children}) => (
   <div className={semantic.container}>{children}</div> 
)