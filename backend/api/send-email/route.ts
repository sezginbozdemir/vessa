/*
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "./sendEmail";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, subject, text } = body;

    await sendEmail(to, subject, text);

    return NextResponse.json(
      { message: "E-mail trimis cu succes!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Eroare la trimiterea e-mailului" },
      { status: 500 }
    );
  }
}
*/
import { Router } from 'express';
import { sendEmail } from './sendEmail'; // Import the sendEmail function

const router = Router();

// Define the POST route for sending email
router.post('/', async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    await sendEmail(to, subject, text);
    res.status(200).json({ message: 'E-mail trimis cu succes!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Eroare la trimiterea e-mailului' });
  }
});

export default router;
