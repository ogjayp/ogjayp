import { NextResponse } from "next/server"

const POSTME_URL = "https://www.postme.dev/submit/hello@ogjayp.com"

export async function POST(request: Request) {
  try {
    const incoming = await request.json()

    if (incoming._postme_hp) {
      return NextResponse.json({
        ok: true,
        status: "sent",
        message: "Thanks — we'll be in touch soon.",
      })
    }

    const name = String(incoming.name ?? "").trim()
    const email = String(incoming.email ?? "").trim()
    const message = String(incoming.message ?? "").trim()
    const weddingDate = String(incoming.wedding_date ?? "").trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          status: "error",
          message: "Please fill in name, email, and message.",
        },
        { status: 400 }
      )
    }

    const payload: Record<string, string | boolean> = {
      name,
      email,
      message,
      _replyto: email,
      _subject: "Wedding inquiry from ogjayp.com",
      _postme_json: true,
      _postme_message: "Thanks — we'll be in touch soon.",
      _postme_pending_message:
        "Check hello@ogjayp.com to confirm this form, then try again.",
    }

    if (weddingDate) {
      payload.wedding_date = weddingDate
    }

    const response = await fetch(POSTME_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "manual",
    })

    // HTML thank-you redirect still counts as a successful submit.
    if (response.status >= 300 && response.status < 400) {
      return NextResponse.json({
        ok: true,
        status: "sent",
        message: "Thanks — we'll be in touch soon.",
      })
    }

    const contentType = response.headers.get("content-type") ?? ""
    if (contentType.includes("application/json")) {
      const result = await response.json()
      return NextResponse.json(result, { status: response.ok ? 200 : 502 })
    }

    if (response.ok) {
      return NextResponse.json({
        ok: true,
        status: "sent",
        message: "Thanks — we'll be in touch soon.",
      })
    }

    return NextResponse.json(
      {
        ok: false,
        status: "error",
        message: "Something went wrong. Please try again.",
      },
      { status: 502 }
    )
  } catch {
    return NextResponse.json(
      {
        ok: false,
        status: "error",
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    )
  }
}
