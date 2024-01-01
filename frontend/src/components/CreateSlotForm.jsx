import React from 'react';
import { Formik } from 'formik';
import MyTimePicker from './commons/MyTimePicker';
import { Button } from '@mui/material';
import api from '../utils/api'
import { useNavigate } from 'react-router-dom';

const CreateSlotForm = () => {

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ startTime: '', endTime: '' }}
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
      onSubmit={(values, { setSubmitting }) => {
        api.post("/slots", values)
          .then((appointment) => {
            console.log('Res: ', appointment);
            setSubmitting(false);
            navigate("/slots")
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
          <div>
            <MyTimePicker
              label={"Start Time"}
              setFieldValue={setFieldValue}
              fieldName={"startTime"}
            />
            <MyTimePicker
              label={"End Time"}
              setFieldValue={setFieldValue}
              fieldName={"endTime"}
            />
          </div>
          {/* {errors.email && touched.email && errors.email} */}
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

export default CreateSlotForm