import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    await sendContactEmail(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
