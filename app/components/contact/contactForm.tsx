import InquiryForm from '../contact/InquiryForm'

export default function ContactForm() {
    return (
        <section className="pb-18">
            <div className="mx-auto max-w-3xl px-3">
                <div className="flex items-center justify-center gap-4">
                    <span className="h-0.5 w-8 bg-red-800 shrink-0" />
                    <h2 className="title is-5 type-title mb-0! uppercase">Send an Inquiry</h2>
                    <span className="h-0.5 w-8 bg-red-800 shrink-0" />
                </div>
                <p className="mt-3 text-sm opacity-70 text-center">
                    Tell us about your event and we&apos;ll get back to you fast.
                </p>
                <div className="mt-8">
                    <InquiryForm />
                </div>
            </div>
        </section>
    )
}
