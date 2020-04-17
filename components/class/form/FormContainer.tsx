import {formContainer} from "components/class/form/form.scss";


export default ({children}) => {
    return (
        <div className={formContainer} >
            {children}
        </div>
    )
}