import React from 'react'
import CreateAppointmentForm from './CreateAppointmentForm'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import Container from './Layouts/Container';

const CreateAppointment = () => {
  const { slotId } = useParams();

  return (
    <Container>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{
          maxWidth: "500px",
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          margin: 'auto',
          padding: '20px 30px'
        }}>
          <h1>CreateAppointment</h1>
          <CreateAppointmentForm slotId={slotId} />
        </Box>
      </div >
    </Container>

  )
}

export default CreateAppointment