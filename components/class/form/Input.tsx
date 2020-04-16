import { FormikConfig, FormikProps } from "formik";
import css from "components/class/form/form.scss";

interface Values {}

interface Props extends FormikProps<Values> {
  name: string;
  type: "password" | "text";
  placeholder?: string;
}

export default (props: Props) => {
  const {
    type,
    name,
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    placeholder,
  } = props;
  return (
    <>
      <label htmlFor={name} style={{ display: "block" }}>
          {name}
      </label>
      <input
        id={name}
        placeholder={placeholder || name}
        type={type}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors[name] && touched[name] ? "error" : ""}
      />
      {errors[name] && touched[name] && (
        <div className={css.inputFeedback}>{errors[name]}</div>
      )}
    </>
  );
};
