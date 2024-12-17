import { Request, Response } from "express";
import Appointment from "../models/Appointments";

// Create an appointment
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const {
      lastName,
      firstName,
      email,
      phone,
      specialization,
      doctor,
      date,
      timeSlot,
      isModify,
      appointmentType,
    } = req.body;

    const formattedDate = new Date(date).toISOString().split("T")[0]; // Obținem doar "YYYY-MM-DD"

    // Verificare programare existentă
    const existingAppointment = await Appointment.findOne({
      doctor,
      date: formattedDate,
      timeSlot,
    });

    if (existingAppointment) {
      res.status(400).json({
        message:
          "Există deja o programare pentru acest doctor la data și ora selectată.",
      });
      return; // Exit the function after sending the response
    }

    const newAppointment = new Appointment({
      lastName,
      firstName,
      email,
      phone,
      specialization,
      doctor,
      date: formattedDate,
      timeSlot,
      isModify,
      appointmentType,
    });

    await newAppointment.save();

    res.status(201).json({ message: "Programarea a fost creată cu succes!" });
  } catch (error) {
    res.status(500).json({ message: "Eroare la crearea programării", error });
  }
};

// Get all appointments
export const getAppointments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving appointments", error });
  }
};

// Get a single appointment by id
export const getAppointmentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      res.status(404).json({ message: "Appointment not found" });
      return; // Trebuie să ieșim din funcție
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving appointment", error });
  }
};

// Update an appointment by id
export const updateAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const {
    lastName,
    firstName,
    email,
    phone,
    specialization,
    doctor,
    date,
    timeSlot,
    isModify,
    appointmentType,
  } = req.body;

  const formattedDate = new Date(date).toISOString().split("T")[0];

  try {
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      {
        lastName,
        firstName,
        email,
        phone,
        specialization,
        doctor,
        date: formattedDate,
        timeSlot,
        isModify,
        appointmentType,
      },
      { new: true, runValidators: true }
    );

    if (!appointment) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Appointment updated successfully", appointment });
  } catch (error) {
    res.status(500).json({ message: "Error updating appointment", error });
  }
};

// Delete an appointment by id
export const deleteAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting appointment", error });
  }
};

// Funcție pentru a verifica timeSlot-urile rezervate
export const getBookedSlots = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const doctor = req.query.doctor as string;
    const date = req.query.date as string;

    // Verifică dacă parametrii de query sunt prezenți
    if (!doctor || !date) {
      console.error("Missing doctor or date query parameters.");
      res.status(400).json({ message: "Doctor and date are required" });
      return;
    }

    // Găsește programările pentru doctor și dată
    const bookedAppointments = await Appointment.find({
      doctor: doctor,
      date: date,
    }).select("timeSlot -_id");

    const bookedSlots = bookedAppointments.map(
      (appointment) => appointment.timeSlot
    );

    res.status(200).json(bookedSlots);
  } catch (error) {
    console.error("Error retrieving appointment:", error);
    res.status(500).json({ message: "Error retrieving appointment", error });
  }
};
