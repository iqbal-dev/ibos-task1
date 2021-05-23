import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addData } from "../action/action";
import "./Addfile.css";
import Table from "./Table";

const AddFile = () => {
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const store = useSelector((state) => state);
  const handleSubmit = (values, { resetForm }) => {
    const filter = store.filter((value) => value.email === values.email);
    if (filter.length) {
      alert("This email is already used");
    } else {
      dispatch(addData(values));
    }
    resetForm();
  };
  return (
    <div className="form">
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <Field name="name" id="name" />
              {errors.name && touched.name ? (
                <div style={{ color: "red" }}> {errors.name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <Field name="email" type="email" id="email" />
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
            </div>
            <Field
              name="button"
              disabled={
                values.email !== "" && values.name !== "Required" ? false : true
              }
              type="submit"
              value="Add"
              style={{
                height: "30px",
                marginTop: "20px",
                padding: "0 30px",
                width: "20%",
              }}
            />
          </Form>
        )}
      </Formik>
      <br />
      <br />
      <Table store={store} />
    </div>
  );
};

export default AddFile;
