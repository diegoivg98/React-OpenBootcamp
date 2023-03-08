import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'Yup'

const loginSchema = Yup.object().shape({
    /* Validating the email field. */
    email: Yup.string()
        .email("Invalid Email Format")
        .required("Email is required"),
    /* Validating the password field. */
    password: Yup.string()
        .required("Password is required")
});

function LoginForm({ loged, onLogin }) {
    const initalCredentials = {
        email: "",
        password: "",
    };
    return (
        <Formik
            initialValues={initalCredentials}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                onLogin(values.email, values.password)
            }}
        >
            {({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
            }) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                    ></Field>
         
                    {errors.email && touched.email && (
                        <ErrorMessage name="email" component="div" />
                    )}

                    <label htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                    ></Field>
                    {errors.password && touched.password && (
                        <ErrorMessage name="password" component="div" />
                    )}

                    <button type="submit">Login</button>
                    {isSubmitting ? <p>Login your credentials...</p> : null}
                </Form>
            )}
        </Formik>
    )
}

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default LoginForm

