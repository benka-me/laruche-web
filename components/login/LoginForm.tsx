import { Formik } from "formik";
import * as Yup from "yup";
import css from "./form.scss";
import Button from "components/class/button/Button";

export default () => {
  return <div>
      <Formik
      initialValues={{ email: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "error"
                  : ""
              }
            />
            {errors.email && touched.email && (
              <div className={css.inputFeedback}>{errors.email}</div>
            )}

            <Button
              type="button"
              className={css.outline}
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
              color="blue"
              design="rounded"
            >
              Reset
            </Button>
            <Button color="info" design="rounded" type="submit" disabled={isSubmitting}>
              Submit
            </Button>

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>
  </div>;
};

export const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;