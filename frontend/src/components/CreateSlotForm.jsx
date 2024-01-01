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
      onSubmit={(values, { setSubmitting }) => {
        api.post("/slots", values)
          .then(({ data }) => {
            console.log('Res: ', data);
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
          <div style={{ textAlign: 'end' }}>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Create
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
};

export default CreateSlotForm