import { Reveal } from "@/components/ui/Reveal";

export type Step = { number: string; title: string; description: string };

export function Stepper({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-5 md:gap-6">
      {steps.map((step, i) => (
        <Reveal
          key={step.number}
          delay={i * 0.05}
          className="relative flex flex-col gap-3"
        >
          <span className="text-gold-deep font-mono text-sm font-semibold">
            {step.number}
          </span>
          <h3 className="text-ink font-sans text-lg font-semibold">{step.title}</h3>
          <p className="text-steel text-sm leading-relaxed">{step.description}</p>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="from-gold-deep to-gold absolute top-2 right-[-1.25rem] hidden h-px w-6 bg-linear-to-r md:block"
            />
          )}
        </Reveal>
      ))}
    </div>
  );
}
