import React, { useEffect, useState } from 'react'
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Container from './Layouts/Container';

const ListSlots = () => {

  const navigate = useNavigate();
  const [slots, setSlots] = useState([]);

  const getSlots = () => {
    api.get("/slots")
      .then(({ data }) => {
        console.log('Res: ', data);
        setSlots(data);
      }).catch((err) => {
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
    getSlots();
  }, [])

  return (
    <Container>
      <div style={{ height: '100vh' }}>
        <h1>Booked Appointments</h1>
        <div>
          {
            slots?.map((slot) => (
              <div key={slot._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h4>Start Time: </h4><span>{getTime(slot.startTime)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h4>End Time: </h4> <span>{getTime(slot.endTime)}</span>
                </div>
                <Button variant="contained" onClick={() => navigate(`/appointment/${slot._id}/create`)}>
                  Book
                </Button>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default ListSlots