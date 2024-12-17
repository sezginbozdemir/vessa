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
