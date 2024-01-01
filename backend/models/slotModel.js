import mongoose from "mongoose";

const slotSchema = new Schema({
  startTime: {
    type: String
  },
  startTime: {
    type: String
  },
  appointments: [{
    name: String,
    email: String,
  },],
}, { timestamps: true });

export const Slot = mongoose.model('Slot', slotSchema)