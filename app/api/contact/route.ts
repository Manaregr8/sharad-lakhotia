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
    const sheetsEnabled = Boolean(webhookUrl);

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

    // If Apps Script is configured, treat saving to Sheets as the primary success criteria.
    if (sheetsEnabled && !sheetOk) {
      return NextResponse.json(
        { ok: false, sheetOk, emailOk, error: "Failed to save to Google Sheets" },
        { status: 502 }
      );
    }

    // If Sheets is not configured, fall back to email-only mode.
    if (!sheetsEnabled && !emailOk) {
      return NextResponse.json(
        { ok: false, sheetOk, emailOk, error: "Failed to submit message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, sheetOk, emailOk });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
