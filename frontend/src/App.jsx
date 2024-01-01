import { Route, Router, Routes } from "react-router-dom"
import ListAppointments from "./components/ListAppointments"
import CreateAppointment from "./components/CreateAppointment"
import ListSlots from "./components/ListSlots"
import CreateSlot from "./components/CreateSlot"

function App() {

  return (
    <Routes>
      <Route path="/appointments" element={<ListAppointments />} />
      <Route path="/appointment/:slotId/create" element={<CreateAppointment />} />
      <Route path="/slots" element={<ListSlots />} />
      <Route path="/slot/create" element={<CreateSlot />} />
    </Routes>
  )
}

export default App
