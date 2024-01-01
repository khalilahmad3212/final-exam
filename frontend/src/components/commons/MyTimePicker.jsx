import React, { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function MyTimePicker({ label, setFieldValue, fieldName }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
    console.log(newTime);
    setFieldValue(fieldName, newTime)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}
        value={selectedTime}
        onChange={handleTimeChange}
        ampm={false}
        openTo="hours"
        views={['hours', 'minutes']}
      />
    </LocalizationProvider>
  );
}