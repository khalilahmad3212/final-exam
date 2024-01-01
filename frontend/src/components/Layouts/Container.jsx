import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Container = ({ children }) => {

  const navigate = useNavigate();

  return (
    <div style={{
      maxWidth: '1440px',
      margin: 'auto',
      padding: '0px 20px'
    }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Button variant="contained" onClick={() => navigate(`/slot/create`)}>
          Create Slot
        </Button>
        <Button variant="contained" onClick={() => navigate(`/slots`)}>
          Book Appointment
        </Button>
        {/* <Button variant="contained" onClick={() => navigate(`/slots`)}>
          Slots
        </Button> */}
        <Button variant="contained" onClick={() => navigate(`/appointments`)}>
          Appointments
        </Button>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Container