import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Antonis Loizou & Associates" },
      {
        name: "description",
        content:
          "Property evaluation, valuation, consultancy, building surveys, project management, property management, estate agency, development consulting, education and town planning across Cyprus.",
      },
      { property: "og:title", content: "Services — Antonis Loizou & Associates" },
      {
        property: "og:description",
        content:
          "Our professional services include valuations, project management, town planning, property administration and estate agency.",
      },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    n: "01",
    t: "Property Evaluation & Valuation",
    d: "The evaluation and valuation of immovable property is one of the main businesses of the firm. Antonis Loizou & Associates undertakes the evaluation and valuation of all kinds of immovable property and the interests therein, for various purposes within Cyprus, although some work is also being undertaken abroad. We are accredited valuers for financing institutions and the main valuers / property consultants for most of them. We estimated that we cover an extensive percentage of the total valuation work carried out by private firms. Our clients include local authorities, the Government, Municipalities, and private individuals.",
    bullets: [
      "Finance, taxation, accounts (private and public companies).",
      "Disputes, litigation, arbitration, estate / probate and compulsory acquisition.",
      "Divorce cases (accepted by UK courts).",
      "Rent control cases.",
      "Regular revaluations for financiers (marketability, trends, zoning and restrictions).",
    ],
  },
  {
    n: "02",
    t: "Property Consultancy",
    d: "The Firm has extensive experience in Real Estate and connections with all the Estate agents in Cyprus and can offer consultancy services to individuals as well as large commercial and industrial concerns as well as to Developers.",
    bullets: [
      "Feasibility and viability studies governed by the client's brief.",
      "Alternative development scheme identification and timing.",
      "Risk assessment, equity return, and cashflow projections.",
    ],
  },
  {
    n: "03",
    t: "Structural Building Survey",
    d: "A very important survey for all property owners and especially for people that intend to buy second-hand property. This service is also important with property owners who have problems with their property such as wall cracks, roof problems, retaining walls, strength of columns due to age etc. In recent years this service has increased due to people's awareness of the importance of this type of survey.",
    bullets: [
      "Wall cracks, roof problems, retaining walls and age-related structural issues.",
      "Condition reporting to reduce risk before purchase or major works.",
    ],
  },
  {
    n: "04",
    t: "Project Management & Development Projects",
    d: "The firm provides a comprehensive service in this field and projects range from the development of small houses and touristic projects, industrial estates, Bank offices, offices, hypermarkets, shopping centres and other large commercial projects, including hotels, developed as an investment and/or for sale.",
    bullets: [
      "Coordinate consultants, drawings and specifications; chair site meetings and administer construction.",
      "Tendering, negotiation, contractor/supplier selection and payment certificate vetting.",
      "Liaison with authorities and utilities; deliver within time/budget and secure approvals/title follow-up.",
    ],
  },
  {
    n: "05",
    t: "Property Management & Management of Property Companies",
    d: "The Firm deals extensively in the management of property. It is the appointed managers of various property companies, investment and property funds and it manages large building complexes.",
    bullets: [
      "Accounts, invoicing, collections, allocation per unit, and statements.",
      "Repairs/maintenance tendering, supervision, and staff engagement (as required).",
      "General meetings, record keeping, and follow-up on non-payment where necessary.",
    ],
  },
  {
    n: "06",
    t: "Estate Agency and Real Estate Sales",
    d: "The Office deals extensively in the sale of properties which is under its own Management as well as other properties. The Office portfolio comprises of all types of properties and undertakes sales lettings, part exchange and it serves the whole island.",
    bullets: [
      "Portfolio spanning residential, commercial, investment and land.",
      "Sales, lettings, part exchange and transaction support.",
    ],
  },
  {
    n: "07",
    t: "Property Development & Consulting",
    d: "Our experience in the fields of property development, promotion and sales of property, valuations, taxation, financing, and project management provides us with the necessary background for giving advice on property development projects.",
  },
  {
    n: "08",
    t: "Professional Real Estate Service",
    d: "Property investment in Cyprus has always been the largest single form of investment. Traditionally, the Cypriots tends to invest in property and with the downtrend of the Cyprus Stock Exchange (C.S.E.) have directed even more the attention of the investors towards property investment and development.",
  },
  {
    n: "09",
    t: "Education — Information Service",
    d: "Another service provided by the firm is the provision of information through the publication of articles (approximately 150 articles per year in Greek and English) and other educational material, including lectures, panel discussions, which seek to expand the reader's knowledge on property matters in general.",
  },
  {
    n: "10",
    t: "Town Planning",
    d: "Through its associate office, ALA Planning Partnership, the firm provides the full range of town planning services. It covers the procedure in securing a town planning permit, applications for deviation from the town planning plans, relaxation on regulations, town planning design, retail impact, environmental and traffic studies etc. Despite its young age (2002) this firm has been established as one of the largest and most professional Town Planning firm in Cyprus.",
  },
];

function isBulletService(
  s: (typeof SERVICES)[number]
): s is (typeof SERVICES)[number] & { bullets: string[] } {
  return Array.isArray((s as any)?.bullets) && (s as any).bullets.length > 0;
}

function Services() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#1a1a1a]">
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <p className="text-xs uppercase tracking-widest text-[#8a7e5e]">— Practice Areas</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl text-[#2a3a2a]">
          Our professional services include
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-[#6b6b6b]">
          Each service has been refined across four decades of advising Cyprus' owners, investors
          and institutions. They stand on their own — and combine readily into one engagement.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 rounded-sm border border-[#e7e2d3] bg-white p-6 md:p-8"
            >
              <div className="shrink-0 text-sm tabular-nums text-[#8a7e5e]">{s.n}</div>
              <div className="min-w-0">
                <h2 className="font-serif text-xl text-[#2a3a2a] md:text-2xl">{s.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#5b5b5b]">{s.d}</p>
                {isBulletService(s) ? (
                  <ul className="mt-4 space-y-2 text-sm text-[#5b5b5b]">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[#8a7e5e]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}