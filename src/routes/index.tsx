import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-resort.png";
import portrait from "@/assets/about-portrait.jpg";
import detail from "@/assets/cyprus_hero.webp";
import antonisloizou from "@/assets/antonisloizou.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antonis Loizou & Associates — Chartered Surveyors, Cyprus" },
      {
        name: "description",
        content:
          "Chartered Surveyors established 1980. Over 42 years in the Cyprus property market: valuations, project management, property administration and town planning.",
      },
      { property: "og:title", content: "Antonis Loizou & Associates — Chartered Surveyors" },
      { property: "og:description", content: "Where quality of services counts, we are streets ahead." },
      { property: "og:image", content: hero },
      { property: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const SERVICES = [
  { n: "01", t: "Valuations", d: "Independent valuations of every property type and interest, prepared to RICS Red Book standards." },
  { n: "02", t: "Project Management", d: "End-to-end direction of development from feasibility through delivery and handover." },
  { n: "03", t: "Town Planning", d: "Applications, appeals and strategic advice across all districts of the Republic." },
  { n: "04", t: "Estate Agency", d: "Curated promotion of prime residential, commercial and investment assets." },
  { n: "05", t: "Administration", d: "Long-term stewardship of estates, leases and complex property portfolios." },
  { n: "06", t: "Building Surveys", d: "Technical condition reports and dilapidations for buyers, lenders and trustees." },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Link
          to="/management"
          hash="project-development"
          hashScrollIntoView={{ behavior: "smooth" }}
          className="group relative block cursor-pointer"
        >
          <div className="absolute inset-0 -z-10">
            <img
              src={hero}
              alt="Mediterranean resort development in Cyprus"
              width={1920}
              height={1080}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/50 to-primary/80 transition-colors duration-300 group-hover:from-primary/80 group-hover:via-primary/55 group-hover:to-primary/85" />
          </div>
          <div className="container-x relative pt-28 pb-40 md:pt-40 md:pb-56">
            <div className="max-w-3xl text-primary-foreground">
              <div className="flex items-center gap-3 text-[color:var(--gold)]">
                <span className="h-px w-10 bg-[color:var(--gold)]" />
                <span className="eyebrow !text-[color:var(--gold)]">Est. 1980 · Nicosia</span>
              </div>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
                Where quality of service counts, we are streets ahead.
              </h1>
              <p className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-[color:var(--gold)] transition group-hover:gap-4">
                View project development portfolio
                <span aria-hidden>→</span>
              </p>
            </div>
          </div>
        </Link>
        <div className="container-x relative -mt-20 md:-mt-28">
          <dl className="grid grid-cols-2 divide-y divide-border bg-background shadow-2xl shadow-primary/20 md:grid-cols-4 md:divide-x md:divide-y-0">
            {[
              ["42+", "Years in the market"],
              ["150+", "Articles (Greek & English)"],
              ["№ 1", "Estate Agent, Cyprus"],
              ["FRICS", "Chartered Standing"],
            ].map(([k, v]) => (
              <div key={v} className="px-6 py-8 md:px-10 md:py-10">
                <div className="font-display text-4xl text-primary md:text-5xl">{k}</div>
                <div className="eyebrow mt-3">{v}</div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-x mt-32 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">— The Firm</div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-primary md:text-5xl">
            A practice that has helped shape modern Cyprus property.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p>
            Antonis Loizou &amp; Associates E.P.E. is a professional firm of Chartered Surveyors set up in
            1980. Over four decades it has established itself as the largest and most comprehensive
            practice of its kind in Cyprus and the Eastern Mediterranean.
          </p>
          <p>
            We work alongside private owners, family offices, developers, banks, the EU and the World
            Bank — providing a full range of property services, available separately or in combination
            to cover each client's particular needs.
          </p>
          <Link to="/about" className="inline-flex items-center gap-3 pt-4 text-sm uppercase tracking-[0.22em] text-primary hover:text-[color:var(--gold-deep)]">
            Read about the firm →
          </Link>
        </div>
      </section>

      <section className="container-x mt-32">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <div className="eyebrow">— Practice Areas</div>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">Six disciplines, one practice.</h2>
          </div>
          <Link to="/services" className="hidden text-sm uppercase tracking-[0.22em] text-primary hover:text-[color:var(--gold-deep)] md:inline">All Services →</Link>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.n} className="group bg-background p-8 transition-colors hover:bg-secondary md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl text-[color:var(--gold-deep)]">{s.n}</span>
                <span className="h-px w-8 bg-border group-hover:bg-[color:var(--gold)]" />
              </div>
              <h3 className="mt-8 font-display text-2xl text-primary">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* QUICK FACTS (from legacy copy) */}
      <section className="container-x mt-28">
        <div className="border border-border bg-secondary p-10 md:p-16">
          <div className="eyebrow">— At a glance</div>
          <h2 className="mt-6 font-display text-3xl text-primary md:text-4xl">
            RICS-aligned, Cyprus-based, and institution-trusted.
          </h2>
          <ul className="mt-8 grid gap-3 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
            <li>Fellow of the RICS and registered firm with ETEK.</li>
            <li>Project Management.</li>
            <li>Property Administration / Property Management.</li>
            <li>Town Planning Services (through associate office ALA Planning Partnership).</li>
            <li>Valuations of real estate (all types of property and the interests therein).</li>
            <li>Estate agency, promotion and building surveys.</li>
            <li>
              Education / information service through publication of articles in the local press (Greek
              & English) and correspondence with institutions such as the EU and the World Bank.
            </li>
          </ul>
        </div>
      </section>

      <section className="container-x mt-32 grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={portrait} alt="Antonis Loizou at the drafting desk" loading="lazy" width={1080} height={1440} className="h-full w-full object-cover" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 border border-[color:var(--gold)]" aria-hidden />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-16">
          <div className="eyebrow">— Managing Director</div>
          <blockquote className="mt-6 font-display text-3xl leading-snug text-primary md:text-4xl">
            "Forty-five years on, the work is still the same: tell the client the truth about the
            building, the market and the planning — clearly, on the record, and on time."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            <div>
              <div className="font-display text-lg text-primary">Antonis Loizou, FRICS</div>
              <div className="eyebrow">Managing Director</div>
              <img
                src={antonisloizou}
                alt="Antonis Loizou, FRICS"
                loading="lazy"
                width={420}
                height={420}
                className="mt-4 h-52 w-52 rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-32 overflow-hidden bg-primary text-primary-foreground">
        <img src={detail} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="container-x relative grid gap-12 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="eyebrow !text-[color:var(--gold)]">— Cyprus Market</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              A market we have followed, written about, and shaped since 1980.
            </h2>
          </div>
          <div className="space-y-6 text-primary-foreground/85 md:pt-4">
            <p>
              Antonis Loizou has authored more than 150 articles in the local Greek and English press,
              and corresponded annually with institutions including the EU and the World Bank.
            </p>
            <Link to="/cyprus" className="inline-flex items-center gap-3 border border-[color:var(--gold)] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[color:var(--gold)] transition hover:bg-[color:var(--gold)] hover:text-primary">
              About Cyprus →
            </Link>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="container-x mt-28">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <div className="eyebrow">— Questions & Answers</div>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">Straight answers, in context.</h2>
          </div>
          <Link to="/contact" className="hidden text-sm uppercase tracking-[0.22em] text-primary hover:text-[color:var(--gold-deep)] md:inline">
            Submit a question →
          </Link>
        </div>
        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            {
              q: "Do you value all property types and interests?",
              a: "Yes — we undertake evaluation and valuation of all kinds of immovable property and the interests therein, for a range of purposes.",
            },
            {
              q: "Do you work with banks and institutions?",
              a: "The firm acts as accredited valuers / property consultants for financing institutions and a wide range of public and private clients.",
            },
            {
              q: "Can I engage multiple services together?",
              a: "Services are available separately or in combination, tailored to precisely suit the client's particular needs.",
            },
          ].map((i) => (
            <div key={i.q} className="bg-background p-10">
              <div className="font-display text-2xl text-primary">{i.q}</div>
              <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{i.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-32 mb-8 flex flex-col items-start justify-between gap-10 border-t border-border pt-16 md:flex-row md:items-center">
        <div>
          <div className="eyebrow">— Engage the firm</div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-primary md:text-5xl">
            Begin a conversation with the practice.
          </h2>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-[color:var(--gold-deep)]">
          Contact us →
        </Link>
      </section>
    </>
  );
}
