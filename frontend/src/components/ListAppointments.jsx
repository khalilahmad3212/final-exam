import React, { useEffect, useState } from 'react'
import api from '../utils/api';

const ListAppointments = () => {

  const [appointments, setAppointments] = useState([]);

  const getAppointments = () => {
    api.get("/appointments")
      .then(({ data }) => {
        console.log('Res: ', data);
        setAppointments(data);
      }).catch((err) => {
        setSubmitting(false);
        console.log(err)
      })
  }

  useEffect(() => {
    getAppointments();
  }, [])

  return (
    <div>
      <h1>Booked Appointments</h1>
      <div>
        {
          appointments?.map((appointment) => (
            <div key={appointment._id}>
              <h3>{appointment.name}</h3>
              <h3>{appointment.email}</h3>
              <p>{appointment.slot.startTime + appointment.slot.startTime} </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListAppointments