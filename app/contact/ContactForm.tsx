"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      enquiryType: formData.get("enquiryType"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you. Your enquiry has been submitted successfully.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact-form-card" id="contact-form">
      <div className="about-section-label">
        <span>SEND AN ENQUIRY</span>
        <div></div>
      </div>

      <h2>Tell Us What You Need</h2>

      <p className="contact-form-intro">
        Complete the form below with your details and a short
        description of your enquiry.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="contact-form-row">

          <div className="contact-field">
            <label htmlFor="firstName">
              First Name *
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="lastName">
              Last Name *
            </label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>

        </div>

        <div className="contact-form-row">

          <div className="contact-field">
            <label htmlFor="email">
              Email Address *
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="phone">
              Phone Number *
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

        </div>

        <div className="contact-field">
          <label htmlFor="enquiryType">
            Enquiry Type *
          </label>

          <select
            id="enquiryType"
            name="enquiryType"
            defaultValue=""
            required
          >

            <option value="" disabled>
              Select an enquiry type
            </option>

            <option value="Construction Project">
              Construction Project
            </option>

            <option value="Renovation & Remodeling">
              Renovation & Remodeling
            </option>

            <option value="Property Enquiry">
              Property Enquiry
            </option>

            <option value="Property Development / Partnership">
              Property Development / Partnership
            </option>

            <option value="Project Management / Site Supervision">
              Project Management / Site Supervision
            </option>

            <option value="Training Institute">
              Training Institute
            </option>

            <option value="Other Enquiry">
              Other Enquiry
            </option>

          </select>
        </div>

        <div className="contact-field">
          <label htmlFor="location">
            Project / Preferred Location
          </label>

          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location if applicable"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="message">
            Tell Us More *
          </label>

          <textarea
            id="message"
            name="message"
            rows={7}
            placeholder="Tell us about your project, property enquiry, training interest or any other requirement..."
            required
          ></textarea>
        </div>

        <div className="contact-consent">

          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
          />

          <label htmlFor="consent">
            I agree that CVGeniusHomes may contact me regarding
            this enquiry.
          </label>

        </div>

        {status.message && (
          <div
            className={
              status.type === "success"
                ? "form-message form-success"
                : "form-message form-error"
            }
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          className="contact-submit"
          disabled={loading}
        >
          {loading ? "Sending Enquiry..." : "Submit Enquiry"}
        </button>

      </form>
    </div>
  );
}