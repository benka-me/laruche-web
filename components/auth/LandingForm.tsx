import FormContainer from "components/class/form/FormContainer";
import css from "./login.scss";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default () => {
  const [bool, setBool] = useState(true);

  return (
    <FormContainer>
      <div className={css.landingForm}>
        {bool ? (
          <LoginForm toggle={() => setBool(!bool)} />
        ) : (
          <RegisterForm toggle={() => setBool(!bool)} />
        )}
        <div className={css.pane}></div>
      </div>
    </FormContainer>
  );
};
