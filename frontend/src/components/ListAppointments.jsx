import React, { useEffect, useState } from 'react'
import api from '../utils/api';
import Container from './Layouts/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ListAppointments = () => {

  const navigate = useNavigate();
  const [slots, setSlots] = useState([]);

  const getAppointments = () => {
    api.get("/appointments")
      .then(({ data }) => {
        console.log('Res: ', data);
        setSlots(data);
      }).catch((err) => {
        setSubmitting(false);
        console.log(err)
      })
  }

  const getTime = (data) => {
    var d = new Date(data);
    const hours = d.getUTCHours(); // Hours
    const mins = d.getUTCMinutes();
    let res = hours + " : " + mins;
    return res
  }

  useEffect(() => {
    getAppointments();
  }, [])

  return (
    <Container>
      <div style={{ height: '100vh' }}>
        <h1>Booked Appointments</h1>
        <div>
          {
            slots?.map((slot) => (

              slot?.appointments?.map(e => (
                <div key={slot._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4>Start Time: </h4><span>{getTime(slot.startTime)}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4>End Time: </h4> <span>{getTime(slot.endTime)}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4>Name: </h4> <span>{e.name}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4>Email: </h4> <span>{e.email}</span>
                  </div>
                </div>
              ))
            ))
          }
        </div>
        {/* <Button variant="contained" onClick={() => navigate(`/slots`)}>
          Book Appointment
        </Button> */}
      </div>
    </Container>
  )
}

export default ListAppointments