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

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

    let sheetOk = false;
    let emailOk = false;

    if (webhookUrl) {
      try {
        const pageUrl = req.headers.get("referer") ?? "";
        const userAgent = req.headers.get("user-agent") ?? "";

        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            form: "contact",
            ...parsed.data,
            pageUrl,
            userAgent,
            secret: webhookSecret || undefined
          })
        });

        sheetOk = res.ok;
        if (!sheetOk) {
          const text = await res.text().catch(() => "");
          console.warn("Google Sheets webhook failed", { status: res.status, text });
        }
      } catch (e) {
        console.warn("Google Sheets webhook error", e);
      }
    }

    try {
      await sendContactEmail(parsed.data);
      emailOk = true;
    } catch (e) {
      // Email is optional in some deployments; don't fail the whole request if Sheets is working.
      console.warn("Contact email send failed", e);
    }

    if (!sheetOk && !emailOk) {
      return NextResponse.json({ error: "Failed to submit message" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
