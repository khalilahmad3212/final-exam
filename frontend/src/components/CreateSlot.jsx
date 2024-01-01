import React from 'react'
import CreateSlotForm from './CreateSlotForm'
import Container from './Layouts/Container'
import { Box } from '@mui/material'

const CreateSlot = () => {
  return (
    <Container>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{
          maxWidth: "500px",
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          margin: 'auto',
          padding: '20px 30px'
        }}>
          <h1>Create Slot</h1>
          <CreateSlotForm />
        </Box>
      </div>
    </Container>

  )
}

export default CreateSlot