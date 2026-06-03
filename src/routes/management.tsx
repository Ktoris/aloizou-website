import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/management")({
  head: () => ({
    meta: [
      { title: "Management — Antonis Loizou & Associates" },
      {
        name: "description",
        content:
          "Project Management, property management and development oversight across Cyprus — coordination, reporting and delivery support for owners, financiers and developers.",
      },
      { property: "og:title", content: "Management — Antonis Loizou & Associates" },
      {
        property: "og:description",
        content:
          "Project Management and Property Management — coordinating consultants, budgets, quality control, and delivery.",
      },
    ],
  }),
  component: Management,
});

function Management() {
  return (
    <>
      <header className="container-x pt-24 md:pt-32">
        <div className="eyebrow">— Management</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Project Management, property management, and development oversight.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The Project Manager is called in by financial institutions, developers or individuals who
          have financed a project — either to coordinate the development and report monthly, or when
          a project has run into problems, to investigate and (where necessary) prepare a feasibility
          study so decisions can be made and the development placed back on track.
        </p>
      </header>

      {/* PROJECT MANAGEMENT */}
      <section className="container-x mt-20 grid gap-14 border-y border-border py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">— Project Management</div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-primary md:text-5xl">
            Clear coordination, quality control, and delivery discipline.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p className="text-xl font-display leading-snug text-primary">
            In summary, the main duties include:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Coordinate all consultants so drawings and specifications are produced on time and with
              full detail.
            </li>
            <li>
              Examine drawings and ensure they reflect client requirements, market requirements and
              budget cost.
            </li>
            <li>
              Seek tenders, negotiate, and suggest the most suitable contractors, suppliers and
              sub-contractors.
            </li>
            <li>
              Chair site meetings and keep a constant watch upon the development process, keeping
              records and minutes; administer the construction process.
            </li>
            <li>
              Coordinate quality control of executed work and materials, in parallel with the
              supervising architect.
            </li>
            <li>
              Liaise with public authorities for the supply of public services and resolve
              problems/delays.
            </li>
            <li>
              Coordinate with financiers and vet payment certificates to the bank together with the
              project Quantity Surveyor.
            </li>
            <li>
              Deliver the project within the original time and budget, and provide alternatives if
              cost/time overruns arise.
            </li>
            <li>
              Secure final certificates of approval/title deeds, including follow-up of required
              procedures for title issuance.
            </li>
          </ul>
          <p>
            The use of Project Management in Cyprus refers mainly to large projects, though it has
            become popular with high-cost private home investors and foreign clients who are not
            locally present to monitor progress. As a rule of thumb, a successful Project Manager
            should save 2–5 times the fee through avoided cost, delay and rework.
          </p>
          <p>
            Average cost is approximately €1,000–€3,000 per month depending on project size and
            service level. For larger projects, a fee in the range of 1%–2% of total cost may be
            used. Requirements such as full-time site agents and quality controllers will increase
            costs.
          </p>
        </div>
      </section>

      {/* PROPERTY MANAGEMENT */}
      <section className="container-x mt-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">— Property management</div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-primary md:text-5xl">
            Administration that protects value and reduces owner friction.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p className="text-xl font-display leading-snug text-primary">
            Main services typically include:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Keep all project services in working order so owners have access and can enjoy the
              offered services.
            </li>
            <li>Keep proper accounts of expenses; pay invoices.</li>
            <li>Provide monthly / three-monthly statements of expenses incurred.</li>
            <li>
              Collect common expenses after allocating per unit based on unit area; follow up with
              non-paying owners (letters, calls, etc).
            </li>
            <li>
              Where required, take legal action for non-payment and present necessary documentation
              to court.
            </li>
            <li>
              Take tenders for repairs/maintenance; accept the most cost-effective offer and agreed
              payment terms.
            </li>
            <li>
              Supervise executed work and coordinate supervision with architect and/or civil engineer
              where necessary.
            </li>
            <li>
              Engage and supervise staff where necessary (gardeners, plumbers, electricians, etc) and
              permanent staff such as project supervisors and gardeners.
            </li>
            <li>
              Chair annual general meetings, present accounts and hear views, problems and
              suggestions.
            </li>
            <li>
              Inspect the project continuously (short intervals) and earmark necessary repairs and
              maintenance.
            </li>
          </ul>
          <p>
            Charges vary approximately €10–€200 per unit per month depending on size, number of units,
            distance from town and service requirements. Obligations and functions are governed by
            the Law for Commonly Owned Properties (1993), which the administrator must abide by.
          </p>
        </div>
      </section>

      {/* PROJECT DEVELOPMENT FOR CLIENTS */}
      <section
        id="project-development"
        className="container-x mt-24 scroll-mt-28 border border-border bg-secondary p-10 md:p-16"
      >
        <div className="eyebrow">— Project development for clients</div>
        <h2 className="mt-6 font-display text-3xl text-primary md:text-4xl">
          Selected development experience (indicative).
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl text-primary">Tourist development</div>
            <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
            <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              <li>Elamaris Hotel Apartments — Protaras (A)</li>
              <li>Platomare Hotel — Protaras</li>
              <li>Akinoos Hotel — Protaras</li>
              <li>Ayios Elias — Hotel Apts, Paralimni (A)</li>
              <li>Nelia Hotel — Ayia Napa</li>
              <li>Stamatia Hotel — Ayia Napa</li>
              <li>Antigoni Hotel — Protaras</li>
              <li>Paschalia Hotel — Protaras</li>
              <li>Louis Anthea Hotel Apts — Protaras</li>
              <li>Green Bungalows Hotel Apts — Ayia Napa</li>
              <li>Herbal Hotel — Paralimni</li>
              <li>Tsolakis Hotel Apts</li>
              <li>Azia Hotel — Paphos</li>
              <li>King Jason Hotel Apartments — Paphos (A)</li>
              <li>Phaethon Beach Hotel — Paphos</li>
              <li>Paphiana Hotel — Paphos</li>
              <li>Extension of Hilton Park — Nicosia</li>
            </ol>
          </div>
          <div>
            <div className="font-display text-2xl text-primary">Offices & commercial</div>
            <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Over 10,000 sq.m total (indicative)</li>
              <li>Gala Tower (Limassol)</li>
              <li>Louis Tourist HQ (Nicosia)</li>
              <li>Arab Bank Plc HQ (Nicosia)</li>
              <li>Barclays Bank (Larnaca main)</li>
              <li>Hellenic Bank (Limassol main)</li>
              <li>C.L.R. Stockbrokers (Nicosia)</li>
              <li>Toumazis Business Centre (Nicosia)</li>
              <li>Four shopping centres (Nicosia x2, Limassol x2)</li>
            </ul>
          </div>
          <div>
            <div className="font-display text-2xl text-primary">Industrial & residential</div>
            <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Municipality of Nicosia industrial estate — 109 units</li>
              <li>Konstandia industrial estate building plots</li>
              <li>Studies for Dherynia and Mesa Yitonia municipalities</li>
              <li>Two large hypermarkets (Limassol & Nicosia — Orphanides)</li>
              <li>Shiacolas Park — development (Nicosia)</li>
              <li>Over 2,500 apartments in blocks</li>
              <li>Over 1,000 holiday homes incl. Agios Elias Holiday Cottages (Protaras)</li>
              <li>Amathusia Village (Limassol) — 300 units</li>
              <li>~1,500 building plots at HA Potami (Paphos)</li>
              <li>Konstandia plots at Nisou</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-[color:var(--gold-deep)]"
          >
            Discuss a project →
          </Link>
        </div>
      </section>
    </>
  );
}

