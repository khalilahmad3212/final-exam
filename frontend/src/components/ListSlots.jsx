import React, { useEffect, useState } from 'react'
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

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

  useEffect(() => {
    getSlots();
  }, [])

  return (
    <div>
      <h1>Booked Appointments</h1>
      <div>
        {
          slots?.map((slot) => (
            <div key={slot._id}>
              <p>{slot.slot.startTime + slot.slot.startTime} </p>
              <Button variant="contained" onClick={() => navigate('/appointment/new')}>
                Book
              </Button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListSlots