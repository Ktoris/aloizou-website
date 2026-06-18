import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/cyprus_hero.webp";

export const Route = createFileRoute("/cyprus")({
  head: () => ({
    meta: [
      { title: "About Cyprus — Antonis Loizou & Associates" },
      { name: "description", content: "Forty-five years of perspective on the Cyprus property market — written, taught and advised on by the firm." },
      { property: "og:title", content: "About Cyprus — Antonis Loizou & Associates" },
    ],
  }),
  component: Cyprus,
});

function Cyprus() {
  return (
    <>
      <header className="container-x pt-24 md:pt-32">
        <div className="eyebrow">— Cyprus</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          A market we have followed, written about and helped shape.
        </h1>
      </header>

      <section className="container-x mt-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {/* Apply the zoom-expand effect to the hero image, ensuring its wrapper allows it to expand */}
          <div className="relative aspect-[4/3] w-full">
            <img
              src={hero}
              alt="Cyprus coastline"
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover zoom-expand rounded-md"
            />
          </div>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-5 md:pt-4">
          <p className="text-xl font-display leading-snug text-primary">
            Since 1980 the firm has tracked, written about and advised on every cycle of the Cyprus
            real-estate market.
          </p>
          <p>
            Antonis Loizou has authored more than 150 articles in the local Greek and English press,
            and corresponded annually with institutions including the European Union and the World
            Bank.
          </p>
          <p>
            That perspective informs every brief we take on — from a single villa valuation to the
            programming of a multi-asset development across districts.
          </p>
        </div>
      </section>

      <section className="container-x mt-24 border border-border bg-secondary p-10 md:p-16">
        <div className="eyebrow">— Cyprus Info</div>
        <h2 className="mt-6 font-display text-3xl text-primary md:text-4xl">Geography, climate, and practical context.</h2>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <div className="font-display text-2xl text-primary">Geography & population</div>
            <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Cyprus is situated in the north eastern basin of the Mediterranean Sea at the crossroads
              of Europe, Asia and Africa. With an area of 9,251 km², it is one of the largest islands
              in the Mediterranean. The population is approximately 1,3 million.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Nicosia — 313,000 (Capital)</li>
              <li>Limassol — 228,000 (main commercial port)</li>
              <li>Larnaca — 140,000 (commercial port + main international airport)</li>
              <li>Paphos — 66,000 (second international airport)</li>
              <li>
                Ammochostos (Famagusta) and Kyrenia are currently under the illegal occupation of the
                Turkish army.
              </li>
            </ul>
          </div>
          <div>
            <div className="font-display text-2xl text-primary">Climate</div>
            <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Cyprus has a Mediterranean climate with hot, dry summers (June–September) and variable
              winters (November–March). There are approximately 300 days of sunshine per year and
              around 30–40 days of rain, mainly November to March.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Winter mean temperature is typically 15–20°C, while August can range from 25–40°C.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <div className="font-display text-2xl text-primary">Legal system</div>
            <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              The legal system in Cyprus is mainly based upon the British legal system. The Cyprus
              Land Registry is widely regarded as advanced and reliable, giving purchasers strong
              security for acquisitions. Legal fees/costs are generally reasonable; for an ordinary
              sales contract the fee is typically €1,000–€1,500.
            </p>
          </div>
          <div>
            <div className="font-display text-2xl text-primary">Educational system</div>
            <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Cyprus offers junior and secondary schools in multiple languages and a mix of government
              and private universities. Fees in Cyprus universities/colleges are typically in the
              range of €4,000–€8,000 per annum depending on institution and course.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x mt-24 grid gap-px border border-border bg-border md:grid-cols-3">
        {[
          ["Nicosia", "Capital · administrative and commercial core."],
          ["Limassol", "Coastal hub for high-value residential and hospitality."],
          ["Paphos & Larnaca", "Resort, retirement and emerging investment markets."],
        ].map(([k, v]) => (
          <div key={k} className="group bg-background p-10 transition-colors hover:bg-secondary">
            <div className="font-display text-2xl text-primary">{k}</div>
            <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v}</p>
          </div>
        ))}
      </section>


    </>
  );
}
