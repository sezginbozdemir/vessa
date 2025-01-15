import mongoose, { Document, Schema } from "mongoose";

export interface AppointmentDocument extends Document {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  specialization: string;
  doctor: string;
  date: String;
  timeSlot: string;
  isModify: boolean;
  appointmentType: string;
  createdAt?: Date;
  createdBy?: string;
}

const AppointmentSchema = new Schema<AppointmentDocument>({
  lastName: { type: String, required: true },
  firstName: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  specialization: { type: String, required: true },
  doctor: { type: String, required: true },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  appointmentType: { type: String, required: true },
  createdBy: { type: String, required: true },
  isModify: {
    type: Boolean,
    default: false,
  },
});

const Appointment = mongoose.model<AppointmentDocument>(
  "Appointment",
  AppointmentSchema
);

export default Appointment;
