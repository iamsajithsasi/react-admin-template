import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import "../assets/css/login.css";

import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";

export default function LoginPage() {
  const LoginSchema = Yup.object().shape({
    userid: Yup.string().required("name is required"),
    password: Yup.string().required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      userid: "",
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
    <div className="form-demo">
      <div className="p-d-flex p-jc-center">
        <div className="card">
          <h5 className="p-text-center">Login</h5>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className="p-fluid">
              <div className="p-field">
                <span className="p-float-label">
                  <InputText
                    id="userid"
                    name="userid"
                    value={formik.values.userid}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": Boolean(touched.userid && errors.userid),
                    })}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": Boolean(touched.userid && errors.userid),
                    })}
                  >
                    User ID*
                  </label>
                </span>
                {Boolean(touched.userid && errors.userid) && (
                  <small className="p-error">{formik.errors["userid"]}</small>
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

              <Button
                type="submit"
                label="Submit"
                iconPos="right"
                loading={isSubmitting}
                className="p-mt-2"
                disabled={isSubmitting}
              />
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
