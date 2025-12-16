"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormInput } from "@/lib/validators";
import styles from "./ContactForm.module.scss";

interface ContactFormProps {
  onSuccess?: () => void;
}

const services = [
  "Bladeless LASIK",
  "Cataract Surgery",
  "Retina & Vitreous Care",
  "Glaucoma Management",
  "Dry Eye Treatment",
  "Contact Lens Fitting",
  "Comprehensive Eye Exam",
  "Other"
];

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit: SubmitHandler<ContactFormInput> = async (values) => {
    setStatus("idle");

    try {
      const formData = new FormData();
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || "");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone || "");
      formData.append("service", values.service || "");
      formData.append("message", values.message);
      formData.append("from_name", "Lakhotia Eye Centre Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        reset();
        setTimeout(() => {
          onSuccess?.();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name">Full Name *</label>
          <input id="name" type="text" {...register("name")} placeholder="Enter your name" />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" {...register("email")} placeholder="name@example.com" />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" {...register("phone")} placeholder="+91 9XXXXXXXXX" />
          {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="service">Service or Problem *</label>
          <select id="service" {...register("service")} defaultValue="">
            <option value="">Select a service or problem</option>
            {services.map((svc) => (
              <option key={svc} value={svc}>
                {svc}
              </option>
            ))}
          </select>
          {errors.service && <span className={styles.error}>{errors.service.message}</span>}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="message">Explain Your Problem *</label>
        <textarea id="message" rows={3} {...register("message")} placeholder="Tell us about your eye care concerns or what problem you'd like to discuss..." />
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>

      <button type="submit" className={styles.submit} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className={styles.success}>
          ✓ Thank you for contacting Lakhotia Eye Centre! Our team will respond within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className={styles.error}>
          ✗ Unable to send message. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
