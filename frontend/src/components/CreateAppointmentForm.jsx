import React from 'react';
import { Formik } from 'formik';
import MyTimePicker from './commons/MyTimePicker';
import { Button, TextField } from '@mui/material';
import api from '../utils/api'
import { useNavigate } from 'react-router-dom';

const CreateAppointmentForm = () => {

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        api.post("/appointments", values)
          .then((appointment) => {
            console.log('Res: ', appointment);
            setSubmitting(false);
            resetForm();
            navigate("/appointments")
          }).catch((err) => {
            setSubmitting(false);
            console.log(err)
          })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          {/* <input
          type="datetime-local"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        /> */}
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            name='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <br />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <br />
          {/* {errors.name && touched.email && errors.email} */}
          {/* <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        /> */}
          {/* {errors.password && touched.password && errors.password} */}
          {/* <button type="submit" disabled={isSubmitting}>
          Submit
        </button> */}
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </form>
      )}
    </Formik>
  )
};

export default CreateAppointmentForm