'use client'

import { useActionState } from 'react'
import { Check } from 'lucide-react'
import { submitInquiry, type InquiryState } from '@/app/actions/inquiry'

const labelClass = 'mb-1 block type-title text-xs font-bold tracking-wide'
const inputClass =
  'w-full rounded border border-blue-700/20 bg-background px-3 py-2 text-sm transition-colors focus:border-red-800 focus:outline-none'

export default function InquiryForm() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(
    submitInquiry,
    null
  )

  if (state?.success) {
    return (
      <div className="rounded border border-blue-700/20 p-8 text-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-700 text-white">
          <Check size={24} />
        </span>
        <h3 className="type-title mt-4 text-lg font-bold">Inquiry sent!</h3>
        <p className="mt-1 text-sm opacity-70">Check your email — we&apos;ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-4">
      {state?.error && (
        <p className="rounded border border-red-800/30 bg-red-800/5 p-3 text-sm text-red-800">{state.error}</p>
      )}

      <div className="flex gap-4">
        <div className="flex-1">
          <label className={labelClass}>First Name *</label>
          <input
            name="firstName"
            required
            className={inputClass}
            placeholder="Jane"
          />
        </div>
        <div className="flex-1">
          <label className={labelClass}>Last Name *</label>
          <input
            name="lastName"
            required
            className={inputClass}
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className={labelClass}>Phone</label>
        <input
          name="phone"
          type="tel"
          className={inputClass}
          placeholder="(555) 000-0000"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className={labelClass}>Event Date *</label>
          <input
            name="eventDate"
            type="date"
            required
            className={inputClass}
          />
        </div>
        <div className="flex-1">
          <label className={labelClass}>Guest Count</label>
          <input
            name="guestCount"
            type="number"
            min="1"
            className={inputClass}
            placeholder="50"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Event Address *</label>
        <input
          name="eventAddress"
          required
          className={inputClass}
          placeholder="123 Party Lane, Houston TX"
        />
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us about your event..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`button is-danger is-fullwidth type-title text-xs! font-bold uppercase${pending ? ' is-loading' : ''}`}
      >
        Submit Inquiry
      </button>
    </form>
  )
}
