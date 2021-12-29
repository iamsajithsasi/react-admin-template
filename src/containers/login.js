import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import "../assets/css/login.css";

import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { CheckToken } from "../library/helper";
import { authenticateUser } from "../library/store/authentication";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    userid: Yup.string().required("name is required"),
    password: Yup.string().required("password is required"),
  });

  useEffect(() => {
    if (CheckToken()) {
      history.push("/dashboard");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
      console.log(data);
      dispatch(authenticateUser(data));

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
          <h4 className="text-center">Sign in to App</h4>
          <p className="text-center mb-3">Enter your details below.</p>
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

              <div className="forgotPassword text-right">
                <Link to="/forgot-password">
                  <u>Forgot Password</u>
                </Link>
              </div>

              <div className="submitBtnBox">
                <Button
                  type="submit"
                  label="Login"
                  iconPos="right"
                  loading={isSubmitting}
                  className="mt-4 submitBtn"
                  disabled={isSubmitting}
                />
              </div>

              <div className="signupBox mt-3 text-center">
                Don’t have an account? <Link to="/register">Get started</Link>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
