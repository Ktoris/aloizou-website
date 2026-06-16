import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/valuations")({
  head: () => ({
    meta: [
      { title: "Valuations — Antonis Loizou & Associates" },
      {
        name: "description",
        content:
          "Property evaluation and valuation across Cyprus — finance, acquisition, industrial, asset, taxation, compulsory purchase and dispute resolution.",
      },
      { property: "og:title", content: "Valuations — Antonis Loizou & Associates" },
      {
        property: "og:description",
        content:
          "Principal property valuers for Cyprus financial institutions. Valuations for finance, disposal, industrial, asset, taxation and compulsory acquisition.",
      },
    ],
  }),
  component: Valuations,
});

type ContentBlock =
  | { type: "p"; text: string }
  | { type: "bullets"; intro: string; items: string[] };

type ValuationSection = {
  id: string;
  label: string;
  title: string;
  content: ContentBlock[];
};

const SECTIONS: ValuationSection[] = [
  {
    id: "finance",
    label: "Finance",
    title: "Principal valuers for Cyprus financial institutions.",
    content: [
      {
        type: "p",
        text: "In the case of valuations for finance we are the principal property valuers in Cyprus / property consultants of the local financial institutions. Our reports include in addition to the valuation proper, a general building survey of any structure on the land, the market prospects and trends of the area, the property's marketability situation and each report contains, in general, all the vital considerations, which are of importance to financiers. (An assessment for finance purposes must take into account the relevant mortgage laws and forced sale procedure as well as the Land's Office practices and market customs. It is therefore an assessment specialized in itself, which in many instances differs from an assessment for disposal or other purposes).",
      },
      {
        type: "p",
        text: "In addition to the report proper the firm acts as a watchdog for its clients and alterations/additions to legislation and conditions affecting security are quickly brought to the client's attention through circulars and our Information Service.",
      },
      {
        type: "p",
        text: "Regular revaluations are carried out in order to ascertain whether an assessed property has retained (at least) its value during the relevant financing period. Such revaluations are most important taking into account changing zoning limitations, building restrictions, economic conditions etc, which have a major and direct effect on property values. The firm's report is accepted by all Cyprus Financial Institutions and a large percentage of them engage the firm on an exclusive basis.",
      },
    ],
  },
  {
    id: "acquisition-disposal",
    label: "Acquisition / Disposal",
    title: "Professional advice in an increasingly complex market.",
    content: [
      {
        type: "p",
        text: "The general public is becoming increasingly aware of the dangers and opportunities, which arise in a property market of intensifying complexity. There is, therefore, a very clear trend of seeking professional advice on property matters and especially on asking prices/offers for property.",
      },
      {
        type: "bullets",
        intro: "The valuation reports prepared by our firm contain:",
        items: [
          "Value of the property as such",
          "Detailed commentary on alternative uses and market prospects and trends",
          "Advice on timing and the payment terms to be required or envisaged",
        ],
      },
      {
        type: "p",
        text: "Where there are buildings involved we investigate whether they possess all the required building permits (or whether they are likely to obtain them). In the cases of part exchange, an analysis is provided in order to show the fair percentage of a building to be expected/offered in a deal. Important items such as quality, delivery dates, average ratios etc are quantified and pre-assessed. Where such a disposal source is chosen, an \"after sales\" service is a must in order to ensure that all loose ends are tied up and that both parties involved get a fair deal without seeds of future disagreements.",
      },
    ],
  },
  {
    id: "industrial",
    label: "Industrial valuation",
    title: "Specialist assessment for industrial buildings and complexes.",
    content: [
      {
        type: "p",
        text: "With the increasingly important role that our industry plays in the economy the need has arisen for the valuation of industrial buildings and complexes for asset, finance development and other purposes.",
      },
      {
        type: "p",
        text: "Our real estate valuation has to take into account the particular circumstances of the industrial sector in question, as well as the availability of demand for that particular kind of industrial property. More often than not the value ascribed to an industrial property in the open market will be lower than that to the owner, since, as a rule, industrialists prefer to erect their own units reflecting their particular needs and circumstances.",
      },
      {
        type: "p",
        text: "It is evident, therefore, that the ease with which an industrial unit can be adapted to suit some other industrialist's needs is a major advantage and is reflected as such in its value.",
      },
    ],
  },
  {
    id: "asset",
    label: "Asset valuations",
    title: "Open Market Value for accounts, takeovers and listings.",
    content: [
      {
        type: "p",
        text: "Accounting rules and taxation requirements, takeover bids, the floating of private to public companies and other considerations have created the need for the valuation of property for asset purposes. The firm has been involved in most of the larger deals in Cyprus including the very recent ones. Since the basis for such an assessment is the Open Market Value, this kind of reports generally follows those of acquisition/disposal. It must be added, however, that the approach to the Open Market Value is based on the \"value to the owner\". \"Alternative use values\" are also given in the appropriate cases.",
      },
    ],
  },
  {
    id: "taxation",
    label: "Taxation",
    title: "Valuations under Cyprus property taxation laws.",
    content: [
      {
        type: "p",
        text: "The wide experience of professional members in the firm gained in the U.K. and Cyprus Tax Offices qualify the firm to carry out valuations of immovable property under the various property taxation laws, including capital gains, income tax, estate duty, transfer fees and for other related purposes.",
      },
      {
        type: "p",
        text: "Although the firm does not claim to be an expert in the taxation on property in Cyprus, it is qualified enough to detect the dangers and consequences of taxation on property transactions. Property deals, which ignore taxation, involve a risk factor of considerable magnitude and careful planning and projections must be made in order to minimize the burden of tax. The role of a well-informed property advisor is, therefore, a most important one.",
      },
    ],
  },
  {
    id: "compulsory-purchase",
    label: "Compulsory purchase",
    title: "Compensation claims and expert witness representation.",
    content: [
      {
        type: "p",
        text: "The numerous and increasingly varied Governmental projects coupled with those carried out by Bodies possessing compulsory acquisition powers, have increased the need for a professional service in this field.",
      },
      {
        type: "p",
        text: "The various evaluation rules set out in the Compulsory Acquisition Laws and the Case Law (coupled with the U.K. Case Law which we tend to follow in this country) have created the need for an ever increasing awareness of the procedure and compensation assessment rules. The firm's aim is to examine first the amount of compensation payable (if any) and advise its clients accordingly. Negotiations follow with the acquiring authority and on failure to agree the firm appears on the clients' side, at Court, as an expert witness. A close liaison is kept with the client's legal advisor, so that the evaluation and views are best set out in plain and simple language in Court.",
      },
      {
        type: "p",
        text: "The aim of the firm in this context is not to get as much compensation as possible for the client, but to advise the latter correctly and seek a fair compensation so that long and expensive litigation/proceedings are avoided. The firm acts, at times, on behalf of the Government and semi-Governmental bodies, as its official advisor and negotiator in their compulsory acquisition procedures and represents the acquiring authority in Court. Similarly the firm has been appointed by the Cyprus Law Courts as an individual advisor to the trial judge or as expert advisor to the trial judge.",
      },
    ],
  },
  {
    id: "disputes",
    label: "Disputes & differences",
    title: "Arbitration and expert representation in property disputes.",
    content: [
      {
        type: "bullets",
        intro: "The firm is often appointed by parties in disputes as an arbitrator in cases of:",
        items: [
          "Divisions of property",
          "Part-exchange deals",
          "Exchanges of property",
          "Divorce cases",
          "Payment of compensation",
          "Assessment of a \"fair rent\"",
        ],
      },
      {
        type: "p",
        text: "In many instances we appear on behalf of the landlord or the tenant in disputes over rents especially those governed by the Rent Control Acts.",
      },
    ],
  },
];

function SectionContent({ content }: { content: ContentBlock[] }) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
      {content.map((block, i) =>
        block.type === "p" ? (
          <p key={i}>{block.text}</p>
        ) : (
          <div key={i}>
            <p className="text-xl font-display leading-snug text-primary">{block.intro}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

function Valuations() {
  return (
    <>
      <header className="container-x pt-24 md:pt-32">
        <div className="eyebrow">— Valuations</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Evaluation and valuation of immovable property.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The evaluation and valuation of immovable property in Cyprus is one of the main sections of
          services of the firm. Antonis Loizou &amp; Associates undertakes the evaluation and valuation
          of all kinds of immovable property and the interests therein for various purposes.
        </p>
      </header>

      <nav
        aria-label="Valuation categories"
        className="container-x mt-16 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-8"
      >
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            {s.label}
          </a>
        ))}
      </nav>

      <div className="container-x mt-4 space-y-0">
        {SECTIONS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-28 grid gap-14 py-16 md:grid-cols-12 ${i > 0 ? "border-t border-border" : ""
              }`}
          >
            <div className="md:col-span-5">
              <div className="eyebrow">— {s.label}</div>
              <h2 className="mt-5 font-display text-3xl leading-tight text-primary md:text-4xl">
                {s.title}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <SectionContent content={s.content} />
            </div>
          </section>
        ))}
      </div>

      <section className="container-x mt-8 mb-8">
        <div className="border border-border bg-secondary p-10 md:p-16">
          <div className="eyebrow">— Engage the firm</div>
          <h2 className="mt-6 max-w-3xl font-display text-3xl text-primary md:text-4xl">
            Request a valuation report tailored to your purpose.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Finance, disposal, asset, taxation or dispute — each brief requires a distinct approach.
            We scope the instruction before work begins.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-[color:var(--gold-deep)]"
          >
            Request a valuation →
          </Link>
        </div>
      </section>
    </>
  );
}
