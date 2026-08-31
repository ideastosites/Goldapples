"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { supportOptions, responseMethods, contactContent } from "@/content/contact";

const fieldClasses =
  "border-graphite/20 focus:border-gold-deep w-full border-b bg-transparent px-0 py-3 text-base text-ink outline-none transition-colors duration-150 placeholder:text-steel/50";
const labelClasses = "text-ink text-sm font-semibold";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      organisation: String(data.get("organisation") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      supportType: String(data.get("supportType") ?? ""),
      challenge: String(data.get("challenge") ?? ""),
      responseMethod: String(data.get("responseMethod") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-gold-deep border-l-2 py-6 pl-6">
        <p className="text-ink font-serif text-2xl">Brief received.</p>
        <p className="text-steel mt-3 max-w-[50ch] text-[15px] leading-relaxed">
          Thank you — we&apos;ve received your brief and will respond using your preferred
          method as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="organisation" className={labelClasses}>
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            className={fieldClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input id="email" name="email" type="email" required className={fieldClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" required className={fieldClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="supportType" className={labelClasses}>
          What do you need support with?
        </label>
        <select id="supportType" name="supportType" required className={fieldClasses}>
          <option value="">Select an option</option>
          {supportOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="challenge" className={labelClasses}>
          Briefly describe your challenge/need
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={5}
          required
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className={labelClasses}>Preferred response method</legend>
        <div className="flex flex-wrap gap-6">
          {responseMethods.map((method, i) => (
            <label
              key={method}
              className="text-steel has-checked:text-ink flex items-center gap-2 text-sm"
            >
              <input
                type="radio"
                name="responseMethod"
                value={method}
                defaultChecked={i === 0}
                required
                className="accent-gold-deep h-4 w-4"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="gold"
        disabled={status === "submitting"}
        className="self-start disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : contactContent.cta}
      </Button>
    </form>
  );
}
