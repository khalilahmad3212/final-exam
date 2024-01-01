import React, { useEffect, useState } from 'react'
import api from '../utils/api';

const ListSlots = () => {

  const [slots, setSlots] = useState([]);

  const getSlots = () => {
    api.get("/slots")
      .then(({ data }) => {
        console.log('Res: ', data);
        setSlots(data);
      }).catch((err) => {
        setSubmitting(false);
        console.log(err)
      })
  }

  useEffect(() => {
    getSlots();
  }, [])

  return (
    <div>
      <h1>Booked Appointments</h1>
      <div>
        {
          slots?.map((appointment) => (
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

export default ListSlots