import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { InputMask } from "primereact/inputmask";
import { classNames } from "primereact/utils";
import "../assets/css/login.css";

import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    location: Yup.string(),
    email: Yup.string(),
    phone: Yup.string(),
    deviceID: Yup.string(),
    password: Yup.string().required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      email: "",
      phone: "",
      deviceID: "",
      password: "",
    },
    validationSchema: LoginSchema,
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
          <h4 className="text-center">Sign Up to App</h4>
          <p className="text-center mb-3">Enter your details below.</p>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className="p-fluid">
              <div className="p-field">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": Boolean(touched.name && errors.name),
                    })}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": Boolean(touched.name && errors.name),
                    })}
                  >
                    User ID*
                  </label>
                </span>
                {Boolean(touched.name && errors.name) && (
                  <small className="p-error">{formik.errors["name"]}</small>
                )}
              </div>

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
                    htmlFor="password"
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
                  <InputMask
                    id="phone"
                    name="phone"
                    mask="(999) 999-9999"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": Boolean(touched.phone && errors.phone),
                    })}
                  />
                  <label
                    htmlFor="phone"
                    className={classNames({
                      "p-error": Boolean(touched.phone && errors.phone),
                    })}
                  >
                    Phone
                  </label>
                </span>
                {Boolean(touched.phone && errors.phone) && (
                  <small className="p-error">{formik.errors["phone"]}</small>
                )}
              </div>

              <div className="submitBtnBox">
                <Button
                  type="submit"
                  label="Register"
                  iconPos="right"
                  loading={isSubmitting}
                  className="mt-4 submitBtn"
                  disabled={isSubmitting}
                />
              </div>

              <div className="signupBox mt-3 text-center">
                Already have an account? <Link to="/login">Log In</Link>
              </div>
              
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
