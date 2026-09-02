import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SignalDivider } from "@/components/ui/SignalDivider";
import { SignalMotif } from "@/components/ui/SignalMotif";
import { contactContent, supportOptions, responseMethods } from "@/content/contact";

const formFields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "support", label: "What kind of support do you need?", type: "select", options: supportOptions, required: true },
  { name: "method", label: "Preferred response method", type: "radio", options: responseMethods, required: true },
  { name: "details", label: "Brief Details", type: "textarea", required: true }
];

export const metadata: Metadata = {
  title: "Contact Us | Goldapples",
  description: "Discuss your communication challenge with Goldapples."
};

export default function ContactPage() {
  const bodyParts = contactContent.body.split(". ");
  const mainParagraph = bodyParts.slice(0, -1).join(". ") + (bodyParts.length > 1 ? "." : "");
  const closingLine = bodyParts[bodyParts.length - 1];

  return (
    <>
      {/* Type-Led Editorial Hero */}
      <section className="bg-ink pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden relative">
        <Container className="relative z-10 lg:flex lg:flex-col lg:items-center lg:text-center">
          <Reveal>
            <p className="font-mono text-xs font-bold tracking-[0.15em] uppercase text-gold-deep mb-6">
              {contactContent.eyebrow}
            </p>
            <h1 className="text-white font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl max-w-[20ch]">
              {contactContent.heading}
            </h1>
            <div className="mt-8 max-w-[55ch] lg:mx-auto">
              <p className="text-champagne/80 text-[17px] md:text-lg leading-relaxed lg:text-justify lg:mx-auto">
                {mainParagraph}
              </p>
              <p className="text-gold-deep font-serif text-xl md:text-2xl mt-6 lg:text-center">
                {closingLine}
              </p>
            </div>
          </Reveal>

          {/* Deliberate Signal Motif Divider */}
          <Reveal delay={0.1} className="w-full mt-16 mb-6 lg:mt-20">
            <SignalDivider tone="gold" className="w-full !max-w-none [&_svg]:!max-w-none [&_svg]:w-full" />
          </Reveal>
        </Container>
      </section>

      {/* Two-Column Form Section */}
      <section className="bg-champagne py-24 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 lg:shadow-sm lg:rounded-xl overflow-hidden border border-graphite/5 lg:border-graphite/10">
            
            {/* Left: Info Panel (Ink) */}
            <div className="lg:col-span-4 bg-ink p-10 lg:p-14 flex flex-col relative">
              <Reveal>
                <p className="font-mono text-xs font-bold tracking-[0.15em] uppercase text-gold-deep mb-10">
                  Get In Touch
                </p>
                <h3 className="font-serif text-[1.75rem] leading-snug text-white mb-12">
                  Tell us what you need.
                </h3>
                
                <div className="flex flex-col gap-10">
                  <div>
                    <p className="font-mono text-xs font-bold tracking-widest text-white/40 mb-3">EMAIL</p>
                    <a href="mailto:gold@goldapples.ng" className="text-champagne hover:text-gold-deep transition-colors text-[17px]">
                      gold@goldapples.ng
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-bold tracking-widest text-white/40 mb-3">LOCATION</p>
                    <p className="text-champagne text-[17px]">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Subtle signal motif accent */}
              <div className="absolute bottom-0 right-0 w-64 text-gold-deep opacity-10 pointer-events-none translate-x-[20%] translate-y-[20%]">
                <SignalMotif />
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8 bg-white p-10 lg:p-16">
              <Reveal delay={0.1}>
                <form className="flex flex-col gap-10">
                  {formFields.map((field) => {
                    if (field.type === "textarea") {
                      return (
                        <div key={field.name} className="flex flex-col gap-3">
                          <label htmlFor={field.name} className="text-ink font-semibold text-[15px]">
                            {field.label} {field.required && <span className="text-gold-deep">*</span>}
                          </label>
                          <textarea
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            rows={4}
                            className="w-full bg-transparent border-b border-graphite/20 pb-3 pt-1 text-ink text-[16px] focus:outline-none focus:border-gold-deep transition-colors resize-y"
                            placeholder="Please provide details..."
                          />
                        </div>
                      );
                    }

                    if (field.type === "select") {
                      return (
                        <div key={field.name} className="flex flex-col gap-3">
                          <label htmlFor={field.name} className="text-ink font-semibold text-[15px]">
                            {field.label} {field.required && <span className="text-gold-deep">*</span>}
                          </label>
                          <select
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            defaultValue=""
                            className="w-full bg-transparent border-b border-graphite/20 pb-3 pt-1 text-ink text-[16px] focus:outline-none focus:border-gold-deep transition-colors cursor-pointer"
                          >
                            <option value="" disabled>Select an option</option>
                            {field.options?.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      );
                    }

                    if (field.type === "radio") {
                      return (
                        <div key={field.name} className="flex flex-col gap-4">
                          <span className="text-ink font-semibold text-[15px]">
                            {field.label} {field.required && <span className="text-gold-deep">*</span>}
                          </span>
                          <div className="flex flex-wrap gap-8">
                            {field.options?.map(opt => (
                              <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                  type="radio"
                                  name={field.name}
                                  value={opt}
                                  required={field.required}
                                  className="w-4 h-4 text-gold-deep accent-gold-deep border-graphite/20 focus:ring-gold-deep"
                                />
                                <span className="text-[16px] text-graphite group-hover:text-ink transition-colors">
                                  {opt}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    if (field.type === "tel") {
                      return (
                        <div key={field.name} className="flex flex-col gap-3">
                          <label htmlFor={field.name} className="text-ink font-semibold text-[15px]">
                            {field.label} {field.required && <span className="text-gold-deep">*</span>}
                          </label>
                          <div className="flex gap-4">
                            <select
                              name={`${field.name}Code`}
                              className="w-[110px] shrink-0 bg-transparent border-b border-graphite/20 pb-3 pt-1 text-ink text-[16px] focus:outline-none focus:border-gold-deep transition-colors cursor-pointer"
                              defaultValue="+234"
                            >
                              <option value="+234">NG (+234)</option>
                              <option value="+1">US (+1)</option>
                              <option value="+44">UK (+44)</option>
                              <option value="+27">ZA (+27)</option>
                              <option value="+254">KE (+254)</option>
                              <option value="+233">GH (+233)</option>
                            </select>
                            <input
                              type="tel"
                              id={field.name}
                              name={field.name}
                              required={field.required}
                              className="flex-1 bg-transparent border-b border-graphite/20 pb-3 pt-1 text-ink text-[16px] focus:outline-none focus:border-gold-deep transition-colors"
                              placeholder="Phone number"
                            />
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={field.name} className="flex flex-col gap-3">
                        <label htmlFor={field.name} className="text-ink font-semibold text-[15px]">
                          {field.label} {field.required && <span className="text-gold-deep">*</span>}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          className="w-full bg-transparent border-b border-graphite/20 pb-3 pt-1 text-ink text-[16px] focus:outline-none focus:border-gold-deep transition-colors"
                          placeholder={`Your ${field.label.toLowerCase()}`}
                        />
                      </div>
                    );
                  })}

                  <div className="pt-6">
                    <Button type="submit" variant="gold" className="w-full sm:w-auto px-10 h-14 text-base">
                      {contactContent.cta}
                    </Button>
                  </div>
                </form>
              </Reveal>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
