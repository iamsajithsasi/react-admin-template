import React from "react";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import "../assets/css/login.css";

import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";

export default function ChangepasswordPage() {
  const ForgotSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .required("Please fill in this field")
      .oneOf([Yup.ref("password"), null], "Password did'nt match"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: ForgotSchema,
    onSubmit: (data) => {
      console.log(data);

      setTimeout(() => {
        formik.setSubmitting(false);
      }, 2000);
    },
  });

  const { errors, touched, isSubmitting, handleSubmit } = formik;

  return (
    <div className="form-box">
      <div className="fullHeight p-ai-center p-d-flex p-jc-center">
        <div className="shadow card m-3 px-3 py-4 px-sm-4 py-sm-5">
          <h4 className="text-center">Reset Password</h4>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className="p-fluid">
              <div className="p-field">
                <span className="p-float-label">
                  <Password
                    id="password"
                    name="password"
                    toggleMask
                    feedback={false}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": Boolean(touched.password && errors.password),
                    })}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": Boolean(touched.password && errors.password),
                    })}
                  >
                    Password*
                  </label>
                </span>
                {Boolean(touched.password && errors.password) && (
                  <small className="p-error">{formik.errors["password"]}</small>
                )}
              </div>

              <div className="p-field">
                <span className="p-float-label">
                  <Password
                    id="confirm_password"
                    name="confirm_password"
                    toggleMask
                    feedback={false}
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": Boolean(touched.confirm_password && errors.confirm_password),
                    })}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": Boolean(touched.confirm_password && errors.confirm_password),
                    })}
                  >
                    Confirm Password*
                  </label>
                </span>
                {Boolean(touched.confirm_password && errors.confirm_password) && (
                  <small className="p-error">{formik.errors["confirm_password"]}</small>
                )}
              </div>

              <div className="submitBtnBox">
                <Button
                  type="submit"
                  label="Submit"
                  iconPos="right"
                  loading={isSubmitting}
                  className="mt-4 submitBtn"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
