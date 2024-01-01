import React from 'react';
import { Formik } from 'formik';
import MyTimePicker from './commons/MyTimePicker';
import { Button, TextField } from '@mui/material';
import api from '../utils/api'
import { useNavigate } from 'react-router-dom';

const CreateAppointmentForm = ({ slotId }) => {

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        api.put(`/appointments/${slotId}`, values)
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
          <TextField
            fullWidth
            sx={{ mb: '10px' }}
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
            fullWidth
            sx={{ mb: '10px' }}

            id="email"
            label="Email"
            variant="outlined"
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <br />
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

export default CreateAppointmentForm