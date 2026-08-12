import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whyGoldapples } from "@/content/home";

const stats = [
  { value: "30+", label: "Years of communication and media experience" },
  { value: "6", label: "Original communication frameworks" },
  { value: "4", label: "Core practice areas" },
];

export function WhyGoldapples() {
  return (
    <section className="border-graphite/10 border-t py-24 lg:py-32">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>09 — Why Goldapples</Eyebrow>
            <h2 className="text-ink mt-4 max-w-[14ch] font-serif text-3xl leading-tight lg:text-4xl">
              {whyGoldapples.heading}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal as="p" className="text-steel max-w-[68ch] text-lg leading-relaxed">
            {whyGoldapples.body}
          </Reveal>
          <Reveal
            as="p"
            delay={0.05}
            className="text-ink border-gold-deep mt-6 max-w-[60ch] border-l-2 pl-5 font-serif text-2xl leading-snug italic"
          >
            {whyGoldapples.closing}
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={0.1 + i * 0.05}
                className={`rounded-[3px] p-6 ${
                  i === 1
                    ? "from-gold-deep to-gold text-ink bg-linear-to-br"
                    : "bg-ink text-white"
                }`}
              >
                <span className="font-serif text-4xl">{stat.value}</span>
                <p
                  className={`mt-2 text-xs leading-snug ${i === 1 ? "text-ink/70" : "text-champagne/70"}`}
                >
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
