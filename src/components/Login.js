import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
  });
  
export const Login = () =>{
    return(
        <div>
            <h1>Login</h1>
            <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="form-group">
          <h5 className="mt-2 text-primary">Email</h5>
          <Field name="email" type="email" className="form-control" />
          {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}
          <h5 className="mt-2 text-primary">Password</h5>
          <Field name="password" type="password" className="form-control " />
          {errors.password && touched.password ? (
            <div className="text-danger">{errors.password}</div>
          ) : null}
          <button className= "btn btn-primary mt-3" type="submit">Submit</button>
        </Form>
      )}
    </Formik>
        </div>
    )
}
export default Login;