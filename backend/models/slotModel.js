import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  appointments: [{
    name: String,
    email: String,
  },],
}, { timestamps: true });

export const Slot = mongoose.model('Slot', slotSchema)