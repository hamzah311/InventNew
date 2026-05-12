"use client";

import styles from "./ContactForm.module.css";

interface ContactFormProps {
  data?: {
    formAction?: string;
    whatsappNumber?: string;
  };
}

export default function ContactForm({ data }: ContactFormProps) {
  const formAction =
    data?.formAction ??
    "https://formsubmit.co/info@inventelevator.com";

  const whatsappNumber = data?.whatsappNumber ?? "971523753356";

  return (
    <section className={styles.wrapper}>
      <div className={styles.formBox}>
        <form
          className={styles.form}
          action={formAction}
          method="POST"
        >
          {/* Hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Hero Form Submission"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
          />
          <input
            type="hidden"
            name="_autoresponse"

          />

          {/* Fields */}
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            required
            className={styles.input}
          />

          <select
            name="service"
            required
            className={styles.select}
          >
            <option value="">Select Service</option>
            <option value="Home Lift">Lift 1</option>
            <option value="Glass Elevator">Lift 2</option>
            <option value="Maintenance">Lift 3</option>
            <option value="Consultation">Lift 4</option>
          </select>

          

          <div className={styles.formActions}>
            <button
              type="submit"
              className={styles.submitBtn}
            >
              Submit
            </button>

            
          </div>
        </form>
      </div>
    </section>
  );
}