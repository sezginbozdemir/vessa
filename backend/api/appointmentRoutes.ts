import express from "express";

import {
  createAppointment,
  deleteAppointment,
  getAppointmentById,
  getAppointments,
  getBookedSlots,
  updateAppointment,
} from "../controllers/appointmentController";

const router = express.Router();
router.get("/appointments/booked-slots", getBookedSlots);
router.post("/appointments", createAppointment);

// Get all appointments
router.get("/appointments", getAppointments);

// Get a single appointment by id
router.get("/appointments/:id", getAppointmentById);

// Update an appointment by id
router.put("/appointments/:id", updateAppointment);

// Delete an appointment by id
router.delete("/appointments/:id", deleteAppointment);

export default router;
