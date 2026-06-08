'use client'

import { useActionState } from 'react'
import { submitInquiry, type InquiryState } from '@/app/actions/inquiry'

export default function InquiryForm() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(
    submitInquiry,
    null
  )

  if (state?.success) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800">Inquiry sent!</h3>
        <p className="mt-1 text-green-700">Check your email — we'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-4">
      {state?.error && (
        <p className="rounded bg-red-50 p-3 text-sm text-red-700">{state.error}</p>
      )}

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium">First Name *</label>
          <input
            name="firstName"
            required
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="Jane"
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium">Last Name *</label>
          <input
            name="lastName"
            required
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Email *</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded border px-3 py-2 text-sm"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Phone</label>
        <input
          name="phone"
          type="tel"
          className="w-full rounded border px-3 py-2 text-sm"
          placeholder="(555) 000-0000"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium">Event Date *</label>
          <input
            name="eventDate"
            type="date"
            required
            className="w-full rounded border px-3 py-2 text-sm"
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium">Guest Count</label>
          <input
            name="guestCount"
            type="number"
            min="1"
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="50"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Event Address *</label>
        <input
          name="eventAddress"
          required
          className="w-full rounded border px-3 py-2 text-sm"
          placeholder="123 Party Lane, Houston TX"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded border px-3 py-2 text-sm"
          placeholder="Tell us about your event..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded bg-black py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        {pending ? 'Sending...' : 'Submit Inquiry'}
      </button>
    </form>
  )
}
