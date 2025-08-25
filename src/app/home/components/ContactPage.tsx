"use client";

import { useForm, ValidationError } from "@formspree/react";

interface ContactPageProps {
  onClose: () => void;
  animationClass: string;
}

export default function ContactPage({
  onClose,
  animationClass,
}: ContactPageProps) {
  const [state, handleSubmit] = useForm("xqadzogg"); // Formspree ID

  return (
    <div
      className={`absolute inset-0 bg-[#4b4941] rounded-xl shadow-lg overflow-auto ${animationClass}`}
    >
      <div className="p-6">
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-white font-bold">Contact</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-white hover:text-gray-500"
          >
            ×
          </button>
        </div>

        {/* Contact Form */}
        {state.succeeded ? (
          <p className="text-white font-medium">
            Thanks for reaching out! <br /> I will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-[#3a372f] rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a372f] bg-[rgba(206,195,175,0.1)]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-[#3a372f] rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a372f] bg-[rgba(206,195,175,0.1)]"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="border border-[#3a372f] rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a372f] bg-[rgba(206,195,175,0.1)]"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-black text-white px-4 py-4 rounded hover:bg-[#3a372f] transition disabled:opacity-50"
            >
              {state.submitting ? "Submitting..." : `Let's Connect`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
