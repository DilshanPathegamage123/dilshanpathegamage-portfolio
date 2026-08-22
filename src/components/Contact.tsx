import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../lib/emailjs";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.get("name"),
          reply_to: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS send failed", err);
      setStatus("error");
    }
  }

  return (
    <section className="section alt" id="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let's build something</h2>
            <p className="contact-invite">
              Whether it's a question, an opportunity, or just feedback — I'd love to hear from you.
            </p>
            <div className="contact-chips">
              <a className="contact-chip" href={`mailto:${profile.email}`}>
                <div className="ic">✉</div>
                <div>
                  <div className="k">Email</div>
                  <div className="v">{profile.email}</div>
                </div>
              </a>
              <a className="contact-chip" href={profile.linkedin} target="_blank" rel="noreferrer">
                <div className="ic">in</div>
                <div>
                  <div className="k">LinkedIn</div>
                  <div className="v">/in/dilshan-pathegamage</div>
                </div>
              </a>
              <a className="contact-chip" href={`tel:${profile.phoneHref}`}>
                <div className="ic">☎</div>
                <div>
                  <div className="k">Phone</div>
                  <div className="v">{profile.phone}</div>
                </div>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="Jane Recruiter" required />
              </div>
              <div className="field">
                <label htmlFor="email">Your email</label>
                <input id="email" name="email" type="email" placeholder="jane@company.com" required />
              </div>
            </div>
            <div className="field full">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Let's talk about..." required />
            </div>
            <div className="field full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Hi Dilshan, ..." required />
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <div className="form-note" role="status" aria-live="polite">
              {status === "success" && "Message sent — thanks for reaching out, I'll reply soon."}
              {status === "error" && "Something went wrong. Please try emailing me directly instead."}
              {(status === "idle" || status === "sending") && "Sent directly to my inbox — no backend required."}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
