"use client"

import { useState, type FormEvent } from "react"
import { gildaDisplay } from "../_app"

type FormStatus = "idle" | "submitting" | "success" | "pending" | "error"

export default function WeddingContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus("submitting")
    setFeedback("")

    try {
      const response = await fetch("/api/weddings/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          wedding_date: data.get("wedding_date"),
          message: data.get("message"),
          _postme_hp: data.get("_postme_hp"),
        }),
      })
      const result = await response.json()

      if (!result.ok) {
        setStatus("error")
        setFeedback(result.message || "Something went wrong. Please try again.")
        return
      }

      if (result.status === "pending_confirmation") {
        setStatus("pending")
        setFeedback(
          result.message ||
            "Check hello@ogjayp.com to confirm this form, then try again."
        )
        return
      }

      form.reset()
      setStatus("success")
      setFeedback(result.message || "Thanks — we'll be in touch soon.")
    } catch {
      setStatus("error")
      setFeedback("Something went wrong. Please try again.")
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-emerald-800/20 py-3 text-base text-emerald-950 placeholder:text-muted-foreground/50 focus:outline-none focus:border-emerald-800/60 transition-colors"

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <label className="block">
          <span className="sr-only">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Email"
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="sr-only">Wedding date</span>
        <input
          type="text"
          name="wedding_date"
          placeholder="Wedding date (optional)"
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your day"
          className={`${inputClass} resize-none`}
        />
      </label>

      {/* Honeypot — keep empty */}
      <input
        type="text"
        name="_postme_hp"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="text-center pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`relative text-xl text-emerald-800 hover:text-emerald-900 disabled:opacity-50 disabled:pointer-events-none transition-colors ${gildaDisplay.className}
            after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full
            after:h-px after:bg-emerald-800/30 after:transition-all after:duration-300
            hover:after:h-[3px] hover:after:bg-emerald-800/50`}
        >
          {status === "submitting" ? "Sending…" : "Send a Note"}
        </button>
      </div>

      {feedback && (
        <p
          role="status"
          className={`text-center text-sm ${
            status === "error" ? "text-red-700" : "text-emerald-800"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  )
}
