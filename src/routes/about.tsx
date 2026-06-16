import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/antonisloizou.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Firm — Antonis Loizou & Associates" },
      { name: "description", content: "Founded 1980. The largest and most comprehensive firm of Chartered Surveyors in Cyprus and the Eastern Mediterranean." },
      { property: "og:title", content: "The Firm — Antonis Loizou & Associates" },
      { property: "og:description", content: "Founded 1980. Chartered Surveyors. RICS. ETEK." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <header className="container-x pt-24 md:pt-32">
        <div className="eyebrow">— The Firm</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Forty-five years of independent, chartered counsel.
        </h1>
      </header>

      <section className="container-x mt-20 grid gap-16 md:grid-cols-12">
        <div className="flex flex-col items-center md:items-start md:col-span-5">
          {/* This wrapper keeps the image small on mobile, but scales to 100% on desktop */}
          <div className="w-full max-w-[280px] md:max-w-full">
            <img
              src={portrait}
              alt="Antonis Loizou, FRICS"
              loading="lazy"
              width={1080}
              height={1440}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          {/* Centers the label text on mobile to match the smaller centered picture */}
          <div className="mt-4 eyebrow text-center md:text-left">
            Antonis Loizou, FRICS — Managing Director
          </div>
        </div>
        <div className="space-y-8 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p className="text-2xl font-display leading-snug text-primary">
            Antonis Loizou &amp; Associates E.P.E. was set up in 1980 and has, over four decades,
            established itself as the largest and most comprehensive professional firm of Chartered
            Surveyors in Cyprus and the Eastern Mediterranean.
          </p>
          <p>
            Our work spans valuations, project management, town planning, property administration,
            estate agency, promotion and building surveys — each available in isolation or in
            combination to cover a client's particular needs.
          </p>
          <p>
            The firm holds Fellowship of the Royal Institution of Chartered Surveyors and is a
            registered firm with ETEK, the Cyprus Scientific and Technical Chamber.
          </p>
          <p>
            Publishing more than 150 articles in the local in the local press, in both Greek and English, along with corresponding intitutions such as the EU and the World Bank yearly.
          </p>
          <div className="border border-border bg-secondary p-8 md:p-10">
            <div className="eyebrow">— About us</div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Antonis Loizou &amp; Associates Ltd is a professional firm of Chartered Surveyors which was
              set up in 1980. The firm provides a range of services in the real estate field which are
              available either separately or in combination, so as to precisely suit the client's
              particular needs.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-px border border-border bg-border">
            {[["1980", "Founded"], ["FRICS", "Chartered"], ["ETEK", "Registered Firm"], ["№ 567", "Reg. Estate Agent"]].map(([k, v]) => (
              <div key={v} className="bg-background p-6">
                <div className="font-display text-2xl text-primary">{k}</div>
                <div className="eyebrow mt-2">{v}</div>
              </div>
            ))}
          </dl>
          <Link to="/contact" className="inline-flex items-center gap-3 pt-2 text-sm uppercase tracking-[0.22em] text-primary hover:text-[color:var(--gold-deep)]">
            Speak with the practice →
          </Link>
        </div>
      </section>

    </>
  );
}
