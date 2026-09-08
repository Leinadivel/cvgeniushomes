"use client";

import { FormEvent, useEffect, useState } from "react";

const trades = [
  "Bricklaying",
  "Carpentry & Joinery",
  "Plumbing",
  "Electrical Installation",
  "Wall & Floor Tiling",
  "Glazing",
];

type TrainingApplicationProps = {
  selectedTrade?: string;
  triggerText?: string;
  triggerClassName?: string;
  cardTrigger?: boolean;
  children?: React.ReactNode;
};

export default function TrainingApplication({
  selectedTrade = "",
  triggerText = "Apply Now",
  triggerClassName = "training-apply-button",
  cardTrigger = false,
  children,
}: TrainingApplicationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [trade, setTrade] = useState(selectedTrade);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  function openModal() {
    setTrade(selectedTrade);
    setStatus({
      type: "",
      message: "",
    });
    setIsOpen(true);
  }

  function closeModal() {
    if (!loading) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, loading]);

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
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      trade: formData.get("trade"),
      location: formData.get("location"),
      education: formData.get("education"),
      experience: formData.get("experience"),
      reason: formData.get("reason"),
    };

    try {
      const response = await fetch("/api/training-application", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit your application."
        );
      }

      setStatus({
        type: "success",
        message:
          "Application submitted successfully. Our Training Institute team will contact you.",
      });

      form.reset();
      setTrade(selectedTrade);
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
    <>
      {cardTrigger ? (
        <button
          type="button"
          className="trade-card trade-card-button"
          onClick={openModal}
        >
          {children}
          <span className="trade-apply-link">
            Apply for this trade →
          </span>
        </button>
      ) : (
        <button
          type="button"
          className={triggerClassName}
          onClick={openModal}
        >
          {triggerText}
        </button>
      )}

      {isOpen && (
        <div
          className="training-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="training-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="training-modal-title"
          >
            <button
              type="button"
              className="training-modal-close"
              onClick={closeModal}
              aria-label="Close application form"
            >
              ×
            </button>

            <div className="training-modal-header">
              <span>TRAINING INSTITUTE</span>

              <h2 id="training-modal-title">
                Apply for Apprenticeship Training
              </h2>

              <p>
                Complete the form below to begin your application for the
                CVGeniusHomes 24-month apprenticeship programme.
              </p>
            </div>

            <form
              className="training-modal-form"
              onSubmit={handleSubmit}
            >
              <div className="training-form-row">
                <div className="training-form-field">
                  <label htmlFor={`fullName-${selectedTrade || "general"}`}>
                    Full Name *
                  </label>

                  <input
                    id={`fullName-${selectedTrade || "general"}`}
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="training-form-field">
                  <label htmlFor={`phone-${selectedTrade || "general"}`}>
                    Phone Number *
                  </label>

                  <input
                    id={`phone-${selectedTrade || "general"}`}
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="training-form-row">
                <div className="training-form-field">
                  <label htmlFor={`email-${selectedTrade || "general"}`}>
                    Email Address *
                  </label>

                  <input
                    id={`email-${selectedTrade || "general"}`}
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="training-form-field">
                  <label htmlFor={`location-${selectedTrade || "general"}`}>
                    Location *
                  </label>

                  <input
                    id={`location-${selectedTrade || "general"}`}
                    type="text"
                    name="location"
                    placeholder="City / State"
                    required
                  />
                </div>
              </div>

              <div className="training-form-field">
                <label htmlFor={`trade-${selectedTrade || "general"}`}>
                  Preferred Construction Trade *
                </label>

                <select
                  id={`trade-${selectedTrade || "general"}`}
                  name="trade"
                  value={trade}
                  onChange={(event) => setTrade(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select your preferred trade
                  </option>

                  {trades.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="training-form-field">
                <label htmlFor={`education-${selectedTrade || "general"}`}>
                  Education Level *
                </label>

                <select
                  id={`education-${selectedTrade || "general"}`}
                  name="education"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select education level
                  </option>

                  <option value="Primary Education">
                    Primary Education
                  </option>

                  <option value="Secondary Education">
                    Secondary Education
                  </option>

                  <option value="OND / NCE">
                    OND / NCE
                  </option>

                  <option value="HND / Degree">
                    HND / Degree
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div className="training-form-field">
                <label htmlFor={`experience-${selectedTrade || "general"}`}>
                  Previous Construction Experience
                </label>

                <textarea
                  id={`experience-${selectedTrade || "general"}`}
                  name="experience"
                  rows={3}
                  placeholder="Tell us about any previous experience you have. If none, write None."
                ></textarea>
              </div>

              <div className="training-form-field">
                <label htmlFor={`reason-${selectedTrade || "general"}`}>
                  Why do you want to learn this trade? *
                </label>

                <textarea
                  id={`reason-${selectedTrade || "general"}`}
                  name="reason"
                  rows={4}
                  placeholder="Tell us briefly why you are interested in this apprenticeship..."
                  required
                ></textarea>
              </div>

              <div className="training-modal-consent">
                <input
                  type="checkbox"
                  id={`trainingConsent-${selectedTrade || "general"}`}
                  required
                />

                <label
                  htmlFor={`trainingConsent-${selectedTrade || "general"}`}
                >
                  I confirm that the information provided is correct and I
                  agree that CVGeniusHomes may contact me regarding my
                  application.
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
                className="training-modal-submit"
                disabled={loading}
              >
                {loading
                  ? "Submitting Application..."
                  : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}